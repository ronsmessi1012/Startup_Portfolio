import dreamplaza from "../assets/images/Dream.jpg";
import manindrabhawan from "../assets/images/Manindra Bhawan.jpg";
import sankalpabhawan from "../assets/images/Sankalpa Bhawan.jpg";
import newadd from "../assets/images/new add.jpg";
import sourajitplaza from "../assets/images/Sourajit Plaza.jpg";
import birla from "../assets/images/birla.jpg";
import Shyamali from "../assets/images/Shayamali.jpg";
import রেওয়াজ from "../assets/images/রেওয়াজ.jpg";
import govindtaranivas from "../assets/images/Govind tara nivas.jpg";
import lib from "../assets/images/lib.jpg";
import dp1 from "../assets/images/dp1.jpg";
import dp2 from "../assets/images/dp2.jpg";
import mb from "../assets/images/mb.jpg";
import mb1 from "../assets/images/mb1.jpg";
import sb1 from "../assets/images/sb1.jpg";
import sb2 from "../assets/images/sb2.jpg";
import h1 from "../assets/images/h1.jpg";
import h2 from "../assets/images/h2.jpg";
import sp1 from "../assets/images/sp1.jpg";
import sp2 from "../assets/images/sp2.jpg";
import sp3 from "../assets/images/sp3.jpg";
import bm1 from "../assets/images/bm1.jpg";
import bm2 from "../assets/images/bm2.jpg";
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/sb2.jpg";
import re1 from "../assets/images/re1.jpg";
import re2 from "../assets/images/re2.jpg";
import re3 from "../assets/images/re3.jpg";
import re4 from "../assets/images/r4.jpg";
import gt1 from "../assets/images/gt1.jpg";
import gt2 from "../assets/images/gt2.jpg";
import lib1 from "../assets/images/lib1.jpg";
import lib2 from "../assets/images/lib2.jpg";
import lib3 from "../assets/images/lib3.jpg"; 
interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  location: string;
  year: number;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  mainImage: string;
  galleryImages: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
  "id": 1,
  "title": "Dream Plaza",
  "slug": "Dream Plaza",
  "category": "residential",
  "location": "Kolkata, India",
  "year": 2022,
  "client": "Urban Development Corp",
  "description": "A contemporary residential high-rise blending modern design with green living in the heart of Kolkata.",
  "challenge": "Creating high-density residential units without compromising on natural light and ventilation.",
  "solution": "We incorporated vertical gardens, cross-ventilation corridors, and optimized window orientations for thermal comfort.",
  "result": "A sustainable, community-focused space now recognized as a benchmark for urban residential development in the city.",
  "mainImage": dreamplaza,
  "galleryImages": [dp1,dp2],
  "featured": true
  },
  {
  "id": 2,
  "title": "Manindra Bhawan",
  "slug": "Manindra Bhawan",
  "category": "residential",
  "location": "Kolkata, India",
  "year": 2020,
  "client": "Private Family Trust",
  "description": "A multi-family residential block that combines traditional Bengali architecture with modern living.",
  "challenge": "Integrating traditional motifs while meeting contemporary space requirements.",
  "solution": "Used locally sourced materials and incorporated courtyards to ensure cultural relevance and thermal efficiency.",
  "result": "An elegant and culturally rooted residence known for its unique blend of past and present.",
  "mainImage": manindrabhawan,
  "galleryImages": [mb,mb1],
  "featured": false
  },
  {
  "id": 3,
  "title": "Sankalpa Bhawan",
  "slug": "Sankalpa Bhawan",
  "category": "residential",
  "location": "Kolkata, India",
  "year": 2023,
  "client": "Sankalpa Developers",
  "description": "An upscale residential complex designed for community-centric living with rooftop gardens and shared spaces.",
  "challenge": "Encouraging communal interaction without sacrificing privacy.",
  "solution": "Designed semi-private green zones and integrated shared amenities like a co-working lounge and rooftop café.",
  "result": "An award-nominated housing model promoting urban togetherness.",
  "mainImage": sankalpabhawan,
  "galleryImages": [sb1,sb2],
  "featured": false
  },
  {
  "id": 4,
  "title": "Heaven Guest House",
  "slug": "Heaven",
  "category": "commercial",
  "location": "Kolkata, India",
  "year": 2023,
  "client": "Heaven Hospitality Group",
  "description": "A boutique guest house offering modern comfort within a culturally resonant space.",
  "challenge": "Merging hospitality needs with heritage aesthetics in a dense urban context.",
  "solution": "Blended traditional façade elements with modular interiors optimized for traveler comfort.",
  "result": "Rated among the top stays in Kolkata for its warm design and operational efficiency.",
  "mainImage": newadd,
  "galleryImages": [h1,h2],
  "featured": true
  },
  {
  "id": 5,
  "title": "Sourajit Plaza",
  "slug": "Sourajit Plaza",
  "category": "cesidential",
  "location": "Kolkata, India",
  "year": 2025,
  "client": "Sourajit Real Estate",
  "description": "A modern residential block designed for urban professionals with smart home integration.",
  "challenge": "Optimizing space for compact urban living while ensuring quality of life.",
  "solution": "Each unit features smart lighting, remote climate control, and noise-insulated walls.",
  "result": "A popular choice for young professionals, setting new standards in compact luxury.",
  "mainImage": sourajitplaza,
  "galleryImages": [sp1,sp2,sp3],
  "featured": true
  },
  {
  "id": 6,
  "title": "Birla Mandir",
  "slug": "Birla Mandir",
  "category": "institutional",
  "location": "Kolkata, India",
  "year": 1998,
  "client": "Birla Group",
  "description": "A spiritual landmark and one of Kolkata’s iconic temples blending Rajasthani architecture and serene landscaping.",
  "challenge": "Achieving timeless architectural beauty while managing high public footfall.",
  "solution": "Used white marble, traditional carvings, and designed expansive pathways for crowd control.",
  "result": "A timeless religious structure visited by millions each year.",
  "mainImage": birla,
  "galleryImages": [bm1,bm2],
  "featured": false
},
{
  "id": 7,
  "title": "Shyamali",
  "slug": "Shyamali",
  "category": "residential",
  "location": "Kolkata, India",
  "year": 2000,
  "client": "Shyamali Housing Co-op",
  "description": "A serene housing enclave designed for peaceful community living with abundant greenery.",
  "challenge": "Incorporating nature in a low-rise development without disrupting the site’s natural terrain.",
  "solution": "Retained existing trees and contours, created rainwater harvesting systems and communal gardens.",
  "result": "Highly rated by residents for its tranquility and ecological sensitivity.",
  "mainImage": Shyamali,
  "galleryImages": [s1,s2],
  "featured": false
},
{
  "id": 8,
  "title": "রেওয়াজ",
  "slug": "রেওয়াজ",
  "category": "residential",
  "location": "Kolkata, India",
  "year": 2010,
  "client": "Bengali Cultural Heritage Trust",
  "description": "A culturally significant residential project inspired by Bengali heritage homes.",
  "challenge": "Creating a modern housing experience while preserving vernacular architecture.",
  "solution": "Featured terracotta elements, open verandas, and jali windows that echo Bengali heritage.",
  "result": "A celebrated architectural homage to Bengal's rich domestic traditions.",
  "mainImage": রেওয়াজ,
  "galleryImages": [re1,re2,re3,re4],
  "featured": true
},
{
  "id": 9,
  "title": "Govind Tara Nivas",
  "slug": "Govind Tara Nivas",
  "category": "residential",
  "location": "Kolkata, India",
  "year": 2024,
  "client": "Govind Family Estate",
  "description": "A luxury family residence designed with Vaastu principles and modern aesthetics.",
  "challenge": "Balancing traditional layout prescriptions with contemporary needs.",
  "solution": "Implemented a central courtyard, aligned rooms per Vaastu, and added minimalist detailing.",
  "result": "A perfect blend of heritage and modernity, appreciated for spatial harmony and design clarity.",
  "mainImage": govindtaranivas,
  "galleryImages": [gt1,gt2],
  "featured": true
},
{
  "id": 10,
  "title": "Pragati Sangha Library",
  "slug": "Pragati Sangha Library",
  "category": "institutional",
  "location": "Kolkata, India",
  "year": 2011,
  "client": "Pragati Sangha Trust",
  "description": "A community library designed to inspire learning, inclusivity, and digital accessibility in a culturally active neighborhood.",
  "challenge": "Creating a modern, flexible learning environment within a modest budget and a dense residential setting.",
  "solution": "We designed a compact yet versatile structure with natural lighting, multi-use reading halls, and digital access zones. Locally available materials kept the budget in check while ensuring a warm, inviting ambiance.",
  "result": "Now a vibrant neighborhood hub, the library has doubled membership within a year and serves as a venue for workshops, readings, and youth programs.",
  "mainImage": lib,
  "galleryImages": [lib1,lib2,lib3],
  "featured": true
}

];