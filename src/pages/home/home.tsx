import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import cellMockup from "@/assets/cell.png"; 
import { Services } from "../services/services";
import { Depoiments } from "../depoiments/depoiments";
import { Contact } from "../contact/contact";
import { ChevronUp } from 'lucide-react'; // Importe o ícone de seta para cima

export function Home() {
  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home" className="flex flex-col w-full justify-center items-center mt-16">
      <div className="flex flex-col gap-4 max-w-7xl mx-auto items-center">
        <motion.h1
          className="flex flex-col md:text-7xl text-2xl text-center text-white font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Energize seu potencial digital, 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Lithium!
          </span>
        </motion.h1>
        
        <motion.p
          className="text-[#D8D8D8] md:text-xl text-sm w-[95%] mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nos movemos de corpo e alma para solucionar necessidades digitais
          para você ou seu negócio.
        </motion.p>

        <div>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <Button className="bg-gradient-to-r from-[#181818] to-[#6E00D2] text-white hover:opacity-90 md:text-lg rounded-full shadow-md transition-shadow hover:shadow-lg">
              Vamos Conversar?
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0], 
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            delay: 0.3,
            repeat: Infinity,
            repeatType: "mirror", 
          }}
        >
          <img src={cellMockup} alt="Mockup do celular" className="w-[640px] md:w-[520px]" />
        </motion.div>
      </div>

      <div className="flex flex-col mt-24 md:mb-24">
        <Services />
      </div>

      <div className="mb-24 flex flex-col">
        <Depoiments />
      </div>

      <div className="mb-8 md:mb-24 flex flex-col">
        <Contact />
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-[#9949FF] text-white rounded-full p-4 shadow-lg hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center w-16 h-16" // Defina o tamanho do botão
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp className="w-8 h-8" /> {/* Seta para cima do Lucide */}
      </motion.button>
    </div>
  );
}
