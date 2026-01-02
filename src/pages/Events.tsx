import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const upcomingEvents = [
  {
    title: "School PE Teachers Workshop",
    date: "January 15-20, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Sports Educate Training Center",
    category: "Professional Development",
    image: gallery1,
    description: "Comprehensive workshop for school teachers on implementing effective PE programs",
    spots: "50 Teachers",
  },
  {
    title: "Inter-School Sports Championship",
    date: "February 1-14, 2025",
    time: "8:00 AM - 6:00 PM",
    location: "Various School Venues",
    category: "Tournament",
    image: gallery2,
    description: "Annual championship bringing together schools from across the region for friendly competition",
    spots: "100 Schools",
  },
  {
    title: "Student Fitness Assessment Camp",
    date: "February 28, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Partner Schools",
    category: "Health & Wellness",
    image: gallery3,
    description: "Comprehensive fitness assessment program for students to track physical development",
    spots: "500 Students",
  },
  {
    title: "Physical Education Curriculum Summit",
    date: "March 10-12, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Education Convention Center",
    category: "Conference",
    image: gallery4,
    description: "Summit for education leaders to discuss the future of physical education in schools",
    spots: "200 Delegates",
  },
];

const pastEvents = [
  { title: "Youth Athletics Meet", date: "November 2024", participants: 200 },
  { title: "Swimming Gala", date: "October 2024", participants: 120 },
  { title: "Tennis Open", date: "September 2024", participants: 64 },
  { title: "Football Skills Camp", date: "August 2024", participants: 80 },
];

const Events = () => {
  return (
    <Layout>
      {/* Coming Soon Section - VISIBLE */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-muted to-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Blur Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
            </div>
            
            {/* Coming Soon Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Calendar className="h-12 w-12 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6"
              >
                Coming
                <span className="text-primary block">Soon</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8"
              >
                We're preparing amazing events for you!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-center gap-2 text-muted-foreground"
              >
                <Clock className="h-5 w-5" />
                <span>Events launching soon...</span>
              </motion.div>

              {/* Animated Dots */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex justify-center gap-2 mt-12"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className="w-3 h-3 rounded-full bg-primary"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Original Event Content - HIDDEN */}
      <div className="hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Events & Tournaments
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Upcoming Events
              </h1>
              <p className="text-lg text-muted-foreground">
                Join our tournaments, camps, and special events. Experience the thrill 
                of competition and connect with fellow athletes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="section-padding">
          <div className="container-wide">
            <SectionHeader
              badge="Coming Up"
              title="Don't Miss These Events"
              subtitle="Register early to secure your spot"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
                >
                  {/* Image */}
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      {event.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{event.description}</p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4 flex-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        {event.spots}
                      </div>
                    </div>

                    <Button variant="default" className="w-full mt-auto" asChild>
                      <Link to="/contact">
                        Register Now <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Calendar Teaser */}
        <section className="py-16 bg-primary">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter and never miss an event, tournament, or 
                special training opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                />
                <Button variant="accent" size="lg">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Past Events */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <SectionHeader
              badge="Past Events"
              title="Event Highlights"
              subtitle="Some of our recent successful events"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastEvents.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                  <p className="text-primary font-semibold">{event.participants} Participants</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;
