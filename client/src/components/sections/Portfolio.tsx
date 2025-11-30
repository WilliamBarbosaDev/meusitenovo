import { motion } from "framer-motion";
import { reveal, staggerContainer } from "@/lib/animations";

// Project Images
import verJuris from "@assets/Design sem nome (4) 1_1764253540069.png";
import casi from "@assets/Design sem nome (5) 1_1764253540071.png";
import verGroup from "@assets/Design sem nome (6) 1_1764253540072.png";
import marmitas from "@assets/Design sem nome (7) 1_1764253540073.png";
import aiCourse from "@assets/Gemini_Generated_Image_3v679w3v679w3v67 1_1764253540076.png";
import aiCourseDark from "@assets/Gemini_Generated_Image_lvr5owlvr5owlvr5 1_1764253540077.png";

const portfolioItems = [
  { image: verJuris, title: "VerJuris Advocacia", category: "Site Institucional" },
  { image: casi, title: "CASI Imobiliária", category: "Site Corporativo" },
  { image: verGroup, title: "VerGroup Contabilidade", category: "Landing Page" },
  { image: marmitas, title: "Marmitas Fit da Lili", category: "E-commerce / Delivery" },
  { image: aiCourse, title: "Curso IA na Prática", category: "Página de Vendas" },
  { image: aiCourseDark, title: "Curso IA (Dark Mode)", category: "Página de Vendas" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-3 block">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Trabalhos Recentes
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] mb-5 relative shadow-sm transition-shadow duration-300 group-hover:shadow-[0_0_25px_rgba(0,255,0,0.15)]">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 border-2 border-transparent group-hover:border-[#00FF00]/20 rounded-xl" />
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block group-hover:text-[#00FF00] transition-colors">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-black group-hover:text-black/80 transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a href="https://www.behance.net/williambarbosawb" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-black border-b border-black pb-1 hover:opacity-70 transition-opacity">
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
}
