"use client";

import SplashScreen from "./components/SplashScreen";
import Overview from "./components/Overview";
import LumaEvents from "./components/LumaEvents";
import About from "./components/About";
import EmailSignup from "./components/EmailSignup";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import { useSplashScreen } from "@/hooks/useSplashScreen";
import { useScreenSize } from "@/hooks/useScreenSize";

export default function Home() {
  const { showContent, handleSplashComplete } = useSplashScreen();
  const { isMobile } = useScreenSize();

  return (
    <div
      className={`font-sans min-h-screen w-full ${
        !showContent ? "no-scroll" : ""
      }`}
    >
      <SplashScreen onComplete={handleSplashComplete} />
      <main
        className={`w-full transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Overview showContent={showContent} />
        {isMobile ? <Header /> : null}
        <LumaEvents />
        <About />
        <EmailSignup />
      </main>
      <Footer />
    </div>
  );
}
