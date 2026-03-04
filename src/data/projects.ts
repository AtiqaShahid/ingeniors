export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  client?: string;
  heroImage: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "hexacopter-design",
    title: "Hexacopter Design",
    shortDescription: "A robust, lightweight hexacopter built for maximum load capacity and stability.",
    description: "This hexacopter was designed from the ground up for industrial aerial surveying and payload delivery applications. The carbon fiber frame is optimized through FEA to achieve an ideal balance of structural rigidity and weight reduction. The design features a modular motor mount system, integrated vibration dampening, and a custom gimbal mount for precision camera equipment. Every component was CAD modeled and validated through simulation before prototyping.",
    technologies: ["SolidWorks", "ANSYS FEA", "Carbon Fiber Composites", "CNC Machining", "3D Printing"],
    client: "Aerial Solutions Inc.",
    heroImage: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80",
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800&q=80",
    ],
  },
  {
    slug: "6-dof-industrial-robot",
    title: "6-DOF Industrial Robot",
    shortDescription: "A versatile robotic arm with six degrees of freedom for industrial tasks like welding and drilling.",
    description: "This 6-axis industrial robotic arm was engineered for precision manufacturing operations including welding, drilling, pick-and-place, and quality inspection. The design emphasizes repeatability (±0.05mm), payload capacity (15kg), and reach optimization. Each joint features a harmonic drive reducer for zero-backlash motion. The complete kinematic model was validated through motion simulation, and the structural components were stress-tested under maximum payload conditions.",
    technologies: ["CATIA V5", "MATLAB Robotics", "ANSYS", "Harmonic Drives", "Servo Motors"],
    client: "RoboTech Manufacturing",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=800&q=80",
      "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
    ],
  },
  {
    slug: "adjustable-sheet-metal-shelving",
    title: "Adjustable Sheet Metal Shelving",
    shortDescription: "Modular shelving with height-adjustable sections, allowing flexible organization and space optimization.",
    description: "This industrial shelving system was designed for warehouse and workshop environments requiring flexible storage configurations. The sheet metal construction uses 16-gauge steel with a powder-coated finish for corrosion resistance. The height-adjustable shelf brackets use a proprietary locking mechanism that allows tool-free reconfiguration. The system was optimized for flat-pack shipping, with all components laser-cut from standard sheet sizes to minimize material waste.",
    technologies: ["SolidWorks Sheet Metal", "Laser Cutting", "DXF Output", "Powder Coating", "FEA Validation"],
    client: "StoragePro Systems",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    ],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
