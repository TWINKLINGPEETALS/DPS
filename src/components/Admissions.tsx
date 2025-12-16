import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

const eligibility = [
  { program: 'Playgroup', age: '2–3 years', requirement: 'Child should be 2 years by March 31st' },
  { program: 'Nursery', age: '3–4 years', requirement: 'Child should be 3 years by March 31st' },
  { program: 'Junior KG (LKG)', age: '4–5 years', requirement: 'Child should be 4 years by March 31st' },
  { program: 'Senior KG (UKG)', age: '5–6 years', requirement: 'Child should be 5 years by March 31st' },
  { program: 'Day Care', age: '18 months – 12 years', requirement: 'Age appropriate enrollment' },
];

const classOptions = [
  'Playgroup',
  'Nursery',
  'Junior KG (LKG)',
  'Senior KG (UKG)',
  'Day Care',
];

interface FormData {
  childName: string;
  childAge: string;
  classApplying: string;
  parentName: string;
  phone: string;
  email: string;
  message: string;
}

export default function Admissions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    childName: '',
    childAge: '',
    classApplying: '',
    parentName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectClass = (option: string) => {
    setFormData({ ...formData, classApplying: option });
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success('Application submitted successfully!', {
        description: 'We will contact you shortly.',
      });
      
      setFormData({
        childName: '',
        childAge: '',
        classApplying: '',
        parentName: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to submit application', {
        description: 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-5 py-4 rounded-2xl border-0 bg-muted/50 
    text-foreground placeholder:text-muted-foreground/60
    focus:outline-none focus:bg-muted/70 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]
    transition-all duration-300 text-base`;

  return (
    <section id="admissions" className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg 
                          shadow-glow-green animate-pulse-glow">
              🎉 Admissions Open 2024-25
            </span>
          </motion.div>
          <h2 className="heading-section mb-6">
            Begin Your Child's <span className="text-gradient-primary">Journey</span>
          </h2>
          <p className="text-body">
            Take the first step towards a bright future. Fill out the form below and our team
            will get in touch with you.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Eligibility Table */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="heading-card mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              Eligibility Criteria
            </h3>
            <div className="overflow-hidden rounded-3xl border border-border/50 shadow-soft bg-card">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-5 font-bold text-foreground">Program</th>
                    <th className="text-left p-5 font-bold text-foreground">Age</th>
                    <th className="text-left p-5 font-bold text-foreground hidden sm:table-cell">
                      Requirement
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {eligibility.map((item, index) => (
                    <tr
                      key={item.program}
                      className={`${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'} 
                                hover:bg-primary/5 transition-colors`}
                    >
                      <td className="p-5 font-semibold text-foreground">{item.program}</td>
                      <td className="p-5 text-primary font-bold">{item.age}</td>
                      <td className="p-5 text-muted-foreground text-sm hidden sm:table-cell">
                        {item.requirement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Admission Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="heading-card mb-6">Admission Enquiry Form</h3>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-[2rem] p-6 sm:p-8 shadow-card space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className={inputClasses}
                    placeholder="Enter child's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Child's Age *
                  </label>
                  <input
                    type="text"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    required
                    maxLength={20}
                    className={inputClasses}
                    placeholder="e.g., 3 years 6 months"
                  />
                </div>
              </div>

              {/* Custom Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Class Applying For *
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`${inputClasses} text-left flex items-center justify-between cursor-pointer`}
                  >
                    <span className={formData.classApplying ? 'text-foreground' : 'text-muted-foreground/60'}>
                      {formData.classApplying || 'Select a program'}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 
                                ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-card rounded-2xl shadow-hover 
                               border border-border/50 overflow-hidden z-50"
                    >
                      {classOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleSelectClass(option)}
                          className={`w-full text-left px-5 py-3.5 hover:bg-primary/10 transition-colors
                                    ${formData.classApplying === option ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className={inputClasses}
                  placeholder="Enter parent's name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className={inputClasses}
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={1000}
                  className={`${inputClasses} resize-none`}
                  placeholder="Any specific queries or requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 
                         disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground 
                                   rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
