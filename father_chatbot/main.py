import json
import os
import faiss
import numpy as np
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import logging

# IMPORTANT: Replace with your actual API key!
GEN_AI_API_KEY = "AIzaSyBTGBkFhPk6tWf9rOLI4eQinhtc1guFIbo"  # <---  Hardcoded API Key - USE WITH EXTREME CAUTION

# Configure Gemini API with API key
genai.configure(api_key=GEN_AI_API_KEY)  # Moved configuration here, before app definition

# Configure logging
logging.basicConfig(level=logging.ERROR)

app = FastAPI()

# CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    """Root endpoint to confirm API is working"""
    return {"status": "API is running", "endpoints": ["/chat"]}

# Load your QA dataset from JSON file
with open("data/qa_data.json", "r", encoding="utf-8") as f:
    qa_data = json.load(f)

def get_embedding(text: str):
    """Get embedding using the correct Gemini API method"""
    try:
        response = genai.embed_content(
            model="models/embedding-001",
            content=text,
            task_type="retrieval_document"
        )
        return np.array(response["embedding"], dtype=np.float32)
    except Exception as e:
        logging.error(f"Embedding error: {e}")
        raise RuntimeError(f"Embedding error: {e}")

# Initialize and build index lazily to avoid errors at import time
questions = None
index = None

def initialize_index():
    """Initialize the FAISS index, only when needed"""
    global questions, index
    
    if questions is None:
        # Prepare questions and their embeddings
        try:
            questions = [item["question"] for item in qa_data]
            question_embeddings = [get_embedding(q) for q in questions]

            # Build FAISS index for fast similarity search
            dimension = len(question_embeddings[0])
            index = faiss.IndexFlatL2(dimension)
            index.add(np.vstack(question_embeddings))
        except Exception as e:
            logging.error(f"Error initializing index: {e}")
            raise

# Initialize Gemini chat model
chat_model = genai.GenerativeModel("models/gemini-2.0-flash")  # or "models/gemini-1.5-pro" if enabled

@app.post("/chat")
async def chat(req: Request):
    """
    Chat endpoint:
    - Takes user input
    - Embeds it
    - Finds closest QA pair
    - Uses the answer as context to generate a response via Gemini chat
    """
    # Initialize index if not already done
    if index is None:
        try:
            initialize_index()
        except Exception as e:
            logging.error(f"Error in /chat: {e}")
            return {"error": "Failed to initialize index"}
        
    data = await req.json()
    user_input = data.get("user_input", "")

    if not user_input:
        return {"error": "No user_input provided"}

    try:
        # Embed the user input
        user_embedding = get_embedding(user_input)
    except RuntimeError as e:
        return {"error": str(e)}

    try:
        logging.debug("Entered /chat try block")
        logging.debug(f"User input: {user_input}")
        
        # Search FAISS index for closest question
        logging.debug("Calling index.search")
        D, I = index.search(np.array([user_embedding]).astype('float32'), k=1)
        logging.debug("index.search returned")
        logging.debug(f"D: {D}, I: {I}")
        
        top_match = qa_data[I[0][0]]
        logging.debug(f"top_match: {top_match}")

        # Create prompt for Gemini chat
        prompt = f"""
You are a helpful assistant. Use only the information provided in the context below to answer the user's question.

Context: {top_match['answer']}
Question: {user_input}
Answer:
"""
        logging.debug(f"Prompt: {prompt}")

        # Generate response from Gemini chat model
        logging.debug("Calling chat_model.generate_content")
        response = chat_model.generate_content(prompt)
        logging.debug("chat_model.generate_content returned")

        return {"reply": response.text.strip()}
    except Exception as e:
        logging.error(f"Error in /chat endpoint: {e}", exc_info=True)
        return {"error": "An error occurred while processing your request."}

# Added for debugging and running locally
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="debug")
