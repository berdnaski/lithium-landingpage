import { Outlet } from "react-router-dom";
import { Header } from "../header/header";

export function Layout() {
  return (
    <div className="relative flex flex-col min-h-screen dark">
      <div
        className="absolute inset-0 bg-cover -z-10 before:content-[''] before:absolute before:inset-0 before:bg-cover before:z-[-1] before:blur-[8px]"
        style={{
          background: 
            "linear-gradient(to bottom left, #170121 0%, #3C1076 40%, #3A1B55 70%, #F165AC 100%)", 
        }}
      ></div>

      <main className="flex flex-col min-h-screen">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
