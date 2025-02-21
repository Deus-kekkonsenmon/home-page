import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             結婚専門店{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>テストテストテストts</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4">結婚専門店</h1>
        <p className="text-lg">テストテストテストテストテストテストテストテスト</p>
        <a href="#about" className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-200 transition">
          詳細はこちら
        </a>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          We are a technology company focused on delivering high-quality solutions to our customers.
        </p>
      </section>
      
      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Service One</h3>
            <p className="text-gray-600">High-quality solutions tailored to your needs.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Service Two</h3>
            <p className="text-gray-600">Cutting-edge technology and innovation.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Service Three</h3>
            <p className="text-gray-600">Reliable support and maintenance.</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">Get in touch with us for more information.</p>
        <a href="mailto:info@company.com" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Email Us
        </a>
      </section>
      
      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

