import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.jpeg";
import image6 from "@/assets/image6.jpeg";
import image7 from "@/assets/image7.jpeg";
import image8 from "@/assets/image8.jpeg";
import image9 from "@/assets/image9.jpeg";
import image10 from "@/assets/image10.jpeg";
import image11 from "@/assets/image11.jpeg";
import image12 from "@/assets/image12.jpeg";
import image13 from "@/assets/image13.jpeg";
import image14 from "@/assets/image14.jpeg";


const images = [
  { src: image1, category: "School Programs", title: "Physical Education Class" },
  { src: image2, category: "Teacher Training", title: "Educator Development" },
  { src: image3, category: "Student Activities", title: "Sports Training" },
  { src: image4, category: "School Events", title: "Annual Sports Day" },
  { src: image5, category: "School Programs", title: "Fitness Activities" },
  { src: image6, category: "Teacher Training", title: "Workshop Session" },
  { src: image7, category: "Student Activities", title: "Team Sports" },
  { src: image8, category: "School Events", title: "Competition" },
  { src: image9, category: "School Programs", title: "PE Curriculum" },
  { src: image10, category: "Teacher Training", title: "Professional Training" },
  { src: image11, category: "Student Activities", title: "Outdoor Activities" },
  { src: image12, category: "School Events", title: "Inter-School Meet" },
  { src: image13, category: "School Programs", title: "Fitness Assessment" },
  { src: image14, category: "Teacher Training", title: "Certification Program" },
];

const categories = ["All", "School Programs", "Teacher Training", "Student Activities", "School Events"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Moments of Excellence
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our collection of action shots, training sessions, and memorable 
              moments from competitions and events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-30">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, i) => (
                <motion.div
                  key={`${image.title}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                    i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                  onClick={() => setLightboxImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      i % 5 === 0 ? "h-[400px] sm:h-full" : "h-64"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <span className="text-primary text-xs font-semibold uppercase">{image.category}</span>
                    <h3 className="text-background font-semibold">{image.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-background/10 text-background hover:bg-background/20 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
