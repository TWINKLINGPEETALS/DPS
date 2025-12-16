import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Baby, BookOpen, GraduationCap, Users, Sun, Clock } from 'lucide-react';

const programs = [
  {
    title: 'Playgroup',
    age: '2–3 years',
    icon: Baby,
    color: 'pink',
    bgColor: 'bg-soft-pink',
    borderColor: 'border-pink',
    iconBg: 'bg-pink',
    activities: [
      'Sensory play & exploration',
      'Basic motor skills development',
      'Introduction to colors & shapes',
      'Music & movement activities',
      'Social interaction skills',
    ],
  },
  {
    title: 'Nursery',
    age: '3–4 years',
    icon: Sun,
    color: 'yellow',
    bgColor: 'bg-soft-yellow',
    borderColor: 'border-yellow',
    iconBg: 'bg-yellow',
    activities: [
      'Pre-reading & phonics awareness',
      'Number recognition (1-20)',
      'Art & craft projects',
      'Storytelling sessions',
      'Outdoor play & games',
    ],
  },
  {
    title: 'Junior KG (LKG)',
    age: '4–5 years',
    icon: BookOpen,
    color: 'blue',
    bgColor: 'bg-soft-blue',
    borderColor: 'border-blue',
    iconBg: 'bg-blue',
    activities: [
      'Reading & writing basics',
      'Simple math concepts',
      'Environmental awareness',
      'Creative expression',
      'Physical education',
    ],
  },
  {
    title: 'Senior KG (UKG)',
    age: '5–6 years',
    icon: GraduationCap,
    color: 'purple',
    bgColor: 'bg-soft-purple',
    borderColor: 'border-purple',
    iconBg: 'bg-purple',
    activities: [
      'Advanced literacy skills',
      'Math operations basics',
      'Science exploration',
      'School readiness program',
      'Leadership activities',
    ],
  },
  {
    title: 'Day Care',
    age: '18 months – 12 years',
    icon: Clock,
    color: 'green',
    bgColor: 'bg-soft-green',
    borderColor: 'border-green-main',
    iconBg: 'bg-green-main',
    activities: [
      'Extended care hours',
      'Homework assistance',
      'Nutritious meals & snacks',
      'Supervised play time',
      'Rest & relaxation areas',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-primary mb-4 inline-block">Our Programs</span>
          <h2 className="heading-section mb-6">
            Nurturing <span className="text-gradient-primary">Young Minds</span>
          </h2>
          <p className="text-body">
            Age-appropriate programs designed to foster curiosity, creativity, and confidence
            in every child through play-based learning.
          </p>
        </motion.div>

        {/* Program Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              variants={cardVariants}
              className={`card-playful ${program.bgColor} border-2 ${program.borderColor} border-opacity-20 group`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${program.iconBg} rounded-2xl flex items-center justify-center mb-6 
                          group-hover:scale-110 transition-transform duration-300 shadow-soft`}
              >
                <program.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Title & Age */}
              <h3 className="heading-card mb-2 text-foreground">{program.title}</h3>
              <p className="text-sm font-bold text-primary mb-4">{program.age}</p>

              {/* Activities */}
              <ul className="space-y-2">
                {program.activities.map((activity, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${program.iconBg} mt-2 flex-shrink-0`} />
                    {activity}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
