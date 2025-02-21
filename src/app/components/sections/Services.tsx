"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    href: "/service1",
    image: "/servicesImages/CustomerService.jpg",
    alt: "接客サービス",
    title: "接客サービス事業",
  },
  {
    href: "/service2",
    image: "/servicesImages/WeddingSpecialty.jpg",
    alt: "結婚相談",
    title: "結婚専門店事業",
  },
  {
    href: "/service3",
    image: "/servicesImages/Lecturer.jpg",
    alt: "講師",
    title: "講師事業",
  },
  {
    href: "/faq",
    image: "/servicesImages/FAQ.jpg",
    alt: "FAQ",
    title: "FAQ",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">私たちのサービス</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 px-6">
        {services.map((service, index) => (
          <Link key={index} href={service.href} className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={service.image}
                alt={service.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <p className="text-white text-2xl font-bold">{service.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;