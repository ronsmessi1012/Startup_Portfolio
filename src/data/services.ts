interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'architectural-design',
    title: 'Architectural Design',
    slug: 'architectural-design',
    shortDescription: 'Custom architectural solutions for residential, commercial, and institutional projects.',
    fullDescription: 'Our architectural design services encompass the full spectrum of the design process, from initial concept development to detailed documentation. We create thoughtful, innovative designs that balance aesthetics, functionality, and sustainability while adhering to budget constraints and regulatory requirements.',
    icon: 'Ruler',
    features: [
      'Residential Architecture',
      'Commercial Architecture',
      'Institutional Architecture',
      'Mixed-Use Developments',
      'Adaptive Reuse',
      'Historic Preservation',
      'Sustainable Design'
    ],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  /*{
    id: 'interior-design',
    title: 'Interior Design',
    slug: 'interior-design',
    shortDescription: 'Transform spaces with innovative interior designs that reflect your personal style.',
    fullDescription: 'Our interior design services focus on creating impactful, functional interior environments that enhance the user experience. We consider all aspects of interior space—from spatial planning and material selection to lighting design and furniture specification—to create cohesive, compelling interiors.',
    icon: 'PenTool',
    features: [
      'Space Planning',
      'Material Selection',
      'Custom Furniture Design',
      'Lighting Design',
      'Color Consultation',
      'Furniture Specification',
      'Art & Accessory Curation'
    ],
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },*/
  {
    id: 'building-planning',
    title: 'Building Planning',
    slug: 'building-planning',
    shortDescription: 'Comprehensive building planning services for efficient and sustainable construction.',
    fullDescription: 'Our building planning services provide detailed analysis and planning for construction projects of all scales. We ensure optimal space utilization, compliance with building codes, and integration of sustainable practices throughout the planning process.',
    icon: 'Building2',
    features: [
      'Site Analysis',
      'Building Code Compliance',
      'Space Optimization',
      'Construction Planning',
      'Safety Regulations',
      'Environmental Impact',
      'Cost-effective Solutions'
    ],
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design',
    slug: 'landscape-design',
    shortDescription: 'Enhance outdoor spaces with sustainable landscape designs.',
    fullDescription: 'Our landscape design services create harmonious outdoor environments that complement architectural elements and respond to the natural context. We emphasize sustainable practices, native plantings, and thoughtful hardscape design to create beautiful, functional outdoor spaces.',
    icon: 'Home',
    features: [
      'Residential Landscapes',
      'Commercial Landscapes',
      'Public Parks & Plazas',
      'Rooftop Gardens',
      'Sustainable Landscape Design',
      'Native Planting Design',
      'Hardscape Design'
    ],
    image: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'estimator-surveyor',
    title: 'Estimator Surveyor & Valuer',
    slug: 'estimator-surveyor',
    shortDescription: 'Professional estimation, surveying, and valuation services for property and construction projects.',
    fullDescription: 'Our estimation and surveying services provide accurate assessments of property values and construction costs. We offer detailed quantity surveying, cost estimation, and property valuation services to help clients make informed decisions about their investments.',
    icon: 'Calculator',
    features: [
      'Quantity Surveying',
      'Cost Estimation',
      'Property Valuation',
      'Construction Cost Analysis',
      'Budget Planning',
      'Risk Assessment',
      'Market Analysis'
    ],
    image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'soil-testing',
    title: 'Soil Testing',
    slug: 'soil-testing',
    shortDescription: 'Comprehensive soil analysis and testing services for construction projects.',
    fullDescription: 'Our soil testing services provide detailed analysis of soil properties and characteristics to ensure proper foundation design and construction. We use advanced testing methods to determine soil composition, strength, and stability for safe and reliable construction.',
    icon: 'Flask',
    features: [
      'Soil Composition Analysis',
      'Bearing Capacity Tests',
      'Moisture Content Analysis',
      'Density Testing',
      'Permeability Tests',
      'Chemical Analysis',
      'Foundation Recommendations'
    ],
    image: 'https://g3soilworks.com/wp-content/uploads/2023/07/soil-testing-agronomy-inspector-taking-soil-sampl-2021-08-26-16-53-52-utc-scaled.jpg'
  },
  /*{
    id: '3d-visualization',
    title: '3D Visualization',
    slug: '3d-visualization',
    shortDescription: 'Photorealistic 3D renderings and animations that bring your project to life.',
    fullDescription: 'Our 3D visualization services provide clients with a realistic preview of their project before construction begins. We create high-quality renderings, animations, and virtual reality experiences that effectively communicate design intent and help clients make informed decisions.',
    icon: 'FileImage',
    features: [
      'Exterior Renderings',
      'Interior Renderings',
      'Aerial Perspectives',
      'Walkthrough Animations',
      'Virtual Reality (VR) Experiences',
      'Augmented Reality (AR) Applications',
      'Conceptual Visualization'
    ],
    image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },*/
  {
    id: 'consulting',
    title: 'Consulting',
    slug: 'consulting',
    shortDescription: 'Expert architectural and design consulting services for your project.',
    fullDescription: 'Our consulting services provide clients with expert guidance on architectural and design-related matters. Whether you need assistance with feasibility studies, code compliance, or sustainable design strategies, our team offers knowledgeable advice to help you make informed decisions.',
    icon: 'Users',
    features: [
      'Feasibility Studies',
      'Site Selection & Analysis',
      'Building Code Consultation',
      'Sustainable Design Consultation',
      'Accessibility Compliance',
      'Project Management',
      'Construction Administration'
    ],
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];