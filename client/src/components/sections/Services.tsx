import { motion } from "framer-motion";
import { reveal, staggerContainer } from "@/lib/animations";
import { 
  Layout, 
  Monitor, 
  ShoppingCart, 
  Smartphone, 
  PenTool, 
  Layers, 
  FileImage, 
  Settings, 
  Server 
} from "lucide-react";

const services = [
  { icon: Monitor, title: "Site Institucional", desc: "Presença digital sólida para sua empresa." },
  { icon: Layout, title: "Landing Page", desc: "Páginas focadas em alta conversão." },
  { icon: ShoppingCart, title: "Página de Vendas", desc: "Design estratégico para vender infoprodutos." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Lojas virtuais limpas e eficientes." },
  { icon: Smartphone, title: "Social Media", desc: "Design para redes sociais que engajam." },
  { icon: PenTool, title: "Artes Avulsas", desc: "Criação pontual para necessidades específicas." },
  { icon: FileImage, title: "Encartes", desc: "Material gráfico digital e impresso." },
  { icon: Settings, title: "Manutenção", desc: "Atualizações e suporte técnico contínuo." },
  { icon: Server, title: "Hospedagem", desc: "Configuração de servidores rápidos e seguros." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-3 block">
            O que eu faço
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Soluções Completas de Design
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.01,
                boxShadow: "0 10px 30px -10px rgba(0, 255, 0, 0.15)"
              }}
              className="p-8 rounded-2xl border border-gray-100 hover:border-[#00FF00]/30 transition-all bg-white group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-[#00FF00] transition-colors duration-300 group-hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
