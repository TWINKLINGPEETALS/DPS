import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  Users,
  Palette,
  Zap,
  UserCheck,
  Heart,
  PartyPopper,
  Mic,
  Star,
} from 'lucide-react';


const features = [
  {
    icon: Shield,
    title: 'CCTV Surveillance',
    description: '24/7 monitoring for complete safety',
  },
  {
    icon: Users,
    title: 'Low Student–Teacher Ratio',
    description: 'Personalized attention for every child',
  },
  {
    icon: Palette,
    title: 'Co-curricular Activities',
    description: 'Art, music, dance & more',
  },
  {
    icon: Zap,
    title: 'Power Backup',
    description: 'Uninterrupted learning environment',
  },
  {
    icon: UserCheck,
    title: 'Expert Staff',
    description: 'Trained & certified educators',
  },
  {
    icon: Heart,
    title: 'Safe Environment',
    description: 'Child-friendly infrastructure',
  },
  {
    icon: PartyPopper,
    title: 'Celebrations & Events',
    description: 'Fun festivals & special days',
  },
  {
    icon: Mic,
    title: 'Stage Exposure',
    description: 'Build confidence through performances',
  },
  {
    icon: Star,
    title: 'Personality Development',
    description: 'Holistic growth programs',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="section-padding bg-soft-yellow/30">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-primary mb-4 inline-block">Why Choose Us</span>
          <h2 className="heading-section mb-6">
            What Makes Us <span className="text-gradient-warm">Special</span>
          </h2>
          <p className="text-body">
            We provide a nurturing environment where children thrive through expert care,
            modern facilities, and engaging activities.
          </p>
        </motion.div>

        {/* Wooden Board Container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="wooden-board p-6 sm:p-10 lg:p-12"
        >
          {/* Board Header */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary-foreground">
              Our Highlights
            </h3>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/95 backdrop-blur-sm rounded-2xl p-5 shadow-soft 
                         hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center 
                                flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Communication Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-6 bg-gradient-primary rounded-2xl p-6 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Mic className="w-6 h-6 text-primary-foreground" />
              <h4 className="text-lg font-bold text-primary-foreground">
                Communication Skills Development
              </h4>
            </div>
            <p className="text-primary-foreground/90 text-sm">
              We focus on building strong communication skills through interactive sessions,
              group discussions, and public speaking opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
