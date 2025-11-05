import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  const services = [
    {
      title: "Managed Freelancing Services",
      description: "Verified freelancers for web, design, AI, software, and creative projects.",
    },
    {
      title: "Escrow Payment Management",
      description: "Secure client payments released only after project completion.",
    },
    {
      title: "Project Quality Oversight",
      description: "Monitoring milestones, deliverables, and deadlines to ensure success.",
    },
    {
      title: "Platform Fee & Commission Management",
      description: "Transparent and automatic fee deduction.",
    },
  ];

  return (
    <div className="overflow-x-hidden min-h-screen bg-white text-black flex flex-col items-center justify-between font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 w-full bg-black text-white overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-white rounded-full opacity-5 -top-24 -left-24"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-white rounded-full opacity-5 bottom-0 -right-20"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -45, 0] }}
          transition={{ repeat: Infinity, duration: 15 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-extrabold mb-6 tracking-tight z-10"
        >
          WorkBridg
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl mb-8 max-w-2xl opacity-90 z-10"
        >
          Where talent meets trust.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="z-10"
        >
          <Button 
            onClick={onOpenWaitlist} 
            className="rounded-2xl px-8 py-4 text-lg bg-white text-black font-semibold hover:bg-gray-200 transition cursor-pointer shadow-lg hover:shadow-xl"
          >
            Join the Waitlist
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 mx-auto w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6 mx-auto text-center bg-gray-50 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          How We Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Smart Matchmaking",
              desc: "We make sure the right freelancer finds the right project — no endless searching, just quick and smart connections.",
            },
            {
              title: "Transparent Process",
              desc: "What you see is what you get. No hidden charges, no messy steps — just clear communication all the way.",
            },
            {
              title: "Secure & Fair",
              desc: "Payments, deadlines, and deliverables are protected. Both clients and freelancers get the security they need to work stress-free.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="opacity-80">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 max-w-4xl text-center bg-white rounded-3xl mx-4 my-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg leading-relaxed opacity-90"
        >
          WorkBridg isn't just a marketplace — it's a trusted space where projects run smoothly and connections feel genuine. 
          We take care of the heavy lifting like matching, payments, and project management, so clients and freelancers can 
          focus only on great work.
        </motion.p>
      </section>
    </div>
  );
}
