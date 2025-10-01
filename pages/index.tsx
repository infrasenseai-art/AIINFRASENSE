import Image from "next/image";
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
          <div className="relative h-16 w-16">
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
          <a href="#kontakt" className="hover:text-white">Kontakt</a>
        </nav>
        <a href="#kontakt" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0b0f19] shadow hover:opacity-90 transition">
          Jetzt anfragen
        </a>
      </div>
    </header>
  );
}

export default function Home() {
  // Icons direkt als JSX-Elemente (kein komplizierter Typ notwendig)
  const featureIcons = {
    starter: <Sparkles className="h-5 w-5" />,
    growth: <Rocket className="h-5 w-5" />,
    enterprise: <ShieldCheck className="h-5 w-5" />,
  } as const;

  return (
    <div className="min-h-screen relative text-slate-100 overflow-hidden bg-[#0b0f19]">
      {/* Hintergrundbild */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/assets/neon-blobs.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0b0f19]/70" />
      </div>

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
            <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
              Automatisierung & Dialog für moderne Unternehmen. Wir kombinieren
              intelligente Workflows und KI – für messbar schnellere, bessere Kundenprozesse.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#kontakt" className="px-5 py-3 rounded-xl bg-white text-[#0b0f19] font-medium">Kostenloses Gespräch</a>
              <a href="#benefits" className="px-5 py-3 rounded-xl border border-white/20 text-slate-200 hover:bg-white/5">Mehr erfahren</a>
            </div>

            {/* Hero-Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {k:'Anwendungsfälle', v:'Service · Ops · Vertrieb', icon:<Layers className="h-4 w-4"/>},
                {k:'Kickstart', v:'Go-Live in 2 Wochen', icon:<Rocket className="h-4 w-4"/>},
                {k:'Kanäle', v:'WhatsApp · Web · Mail', icon:<MessageSquare className="h-4 w-4"/>},
                {k:'Stack', v:'Individuelle Workflows · Automatisierte Kommunikation · KI', icon:<Cpu className="h-4 w-4"/>},
              ].map((s)=> (
                <div key={s.k} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
                    {s.icon}<span>{s.k}</span>
                  </div>
                  <div className="mt-1 text-sm text-slate-100">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section id="benefits" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">Warum wir?</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Ihre Vorteile</h2>
          <p className="mt-3 text-slate-300 max-w-3xl mx-auto">
            Alle Bausteine, um Ihre Abläufe zu beschleunigen – mit Best Practices und messbaren Ergebnissen.
          </p>

          <div className="mt-12 grid md:grid-cols-4 gap-6 text-left">
            {[
              {icon: <CheckCircle className="h-6 w-6 text-emerald-400" />, t:'Praxisnah', d:'Wir implementieren echte Workflows – vom ersten Use-Case bis zum Go-Live.'},
              {icon: <Users className="h-6 w-6 text-blue-400" />, t:'Enablement', d:'Wissenstransfer, Guidelines & Review-Zyklen für Ihr Team.'},
              {icon: <Zap className="h-6 w-6 text-pink-400" />, t:'Breit einsetzbar', d:'Templates für Service, Vertrieb und Backoffice.'},
              {icon: <BarChart4 className="h-6 w-6 text-violet-400" />, t:'Messbar besser', d:'Kürzere Antwortzeiten, weniger manuelle Arbeit.'},
            ].map((b, i)=> (
              <div key={b.t} className="relative rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] border border-white/10 p-6">
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
          <p className="mt-3 text-slate-300 max-w-3xl">
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
          <p className="mt-3 text-slate-300">Klar strukturierte Leistungspakete – transparent & erweiterbar. Preise besprechen wir im Erstgespräch.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {badge:'Starter', icon:featureIcons.starter, items:['Onboarding','1 Basis-Workflow','Standard-Templates & Quick-Replies','E-Mail Support']},
              {badge:'Growth', icon:featureIcons.growth, items:['Alles aus Starter','KI-Antworten & Automatisierte Flows','3 zusätzliche Workflows','Monatliche Optimierung']},
              {badge:'Enterprise', icon:featureIcons.enterprise, items:['Individuelle Integrationen (ERP/CRM)','Monitoring & Alarmierung','Priorisierte Umsetzung','Sicherheit & Compliance erweitert']},
            ].map((p)=> (
              <div key={p.badge} className={`p-6 rounded-2xl border ${p.badge==='Growth' ? 'border-white/40 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.06)]' : 'border-white/10 bg-white/5'}`}>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className={`${p.badge==='Starter' ? 'text-emerald-300' : p.badge==='Enterprise' ? 'text-violet-300' : 'text-white'}`}>{p.badge}</span>
                  <span className="opacity-80">•</span>
                  <span className="text-slate-300 flex items-center gap-2">{p.icon} Paket</span>
                </div>
                <ul className="mt-4 text-sm text-slate-200 space-y-2 list-disc pl-5">
                  {p.items.map((i)=> (<li key={i}>{i}</li>))}
                </ul>
                <a href="#kontakt" className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0b0f19]">
                  {p.badge==='Enterprise' ? 'Gespräch vereinbaren' : p.badge==='Growth' ? 'Demo buchen' : 'Anfragen'}
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
              <div key={p.step} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 grid place-items-center text-sm font-semibold">{p.step}</div>
                  <div className="flex items-center gap-2 font-semibold">{p.icon}<span>{p.title}</span></div>
                </div>
                <p className="mt-3 text-sm text-slate-300">{p.desc}</p>
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

      {/* Über uns */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Über uns</h2>
          <p className="mt-3 text-slate-300">
            Wir sind Infrasenseai – ein Team mit Leidenschaft für Automatisierung, KI und smarte Kommunikation.
            Unser Ziel ist es, Unternehmen effizienter, kundenfreundlicher und zukunftssicher aufzustellen.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Kostenloses Erstgespräch</h2>
            <p className="mt-3 text-slate-300">
              Erzählen Sie uns kurz von Ihrem Anwendungsfall. Wir melden uns zeitnah mit einem konkreten Vorschlag.
            </p>
            <div className="mt-6 p-5 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-sm text-slate-300">Kontakt</div>
              <div className="mt-2 text-xs text-slate-400">infrasenseai@gmail.com</div>
            </div>
          </div>
          <form className="p-6 rounded-2xl border border-white/10 bg-white/5 shadow-sm grid gap-4">
            <div>
              <label className="text-sm">Name</label>
              <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 placeholder-slate-400" placeholder="Ihr Name" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">E-Mail</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 placeholder-slate-400" placeholder="name@firma.de" />
              </div>
              <div>
                <label className="text-sm">Unternehmen</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 placeholder-slate-400" placeholder="Firmenname" />
              </div>
            </div>
            <div>
              <label className="text-sm">Ihr Anliegen</label>
              <textarea className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 placeholder-slate-400" rows={4} placeholder="Kurze Beschreibung Ihres Use-Cases" />
            </div>
            <button className="mt-2 inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-[#0b0f19] hover:opacity-90">
              Anfrage senden <ArrowRightCircle className="h-4 w-4" />
            </button>
            <div className="text-xs text-slate-400">Mit Absenden stimmen Sie unserer Kontaktaufnahme zu. Wir teilen keine Daten mit Dritten.</div>
          </form>
        </div>
      </section>

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
