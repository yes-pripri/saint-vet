
"use client";

import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircleQuestion } from "lucide-react";

export function EbookFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "1. Preciso ser veterinário para ler o eBook?",
      answer:
        "Não! O conteúdo é acessível para tutores, estudantes e profissionais que queiram entender o uso da cannabis de forma segura.",
    },
    {
      question: "2. É legal usar cannabis em pets?",
      answer:
        "Sim! Dentro da legislação vigente e sob orientação profissional. O eBook explica detalhadamente como proceder.",
    },
    {
      question: "3. Recebo o material na hora?",
      answer:
        "Sim! Após a compra você recebe acesso imediato ao eBook e aos bônus pelo seu e-mail cadastrado.",
    },
    {
      question: "4. Posso ler no celular ou tablet?",
      answer:
        "Claro! O eBook é 100% digital, compativel com qualquer dispositivo.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAFAF5] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 flex items-center justify-center gap-2 text-gray-900">
          <MessageCircleQuestion className="w-7 h-7 text-gray-800" />
          Perguntas Frequentes
        </h2>

        {/* Lista de FAQs */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-green-100 bg-white rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-gray-900"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}