
import Image from "next/image";
import saintImg from "../../public/logo.jpg";
import { Cannabis } from "lucide-react";


export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 
    bg-[#edf2e8] py-8 md:py-16">


      <div className="flex-1 max-w-xl">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#36612c] bg-lime-200 px-3 py-1 rounded-full">
          <Cannabis className="w-5 h-5 text-[#36612c]" />
          Medicina Integrativa Veterinária
        </span>

        <h1 
        style={{ fontFamily: "Playfair Display, serif" }}
        className="text-4xl md:text-5xl font-extrabold  text-[#36612c] mt-6 leading-tight"
        data-aos="fade-right"
        >
          Entenda o futuro da{" "}
          <span className="text-[#9aaa6c]">medicina veterinária</span>
        </h1>

        <p className="text-gray-600 mt-6 mb-6 leading-relaxed">
          A veterinária está evoluindo. Cada vez mais tutores e profissionais
          buscam terapias naturais, seguras e eficazes para melhorar a qualidade
          de vida dos pets.
        </p>
      
      <a
        target="_blank"
        href={`https://home.ganza.app/products/descomplicando-a-terapia-canabica-para-caes-e-gatos-do-tabu-ao-tratamento `}
        className="mt-8 px-5 py-3 bg-lime-400 text-black font-semibold rounded-lg
         hover:bg-lime-500 transition-colors"
      >

          COMPRE AGORA
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