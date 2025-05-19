import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll to bottom when new message added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputText.trim();
    if (!userMessage) return;

    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userMessage }),
      });

      const data = await res.json();

      if (res.ok && data.reply) {
        setMessages(prev => [...prev, { text: data.reply, isUser: false }]);
      } else {
        setMessages(prev => [...prev, {
          text: "Sorry, something went wrong. Please try again.",
          isUser: false,
        }]);
      }
    } catch (err) {
      console.error("Error:", err);
      setMessages(prev => [...prev, {
        text: "An error occurred. Please check your server and try again.",
        isUser: false,
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50" ref={chatRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-amber-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Chat with us</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-amber-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-slate-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${message.isUser ? 'text-right' : ''}`}
                >
                  <div
                    className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                      message.isUser
                        ? 'bg-amber-600 text-white'
                        : 'bg-white text-slate-800 shadow'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center space-x-2 text-slate-500">
                  <Loader2 className="animate-spin" size={16} />
                  <span className="text-sm">Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:border-amber-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className={`p-2 rounded-md transition-colors ${
                    isLoading
                      ? 'bg-slate-300 cursor-not-allowed'
                      : 'bg-amber-600 hover:bg-amber-700 text-white'
                  }`}
                  disabled={isLoading}
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-colors"
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
};

export default ChatWidget;
