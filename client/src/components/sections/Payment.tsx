import { motion } from "framer-motion";
import { CreditCard, QrCode, Wallet, XCircle } from "lucide-react";
import { reveal, staggerContainer } from "@/lib/animations";

export default function Payment() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="text-2xl font-bold text-black mb-12"
        >
          Formas de Pagamento
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
              <QrCode size={24} />
            </div>
            <span className="font-medium text-gray-900">PIX</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
              <CreditCard size={24} />
            </div>
            <span className="font-medium text-gray-900">Crédito até 3x</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
              <Wallet size={24} />
            </div>
            <span className="font-medium text-gray-900">Débito</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="flex flex-col items-center gap-3 opacity-40 grayscale"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <XCircle size={24} />
            </div>
            <span className="font-medium text-gray-500">Boleto</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
