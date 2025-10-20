
import Image from "next/image";
import saintImg from "../../public/logo.jpg";
import { Cannabis } from "lucide-react";

export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 
    bg-lime-50 py-8 md:py-16">


      <div className="flex-1 max-w-xl">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 bg-green-200 px-3 py-1 rounded-full">
          <Cannabis className="w-5 h-5 text-green-600" />
          Medicina Integrativa Veterinária
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-6 leading-tight"
        data-aos="fade-right"
        >
          Entenda o futuro da{" "}
          <span className="text-green-600">medicina veterinária</span>
        </h1>

        <p className="text-gray-600 mt-6 mb-6 leading-relaxed">
          A veterinária está evoluindo. Cada vez mais tutores e profissionais
          buscam terapias naturais, seguras e eficazes para melhorar a qualidade
          de vida dos pets.
        </p>
      
      <a
        target="_blank"
        href={`https://drive.google.com/file/d/1CZTvWk3ijFRZfnsXNJmtkhMRhdU8lXCb/view?usp=sharing `}
        className="mt-8 px-5 py-3 bg-green-600 text-white font-semibold rounded-lg
         hover:bg-green-700 transition-colors"
      >

          PRÉVIA GRATUITA
      </a>
      </div>

      <div className="flex-1">
        <div className="rounded-2xl overflow-hidden shadow-md relative">
          <Image
            src={saintImg}
            alt="saint vet logo"
            width={600}
            height={400}
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}