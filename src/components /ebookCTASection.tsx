import React from "react";
import Image from "next/image";

export function EbookCTASection() {
  return (
    <section className="bg-[#25914A] text-white text-center py-20 px-6">
      {/* Ícone e título */}
      <h2 className="text-3xl md:text-4xl font-semibold flex justify-center items-center gap-2 mb-6">
        🌱 O futuro da medicina veterinária é verde.
      </h2>

      {/* Subtítulo */}
      <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-10">
        Você pode fazer parte dessa mudança — com conhecimento, segurança e
        propósito.
      </p>

      {/* Botão */}
      <a
        href="#"
        className="inline-block bg-[#F9C936] text-black font-semibold text-lg py-3 px-8 rounded-md shadow-md hover:bg-[#f8b400] transition-colors"
      >
        Garanta o seu agora – R$89,00
      </a>

      {/* Rodapé da seção */}
      <footer className="mt-14 text-sm text-green-100">
        <p>© 2024 Saint Veterinária. Todos os direitos reservados.</p>
        <p className="mt-1">
          Medicina integrativa e cannabis veterinária de excelência.
        </p>
      </footer>
    </section>
  );
}