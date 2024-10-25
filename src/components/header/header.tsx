import { useCallback } from "react";
import { SidebarSheet } from "../sidebar/sidebar-sheet";
import { motion } from "framer-motion";

interface HeaderProps {
  className?: string;
  onMenuToggle?: (isVisible: boolean) => void; 
}

export function Header({ className = "", onMenuToggle }: HeaderProps) {
  const handleScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className={`flex flex-col md:flex-row w-full md:h-24 h-16 items-center border-b-2 border-b-zinc-500 ${className}`}>
      <div className="flex flex-col md:flex-row max-w-[85%] h-full w-full mx-auto justify-between md:items-center">
        <div className="flex h-full items-center justify-between"> 
          <h1 className="md:text-5xl text-2xl font-bold text-white">
            LITHIUM
          </h1>

          <div className="md:hidden"> 
            <SidebarSheet onToggle={onMenuToggle} onScrollToSection={handleScroll} />
          </div>
        </div>

        <ul className="hidden md:flex flex-col md:flex-row gap-4 text-white font-semibold text-xl cursor-pointer">
          {[
            { label: "Home", id: "home" },
            { label: "Services", id: "services" },
            { label: "Depoiments", id: "depoiments" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <li key={item.label} className="relative ml-4 group">
              <button 
                className="flex items-center"
                onClick={() => handleScroll(item.id)} 
              >
                {item.label}
                <span className="absolute left-0 bottom-0 h-1 w-0 bg-[#F165AC] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center"> 
          <motion.button
            className="ml-4 rounded-2xl bg-[#9949FF] h-10 w-44 border-none font-semibold text-white transition-shadow duration-300 ease-in-out hover:bg-purple-600 shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ 
              scale: 0.95, 
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20
            }}
          >
            Fale Conosco
          </motion.button>
        </div>
      </div>
    </div>
  );
}
