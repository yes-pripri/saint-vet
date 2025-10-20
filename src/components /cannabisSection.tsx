import Image from "next/image";
import { Circle } from "lucide-react";

export default function CannabisSection() {
  return (
    <section className="bg-[#edf2e8] text-[#36612c] py-20 px-6 flex flex-col items-center text-center">
      <h1 
      style={{ fontFamily: "Playfair Display, serif" }}
      className="text-3xl md:text-5xl font-extrabold max-w-4xl leading-snug"
      data-aos="fade-left"
      >
        A cannabis medicinal é uma das descobertas mais{" "}
        <span className="text-[#9aaa6c]">promissoras dos últimos anos
        </span>
      </h1>

      <p className="text-gray-600 mt-6 max-w-3xl">
        Com resultados reais em controle da dor, ansiedade, epilepsia,
        inflamações, e muito mais.
      </p>

      <div className="mt-10 bg-green-50 border border-green-800 rounded-xl p-8 max-w-4xl w-full">
        <h2 className="text-xl font-semibold mb-6">
          Mas junto com o interesse, vieram as dúvidas:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-left text-black">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Circle className="w-3 h-3 text-[#9aaa6c] fill-[#9aaa6c]" />
              É seguro?
            </li>
            <li className="flex items-center gap-2">
              <Circle className="w-3 h-3 text-[#9aaa6c] fill-[#9aaa6c]" />
              Qual a dosagem?
            </li>
          </ul>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Circle className="w-3 h-3 text-[#9aaa6c] fill-[#9aaa6c]" />
              Quando usar CBD ou THC?
            </li>
            <li className="flex items-center gap-2">
              <Circle className="w-3 h-3 text-[#9aaa6c] fill-[#9aaa6c]" />
              É legalizado?
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}