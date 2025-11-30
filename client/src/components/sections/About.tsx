import { motion } from "framer-motion";
import { reveal } from "@/lib/animations";
import profileImage from "@assets/freepik__the-style-is-candid-image-photography-with-natural__24972 1_1764253961922.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
          className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto"
        >
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 relative shadow-xl group hover:shadow-[0_0_30px_rgba(0,255,0,0.15)] transition-shadow duration-500">
              <img
                src={profileImage}
                alt="William B"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700 filter grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 border-2 border-transparent group-hover:border-[#00FF00]/20 rounded-2xl pointer-events-none" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white p-4 rounded-xl shadow-lg hidden md:flex items-center justify-center">
              <span className="text-4xl">👋</span>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
              Quem Sou
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Design com propósito e estratégia.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
              Olá, sou William. Mais do que designer, sou um estrategista digital focado em resultados. Minha missão é transformar visitantes em clientes através de interfaces inteligentes e funcionais.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              Especialista em Landing Pages de alta conversão, Sites Institucionais e Páginas de Vendas, integro Design Estratégico e Automações com Inteligência Artificial para alavancar o crescimento da sua empresa na internet.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-black mb-1">5+</h3>
                <p className="text-sm text-gray-500">Anos de Experiência</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-black mb-1">100+</h3>
                <p className="text-sm text-gray-500">Projetos Entregues</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
