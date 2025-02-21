import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* 上部: ロゴ・ナビ・SNS */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-3">
            {/* <Image src="/thumb.png" alt="結婚専門店ロゴ" width={50} height={50} /> */}
            <span className="text-xl font-semibold">結婚専門店</span>
          </Link>

          {/* ナビゲーション */}
          <nav className="mt-6 lg:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <li><Link href="#about" className="hover:text-white transition">結婚専門店について</Link></li>
              <li><Link href="#services" className="hover:text-white transition">サービス</Link></li>
              <li><Link href="#message" className="hover:text-white transition">代表メッセージ</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">お問い合わせ</Link></li>
            </ul>
          </nav>

          {/* SNS アイコン */}
          <div className="flex mt-6 lg:mt-0 gap-5">
            <Link href="https://www.instagram.com/" target="_blank" className="hover:opacity-80 transition">
              <Image src="/snsIcons/instagram.svg" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://www.facebook.com/" target="_blank" className="hover:opacity-80 transition">
              <Image src="/snsIcons/facebook.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://www.youtube.com/" target="_blank" className="hover:opacity-80 transition">
              <Image src="/snsIcons/youtube.svg" alt="YouTube" width={24} height={24} />
            </Link>
          </div>
        </div>

        {/* 下部: 著作権情報 */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>&copy; {new Date().getFullYear()} 結婚専門店. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;