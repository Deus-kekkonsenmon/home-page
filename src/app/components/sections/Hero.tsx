"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/heroImages/slide1.jpg",
  "/heroImages/slide2.jpg",
  "/heroImages/slide3.jpg",
  "/heroImages/slide4.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5秒ごとに画像を切り替え

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* スライドショー */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
        </div>
      ))}

      {/* 黒のオーバーレイ */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* テキスト（中央配置） */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">結婚専門店</h1>
        <p className="text-lg">安心・誠実・愛情をあなたに。</p>
      </div>
    </section>
  );
};

export default Hero;