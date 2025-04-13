import React from "react";
import Quiz from "./components/Quiz.tsx";
import HamburgerMenu from "./components/HamburgerMenu.tsx";

function App() {
  return (
   
  
      <main className="min-h-screen bg-pink-50 md:bg-cover bg-[45%_95%] text-gray-900" style={{ backgroundImage: "url('/toxic_bg_3.png')" }}>        
        <header>
        <HamburgerMenu />
      </header>
      <h1 className="max-w-xl mx-auto p-5 md:pt-4 text-center text-2xl sm:text-3xl md:text-4xl font-bold md:font-semibold">Choose Between These Cursed Scenarios and We'll Reveal Your Toxic Trait</h1>
      
      <Quiz />
    </main>
   
    
  );
}

export default App;
