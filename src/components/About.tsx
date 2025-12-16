import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Award, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Heart,
    title: 'Safe & Caring',
    description:
      'A warm, nurturing environment where every child feels secure, valued, and loved.',
    color: 'pink',
    bgColor: 'bg-soft-pink',
    iconBg: 'bg-pink',
  },
  {
    icon: Award,
    title: 'Experienced Teachers',
    description:
      'Our certified educators bring passion and expertise to guide your child\'s learning journey.',
    color: 'blue',
    bgColor: 'bg-soft-blue',
    iconBg: 'bg-blue',
  },
  {
    icon: Sparkles,
    title: 'Holistic Development',
    description:
      'We nurture cognitive, emotional, social, and physical growth through play-based learning.',
    color: 'purple',
    bgColor: 'bg-soft-purple',
    iconBg: 'bg-purple',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="badge-primary mb-4 inline-block">About Us</span>
            <h2 className="heading-section mb-6">
              Building <span className="text-gradient-primary">Strong Foundations</span>
            </h2>
            <div className="space-y-4 text-body">
              <p>
                At <strong className="text-foreground">Little Junior DPS</strong>, we believe that
                every child is unique and deserves an education that nurtures their individual
                talents and abilities.
              </p>
              <p>
                Our philosophy centers on creating joyful learning experiences that spark curiosity
                and foster a lifelong love of learning. We blend traditional values with modern
                teaching methodologies to prepare children for future success.
              </p>
              <p>
                With over a decade of experience in early childhood education, our dedicated team
                of educators is committed to providing the highest quality care and education for
                your little ones.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '500+', label: 'Happy Students' },
                { value: '50+', label: 'Expert Faculty' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-muted/50"
                >
                  <span className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</span>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className={`${item.bgColor} rounded-3xl p-6 shadow-soft hover:shadow-card 
                          transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center 
                              flex-shrink-0 shadow-soft`}
                  >
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="heading-card mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
