"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LinePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#57BEC7] rounded-full flex justify-center items-center shadow-md cursor-pointer transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } hover:bg-[#36ccc6]`}
    >
      <Link href="https://line.me/ti/p/3-vhsvjfRp" target="_blank">
        <Image src="/snsIcons/line.png" alt="LINE友達追加ボタン" width={30} height={30} />
      </Link>
    </div>
  );
};

export default LinePopup;