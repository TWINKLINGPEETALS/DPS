import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

// Placeholder gallery images - replace with actual images
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop', alt: 'Children playing in classroom' },
  { id: 2, src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop', alt: 'Creative art activities' },
  { id: 3, src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop', alt: 'Outdoor playground' },
  { id: 4, src: 'https://images.unsplash.com/photo-1544776194-398b41e4651f?w=600&h=400&fit=crop', alt: 'Reading time' },
  { id: 5, src: 'https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?w=600&h=400&fit=crop', alt: 'Music and dance' },
  { id: 6, src: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop', alt: 'Annual day celebration' },
  { id: 7, src: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=600&h=400&fit=crop', alt: 'Science activities' },
  { id: 8, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop', alt: 'Group learning' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="section-padding bg-soft-blue/30">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-primary mb-4 inline-block">Gallery</span>
          <h2 className="heading-section mb-6">
            <span className="text-gradient-primary">Precious Moments</span> at School
          </h2>
          <p className="text-body">
            Glimpses of joy, learning, and growth from our vibrant campus life.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-soft
                        ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 
                         group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm 
                                flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-primary-foreground 
                            text-center">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-primary-foreground hover:text-primary 
                       transition-colors p-2"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            <p className="text-center text-primary-foreground mt-4 font-semibold">
              {selectedImage.alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
