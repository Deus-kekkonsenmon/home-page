"use client";

import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="pb-16 bg-gray-100 text-center">
      {/* メールアイコン */}
      <div className="flex justify-center">
        <Link
          href="mailto:your-email@example.com"
          className="flex justify-center items-center w-16 h-16 bg-[#57BEC7] hover:bg-[#36ccc6] text-white text-2xl font-bold rounded-full shadow-md transition duration-300"
        >
          <Image src="/snsIcons/mail.svg" alt="Instagram"　className="invert" width={30} height={30} />
        </Link>
      </div>

      {/* SNS アイコン */}
      {/* <div className="flex justify-center gap-6 mt-8">
        <Link href="https://www.instagram.com/" target="_blank" className="hover:opacity-80 transition duration-300">
          <Image src="/snsIcons/instagram.svg" alt="Instagram" width={30} height={30} />
        </Link>
        <Link href="https://www.facebook.com/" target="_blank" className="hover:opacity-80 transition duration-300">
          <Image src="/snsIcons/facebook.svg" alt="Facebook" width={30} height={30} />
        </Link>
        <Link href="https://www.youtube.com/" target="_blank" className="hover:opacity-80 transition duration-300">
          <Image src="/snsIcons/youtube.svg" alt="YouTube" width={30} height={30} />
        </Link>
      </div> */}
    </section>
  );
};

export default Contact;