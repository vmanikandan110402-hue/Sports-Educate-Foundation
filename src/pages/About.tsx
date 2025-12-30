import { motion } from "framer-motion";
import { Target, Heart, Users, Award, Clock, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import heroImage from "@/assets/hero-sports.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const About = () => {
  const values = [
    { icon: Target, title: "Discipline", desc: "Building mental toughness and commitment in every athlete" },
    { icon: Heart, title: "Passion", desc: "Fueling the love for sports and continuous improvement" },
    { icon: Users, title: "Teamwork", desc: "Fostering collaboration and mutual support among athletes" },
    { icon: Award, title: "Excellence", desc: "Striving for the highest standards in everything we do" },
  ];

  const timeline = [
    { year: "2009", title: "Foundation", desc: "SportElite Academy was established with a vision to create world-class athletes" },
    { year: "2012", title: "First Championship", desc: "Our athletes won their first national championship, marking our arrival" },
    { year: "2016", title: "Facility Expansion", desc: "Opened state-of-the-art training facilities across multiple locations" },
    { year: "2020", title: "International Recognition", desc: "Partnered with international sports organizations and expanded globally" },
    { year: "2024", title: "5000+ Champions", desc: "Celebrating over 5000 athletes trained and multiple championships won" },
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
                Shaping Champions Since 2009
              </h1>
              <p className="text-lg text-background/70 mb-6">
                At SportElite Academy, we believe every athlete has the potential to achieve greatness. 
                Our mission is to unlock that potential through world-class coaching, cutting-edge 
                training methods, and an unwavering commitment to excellence.
              </p>
              <p className="text-background/70">
                Founded by former professional athletes and sports scientists, we've dedicated over 
                15 years to developing champions across multiple sports disciplines.
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
                <div className="text-4xl font-bold text-primary-foreground">15+</div>
                <div className="text-primary-foreground/80 text-sm">Years of Excellence</div>
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
                To empower athletes of all ages and skill levels to reach their full potential 
                through innovative training programs, expert coaching, and a supportive community 
                that celebrates dedication, discipline, and achievement.
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
                To become the world's most respected sports academy, known for producing 
                not just exceptional athletes, but well-rounded individuals who embody 
                the values of sportsmanship, integrity, and lifelong commitment to excellence.
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
              <SectionHeader
                badge="Our Approach"
                title="Coach-Driven Excellence"
                subtitle=""
                centered={false}
              />
              <p className="text-muted-foreground mb-6">
                Our philosophy centers on the coach-athlete relationship. We believe that every 
                champion is built through personalized attention, consistent guidance, and a 
                deep understanding of each athlete's unique strengths and areas for growth.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized training plans for every athlete",
                  "Regular performance assessments and feedback",
                  "Mental conditioning and sports psychology",
                  "Nutrition guidance and recovery protocols",
                  "Video analysis and technique refinement",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
