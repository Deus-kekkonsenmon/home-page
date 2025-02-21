import Image from "next/image";
import Link from "next/link";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Proof from "./components/sections/Proof";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* 代表者メッセージ */}
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6">
        <Link href="/message" className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/message/message_thumb.jpg"
              alt="代表者メッセージ"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-white text-2xl font-bold">代表メッセージ</p>
          </div>
        </Link>
      </div>

      {/* Proof Section */}
      <Proof />


      {/* Contact Section */}
      <Contact />
    </div>
  );
}

