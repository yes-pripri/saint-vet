import React from "react";
import Image from "next/image";
import { Clock, CheckCircle2, BadgeCheck, Sparkles, Video, ScrollText, MonitorSmartphone, ShieldCheck, Zap } from "lucide-react";

export function SpecialOffer() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-lime-50 text-white px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2 text-yellow-400 mb-8">
        <span>💰</span> Oferta Especial de Lançamento
      </h2>

      <div className="border border-yellow-600 bg-green-700 rounded-xl p-8 w-full max-w-xl text-center shadow-lg">
        <p className="flex items-center justify-center text-sm text-gray-300 mb-6">
          <Clock className="w-4 h-4 mr-2 text-yellow-400" />
          Oferta válida somente até domingo, <span className="font-semibold text-white ml-1">24/10, às 23h59</span>
        </p>

        <div className="mb-6">
          <p className="text-gray-400 line-through text-lg">De R$129,00</p>
          <p className="text-4xl font-bold text-green-400">R$89,00</p>
          <p className="mt-2 text-green-300 flex items-center justify-center gap-1">
            💸 Economize R$40,00 + R$175,00 em bônus exclusivos
          </p>
        </div>

        <div className="bg-green-700 rounded-lg p-6 text-left mb-8 space-y-3">
          <h3 className="text-center font-semibold mb-4 text-gray-100">
            O que está incluso:
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-400 mt-0.5" />
              eBook completo (mais de 100 páginas)
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="text-green-400 mt-0.5" />
              2 eBooks bônus sobre Sistema Endocanabinoide
            </li>
            <li className="flex items-start gap-2">
              <Video className="text-green-400 mt-0.5" />
              Vídeo exclusivo da Dra. Nicoli
            </li>
            <li className="flex items-start gap-2">
              <ScrollText className="text-green-400 mt-0.5" />
              Certificado Digital
            </li>
            <li className="flex items-start gap-2">
              <Zap className="text-green-400 mt-0.5" />
              Acesso instantâneo e vitalício
            </li>
            <li className="flex items-start gap-2">
              <MonitorSmartphone className="text-green-400 mt-0.5" />
              Compatível com todos os dispositivos
            </li>
          </ul>
        </div>

        <button className="w-full bg-green-50 hover:bg-green-200 text-black font-semibold py-3 rounded-lg transition-all">
          COMPRAR AGORA – R$89,00
        </button>

        <p className="text-sm text-gray-400 mt-4">
          Acesse instantaneamente e comece hoje mesmo a estudar
        </p>

        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-300">
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