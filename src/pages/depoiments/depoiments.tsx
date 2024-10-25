import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import depo1 from "@/assets/depo.png";
import depo2 from "@/assets/depo2.png";
import depo3 from "@/assets/depo3.png";
import depo4 from "@/assets/depo4.png";

export function Depoiments() {
  // Animação para as imagens
  const imageVariants = {
    hidden: { opacity: 0, y: 20 }, // Estado inicial
    visible: { opacity: 1, y: 0 }, // Estado final
  };

  return (
    <div className="flex flex-col w-full justify-center items-center text-center gap-8">
      <div>
        <Button className="bg-[#334139] hover:bg-[#334122] font-bold text-white border-none text-lg rounded-full shadow-md transition-shadow hover:shadow-lg">
          Depoimentos
        </Button>
      </div>

      <div className="flex gap-4 mx-auto max-w-7xl w-full">
        <motion.h1
          className="md:text-7xl mx-auto font-bold text-white text-2xl text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Veja o depoimento dos
          <div className="mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 inline">
              nossos clientes
            </span>
          </div>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-7xl md:w-full w-[95%]">
        { [depo1, depo2, depo3, depo4].map((depo, index) => (
          <motion.img
            key={index}
            src={depo}
            alt={`Depoimento ${index + 1}`}
            className="w-full h-auto rounded-lg"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Delay para sequencialmente
          />
        ))}
      </div>
    </div>
  );
}
