import { motion } from "framer-motion";
import { Target, Heart, Users, Award, Clock, CheckCircle, BookOpen, GraduationCap, Handshake } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import heroImage from "@/assets/hero-sports.jpg";
import coach1 from "@/assets/pt1.png";
import coach2 from "@/assets/pt2.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const About = () => {
  const values = [
    { icon: BookOpen, title: "Child Development", desc: "Focusing on holistic growth through age-appropriate physical education" },
    { icon: GraduationCap, title: "Quality Education", desc: "Delivering best-in-class PE programs that enhance student learning and fitness" },
    { icon: Handshake, title: "School Partnership", desc: "Collaborating with schools to implement comprehensive sports education" },
    { icon: Award, title: "Excellence", desc: "Maintaining high standards in curriculum, training, and program delivery" },
  ];

  const timeline = [
    { year: "2026", title: "Foundation", desc: "Sports Educate Foundation established with a vision to revolutionize physical education in schools" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
                Sports Educate Foundation
              </h1>
              <p className="text-lg text-background/70 mb-6 text-justify">
                Sports Educate Foundation collaborates with schools to implement best-in-class physical education and sports programs. These programs significantly enhance children's fitness levels and contribute greatly to their overall development, including personal, physical, and social skills.
              </p>
              <p className="text-background/70 text-justify">
                The benefits extend beyond physical health, helping children boost their concentration, commitment, and self-esteem, which leads to higher attendance, positive behaviour, and academic attainment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="SportElite Academy training"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl">
                <div className="text-4xl font-bold text-primary-foreground">Founded 2026</div>
                <div className="text-primary-foreground/80 text-sm">Revolutionizing Physical Education</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Our Mission</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                We strive to improve the health of children and adolescents by disseminating evidence-based physical activity and sports programs. Our initiatives provide comprehensive curriculum, Certified sports educator , Age Appropriate Equipments and follow-up support,  from preschool to grade 12. We believe in fostering a positive working environment that values professional growth, upward mobility, and opportunities for individuals to work towards common goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-muted rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sports educate foundation  Aim to be India’s Admirable Physical Education and Sports Organization. Sports educate is dedicated to creating, implementing, and evaluating research-based programs that promote lifelong wellness. Sports educate is committed to outstanding customer satisfaction through timely delivery and exceptional service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeader
            badge="Our Values"
            title="What We Stand For"
            subtitle="The core principles that guide everything we do at SportElite Academy"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-6">Our Philosophy</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sports Educate Foundation collaborates with schools to implement best-in-class physical education and sports programs. These programs significantly enhance children's fitness levels and contribute greatly to their overall development, including personal, physical, and social skills.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The benefits extend beyond physical health, helping children boost their concentration, commitment, and self-esteem, which leads to higher attendance, positive behaviour, and academic attainment.
              </p>
              <div className="space-y-4">
                {[
                  "Holistic development through sports",
                  "Enhanced academic performance",
                  "Improved social skills and teamwork",
                  "Lifelong health and wellness habits"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={coach1} alt="Coach" className="rounded-2xl h-64 w-full object-cover" />
              <img src={coach2} alt="Trainer" className="rounded-2xl h-64 w-full object-cover mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-foreground">
        <div className="container-wide">
          <SectionHeader
            badge="Our Journey"
            title="The Road to Excellence"
            subtitle="Key milestones in our journey of creating champions"
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <h3 className="text-xl font-semibold text-background mt-1">{item.title}</h3>
                    <p className="text-background/60 mt-2">{item.desc}</p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
