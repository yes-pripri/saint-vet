import React from "react";
import Image from "next/image";
import ebookImg from "../../public/ebook.jpg"


export function EbookSection() {
  return (
    <section className="bg-[#E6FAF0] py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
      <div className="flex-1 text-center lg:text-left max-w-2xl">
        <p className="text-gray-600 mb-3">
          Pensando nisso, a{" "}
          <span className="text-green-700 font-semibold">Saint Veterinária</span>, referência em medicina integrativa e cannabis veterinária, criou este material exclusivo:
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          📘 “Descomplicando a Terapia Canábica para Cães e Gatos”
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Um eBook feito para tutores e profissionais que querem aplicar a
          cannabis medicinal de forma ética, segura e baseada em evidências.
        </p>
      </div>

      <div className="flex-shrink-0">
        <Image
          src="/ebook.jpg"
          alt="Capa do eBook Descomplicando a Terapia Canábica"
          width={280}
          height={280}
          priority
          className="rounded-2xl shadow-lg object-cover"
          data-aos="flip-right"
        />
      </div>
    </section>
  );
}
