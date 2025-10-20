import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import nicoleImg from "../../public/nicole.png"

export function EbookDifferenceSection() {
  return (
    <section className="bg-lime-50 px-6 flex flex-col lg:flex-row items-center 
    justify-center gap-10 py-8 md:py-16">
      <div className="flex-shrink-0">
        <Image
          src="/nicole.png"
          alt="Foto da autora"
          width={280}
          height={280}
          className="rounded-full w-50 h-50 object-cover object-[50%_25%] mx-auto shadow-md lg:rounded-2xl lg:w-[350px] lg:h-[450px] lg:object-center "
        />
      </div>

      <div className="max-w-2xl">
        <h2 className="text-black text-2xl md:text-3xl font-semibold text-center lg:text-left 
        mb-8 flex items-center justify-center lg:justify-start gap-2"
        data-aos="zoom-in"
        >
          💎 Por que este eBook é diferente
        </h2>

        <div className="space-y-4">
          {[
            {
              bold: "Escrito pela Dra. Nicoli Benedito,",
              text: "médica veterinária endocanabinologista e fundadora da Saint Veterinária, referência nacional em medicina integrativa e cannabis veterinária.",
            },
            {
              text: "Conteúdo baseado em ciência e prática clínica real.",
            },
            {
              text: "Linguagem simples, didática e direta — feita para tutores e profissionais.",
            },
            {
              text: "Material ético, confiável e seguro, que separa fatos de mitos.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white shadow-sm rounded-xl p-4 border border-green-100"
            >
              <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-800">
                {item.bold && <strong>{item.bold}</strong>} {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-green-800 font-medium text-center lg:text-left mt-8">
          Este não é "mais um eBook" é um guia de transformação para quem acredita em um cuidado
          mais natural, consciente e baseado em evidências.
        </p>
      </div>
    </section>
  );
}