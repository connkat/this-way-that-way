"use client";

import Overview from "@/app/components/Overview";
import EmailSignup from "@/app/components/EmailSignup";
import LumaEvents from "@/app/components/LumaEvents";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer/Footer";

import SplashScreen from "./components/SplashScreen";
import { useSplashScreen } from "@/hooks/useSplashScreen";

export default function Home() {
  const { showContent, handleSplashComplete } = useSplashScreen();

  return (
    <div className={`font-sans min-h-screen w-full ${!showContent ? 'no-scroll' : ''}`}>
      <SplashScreen onComplete={handleSplashComplete} />
      <main
        className={`w-full transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Overview showContent={showContent} />
        <EmailSignup sectionId="email-section-1" />
        <LumaEvents />
        <About />
        <EmailSignup sectionId="email-section-2" />
      </main>
      <Footer />
    </div>
  );
}
