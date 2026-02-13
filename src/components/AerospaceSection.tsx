import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Zap, Shield, Cpu, Gauge, Globe } from "lucide-react";

const disciplines = [
  {
    icon: Wind,
    title: "Aerodynamics",
    short: "Study of air flow around aircraft",
    detail: "Aerodynamics is the branch of physics that deals with the motion of air and its interaction with solid bodies like aircraft wings. Engineers use computational fluid dynamics (CFD) to design wing profiles that maximize lift while minimizing drag, enabling fuel-efficient flight.",
    color: "text-aero-blue",
  },
  {
    icon: Zap,
    title: "Propulsion",
    short: "Engines that power flight",
    detail: "Propulsion systems generate the thrust needed to overcome drag. From turbofan engines in commercial jets to scramjets for hypersonic flight, propulsion engineering pushes the boundaries of speed and efficiency. Modern engines can produce over 100,000 pounds of thrust.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Structures",
    short: "Building airframes that last",
    detail: "Structural engineers design aircraft to withstand extreme forces — turbulence, pressure differentials, and temperature swings from -60°C at altitude to scorching runway surfaces. Advanced composites like carbon fiber now make up over 50% of modern aircraft bodies.",
    color: "text-secondary",
  },
  {
    icon: Cpu,
    title: "Avionics",
    short: "Electronic brain of the aircraft",
    detail: "Avionics encompasses all electronic systems aboard an aircraft: flight management computers, navigation systems, communication, radar, and autopilot. Modern fly-by-wire systems replace mechanical controls with electronic signals for more precise maneuvers.",
    color: "text-aero-purple",
  },
  {
    icon: Gauge,
    title: "Flight Mechanics",
    short: "Physics of aircraft motion",
    detail: "Flight mechanics studies stability, control, and performance of aircraft. Engineers analyze how aircraft respond to control inputs and disturbances, ensuring safe and predictable behavior across all flight conditions from takeoff to landing.",
    color: "text-aero-pink",
  },
  {
    icon: Globe,
    title: "Space Systems",
    short: "Beyond Earth's atmosphere",
    detail: "Aerospace extends beyond our atmosphere. Space systems engineering covers satellite design, orbital mechanics, launch vehicle engineering, and life support systems. From GPS satellites to Mars rovers, aerospace engineers push humanity's reach.",
    color: "text-aero-teal",
  },
];

const AerospaceSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="aerospace" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
            What is Aerospace Engineering?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A multidisciplinary field that designs, builds, and maintains aircraft, spacecraft, and related systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className="bg-gradient-card border-border hover:border-primary/40 transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <d.icon className={`h-8 w-8 ${d.color} group-hover:scale-110 transition-transform`} />
                    <CardTitle className="font-display text-lg">{d.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-2">{d.short}</p>
                  {expanded === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-foreground/80 mt-3 border-t border-border pt-3"
                    >
                      {d.detail}
                    </motion.p>
                  )}
                  <button className="text-xs text-primary mt-2 hover:underline">
                    {expanded === i ? "Show Less" : "Learn More →"}
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AerospaceSection;
