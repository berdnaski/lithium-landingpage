import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { motion } from "framer-motion";
import bgImage from "@/assets/bg.png"; 

export function Layout() {
  return (
    <div className="relative flex flex-col min-h-screen dark overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover -z-10"
        style={{
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }} 
        transition={{ 
          duration: 3, 
          ease: "easeInOut",
          repeat: Infinity, 
          repeatType: "loop", 
        }} 
      />

      <main className="flex flex-col min-h-screen">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
