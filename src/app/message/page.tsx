import Image from "next/image";

const MessagePage = () => {
  return (
    <section className="py-16 px-6 lg:px-24 bg-gray-50">
      {/* 見出し */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">代表メッセージ</h1>
        <div className="mt-4 w-24 h-1 bg-gray-500 mx-auto"></div>
      </div>

      {/* CEO 写真 + メッセージ */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* CEO 写真 */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <Image
            src="/message/ceo.jpg"
            alt="CEO 武藤 秀樹"
            width={500}
            height={500}
            className="w-full max-w-md lg:max-w-lg object-cover shadow-lg"
          />
        </div>

        {/* メッセージ */}
        <div className="flex-1 text-gray-700 leading-relaxed text-lg max-w-2xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">武藤 秀樹 (Muto Hideki)</h2>
          <p>
            私たちは、結婚を通じて多くの人々の人生に寄り添い、より幸せな未来を創造することを使命としています。
            お客様一人ひとりのストーリーを大切にし、それぞれに最適なサービスを提供することに情熱を持っています。
            <br /><br />
            人生の大きな節目である結婚を、より思い出深く、幸せなものにするために、私たちは常に最善を尽くします。
            これからも、皆様とともに歩みながら、より良いサービスを提供できるよう努力してまいります。
            <br /><br />
            今後ともご支援のほど、よろしくお願いいたします。
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessagePage;