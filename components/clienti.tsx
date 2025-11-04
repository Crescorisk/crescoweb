import Image from "next/image";
import { FadeIn } from "./ui/fadeIn";

const Clienti = () => {
  return (
    <section id="clienti" className="py-16 px-4 md:px-8 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <FadeIn direction="up" delay={0}>
            <h2 className="text-[#084CA1] text-3xl md:text-5xl font-bold mb-4">
              CLIENTI
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="h-1 w-24 bg-[#084CA1] mx-auto"></div>
          </FadeIn>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <p className="text-gray-700">
                Accompagniamo realta con esigenze diversificate ma accomunate da un
                obiettivo: proteggere la propria redditivita mantenendo relazioni
                sane con la clientela. Dalle utilities alle aziende commerciali
                fino agli operatori finanziari, offriamo percorsi personalizzati
                che uniscono tecnologia, competenza negoziale e rispetto per il
                debitore.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <ul className="grid gap-4 md:grid-cols-2 text-gray-700">
                <li className="bg-white shadow-sm border border-gray-100 rounded-lg p-4">
                  <h3 className="text-[#084CA1] font-semibold mb-2">
                    Corporate e PMI
                  </h3>
                  <p className="text-sm">
                    Supportiamo funzioni amministrative interne, rafforzando i
                    processi di gestione dei crediti commerciali.
                  </p>
                </li>
                <li className="bg-white shadow-sm border border-gray-100 rounded-lg p-4">
                  <h3 className="text-[#084CA1] font-semibold mb-2">
                    Utilities e Servizi
                  </h3>
                  <p className="text-sm">
                    Gestione proattiva dei crediti ricorrenti con segmentazione
                    per cluster e strategie omnicanale.
                  </p>
                </li>
                <li className="bg-white shadow-sm border border-gray-100 rounded-lg p-4 md:col-span-2">
                  <h3 className="text-[#084CA1] font-semibold mb-2">
                    Fondi, intermediari e condomini
                  </h3>
                  <p className="text-sm">
                    Soluzioni di recupero ad alto valore aggiunto, con monitoraggio
                    costante e reporting trasparente a stakeholder e investitori.
                  </p>
                </li>
              </ul>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center">
              <span className="inline-block text-xs font-semibold tracking-[0.3em] text-gray-500 mb-4">
                CASE HISTORY
              </span>
              <div className="flex justify-center mb-6">
                <Image
                  src="/logoNetsEnergia.png"
                  alt="Logo Nets Energia"
                  width={280}
                  height={140}
                  className="h-auto w-auto max-w-full"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nets Energia ci ha scelto per strutturare un programma di gestione
                creditizia che combina interventi stragiudiziali mirati con un
                forte presidio della relazione commerciale. I KPI di incasso si
                sono consolidati in pochi mesi grazie a journey cuciti sulle
                specifiche tipologie di utenze.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Clienti;
