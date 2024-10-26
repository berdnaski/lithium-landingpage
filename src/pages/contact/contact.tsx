import banner from "@/assets/banner.png"; 
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight, Instagram, Linkedin, MessageCircle } from "lucide-react"; 
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div id="contact">
      <motion.img 
        src={banner} 
        alt="Banner" 
        className="w-[95%] mx-auto md:w-full h-auto rounded-2xl"
        initial={{ y: 0 }} 
        animate={{ y: [-10, 10, -10] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
      />

      <div className="flex flex-col md:flex-row justify-center text-center items-center md:justify-between mt-16 md:mt-28">
        <div className="flex flex-col">
          <div className="gap-2 flex flex-col ">
            <motion.p 
              className="text-[#D8D8D8] md:text-xl text-xl mx-auto md:text-start text-left" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              Lithium, onde está sua solução
            </motion.p>
            <motion.h1 
              className="md:text-7xl text-5xl font-bold text-white md:text-start text-left flex flex-col" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Impulsione <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">seu negócio!</span>
            </motion.h1>
          </div>
          <motion.a 
            href="https://wa.link/oh1f9p" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 text-[#D8D8D8] mb-8 text-xl hover:underline flex items-center font-semibold"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            QUERO UM ORÇAMENTO
            <ArrowRight className="ml-1" />
          </motion.a>
        </div>

        <div className="md:hidden border-b-2 border-b-zinc-500 w-full"></div>

        <div className="hidden md:block md:flex flex-col gap-8 mt-8">
          <div className="flex flex-col gap-2 md:items-start md:gap-4">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="bg-gradient-to-r from-[#181818] to-[#6E00D2] text-white hover:opacity-90 transition-opacity">
                Contato
              </Button>
            </motion.div>
            <div className="flex items-center">
              <Mail className="mr-2 text-[#D8D8D8]" />
              <span className="text-[#D8D8D8]">lithiumtech@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-[#D8D8D8]" />
              <span className="text-[#D8D8D8]">(34)9 9767-7943</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:items-start md:gap-4">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button className="bg-gradient-to-r from-[#181818] to-[#6E00D2] text-white hover:opacity-90 transition-opacity">
                Redes Sociais
              </Button>
            </motion.div>
            <div className="flex items-center">
              <Instagram className="mr-2 text-[#D8D8D8]" />
              <a href="https://www.instagram.com/lithiumtch/" className="text-[#D8D8D8] hover:underline">Instagram</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-2 text-[#D8D8D8]" />
              <a href="#" className="text-[#D8D8D8] hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8 md:hidden">
          <a href="mailto:lithiumtech@gmail.com" className="text-[#D8D8D8] hover:underline">
            <Mail />
          </a>
          <a href="#" className="text-[#D8D8D8] hover:underline">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/lithiumtch/" className="text-[#D8D8D8] hover:underline">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
}
