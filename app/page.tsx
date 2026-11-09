import Background from "@/components/Background";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
      <ThemeToggle />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-between px-4 py-10 sm:px-8">
        <Header />
        <Countdown />
        <Footer />
      </div>
    </main>
  );
}
