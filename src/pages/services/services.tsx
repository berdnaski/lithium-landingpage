import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import appIcon from "@/assets/app.png";
import mktIcon from "@/assets/mkt.png";
import pagoIcon from "@/assets/pago.png";
import visualIcon from "@/assets/visual.png";
import webIcon from "@/assets/web.png";
import { useEffect, useState, useRef } from "react";

export function Services() {
  const cards = [
    { src: appIcon, alt: "App Development" },
    { src: mktIcon, alt: "Marketing" },
    { src: pagoIcon, alt: "Payment Solutions" },
    { src: visualIcon, alt: "Visual Design" },
    { src: webIcon, alt: "Web Development" },
  ];

  const carousel = useRef<HTMLDivElement | null>(null); // Especificando o tipo da ref
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center gap-8">
      <div>
        <Button className="bg-[#334139] hover:bg-[#334122] font-bold text-white border-none text-lg rounded-full shadow-md transition-shadow hover:shadow-lg">
          Serviços
        </Button>
      </div>

      <div className="flex flex-col gap-4 mx-auto max-w-7xl">
        <motion.h1
          className="md:text-7xl mx-auto font-bold text-white flex flex-col text-2xl text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Como vamos impulsionar o sucesso do   
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            seu negócio?
          </span>
        </motion.h1>
        
        <motion.p
          className="text-[#D8D8D8] md:text-xl text-sm w-[75%] mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nossa equipe qualificada e experiente está pronta para oferecer soluções personalizadas 
          que atendem às necessidades do seu negócio.
        </motion.p>
      </div>

      <div className="relative md:w-full md:max-w-[1200px] md:h-[700px] h-[500px] w-[350px] mx-auto mt-8 overflow-hidden">
        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden" 
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragElastic={0.2} // Controla a elasticidade do movimento
            transition={{ type: "spring", stiffness: 300, damping: 30 }} // Transição suave
          >
            {cards.map((card, index) => (
              <motion.div key={index} className="flex-shrink-0 md:w-[500px] w-[300px] h-full p-[14px]">
                <img 
                  src={card.src} 
                  alt={card.alt} 
                  className="w-full h-full object-cover rounded-xl pointer-events-none" 
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}