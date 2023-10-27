"use client";
import Hero from "./components/Hero";
import CalcProvider from "./context/CalcContext";

export default function Home() {
  return (
    <main className="font-roboto w-full flex flex-col h-[100vh] mx-0 my-0 items-center justify-center ">
      <CalcProvider>
        <Hero />
      </CalcProvider>
    </main>
  );
}
