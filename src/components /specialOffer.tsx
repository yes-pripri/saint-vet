import React from "react";
import Image from "next/image";
import { Clock, CheckCircle2, BadgeCheck, Sparkles, Video, ScrollText, MonitorSmartphone, ShieldCheck, Zap } from "lucide-react";

export function SpecialOffer() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#edf2e8] text-white px-4 py-16">
      <h2 
      style={{ fontFamily: "Playfair Display, serif" }}
      className="text-xl md:text-3xl font-extrabold flex items-center gap-2 text-black mb-8"
      data-aos="zoom-in"
      >
        <span>💰</span> Oferta Especial de Lançamento
      </h2>

      <div className="border-6 border-lime-500 bg-white rounded-xl p-6 sm:p-8 w-11/12 sm:w-full max-w-xl text-center shadow-xl">
        <p className="flex items-center justify-center text-sm text-black mb-6">
          <Clock className="w-4 h-4 mr-2 text-black" />
          Oferta válida somente até domingo, <span className="font-semibold text-black ml-1">24/10, às 23h59</span>
        </p>

        <div className="mb-6">
          <p className="text-white line-through text-lg">De R$129,00</p>
          <p className="text-4xl font-bold text-lime-500">R$87,00</p>
          <p className="mt-2 text-gray-500 flex items-center justify-center gap-1">
            💸 Economize R$42,00 + R$175,00 em bônus exclusivos
          </p>
        </div>

        <div className="bg-[#edf2e8] rounded-lg p-6 text-left mb-8 space-y-3">
          <h3 className="text-center font-semibold mb-4 text-black">
            O que está incluso:
          </h3>
          <ul className="space-y-3 text-gray-500">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-gray-500 mt-0.5" />
              eBook completo (mais de 100 páginas)
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="text-gray-500 mt-0.5" />
              2 eBooks bônus sobre Sistema Endocanabinoide
            </li>
            <li className="flex items-start gap-2">
              <Video className="text-gray-500 mt-0.5" />
              Vídeo exclusivo da Dra. Nicoli
            </li>
            <li className="flex items-start gap-2">
              <ScrollText className="text-gray-500 mt-0.5" />
              Certificado Digital
            </li>
            <li className="flex items-start gap-2">
              <Zap className="text-gray-500 mt-0.5" />
              Acesso instantâneo e vitalício
            </li>
            <li className="flex items-start gap-2">
              <MonitorSmartphone className="text-gray-500 mt-0.5" />
              Compatível com todos os dispositivos
            </li>
          </ul>
        </div>

        <a
        target="_blank"
        href={`https://home.ganza.app/products/descomplicando-a-terapia-canabica-para-caes-e-gatos-do-tabu-ao-tratamento `}
        className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 px-5 rounded-lg transition-all">
          COMPRE JÁ POR R$87,00
        
        </a>

        <p className="text-sm text-gray-500 mt-4">
          Acesse instantaneamente e comece hoje mesmo a estudar
        </p>

        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-green-400" /> Pagamento Seguro
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-green-400" /> Acesso Imediato
          </div>
        </div>
      </div>
    </section>
  );
}