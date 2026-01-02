import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, ArrowRight, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import subprogram1 from "@/assets/subprogram1.png";
import subprogram2 from "@/assets/subprogram2.png";
import subprogram3 from "@/assets/subprogram3.png";
import subprogram4 from "@/assets/subprogram4.png";
import program2 from "@/assets/program2.png";
import subprogram5 from "@/assets/subprogram5.png";

const physicalEducationPrograms = [
  {
    name: "Movement Mastery Program",
    ageGroup: "KG - Class 2",
    description: "The Sports Educate Physical Education Program for grades Kindergarten-Class 2 offers instruction and practice in a realistic number of diverse skills and activities appropriate for kindergarten through second-grade children. The curriculum is designed to introduce standard-based, developmentally appropriate activities without overwhelming students and to encourage maximum participation during class time. Active participation and practice in a positive, non-threatening atmosphere are the means for improving children's physical skills, fitness, social skills, and personal enjoyment.",
    features: ["Body and spatial awareness", "Locomotor and non-locomotor skills", "Pathways, levels and tempo", "Balance and manipulation", "Flexibility and strength"],
    image: subprogram1,
  },
  {
    name: "Sports Starters Program",
    ageGroup: "Class 3 - 5",
    description: "A Sports Starters Program is designed to introduce kids to various sports, promoting physical activity, teamwork, and skill development. These programs typically cater to young kids (Class 3 - Class 5) and focus on fun, engagement, and foundational skills.",
    features: ["Multi-sport exposure", "Team building activities", "Foundational skill development", "Fun and engaging approach"],
    image: subprogram2,
  },
  {
    name: "Ignite Sports Development Program",
    ageGroup: "Class 6 - 8",
    description: "Ignite Sports Development Program is a high-energy initiative focusing on intensive training with expert coaching in specific sports, skill enhancement for improving techniques and performance, fitness and conditioning for building strength, speed, and agility, and competitive exposure through matches, tournaments, and events.",
    features: ["Intensive training", "Expert coaching", "Fitness and conditioning", "Competitive exposure"],
    image: subprogram3,
  },
  {
    name: "Peak Performance Program",
    ageGroup: "Class 9 - 12",
    description: "Peak Sports Performance Program is a high-performance initiative focusing on advanced training with expert coaching for elite athletes, customized plans for tailored fitness and skill development, mental preparation techniques for focus and pressure handling, nutrition and recovery for optimizing performance, and competition readiness for preparing top-level events.",
    features: ["Advanced training", "Customized plans", "Mental preparation", "Nutrition and recovery", "Competition readiness"],
    image: subprogram4,
  },
];

const sportsPrograms = [
  {
    name: "Sports Program",
    ageGroup: "All Age Groups",
    description: "Sports Educate Foundation Sports program covers all sports starting from Football, Cricket, Tennis, Baseball, Basketball, Rugby, Frisbee, Volleyball etc. The program is developed specifically to impart coaching across multiple age groups. Sports Educate provide coaching from basic to intermediate and advance level.",
    features: ["Multi-sport coverage", "All age groups", "Basic to advanced coaching", "Professional training"],
    image: program2,
  },
  {
    name: "After School Coaching Program",
    ageGroup: "KG - Middle School",
    description: "The Sports Educate Foundation After-School Sports programs in elementary and middle schools help children stay active, learn a variety of sports, and understand teamwork and personal responsibility. Our programs range from introductory sports for kindergartners to varsity teams in middle schools. We offer a wide variety of sports and enrichment activities for every age group. With our After-School programs, parents and schools can be confident that children are learning and playing in a safe and supportive environment.",
    features: ["Safe environment", "Teamwork development", "Personal responsibility", "Age-appropriate activities", "Wide variety of sports"],
    image: subprogram5,
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
              Comprehensive Sports Education
            </h1>
            <p className="text-lg text-muted-foreground">
              Structured programs designed to nurture physical development and sports excellence 
              from kindergarten through high school.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Physical Education Program */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeader
            badge="Program 1"
            title="Physical Education Program"
            subtitle="Age-appropriate curriculum for holistic development"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {physicalEducationPrograms.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    {program.ageGroup}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{program.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
                    <Users className="h-4 w-4" />
                    {program.ageGroup}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 text-justify">{program.description}</p>

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
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Program */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Program 2"
            title="Sports Program"
            subtitle="Competitive training and event management"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sportsPrograms.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    {program.ageGroup}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{program.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
                    <Users className="h-4 w-4" />
                    {program.ageGroup}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 text-justify">{program.description}</p>

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
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
              Find the Right Program for Your School
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Contact us to learn more about our programs and how we can help implement 
              quality physical education and sports training in your institution.
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
