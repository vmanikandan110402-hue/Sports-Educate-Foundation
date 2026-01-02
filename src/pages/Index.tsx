import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Trophy, Target, Users, Dumbbell, Medal, Calendar, 
  ArrowRight, Star, CheckCircle, Play, BookOpen, Shield, FileText, Truck
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroImage from "@/assets/hero-sports.jpg";
import gallery1 from "@/assets/program1.png";
import gallery2 from "@/assets/gallery-2.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import found1 from "@/assets/found1.png";
import found2 from "@/assets/found2.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Athletes training at SportElite Academy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
    </div>

    {/* Content */}
    <div className="relative z-10 container-wide pt-32 pb-20">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">
            <Trophy className="h-4 w-4" />
            Sports Educate Foundation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight mb-6"
        >
          Empowering Schools,{" "}
          <span className="text-primary">Building</span>{" "}
          Champions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base md:text-lg text-background/70 mb-8 max-w-2xl text-justify"
        >
          Sports Educate Foundation aims to be India's Admirable Physical Education and Sports Organization. 
          Sports Educate is dedicated to creating, implementing, and evaluating research-based programs that 
          promote lifelong wellness. Sports Educate is committed to outstanding customer satisfaction through 
          timely delivery and exceptional service.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-background/70 mb-8 max-w-2xl text-justify"
        >
          Sports Educate Foundation collaborates with schools to implement best-in-class physical education programs that enhance children's fitness, academic performance, and overall development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-col-reverse gap-4 sm:flex-row sm:gap-4"
        >
          <Button variant="hero" asChild>
            <Link to="/programs">
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="hero-outline" className="gap-2">
            <Play className="h-5 w-5" /> Watch Video
          </Button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg hidden"
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "5K+", label: "Athletes Trained" },
            { value: "50+", label: "Championships" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-background/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 rounded-full border-2 border-background/30 flex justify-center pt-2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-background"
        />
      </div>
    </motion.div>
  </section>
);

// Highlights Section
const HighlightsSection = () => {
  const highlights = [
    { icon: BookOpen, title: "Age appropriate Sports & Physical education Curriculum", desc: "Comprehensive curriculum designed for different age groups and skill levels" },
    { icon: Dumbbell, title: "Age Appropriate Equipments & Props", desc: "Safe and suitable equipment specifically designed for children's physical development" },
    { icon: Shield, title: "Certified and well Trained Sports educator", desc: "Professional educators with proper certification and extensive training experience" },
    { icon: Calendar, title: "School sports Events support", desc: "Complete support for organizing and managing school sports events and competitions" },
    { icon: FileText, title: "Periodical Reports", desc: "Regular progress reports tracking student development and performance metrics" },
    { icon: Truck, title: "Delivery and Quality checking", desc: "Ensuring high-quality delivery and regular quality assurance checks" },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <SectionHeader
          badge="Our Services"
          title="What We Offer"
          subtitle="Comprehensive sports education solutions for schools"
        />
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Programs Preview Section
const ProgramsSection = () => {
  const programs = [
    { name: "Physical Education Program", level: "KG - Class 12", image: gallery1, color: "from-green-500" },
    { name: "Sports Program", level: "All Age Groups", image: gallery2, color: "from-orange-500" },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeader
          badge="Our Programs"
          title="Comprehensive Sports Education"
          subtitle="Age-appropriate physical education and sports programs for schools from KG through Class 12"
        />

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {programs.map((program, i) => (
            <Link key={i} to="/programs">
              <motion.div
                variants={fadeInUp}
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color}/60 to-transparent opacity-80`} />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-sm text-background/70 font-medium">{program.level}</span>
                  <h3 className="text-2xl font-bold text-background mt-1">{program.name}</h3>
                  <div className="mt-4 flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/programs">
              View All Programs <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const reasons = [
    "Replaces traditional school PT with engaging, activity-based sports programs",
    "Sparks early interest and enthusiasm for physical education and sports",
    "98% of children identify “FUN” as the key factor in Sports Educate programs",
    "Engages every child through high-quality physical education, improving overall fitness",
    "Builds strong fundamentals through age-appropriate sports activities",
    "Integrates fun, inclusive, and comprehensive physical education into school curriculums",
    "Shapes healthy, active, confident, and successful students for the future",
  ];

  return (
    <section className="section-padding bg-primary">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-background/20 text-background text-sm font-semibold mb-4">
              Why choose us?
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
              Making Physical Education Fun, Effective, and Impactful
            </h1>
            <p className="text-xl text-background/80 mb-8 max-w-2xl text-justify">
              Sports Educate bridges the gap in traditional physical education by introducing fun-filled, structured physical activities at an early age, nurturing lifelong interest in sports and fitness among children.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-background"
                >
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-justify">{reason}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="accent" size="lg" className="mt-8" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src={found1}
                alt="Expert coach"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <img
                src={found2}
                alt="Professional trainer"
                className="w-full h-64 object-cover rounded-2xl mt-8"
              />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { value: 50, suffix: "+", label: "Schools Partnered" },
    { value: 5000, suffix: "+", label: "Students Impacted" },
    { value: 100, suffix: "%", label: "Program Satisfaction" },
    { value: 25, suffix: "+", label: "Certified Educators" },
  ];

  return (
    <section className="py-20 bg-foreground hidden">
      <div className="container-wide">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-background/60 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Sports Educate Foundation's PE programs have significantly improved our students' physical fitness and overall development. The curriculum is well-structured and age-appropriate.",
      author: "Principal Kumar",
      role: "School Principal",
      image: coach1,
      initials: "PK",
    },
    {
      quote: "The professional development and support provided by Sports Educate has helped our teachers deliver quality physical education effectively.",
      author: "Mrs. Lakshmi",
      role: "Physical Education Teacher",
      image: coach2,
      initials: "ML",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeader
          badge="Testimonials"
          title="What Our Partners Say"
          subtitle="Hear from schools and educators who work with us"
        />

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-muted rounded-2xl p-8 md:p-10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-background rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-background rounded-full translate-x-1/3 translate-y-1/3" />
    </div>

    <div className="container-wide relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-background/80 mb-10">
          Join thousands of athletes who have transformed their performance with SportElite. 
          Your championship journey begins today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="accent" size="xl" asChild>
            <Link to="/contact">
              Enroll Now <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/programs">Explore Programs</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <ProgramsSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
