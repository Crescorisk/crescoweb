import Image from "next/image";

type PolicySection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

const sections: PolicySection[] = [
  {
    title: "1. Introduzione",
    paragraphs: [
      'La presente Cookie Policy descrive le tipologie di cookie e tecnologie similari utilizzate sul sito di Cresco Risk Management S.r.l. (di seguito, "Cresco") e illustra le modalita con cui l\'utente puo gestire le proprie preferenze. L\'informativa e da leggere congiuntamente alla Privacy Policy.',
    ],
  },
  {
    title: "2. Cosa sono i cookie",
    paragraphs: [
      "I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti in occasione di visite successive. Consentono di riconoscere il dispositivo e migliorare l'esperienza di navigazione.",
    ],
  },
  {
    title: "3. Tipologie di cookie utilizzati",
    paragraphs: [
      "Il nostro sito impiega diverse tipologie di cookie, suddivise nelle categorie di seguito riportate:",
    ],
    list: [
      "Cookie tecnici necessari: fondamentali per il funzionamento del sito e per permettere all'utente la navigazione e l'utilizzo delle funzionalita richieste.",
      "Cookie di funzionalita: consentono di memorizzare impostazioni scelte dall'utente (ad esempio lingua o area geografica) al fine di migliorare il servizio.",
      "Cookie analitici anonimizzati: ci aiutano a comprendere come gli utenti interagiscono con il sito, raccogliendo informazioni aggregate e anonime.",
    ],
  },
  {
    title: "4. Gestione del consenso",
    paragraphs: [
      "L'utilizzo di cookie non strettamente necessari avviene solo previo consenso dell'utente, espresso attraverso il banner o il centro preferenze presente sul sito. E sempre possibile modificare o revocare il consenso in qualsiasi momento.",
    ],
  },
  {
    title: "5. Cookie di terze parti",
    paragraphs: [
      "Alcuni servizi integrati nel sito potrebbero utilizzare cookie di terze parti. Cresco non controlla direttamente queste tecnologie; invitiamo pertanto a consultare le informative delle rispettive terze parti per ottenere maggiori dettagli su finalita e modalita di gestione.",
      "L'eventuale utilizzo di strumenti di analytics e configurato in modo da ridurre il potere identificativo dei cookie (ad esempio tramite anonimizzazione dell'indirizzo IP).",
    ],
  },
  {
    title: "6. Come disabilitare i cookie tramite browser",
    paragraphs: [
      "La maggior parte dei browser consente di accettare, controllare o disattivare i cookie attraverso le impostazioni. Di seguito i link alle pagine di supporto dei principali browser:",
    ],
    list: ["Google Chrome", "Mozilla Firefox", "Safari", "Microsoft Edge"],
  },
  {
    title: "7. Altre tecnologie di tracciamento",
    paragraphs: [
      "Oltre ai cookie, il sito puo utilizzare tecnologie similari (come pixel e local storage) con finalita analoghe. Le stesse regole applicate ai cookie valgono anche per queste tecniche, nella misura in cui comportino il trattamento di dati personali.",
    ],
  },
  {
    title: "8. Aggiornamenti della policy",
    paragraphs: [
      "La presente Cookie Policy puo essere soggetta a modifiche nel tempo per adeguarsi a evoluzioni normative o tecniche. Eventuali aggiornamenti verranno pubblicati in questa pagina indicando la data della revisione piu recente.",
    ],
  },
  {
    title: "9. Contatti",
    paragraphs: [
      "Per ricevere ulteriori informazioni sull'utilizzo dei cookie o per esercitare i diritti previsti dalla normativa in materia di protezione dei dati, e possibile contattare Cresco all'indirizzo e-mail crescosrls@gmail.com oppure telefonicamente ai numeri +39 340 4931607 / +39 328 7833398.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <main>
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl space-y-12">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] text-[#084CA1] mb-4">
              LEGAL
            </span>
            <h1 className="text-[#084CA1] text-3xl md:text-5xl font-bold mb-4">COOKIE POLICY</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Utilizziamo cookie e tecnologie similari per offrire servizi affidabili, misurare le performance e
              migliorare l'esperienza di navigazione. In questa sezione trovi informazioni chiare su come funzionano e
              su come gestire le tue preferenze.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <article
                key={section.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm"
              >
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
              </article>
            ))}
          </div>

          <div className="text-center bg-gray-50 border border-gray-100 rounded-2xl p-10 shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              Le impostazioni dei cookie sono sempre modificabili accedendo al banner o alle preferenze del tuo
              browser. Per ogni chiarimento aggiuntivo restiamo a disposizione.
            </p>
            <div className="mt-8 flex justify-center">
              <Image src="/logo.png" alt="Cresco Logo" width={220} height={70} className="h-auto w-auto" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
