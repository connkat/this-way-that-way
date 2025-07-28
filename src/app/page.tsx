import Overview from "@/app/components/Overview";
import EmailSignup from "@/app/components/EmailSignup";
import LumaEvents from "@/app/components/LumaEvents";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen w-full">
      <main className="w-full">
        <Overview />
        <EmailSignup sectionId="email-section-1" />
        <LumaEvents />
        <About />
        <EmailSignup sectionId="email-section-2" />
      </main>
      <Footer />
    </div>
  );
}
