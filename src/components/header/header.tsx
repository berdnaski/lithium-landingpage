import { SidebarSheet } from "../sidebar/sidebar-sheet";

interface HeaderProps {
  className?: string;
  onMenuToggle?: (isVisible: boolean) => void; 
}

export function Header({ className = "", onMenuToggle }: HeaderProps) {
  return (
    <div className={`flex flex-col md:flex-row w-full md:h-24 h-16 items-center border-b-2 border-b-zinc-500 ${className}`}>
      <div className="flex flex-col md:flex-row max-w-[85%] h-full w-full mx-auto justify-between md:items-center">
        <div className="flex h-full items-center justify-between"> 
          <h1 className="md:text-5xl text-2xl font-bold text-white">
            LITHIUM
          </h1>

          <div className="md:hidden"> 
            <SidebarSheet onToggle={onMenuToggle} />
          </div>

        </div>

        <ul className="hidden md:flex flex-col md:flex-row gap-4 text-white font-semibold text-xl cursor-pointer">
          <li className="relative ml-4 group">
            Home
            <span className="absolute left-0 bottom-0 h-1 w-0 bg-[#F165AC] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative ml-4 group">
            About
            <span className="absolute left-0 bottom-0 h-1 w-0 bg-[#F165AC] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative ml-4 group">
            Services
            <span className="absolute left-0 bottom-0 h-1 w-0 bg-[#F165AC] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative ml-4 group">
            Contact
            <span className="absolute left-0 bottom-0 h-1 w-0 bg-[#F165AC] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
        </ul>

        <div className="hidden md:flex items-center"> {/* Centraliza o botão também */}
          <button className="ml-4 rounded-2xl bg-[#9949FF] h-10 w-44 border-none font-semibold text-white transition-all duration-300 ease-in-out hover:bg-purple-600 shadow-xl">
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  );
}
