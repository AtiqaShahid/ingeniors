export interface Resource {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  thumbnail: string;
  author: string;
  date: string;
  relatedSlugs: string[];
}

export const resources: Resource[] = [
  {
    slug: "importance-of-fea-in-modern-engineering",
    title: "The Importance of FEA in Modern Engineering Design",
    excerpt: "Finite Element Analysis has revolutionized how engineers validate designs before manufacturing. Learn why FEA is essential for modern product development.",
    content: [
      "Finite Element Analysis (FEA) is one of the most powerful tools in a modern engineer's toolkit. By dividing complex geometries into smaller, manageable elements, FEA allows us to predict how a design will behave under real-world conditions—before a single prototype is built.",
      "At Geometricx, we use FEA extensively across our structural analysis projects. Whether we're optimizing a drone frame for weight reduction or validating the load-bearing capacity of an industrial shelving system, simulation-driven design saves time, reduces costs, and produces superior products.",
      "The key benefits of integrating FEA early in the design process include: reduced prototyping iterations, identification of stress concentrations, material optimization, and regulatory compliance verification. Modern FEA software can simulate static loads, dynamic impacts, thermal gradients, and even fluid-structure interactions.",
      "For companies looking to reduce time-to-market while improving product reliability, investing in simulation-driven design is not optional—it's essential. Our team brings decades of combined experience in applying FEA to real-world engineering challenges across aerospace, automotive, consumer products, and industrial equipment.",
    ],
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    author: "Geometricx Team",
    date: "2024-03-15",
    relatedSlugs: ["gdt-best-practices", "cad-to-manufacturing"],
  },
  {
    slug: "gdt-best-practices",
    title: "GD&T Best Practices for Manufacturing Drawings",
    excerpt: "Geometric Dimensioning and Tolerancing ensures your parts are manufactured correctly. Here are the best practices every engineer should follow.",
    content: [
      "Geometric Dimensioning and Tolerancing (GD&T) is the language of precision manufacturing. Defined by ASME Y14.5, GD&T provides a systematic framework for communicating design intent through engineering drawings.",
      "Unlike traditional coordinate dimensioning, GD&T uses datum references and geometric controls to define allowable variations in form, orientation, location, and runout. This approach ensures that parts function correctly in their assemblies, even when manufactured by different suppliers.",
      "Key best practices include: always defining a datum reference frame based on functional surfaces, using feature control frames consistently, applying the principle of maximum material condition (MMC) where appropriate, and ensuring your tolerance stack-ups are validated before releasing drawings to production.",
      "At Geometricx, our drafting team is fully trained in GD&T per ASME Y14.5-2018. We ensure every drawing we produce communicates design intent clearly, reducing manufacturing errors and inspection ambiguities.",
    ],
    coverImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    author: "Geometricx Team",
    date: "2024-02-20",
    relatedSlugs: ["importance-of-fea-in-modern-engineering", "cad-to-manufacturing"],
  },
  {
    slug: "cad-to-manufacturing",
    title: "From CAD to Manufacturing: Bridging the Digital-Physical Gap",
    excerpt: "How to ensure your 3D CAD models translate seamlessly into manufactured parts. Tips for design-for-manufacturability.",
    content: [
      "The journey from a 3D CAD model to a physical manufactured part is filled with potential pitfalls. Design for Manufacturability (DFM) is the practice of designing parts so they can be efficiently and economically produced using available manufacturing processes.",
      "Common DFM considerations include: maintaining uniform wall thicknesses for injection molding, avoiding undercuts that require complex tooling, adding draft angles for easy part ejection, and designing fillet radii that match available tooling sizes.",
      "For sheet metal parts, DFM involves calculating accurate bend allowances, maintaining minimum flange lengths, ensuring proper hole-to-edge distances, and designing flat patterns that nest efficiently on standard sheet sizes.",
      "At Geometricx, DFM is built into our design process from day one. We don't just create beautiful CAD models—we create models that can be manufactured reliably, repeatedly, and cost-effectively. Our engineers work closely with fabricators and machinists to ensure every design is production-ready.",
    ],
    coverImage: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
    author: "Geometricx Team",
    date: "2024-01-10",
    relatedSlugs: ["importance-of-fea-in-modern-engineering", "gdt-best-practices"],
  },
];

export const getResourceBySlug = (slug: string) => resources.find((r) => r.slug === slug);
