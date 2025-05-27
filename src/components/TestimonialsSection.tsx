import bappa from "../assets/images/Testimonial/Bappa.jpg";
import dadu from "../assets/images/Testimonial/Dadu.jpg";
import goutam from "../assets/images/Testimonial/Goutam Naha.jpg";
import kireeti from "../assets/images/Testimonial/Kireeti.jpg";
import maa from "../assets/images/Testimonial/Maa.jpg";
import papun from "../assets/images/Testimonial/Papun.jpg";
import pishun from "../assets/images/Testimonial/Pishun.jpg";
import tirthadadu from "../assets/images/Testimonial/Tirtha Dadu.jpg";
import tirthamaa from "../assets/images/Testimonial/Tirtha Maa.jpg";
import palashi from "../assets/images/Testimonial/Palashi.jpg";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  rating: number;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "New Design O Craft transformed our concept into a stunning reality. Their attention to detail and innovative approach exceeded our expectations. The team was communicative and professional throughout the entire process.",
      author: "SMT. Jayati Roy",
      position: "Home Owner",
      rating: 5,
      image: maa
    },
    {
      id: 2,
      quote: "Working with New Design O Craft on our corporate headquarters was an exceptional experience. Their ability to blend aesthetics with functionality created a space that perfectly represents our brand identity.",
      author: "Sankar Kumar Das",
      position: "Home Owner",
      rating: 4,
      image: pishun
    },
    {
      id: 3,
      quote: "The residential design New Design O Craft created for us beautifully balances modern aesthetics with comfort and practicality. They listened to our needs and delivered a home that truly enhances our lifestyle.",
      author: "Sujit Biswas",
      position: "Home Owner",
      rating: 5,
      image: kireeti
    },
    {
      id: 4,
      quote: "New Design O Craft turned our dream home into a reality. From blueprint to finishing touches, their design sense and execution were impeccable. Highly recommended!",
      author: "Goutam Kumar Naha",
      position: "Developer",
      rating: 5,
      image: goutam
    },
    {
      id: 5,
      quote: "Working with New Design O Craft was the best decision we made during our home construction. The team was patient, professional, and brought our vision to life in the most beautiful way.",
      author: "Anjali Chowdhury",
      position: "Home Owner",
      rating: 4,
      image: palashi
    },
    {
      id: 6,
      quote: "We were amazed by how quickly they understood what we wanted. Their 2D-to-3D planning helped us visualize everything before construction even started!",
      author: "Partha Bose",
      position: "Home Owner",
      rating: 5,
      image: dadu
    },
    {
      id: 7,
      quote: "The blend of creativity and practicality that New Design O Craft brings is rare. Every corner of our house has a purpose and style.",
      author: "Sikha Laha",
      position: "Home Owner",
      rating: 4,
      image: papun
    },
    {
      id: 8,
      quote: "What sets them apart is how personal they make the process. It’s not just a house you’re building, it’s a feeling – and New Design O Craft gets that.",
      author: "Gitarani Paul",
      position: "Home Owner",
      rating: 4,
      image: tirthamaa
    },
    {
      id: 9,
      quote: "From clean layouts to stunning walkthroughs, NDoC creates experiences – not just spaces.",
      author: "Azad Bhai Bappa",
      position: "Developer",
      rating: 5,
      image: bappa
    },
    {
      id: 10,
      quote: "ওদের ডিজাইনের মধ্যে একটা simplicity আর elegance আছে। চোখে লেগে থাকে! আমাদের আত্মীয়-স্বজনরাও খুশি।",
      author: "Babul Chandra Saha",
      position: "Home Owner",
      rating: 5,
      image: tirthadadu
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Hear from our satisfied clients about their experience working with New Design O Craft.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  
                  <blockquote className="text-slate-700 text-lg italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <cite className="not-italic">
                    <div className="font-semibold text-xl text-slate-900">{testimonials[currentIndex].author}</div>
                    <div className="text-slate-600">{testimonials[currentIndex].position}</div>
                  </cite>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-800 hover:bg-amber-500 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-amber-500' : 'bg-slate-300'
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-800 hover:bg-amber-500 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;