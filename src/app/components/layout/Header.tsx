"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-[#57BEC7] shadow-md z-50">
      {/* ロゴとタイトル（クリックでルートへ遷移） */}
      <Link href="/" className="flex items-center space-x-3 cursor-pointer">
        <Image src="/thumb.png" alt="結婚専門店のロゴ" width={60} height={60} />
        <span className="text-white text-3xl font-bold">結婚専門店</span>
      </Link>

      {/* ハンバーガーメニュー（モバイル用） */}
      <div
        className="lg:hidden flex flex-col justify-between w-6 h-5 cursor-pointer z-50"
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></div>
      </div>

      {/* ナビゲーションメニュー */}
      <nav
        className={`fixed top-0 right-0 w-3/4 h-full bg-[#57BEC7] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:relative lg:top-auto lg:right-auto lg:w-auto lg:h-auto lg:translate-x-0`}
      >
        <ul className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 text-white text-lg text-center lg:text-left mt-20 lg:mt-0">
          <li>
            <Link href="#top" className="hover:text-gray-300" onClick={toggleMenu}>
              Top
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-gray-300" onClick={toggleMenu}>
              結婚専門店について
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-gray-300" onClick={toggleMenu}>
              私たちのサービス
            </Link>
          </li>
          <li>
            <Link href="#message" className="hover:text-gray-300" onClick={toggleMenu}>
              代表メッセージ
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-gray-300" onClick={toggleMenu}>
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-300" onClick={toggleMenu}>
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;