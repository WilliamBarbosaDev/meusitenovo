import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 bg-white overflow-hidden">
      {/* Subtle background gradient/blur for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.1]"
          >
            Sites Profissionais, <br className="hidden md:block" />
            Landing Pages e <br className="hidden md:block" />
            <span className="text-gray-400">Design que Vendem</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Transformo sua visão em experiências digitais minimalistas e de alto impacto. 
            Design estratégico focado em conversão e elegância.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0, 255, 0, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-base font-medium shadow-lg shadow-black/10 flex items-center justify-center gap-2 hover:bg-[#0a0a0a] hover:text-[#00FF00] transition-colors border border-transparent hover:border-[#00FF00]/20"
            >
              Iniciar Projeto <ArrowRight size={18} />
            </motion.a>
            
            <motion.a
              href="#portfolio"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#f5f5f7",
                boxShadow: "0 0 20px rgba(0, 255, 0, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full sm:w-auto bg-white text-black border border-gray-200 px-8 py-4 rounded-full text-base font-medium hover:border-[#00FF00]/30 transition-all"
            >
              Ver Portfólio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
