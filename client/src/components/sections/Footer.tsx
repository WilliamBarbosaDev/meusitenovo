import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logoWhite from "@assets/Group 36_1764253540078.png";
import { reveal } from "@/lib/animations";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">

        {/* CTA Section inside Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-20 mb-20 gap-10"
        >
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Pronto para elevar <br />
              sua presença digital?
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Vamos criar algo extraordinário juntos.
            </p>
          </div>
          <motion.a
            href="mailto:contato@williamdesign.com"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(0, 255, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00FF00] text-black px-10 py-5 rounded-full text-lg font-bold flex items-center gap-3 hover:bg-[#32CD32] transition-colors shadow-[0_0_15px_rgba(0,255,0,0.2)]"
          >
            Iniciar Projeto <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20"
        >
          <div className="col-span-1 md:col-span-2">
            <img src={logoWhite} alt="William B Designer" className="w-48 mb-6" />
            <p className="text-gray-400 font-light max-w-sm">
              Design minimalista e estratégico para marcas que desejam se destacar no mercado digital com elegância e eficiência.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Menu</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Quem Sou</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Social</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="https://www.instagram.com/owilliambarboza" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/william-barbosa-dev/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://www.behance.net/williambarbosawb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Behance</a></li>
              <li><a href="https://wa.me/5592982824592?text=Ol%C3%A1%2C%20vim%20do%20site%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500 font-light">
          <p>&copy; 2024 William B Designer. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
