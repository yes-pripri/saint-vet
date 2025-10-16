import Image from "next/image";
import { Circle } from "lucide-react";

export default function CannabisSection() {
  return (
    <section className="bg-[#020a06] text-white py-20 px-6 flex flex-col items-center text-center">
      {/* Título */}
      <h1 className="text-3xl md:text-5xl font-extrabold max-w-4xl leading-snug">
        A cannabis medicinal é uma das descobertas mais{" "}
        <span className="text-green-400">promissoras dos últimos anos</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-gray-400 mt-6 max-w-3xl">
        Com resultados reais em controle da dor, ansiedade, epilepsia,
        inflamações, e muito mais.
      </p>

      {/* Box de dúvidas */}
      <div className="mt-10 bg-[#0a1510] border border-green-800 rounded-xl p-8 max-w-4xl w-full">
        <h2 className="text-xl font-semibold mb-6">
          Mas junto com o interesse, vieram as dúvidas:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-left text-gray-300">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Circle className="w-3 h-3 text-green-400 fill-green-400" />
              É seguro?
            </li>
            <li className="flex items-center gap-2">
              <Circle className="w-3 h-3 text-green-400 fill-green-400" />
              Qual a dosagem?
            </li>
          </ul>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Circle className="w-3 h-3 text-green-400 fill-green-400" />
              Quando usar CBD ou THC?
            </li>
            <li className="flex items-center gap-2">
              <Circle className="w-3 h-3 text-green-400 fill-green-400" />
              É legalizado?
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}