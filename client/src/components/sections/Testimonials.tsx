import { motion } from "framer-motion";
import { reveal, staggerContainer } from "@/lib/animations";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "O William transformou completamente a nossa presença digital. O site ficou incrível e super rápido.",
    author: "Ana Silva",
    role: "CEO, Startup Tech"
  },
  {
    text: "Design limpo, elegante e funcional. Exatamente o que eu precisava para minha marca pessoal.",
    author: "Carlos Mendes",
    role: "Advogado"
  },
  {
    text: "Profissionalismo ímpar. A entrega foi antes do prazo e o resultado superou as expectativas.",
    author: "Mariana Costa",
    role: "Arquiteta"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            O que dizem meus clientes
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
              }}
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm relative"
            >
              <Quote className="absolute top-8 right-8 text-gray-100" size={40} />
              <p className="text-gray-600 text-lg leading-relaxed font-light italic mb-8 relative z-10">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-bold text-black">{item.author}</h4>
                <span className="text-sm text-gray-400">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
