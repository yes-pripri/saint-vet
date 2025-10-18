import React from "react";
import Image from "next/image";
import { BookOpen, Video, Award } from "lucide-react";

export function EbookBonusSection() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        🎁 Bônus Exclusivos
      </h2>
      <p className="text-gray-600 mb-10">
      </p>n

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="bg-white border border-yellow-200 rounded-xl p-5 flex items-start justify-between shadow-sm hover:shadow-md transition">
          <div className="flex items-start gap-4 text-left">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg">
              <BookOpen className="text-yellow-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-yellow-700 text-lg mb-1">
                ✨ Bônus 1: eBooks Complementares sobre Sistema Endocanabinoide
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Entenda como interagem o sistema endocanabinoide, seus receptores e os fitocanabinoides + Cannabis Medicinal:
                Sistema Endocanabinoide e sua terapêutica - 2ª edição.
              </p>
            </div>
          </div>
          <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded-full self-start">
            R$49,00
          </span>
        </div>

        <div className="bg-white border border-yellow-200 rounded-xl p-5 flex items-start justify-between shadow-sm hover:shadow-md transition">
          <div className="flex items-start gap-4 text-left">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg">
              <Video className="text-yellow-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-yellow-700 text-lg mb-1">
                🎥 Bônus 2: Vídeo exclusivo da Dra. Nicoli
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A médica explica como iniciar o tratamento e ajustar dosagens com segurança.
              </p>
            </div>
          </div>
          <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded-full self-start">
            R$97,00
          </span>
        </div>

        <div className="bg-white border border-yellow-200 rounded-xl p-5 flex items-start justify-between shadow-sm hover:shadow-md transition">
          <div className="flex items-start gap-4 text-left">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg">
              <Award className="text-yellow-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-yellow-700 text-lg mb-1">
                📜 Bônus 3: Certificado Digital de Leitura e Atualização Profissional
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Perfeito para comprovar aprendizado e somar horas complementares.
              </p>
            </div>
          </div>
          <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded-full self-start">
            R$29,00
          </span>
        </div>
      </div>

      <p className="text-yellow-600 font-semibold mt-10 text-lg">
        💥 Valor total dos bônus: <span className="text-yellow-700 font-bold">R$175,00</span>
      </p>
    </section>
  );
}