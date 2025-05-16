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
    id: 1,
    title: 'Urban Heights Tower',
    slug: 'urban-heights-tower',
    category: 'commercial',
    location: 'San Francisco, CA',
    year: 2023,
    client: 'Urban Development Corp',
    description: 'A 28-story mixed-use tower featuring office space, luxury apartments, and ground-floor retail in downtown San Francisco.',
    challenge: 'Designing a high-rise that maximizes floor area while responding to strict urban design guidelines and sustainability requirements.',
    solution: 'We created a stepped tower form that respects the street wall while providing generous outdoor terraces. The glass curtain wall system incorporates high-performance glazing and integrated photovoltaic panels.',
    result: 'A landmark building that has received LEED Platinum certification and multiple design awards for its innovative approach to sustainable urban development.',
    mainImage: 'https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: true
  },
  {
    id: 2,
    title: 'Serenity Residence',
    slug: 'serenity-residence',
    category: 'residential',
    location: 'Seattle, WA',
    year: 2022,
    client: 'Private Client',
    description: 'A modern single-family residence nestled in the Pacific Northwest landscape, designed to maximize views and natural light.',
    challenge: 'Creating a home that embraces the stunning natural surroundings while providing shelter from the region's frequent rain and maintaining privacy from neighboring properties.',
    solution: 'We designed a series of staggered volumes with large overhangs to create covered outdoor spaces. Floor-to-ceiling windows frame key views while strategic placement of solid walls ensures privacy.',
    result: 'A harmonious home that blends indoor and outdoor living, with interiors bathed in natural light despite the region's cloudy climate.',
    mainImage: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: true
  },
  {
    id: 3,
    title: 'Harmony Park',
    slug: 'harmony-park',
    category: 'urban',
    location: 'Chicago, IL',
    year: 2021,
    client: 'City of Chicago',
    description: 'A 5-acre urban park that transforms a former industrial site into a vibrant public space with recreational areas, native landscapes, and community facilities.',
    challenge: 'Remediating a contaminated brownfield site and creating a welcoming public space that serves diverse community needs throughout all seasons.',
    solution: 'We implemented an extensive soil remediation strategy and designed a park with four distinct zones: a passive garden area, active recreation fields, a community plaza, and a wetland area for stormwater management.',
    result: 'A beloved community asset that has catalyzed neighborhood revitalization and received awards for its ecological restoration approach.',
    mainImage: 'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/207583/pexels-photo-207583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: true
  },
  {
    id: 4,
    title: 'Tech Innovation Center',
    slug: 'tech-innovation-center',
    category: 'commercial',
    location: 'Austin, TX',
    year: 2023,
    client: 'TechFuture Inc.',
    description: 'A state-of-the-art corporate campus designed to foster innovation, collaboration, and employee wellbeing for a leading technology company.',
    challenge: 'Creating a workspace that balances the client's need for open collaboration spaces with areas for focused work, while incorporating advanced technology and sustainable design principles.',
    solution: 'We designed a campus of interconnected pavilions organized around central courtyards. Each building features a variety of work environments from team areas to focus pods, with integrated technology throughout.',
    result: 'A workplace that has increased employee satisfaction and collaboration, while achieving net-zero energy usage through passive design strategies and renewable energy systems.',
    mainImage: 'https://images.pexels.com/photos/3773404/pexels-photo-3773404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/3773404/pexels-photo-3773404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3182530/pexels-photo-3182530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: true
  },
  {
    id: 5,
    title: 'Coastal Villa',
    slug: 'coastal-villa',
    category: 'residential',
    location: 'Miami, FL',
    year: 2022,
    client: 'Private Client',
    description: 'A luxury beachfront residence that embraces indoor-outdoor living while responding to coastal climate challenges.',
    challenge: 'Designing a home that maximizes ocean views and outdoor living while addressing hurricane resistance, flood elevation requirements, and salt air exposure.',
    solution: 'We created an elevated concrete structure with large overhangs for sun protection and storm resistance. Operable glass walls open to covered terraces, and a central courtyard provides protected outdoor space during inclement weather.',
    result: 'A resilient coastal home that offers seamless indoor-outdoor living while exceeding hurricane resistance standards and incorporating sustainable features like rainwater harvesting and solar power.',
    mainImage: 'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2510067/pexels-photo-2510067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: true
  },
  {
    id: 6,
    title: 'Heritage Museum',
    slug: 'heritage-museum',
    category: 'institutional',
    location: 'Washington, D.C.',
    year: 2021,
    client: 'National Heritage Foundation',
    description: 'A museum dedicated to preserving and showcasing cultural heritage, featuring exhibition spaces, educational facilities, and conservation laboratories.',
    challenge: 'Creating a contemporary museum that respects its historic context while providing state-of-the-art facilities for exhibitions, research, and public programming.',
    solution: 'We designed a building that references the proportions and materiality of its neighbors while expressing its modern function through strategic glazing and a distinctive entrance pavilion. Interior spaces feature flexible exhibition areas and specialized conservation facilities.',
    result: 'A museum that has become a cultural destination, with attendance exceeding projections by 40% and receiving recognition for both its architectural design and exhibition program.',
    mainImage: 'https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3575192/pexels-photo-3575192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1813467/pexels-photo-1813467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9850082/pexels-photo-9850082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: true
  }
];