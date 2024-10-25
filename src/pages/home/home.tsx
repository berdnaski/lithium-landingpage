import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-16">
      <div className="flex flex-col gap-4 max-w-7xl mx-auto items-center">
        <h1 className="flex flex-col text-7xl text-center text-white font-bold">Energize seu potencial digital, <h1>com a <span className="text-[#D83EFE]">Lithium!</span></h1></h1>
        <p className="text-[#D8D8D8] text-xl">Nos movemos de corpo e alma para solucionar necessidades digitais
          para você ou seu negócio.
        </p>

        <div>
          <Button className="bg-[#334139] mt-4 hover:bg-[#334122] font-black text-white border-none text-md">Vamos Conversar?</Button>
        </div>
      </div>
    </div>
  )
}