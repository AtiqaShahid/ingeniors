export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
  thumbnail: string;
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "structural-analysis",
    title: "Structural Analysis",
    shortDescription: "We provide detailed insights into the structural integrity and performance of various designs, from machinery chassis to electronic equipment.",
    description: "Our Structural Analysis services deliver comprehensive insights into the performance and integrity of your designs. Using advanced simulation tools including FEA (Finite Element Analysis), we evaluate stress distributions, deformation patterns, and safety factors across mechanical assemblies, machinery chassis, electronic enclosures, and architectural components. Our team ensures your products meet industry standards while optimizing material usage and weight.",
    features: [
      "Finite Element Analysis (FEA)",
      "Stress & strain simulation",
      "Thermal analysis",
      "Fatigue life prediction",
      "Modal & vibration analysis",
      "Material optimization",
      "Safety factor evaluation",
      "Compliance verification",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    relatedSlugs: ["3d-cad-modeling", "sheet-metal-design"],
  },
  {
    slug: "3d-cad-modeling",
    title: "3D CAD Modeling",
    shortDescription: "Utilizing state-of-the-art technology and deep industry expertise, we cater to various manufacturing needs, including CNC machining, 3D printing, and more.",
    description: "Our 3D CAD Modeling services transform your concepts into precise, production-ready digital models. We utilize industry-leading software such as SolidWorks, CATIA, and Fusion 360 to create parametric models suitable for CNC machining, injection molding, 3D printing, and sheet metal fabrication. Every model is optimized for manufacturability and includes complete assembly documentation.",
    features: [
      "Parametric solid modeling",
      "Surface modeling",
      "Assembly design & motion studies",
      "Design for manufacturability (DFM)",
      "3D printing optimization",
      "CNC machining preparation",
      "BOM generation",
      "Design revision management",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    relatedSlugs: ["2d-technical-drawings", "product-visualization"],
  },
  {
    slug: "2d-technical-drawings",
    title: "2D Technical Drawings",
    shortDescription: "Our 2D Technical and Manufacturing Drawing Services, perfect for detailed production schematics. We specialize in GDT to ensure high-quality outcomes.",
    description: "Our 2D Technical Drawing services produce precise, standards-compliant manufacturing documentation. From detailed part drawings with GD&T (Geometric Dimensioning & Tolerancing) annotations to comprehensive assembly drawings, we ensure your manufacturing team has everything needed for flawless production. All drawings adhere to ASME Y14.5 and ISO standards.",
    features: [
      "GD&T annotations (ASME Y14.5)",
      "Manufacturing drawings",
      "Assembly drawings & exploded views",
      "Weldment drawings",
      "ISO-compliant documentation",
      "BOM & parts lists",
      "Tolerance stack-up analysis",
      "Drawing revision control",
    ],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    relatedSlugs: ["3d-cad-modeling", "structural-analysis"],
  },
  {
    slug: "sheet-metal-design",
    title: "Sheet Metal Design",
    shortDescription: "Leveraging advanced CAD tools, we deliver customized solutions, including enclosure designs, DXF files, reverse engineering, and comprehensive engineering documentation.",
    description: "Our Sheet Metal Design services cover the entire workflow from concept to fabrication-ready output. We design enclosures, brackets, panels, and complex sheet metal assemblies with proper bend allowances, K-factor calculations, and flat pattern layouts. Deliverables include DXF/DWG files ready for laser cutting, punching, or waterjet cutting, along with complete manufacturing documentation.",
    features: [
      "Enclosure & chassis design",
      "Flat pattern & bend calculations",
      "DXF/DWG file generation",
      "K-factor optimization",
      "Reverse engineering",
      "Prototype-to-production scaling",
      "Hardware & fastener integration",
      "Cost-effective material selection",
    ],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
    relatedSlugs: ["structural-analysis", "3d-cad-modeling"],
  },
  {
    slug: "product-visualization",
    title: "Product Visualization",
    shortDescription: "Specializing in high-impact visual content, we create engaging animations and renderings that boost marketing efforts and enhance customer engagement.",
    description: "Our Product Visualization services bring your designs to life with photorealistic renderings, animated product demos, and interactive 3D experiences. We create studio-quality visuals that elevate your marketing materials, investor presentations, and e-commerce listings. From exploded view animations to lifestyle renders, we make your products look their absolute best.",
    features: [
      "Photorealistic rendering",
      "Product animation & video",
      "Exploded view animations",
      "360° interactive views",
      "Lifestyle & context renders",
      "Material & texture studies",
      "Marketing-ready visuals",
      "AR/VR-ready 3D assets",
    ],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&q=80",
    relatedSlugs: ["3d-cad-modeling", "2d-technical-drawings"],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
