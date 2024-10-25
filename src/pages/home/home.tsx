import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import cellMockup from "@/assets/cell.png"; 
import { Services } from "../services/services";

export function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-16">
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
            <Button className="bg-[#334139] md:mt-4 mt-2 hover:bg-[#334122] font-bold text-white border-none md:text-lg rounded-full shadow-md transition-shadow hover:shadow-lg">
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

      <div className="flex flex-col mt-24 mb-24">
        <Services />
      </div>
    </div>
  );
}
