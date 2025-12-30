import { motion } from "framer-motion";
import { Award, Star, Linkedin, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

const coaches = [
  {
    name: "David Martinez",
    role: "School PE Program Director",
    image: coach1,
    experience: "15+ years",
    specialization: "Curriculum Development & Teacher Training",
    certifications: ["Physical Education Expert", "Child Development Specialist"],
    achievements: ["Trained 500+ Teachers", "Implemented PE in 50+ Schools"],
    bio: "David specializes in developing comprehensive PE programs for schools and training teachers to deliver quality physical education that enhances student development.",
  },
  {
    name: "Sarah Thompson",
    role: "Child Development & Fitness Expert",
    image: coach2,
    experience: "12+ years",
    specialization: "Student Fitness & Academic Performance",
    certifications: ["Child Psychology", "Sports Science"],
    achievements: ["Improved Academic Performance", "Published Research on PE Benefits"],
    bio: "Sarah focuses on the connection between physical education and academic achievement, helping schools implement programs that boost both fitness and learning outcomes.",
  },
  {
    name: "James Anderson",
    role: "After-School Programs Coordinator",
    image: coach3,
    experience: "10+ years",
    specialization: "Multi-Sport Development",
    certifications: ["Youth Sports Coaching", "Program Management"],
    achievements: ["Launched 20+ After-School Programs", "Student Engagement Expert"],
    bio: "James designs and coordinates engaging after-school sports programs that extend learning beyond regular hours and promote holistic child development.",
  },
  {
    name: "Michael Roberts",
    role: "Teacher Training Specialist",
    image: coach1,
    experience: "18+ years",
    specialization: "Professional Development for Educators",
    certifications: ["Education Leadership", "PE Curriculum Design"],
    achievements: ["Certified 1000+ Teachers", "Curriculum Framework Developer"],
    bio: "Michael leads professional development programs that empower teachers with the skills and knowledge to deliver effective physical education in school settings.",
  },
  {
    name: "Emily Chen",
    role: "Swimming Coach",
    image: coach2,
    experience: "8+ years",
    specialization: "Competitive Swimming",
    certifications: ["ASCA Level 4", "Lifeguard Instructor"],
    achievements: ["National Champion", "Youth Olympics Medalist"],
    bio: "Emily's technical expertise and encouraging coaching style have helped swimmers of all levels achieve their personal bests.",
  },
  {
    name: "Robert Williams",
    role: "Athletics Coach",
    image: coach3,
    experience: "14+ years",
    specialization: "Track & Field",
    certifications: ["IAAF Level 2", "Biomechanics Expert"],
    achievements: ["Former Commonwealth Athlete", "Multiple Record Holder"],
    bio: "Robert's deep understanding of athletics biomechanics and his motivational coaching approach inspire athletes to push their limits.",
  },
];

const Coaches = () => {
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
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Meet Our Expert Coaches
            </h1>
            <p className="text-lg text-muted-foreground">
              Our world-class coaching team brings decades of professional experience 
              and a passion for developing the next generation of champions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Social Links (visible on hover) */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                    <a href="#" className="p-2 rounded-lg bg-background/20 backdrop-blur-sm text-background hover:bg-primary transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="p-2 rounded-lg bg-background/20 backdrop-blur-sm text-background hover:bg-primary transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{coach.name}</h3>
                      <p className="text-primary font-medium text-sm">{coach.role}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {coach.experience}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{coach.bio}</p>

                  {/* Specialization */}
                  <div className="mb-4">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Specialization</span>
                    <p className="text-foreground font-medium text-sm">{coach.specialization}</p>
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {coach.certifications.map((cert, j) => (
                      <span
                        key={j}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs"
                      >
                        <Award className="h-3 w-3" />
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Key Achievements</span>
                    <ul className="space-y-1">
                      {coach.achievements.map((achievement, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                          <Star className="h-3 w-3 text-accent fill-accent" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-muted">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-foreground rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
              Want to Join Our Coaching Team?
            </h2>
            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              We're always looking for passionate coaches who share our vision of 
              developing world-class athletes. Apply today!
            </p>
            <a
              href="mailto:careers@sportelite.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary-dark transition-colors"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Coaches;
