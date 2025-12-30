import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const programs = [
  {
    name: "School PE Programs",
    image: gallery1,
    ageGroup: "5-18 years",
    level: "All Levels",
    duration: "Academic Year",
    description: "Comprehensive physical education programs designed for schools to enhance student fitness and overall development",
    features: ["Curriculum integration", "Teacher training", "Assessment tools", "Progress tracking"],
  },
  {
    name: "After-School Sports",
    image: gallery2,
    ageGroup: "6-18 years",
    level: "All Levels",
    duration: "Flexible",
    description: "Engaging after-school sports programs that extend learning beyond regular hours",
    features: ["Multi-sport exposure", "Skill development", "Team building", "Character education"],
  },
  {
    name: "Fitness & Strength",
    image: gallery3,
    ageGroup: "16+ years",
    level: "Beginner to Advanced",
    duration: "Flexible",
    description: "Build strength, endurance, and overall fitness with personalized programs",
    features: ["Strength training", "Cardio conditioning", "Nutrition planning", "Recovery protocols"],
  },
  {
    name: "Teacher Training",
    image: gallery4,
    ageGroup: "Educators",
    level: "Professional Development",
    duration: "Workshop Based",
    description: "Professional development programs for school teachers to deliver quality PE education",
    features: ["PE methodology", "Assessment techniques", "Safety protocols", "Inclusive teaching"],
  },
  {
    name: "Swimming Program",
    image: gallery2,
    ageGroup: "4-16 years",
    level: "All Levels",
    duration: "6 months",
    description: "Learn to swim or improve your technique with certified instructors",
    features: ["Stroke techniques", "Water safety", "Competitive training", "Endurance building"],
  },
  {
    name: "Athletics & Track",
    image: gallery1,
    ageGroup: "10-21 years",
    level: "Intermediate to Pro",
    duration: "12 months",
    description: "Sprint, jump, and throw your way to athletic excellence",
    features: ["Sprint training", "Long-distance", "Field events", "Competition prep"],
  },
];

const Programs = () => {
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
              Our Programs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Find Your Perfect Training Program
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether you're a beginner looking to learn the basics or a pro athlete seeking 
              to elevate your game, we have a program designed just for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    {program.level}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{program.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{program.description}</p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      {program.ageGroup}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {program.duration}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.features.map((feature, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group/btn" asChild>
                    <Link to="/contact">
                      Enroll Now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Not Sure Which Program to Choose?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Book a free consultation with our experts. We'll assess your goals and 
              recommend the perfect program for you.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Get Free Consultation <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
