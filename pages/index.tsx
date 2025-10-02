import Image from "next/image";
import Script from "next/script";
import {
  MessageSquare, Workflow, Brain, Zap, CheckCircle, Rocket, Users,
  Settings, ShieldCheck, Building2, CalendarClock, Cpu, Layers,
  Sparkles, PlugZap, BarChart4, Star, ArrowRightCircle
} from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0b0f19]/65 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-9 w-9">
            <Image src="/assets/Logo.png" alt="Infrasenseai Logo" fill className="object-contain" priority />
          </div>
          <span className="font-semibold text-lg tracking-wide">Infrasenseai</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#benefits" className="hover:text-white">Vorteile</a>
          <a href="#leistungen" className="hover:text-white">Leistungen</a>
          <a href="#pakete" className="hover:text-white">Pakete</a>
          <a href="#prozess" className="hover:text-white">Ablauf</a>
          <a href="#cases" className="hover:text-white">Use-Cases</a>
          <a href="#about" className="hover:text-white">Über uns</a>

          {/* Weißer CTA-Button */}
          <a
            href="#termin"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0b0f19] shadow hover:opacity-90 transition"
          >
            Termin buchen
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function Home() {
  const featureIcons = {
    starter: <Sparkles className="h-5 w-5" />,
    growth: <Rocket className="h-5 w-5" />,
    enterprise: <ShieldCheck className="h-5 w-5" />,
  } as const;

  return (
    <div className="min-h-screen relative text-slate-100 overflow-hidden bg-[#0b0f19]">
      {/* Hintergrund (Bild + Overlay). Lege die Datei unter /public/assets/bg-waves.jpg ab */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,15,25,0.65), rgba(11,15,25,0.85)), url('/assets/bg-waves.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                <Image src="/assets/Logo.png" alt="Infrasenseai Logo" fill className="object-contain" priority />
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">Infrasenseai</h1>
            </div>
            <p className="mt-6 text-lg text-slate-200/90 max-w-3xl mx-auto">
              Automatisierung & Dialog für moderne Unternehmen. Wir kombinieren intelligente Workflows und KI –
              für messbar schnellere, bessere Kundenprozesse.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#termin" className="px-5 py-3 rounded-xl bg-white text-[#0b0f19] font-medium">
                Termin buchen
              </a>
              <a href="#benefits" className="px-5 py-3 rounded-xl border border-white/20 text-slate-200 hover:bg-white/5">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section id="benefits" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-300/80 text-sm">Warum wir?</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Ihre Vorteile</h2>
          <div className="mt-12 grid md:grid-cols-4 gap-6 text-left">
            {[
              {icon: <CheckCircle className="h-6 w-6 text-emerald-400" />, t:'Praxisnah', d:'Wir implementieren echte Workflows – vom ersten Use-Case bis zum Go-Live.'},
              {icon: <Users className="h-6 w-6 text-blue-400" />, t:'Enablement', d:'Wissenstransfer, Guidelines & Review-Zyklen für Ihr Team.'},
              {icon: <Zap className="h-6 w-6 text-pink-400" />, t:'Breit einsetzbar', d:'Templates für Service, Vertrieb und Backoffice.'},
              {icon: <BarChart4 className="h-6 w-6 text-violet-400" />, t:'Messbar besser', d:'Kürzere Antwortzeiten, weniger manuelle Arbeit.'},
            ].map((b, i)=> (
              <div key={b.t} className="relative rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] border border-white/10 p-6">
                {/* Nummern-Badge oben links */}
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-white/10 border border-white/20 grid place-items-center text-sm font-semibold">
                  {String(i+1).padStart(2,'0')}
                </div>
                <div className="flex items-center gap-3 mt-6">
                  {b.icon}
                  <span className="font-semibold">{b.t}</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Leistungen</h2>
          <p className="mt-3 text-slate-300/90 max-w-3xl">
            Kommunikation, Automatisierung und KI – nahtlos kombiniert. Modular erweiterbar.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {icon:<MessageSquare className="h-7 w-7 text-emerald-400" />, title: 'Omnichannel-Dialog', desc: 'WhatsApp, E-Mail & Webchat zentral steuern, Teams anbinden, Vorlagen & Routing.'},
              {icon:<Workflow className="h-7 w-7 text-blue-400" />, title: 'Prozess-Automatisierung', desc: 'Tickets, Eskalationen, Monitoring, Reporting – zuverlässig und erweiterbar.'},
              {icon:<Brain className="h-7 w-7 text-pink-400" />, title: 'KI-Assistenten', desc: 'Antwortvorschläge, Chatbots & Auto-Replies mit Übergabe an Agents.'},
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  {f.icon}<span className="text-lg font-semibold">{f.title}</span>
                </div>
                <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pakete */}
      <section id="pakete" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Pakete</h2>
          <p className="mt-3 text-slate-300">Klar strukturierte Leistungspakete – transparent & erweiterbar.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                badge:'Starter',
                icon:featureIcons.starter,
                items:['Onboarding','1 Basis-Workflow','Standard-Templates & Quick-Replies','E-Mail Support'],
                cta:'Jetzt Termin buchen'
              },
              {
                badge:'Growth',
                icon:featureIcons.growth,
                items:['Alles aus Starter','KI-Antworten & Automatisierte Flows','3 zusätzliche Workflows','Monatliche Optimierung'],
                highlight:true,
                cta:'Demo & Termin'
              },
              {
                badge:'Enterprise',
                icon:featureIcons.enterprise,
                items:['Individuelle Integrationen (ERP/CRM)','Monitoring & Alarmierung','Priorisierte Umsetzung','Sicherheit & Compliance erweitert'],
                cta:'Gespräch vereinbaren'
              },
            ].map((p)=> (
              <div
                key={p.badge}
                className={`p-6 rounded-2xl border ${
                  p.highlight
                    ? 'border-white/40 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.06)]'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span
                    className={`${p.badge==='Starter' ? 'text-emerald-300' : p.badge==='Enterprise' ? 'text-violet-300' : 'text-white'}`}
                  >
                    {p.badge}
                  </span>
                  <span className="opacity-80">•</span>
                  <span className="text-slate-300 flex items-center gap-2">{p.icon} Paket</span>
                </div>

                <ul className="mt-4 text-sm text-slate-200 space-y-2 list-disc pl-5">
                  {p.items.map((i)=> (<li key={i}>{i}</li>))}
                </ul>

                {/* Paket-CTA → #termin */}
                <a
                  href="#termin"
                  className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl ${
                    p.highlight ? 'bg-white text-[#0b0f19]' : 'border border-white/20 text-slate-200 hover:bg-white/10'
                  }`}
                >
                  {p.cta}
                  <ArrowRightCircle className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="prozess" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">In 2 Wochen startklar</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              {step:'01', icon:<CalendarClock className="h-5 w-5" />, title:'Kickoff & Ziele', desc:'Use-Cases priorisieren, Kennzahlen definieren, Zugänge klären.'},
              {step:'02', icon:<PlugZap className="h-5 w-5" />, title:'Setup & Integrationen', desc:'Kanäle einrichten, Systeme anbinden, Datenflüsse planen.'},
              {step:'03', icon:<Workflow className="h-5 w-5" />, title:'Workflows & KI', desc:'Automatisierungen bauen, Bot-Flows & Vorlagen erstellen.'},
              {step:'04', icon:<ShieldCheck className="h-5 w-5" />, title:'Go-Live & Betreuung', desc:'Schulung, Monitoring aktivieren, Optimierung nach Launch.'},
            ].map((p)=> (
              <div key={p.step} className="relative p-6 rounded-2xl bg-white/5 border border-white/10">
                {/* Badge oben links */}
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center text-sm font-semibold">
                  {p.step}
                </div>
                <div className="flex items-center gap-2 font-semibold pl-10">
                  {p.icon}<span>{p.title}</span>
                </div>
                <p className="mt-3 text-sm text-slate-300 pl-10">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="cases" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Typische Use-Cases</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">So setzen Teams in unterschiedlichen Branchen mit uns schnell Wirkung frei.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {icon:<Building2 className="h-6 w-6" />, title:'Kundenservice', items:['Routing nach Anliegen','Antwortvorschläge für Agents','CSAT-Automatisierung']},
              {icon:<Settings className="h-6 w-6" />, title:'Operations', items:['Ticket-Priorisierung','Eskalations-Workflows','Monitoring & Alarme']},
              {icon:<Star className="h-6 w-6" />, title:'Vertrieb', items:['Lead-Qualifizierung','Follow-up Auto-Mails','CRM-Sync (z. B. HubSpot)']},
            ].map((c)=> (
              <div key={c.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 font-semibold">{c.icon}<span>{c.title}</span></div>
                <ul className="mt-3 text-sm text-slate-200 space-y-2 list-disc pl-5">
                  {c.items.map((i)=> (<li key={i}>{i}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über uns – dein Text */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Über uns</h2>
          <div className="mt-3 text-slate-300 space-y-4 leading-relaxed">
            <p>
              Wir sind Infrasenseai – eine Agentur, die Unternehmen dabei unterstützt, ihre Prozesse radikal zu optimieren.
              Mit smarter Automatisierung, KI und innovativer Kommunikation sorgen wir dafür, dass unsere Kunden mehr erreichen
              mit weniger Aufwand: weniger Kosten, weniger Ressourcen, weniger Zeit – dafür mehr Ergebnisse, mehr
              Zufriedenheit und mehr Zukunftssicherheit.
            </p>
            <p>
              Unser Ziel: Unternehmen leistungsfähiger, kundenorientierter und nachhaltiger aufzustellen – damit sie in einer
              digitalen Welt nicht nur mithalten, sondern vorausgehen.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Terminbuchung */}
      <section id="termin" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Termin buchen</h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/infrasenseai/discovery-call"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </section>

      {/* Calendly Script */}
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image src="/assets/Logo.png" alt="Infrasenseai Logo" fill className="object-contain" />
            </div>
            <span className="text-sm">© {new Date().getFullYear()} Infrasenseai – Alle Rechte vorbehalten.</span>
          </div>
          <div className="text-xs text-slate-400">Impressum · Datenschutz</div>
        </div>
      </footer>
    </div>
  );
}
