import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="h-screen bg-primary">
      <Header />
      <Hero />
      <Footer/>
    </main>
  );
}
