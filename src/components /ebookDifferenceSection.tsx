
import React from "react";
import { CheckCircle } from "lucide-react";

export function EbookDifferenceSection() {
  return (
    <section className="bg-green-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        <span className="text-cyan-500">💎</span> Por que este eBook é diferente
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {/* Item 1 */}
        <div className="bg-white rounded-xl border border-green-100 shadow-sm p-5 flex items-start gap-3 text-left hover:shadow-md transition">
          <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={22} />
          <p className="text-gray-800 text-base leading-relaxed">
            <strong>Escrito pela Dra. Nicoli Benedito</strong>, médica veterinária endocanabinologista e fundadora da 
            Saint Veterinária, referência nacional em medicina integrativa e cannabis veterinária.
          </p>
        </div>

        {/* Item 2 */}
        <div className="bg-white rounded-xl border border-green-100 shadow-sm p-5 flex items-start gap-3 text-left hover:shadow-md transition">
          <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={22} />
          <p className="text-gray-800 text-base leading-relaxed">
            Conteúdo baseado em ciência e prática clínica real.
          </p>
        </div>

        {/* Item 3 */}
        <div className="bg-white rounded-xl border border-green-100 shadow-sm p-5 flex items-start gap-3 text-left hover:shadow-md transition">
          <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={22} />
          <p className="text-gray-800 text-base leading-relaxed">
            Linguagem simples, didática e direta — feita para tutores e profissionais.
          </p>
        </div>

        {/* Item 4 */}
        <div className="bg-white rounded-xl border border-green-100 shadow-sm p-5 flex items-start gap-3 text-left hover:shadow-md transition">
          <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={22} />
          <p className="text-gray-800 text-base leading-relaxed">
            Material ético, confiável e seguro, que separa fatos de mitos.
          </p>
        </div>
      </div>

      <p className="text-green-800 font-semibold mt-10 max-w-3xl mx-auto leading-relaxed">
        Este não é "mais um eBook" — é um guia de transformação para quem acredita em um
        cuidado mais natural, consciente e baseado em evidências.
      </p>
    </section>
  );
}