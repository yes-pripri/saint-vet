import React from "react";
import Image from "next/image";
import ebookImg from "../../public/ebook.jpg"


export function EbookSection() {
  return (
    <section className="bg-[#edf2e8] py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
      <div className="flex-1 text-center lg:text-left max-w-2xl">
        <p className="text-gray-600 mb-3">
          Pensando nisso, a{" "}
          <span className="text-[#36612c] font-semibold">Saint Veterinária</span>, referência em medicina integrativa e cannabis veterinária, criou este material exclusivo:
        </p>

        <h2 
        style={{ fontFamily: "Playfair Display, serif" }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           “Descomplicando a Terapia Canábica para Cães e Gatos”
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          Um eBook feito para tutores e profissionais que querem aplicar a
          cannabis medicinal de forma ética, segura e baseada em evidências.
        </p>
         <a
          target="_blank"
          href={`https://drive.google.com/file/d/1CZTvWk3ijFRZfnsXNJmtkhMRhdU8lXCb/view?usp=sharing `}
          className="bottom-6 left-6 bg-lime-400 text-black font-bold px-6 py-2 rounded-md shadow-md hover:bg-lime-500 transition">
            BAIXAR PRÉVIA GRATUIRA
        </a>

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
