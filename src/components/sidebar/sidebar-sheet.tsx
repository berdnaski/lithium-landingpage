import { Button } from "@/components/ui/button"; 
import { Link } from "react-router-dom"; 
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BookUser, Contact, House, MenuIcon,  Store } from "lucide-react";
import { useEffect } from "react";

interface SidebarSheetProps {
  onToggle?: (isVisible: boolean) => void; 
}

export function SidebarSheet({ onToggle }: SidebarSheetProps) {
  useEffect(() => {
    if (onToggle) {
      onToggle(true); 
    }

    return () => {
      if (onToggle) {
        onToggle(false);
      }
    };
  }, [onToggle]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="bg-purple-700 border-black hover:bg-purple-600">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#121212] border-l-purple-300 text-white">
        <SheetHeader>
          <SheetTitle className="text-left text-purple-300 font-bold">Lithium</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-2 py-5">
          <Link to="/about">
            <Button className="justify-start gap-2 hover:bg-purple-300 textwhite font-semibold" variant="ghost">
              <House size={18} />
              Home
            </Button>
          </Link>

          <Link to="/projects">
            <Button className="justify-start gap-2 hover:bg-purple-300 textwhite font-semibold" variant="ghost">
              <Store size={18} />
              Product
            </Button>
          </Link>

          <Link to="/contact">
            <Button className="justify-start gap-2 hover:bg-purple-300 textwhite font-semibold" variant="ghost">
              <BookUser size={18} />
              About
            </Button>
          </Link>

          <Link to="/services">
            <Button className="justify-start gap-2 hover:bg-purple-300 textwhite font-semibold" variant="ghost">
              <Contact size={18} />
              Contact
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}