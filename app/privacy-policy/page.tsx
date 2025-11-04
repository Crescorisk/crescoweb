"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import { FadeIn } from "@/components/ui/fadeIn";

type PolicySection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

const sections: PolicySection[] = [
  {
    title: "1. Introduzione",
    paragraphs: [
      "La presente Privacy Policy descrive le modalità con cui Cresco Risk Management S.r.l. (di seguito, “Cresco” o “noi”) tratta i dati personali degli utenti che visitano il sito web e utilizzano i servizi messi a disposizione. Il documento viene aggiornato periodicamente per recepire evoluzioni normative, tecnologiche e organizzative."
    ],
  },
  {
    title: "2. Titolare del trattamento",
    paragraphs: [
      "Titolare del trattamento è Cresco Risk Management S.r.l., con sede legale in Contrada Macchialonga, 21 – 87036 Rende (CS), Italia.",
      "Per qualsiasi richiesta relativa al trattamento dei dati personali è possibile scrivere a crescosrls@gmail.com oppure contattare il numero +39 340 4931607."
    ],
  },
  {
    title: "3. Tipologie di dati trattati",
    paragraphs: [
      "Sono raccolti e trattati dati di navigazione, dati identificativi e di contatto forniti volontariamente tramite i form disponibili sul sito, nonché eventuali ulteriori informazioni richieste nell’ambito dei servizi offerti."
    ],
    list: [
      "Dati di navigazione: indirizzo IP, log di accesso, informazioni sul browser e sul dispositivo.",
      "Dati anagrafici e di contatto: nome, cognome, indirizzo e-mail, numero di telefono.",
      "Contenuti delle comunicazioni inviate attraverso i nostri canali digitali."
    ],
  },
  {
    title: "4. Finalità e basi giuridiche del trattamento",
    paragraphs: [
      "Il trattamento dei dati personali avviene per le seguenti finalità, secondo le basi giuridiche indicate:"
    ],
    list: [
      "Navigazione sul sito e sicurezza della piattaforma (legittimo interesse del titolare).",
      "Gestione delle richieste di informazioni e contatto (esecuzione di misure precontrattuali).",
      "Adempimento di obblighi di legge e regolamentari (obbligo legale).",
      "Attività di marketing diretto su interessati già clienti (legittimo interesse, con possibilità di opposizione).",
      "Invio di comunicazioni promozionali previo consenso esplicito, ove richiesto."
    ],
  },
  {
    title: "5. Modalità del trattamento e sicurezza",
    paragraphs: [
      "Il trattamento dei dati avviene mediante strumenti elettronici e manuali, nel rispetto dei principi di necessità, proporzionalità e sicurezza. Cresco adotta misure tecniche e organizzative idonee a prevenire accessi non autorizzati, alterazioni o perdite dei dati personali."
    ],
  },
  {
    title: "6. Tempi di conservazione",
    paragraphs: [
      "I dati personali vengono conservati per il tempo strettamente necessario al conseguimento delle finalità per cui sono stati raccolti, nel rispetto degli obblighi normativi. I dati relativi alle richieste di contatto sono conservati per un massimo di 24 mesi, salvo ulteriori esigenze legate all’esecuzione di un rapporto contrattuale o a obblighi di legge."
    ],
  },
  {
    title: "7. Comunicazione e destinatari",
    paragraphs: [
      "I dati possono essere comunicati a soggetti terzi che forniscono servizi di supporto (ad esempio provider IT, consulenti professionali, partner tecnici), debitamente nominati responsabili del trattamento. Non è previsto il trasferimento dei dati a soggetti non autorizzati."
    ],
  },
  {
    title: "8. Trasferimenti extra UE",
    paragraphs: [
      "Il trattamento dei dati personali avviene prevalentemente all’interno dello Spazio Economico Europeo. Qualora si rendesse necessario trasferire i dati verso Paesi terzi, Cresco adotterà adeguate garanzie ai sensi degli artt. 44 e ss. GDPR, tra cui clausole contrattuali standard e verifiche di conformità."
    ],
  },
  {
    title: "9. Diritti degli interessati",
    paragraphs: [
      "Gli interessati possono esercitare in qualunque momento i diritti riconosciuti dagli artt. 15-22 del GDPR, tra cui l’accesso ai dati, la rettifica, la cancellazione, la limitazione del trattamento, la portabilità, l’opposizione e il diritto di proporre reclamo all’Autorità Garante per la protezione dei dati personali."
    ],
  },
  {
    title: "10. Modalità di esercizio dei diritti",
    paragraphs: [
      "Per esercitare i propri diritti è possibile scrivere all’indirizzo e-mail crescosrls@gmail.com oppure inviare una comunicazione all’indirizzo Contrada Macchialonga, 21 – 87036 Rende (CS). Cresco risponderà alle richieste entro 30 giorni, salvo proroghe motivate."
    ],
  },
  {
    title: "11. Aggiornamenti della policy",
    paragraphs: [
      "La presente informativa potrà essere oggetto di aggiornamenti. Ogni revisione sarà pubblicata in questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo pertanto a consultare periodicamente la presente sezione."
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl space-y-12">
          <FadeIn direction="up" delay={0}>
            <div className="text-center">
              <span className="inline-block text-xs font-semibold tracking-[0.3em] text-[#084CA1] mb-4">
                LEGAL
              </span>
              <h1 className="text-[#084CA1] text-3xl md:text-5xl font-bold mb-4">
                PRIVACY POLICY
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                La protezione dei dati personali è parte integrante del nostro modo di operare. Qui troverai informazioni
                chiare su come raccogliamo, utilizziamo e proteggiamo i tuoi dati in conformità al Regolamento (UE) 2016/679.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <FadeIn key={section.title} direction="up" delay={0.1 * (index + 1)}>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm">
                  <h2 className="text-[#084CA1] text-xl md:text-2xl font-semibold mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.2}>
            <div className="text-center bg-gray-50 border border-gray-100 rounded-2xl p-10 shadow-sm">
              <p className="text-gray-600 leading-relaxed">
                Per ulteriori informazioni sulla gestione dei dati personali o per richiedere una copia integrale
                della documentazione interna in tema di privacy, puoi contattarci tramite i nostri canali ufficiali.
              </p>
              <div className="mt-8 flex justify-center">
                <Image
                  src="/logo.png"
                  alt="Cresco Logo"
                  width={220}
                  height={70}
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
