import Image from "next/image";
import { Book } from "lucide-react";

export function EbookSection() {
  return (
    <section className="bg-green-900 text-green-100 py-16 md:py-20 px-6 text-center min-h-[60vh] flex flex-col justify-center">
      <p className="mb-4 text-base md:text-lg">
        Pensando nisso, a{" "}
        <span className="font-semibold text-green-500">Saint Veterinária</span>, 
        referência em medicina integrativa e cannabis veterinária, criou este material exclusivo:
      </p>

      <h2 className="flex items-center justify-center gap-2 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        <Book className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
        "Descomplicando a Terapia Canábica<br></br> para Cães e Gatos"
      </h2>

      <p className="max-w-2xl mx-auto text-base md:text-lg text-green-200">
        Um eBook feito para tutores e profissionais que querem aplicar a cannabis medicinal 
        de forma ética, segura e baseada em evidências.
      </p>
    </section>
  );
}
