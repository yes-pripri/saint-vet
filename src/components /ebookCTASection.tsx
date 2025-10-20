
import React from "react";
import Image from "next/image";
import saintvetImg from "../../public/saintvet.png"
import { Cannabis } from "lucide-react";

export function EbookCTASection() {
      return (
    <>
      <section className="bg-green-900 text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16">
        <div className="flex-shrink-0 mb-10 lg:mb-0 lg:w-1/2 flex justify-center">
          <Image
            src="/saintvet.png"
            alt="Veterinária cuidando de um animal"
            width={200}
            height={200}
            className="rounded-2xl shadow-lg object-cover w-[200px] h-[200px]"
            data-aos="flip-left"
          />
        </div>

        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center lg:justify-start">
                🌱 O futuro da medicina veterinária é verde.
          </h2>
          <p className="text-lg mb-6">
            Você pode fazer parte dessa mudança com conhecimento, segurança e
            propósito.
          </p>
          <a
            target="_blank"
            href={`https://home.ganza.app/products/descomplicando-a-terapia-canabica-para-caes-e-gatos-do-tabu-ao-tratamento `}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-5 rounded-lg transition"
          >
            Garanta o seu agora R$89,00
          </a>
        </div>
      </section>

      <footer className="bg-lime-50 text-center py-4 text-sm text-gray-700">
        © 2025 Saint Veterinária. Todos os direitos reservados.
        <br />
        Medicina integrativa e cannabis veterinária de excelência.
      </footer>
    </>
  );
}