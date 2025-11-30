import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { reveal } from "@/lib/animations";

const benefits = [
  "Layouts 100% personalizados",
  "Estratégia focada em conversão",
  "Atendimento próximo e humano",
  "Entregas rápidas e pontuais",
  "Experiência de mercado real",
  "Código limpo e otimizado"
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Liquid Background Effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            x: ["-10%", "10%", "-10%"],
            y: ["-10%", "10%", "-10%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.15),_transparent_50%)] blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Por que escolher meu trabalho?
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Não entrego apenas "telas bonitas". Entrego ferramentas de negócio projetadas para crescer sua marca e aumentar seu faturamento.
            </p>
          </motion.div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  <CheckCircle2 className="text-[#00FF00] shrink-0" size={20} />
                  <span className="text-sm md:text-base font-medium tracking-wide">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
