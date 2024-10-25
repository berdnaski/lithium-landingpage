import { Button } from "@/components/ui/button"; 
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BookUser, Contact, House, MenuIcon, Store } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SidebarSheetProps {
  onToggle?: (isVisible: boolean) => void; 
}

export function SidebarSheet({ onToggle }: SidebarSheetProps) {
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    if (onToggle) {
      onToggle(isOpen); 
    }
  }, [onToggle, isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false); 
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const scrollOptions: ScrollToOptions = {
        top: element.offsetTop, 
        behavior: 'smooth',
      };

      handleClose(); // Fechar o sidebar após a seleção

      setTimeout(() => {
        window.scrollTo(scrollOptions);
      }, 300); 
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleToggle}> 
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="bg-purple-700 border-black hover:bg-purple-600">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#1E1E1E] border-l-purple-300 text-white">
        <SheetHeader>
          <SheetTitle className="text-left text-purple-300 font-bold">Lithium</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-2 py-5">
          {[
            { id: "home", icon: <House size={18} />, label: "Home" },
            { id: "services", icon: <Store size={18} />, label: "Services" },
            { id: "depoiments", icon: <BookUser size={18} />, label: "Depoiments" },
            { id: "contact", icon: <Contact size={18} />, label: "Contact" },
          ].map((item, index) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button 
                className="justify-start gap-2 hover:bg-purple-500 text-white font-semibold" 
                variant="ghost"
                onClick={() => {
                  handleScrollToSection(item.id); // Usando a função local para manipular o scroll
                }}
              >
                {item.icon}
                {item.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
