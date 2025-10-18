import React from "react";
import { Leaf, Heart, Scale, Activity } from "lucide-react";

export function EbookLearningSection() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        <span className="text-blue-500">🐾</span> O que você vai aprender neste eBook
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Fundamentos essenciais */}
        <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mb-4">
            <Leaf className="text-green-600" size={22} />
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
            🌱 Fundamentos essenciais
          </h3>
          <ul className="text-green-900 text-sm leading-relaxed space-y-1 list-disc list-inside">
            <li>O que é a cannabis medicinal e como age no organismo dos pets</li>
            <li>O sistema endocanabinoide em cães e gatos</li>
            <li>Evolução do uso terapêutico da planta</li>
          </ul>
        </div>

        {/* Aplicação prática */}
        <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mb-4">
            <Heart className="text-green-600" size={22} />
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
            💊 Aplicação prática na rotina veterinária
          </h3>
          <ul className="text-green-900 text-sm leading-relaxed space-y-1 list-disc list-inside">
            <li>Principais indicações clínicas e casos reais de sucesso</li>
            <li>Como iniciar o tratamento com segurança</li>
            <li>Efeitos colaterais, contraindicações e manejo responsável</li>
          </ul>
        </div>

        {/* Aspectos legais e éticos */}
        <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mb-4">
            <Scale className="text-green-600" size={22} />
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
            ⚖️ Aspectos legais e éticos
          </h3>
          <ul className="text-green-900 text-sm leading-relaxed space-y-1 list-disc list-inside">
            <li>Como obter medicamentos à base de cannabis</li>
            <li>Legislação veterinária atualizada</li>
            <li>Cuidados e responsabilidades na prescrição</li>
          </ul>
        </div>

        {/* Integração terapêutica e inovação */}
        <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mb-4">
            <Activity className="text-green-600" size={22} />
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
            💡 Integração terapêutica e inovação
          </h3>
          <ul className="text-green-900 text-sm leading-relaxed space-y-1 list-disc list-inside">
            <li>Como associar acupuntura e cannabis em protocolos complementares</li>
            <li>Evidências científicas recentes e novas abordagens terapêuticas</li>
          </ul>
        </div>
      </div>
    </section>
  );
}