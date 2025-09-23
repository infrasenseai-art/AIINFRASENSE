import { MessageSquare, Workflow, Brain, Zap, CheckCircle, Rocket, Users, Settings, ShieldCheck, Building2, CalendarClock, Cpu, Layers, Sparkles, PlugZap, BarChart4, Star, ArrowRightCircle } from "lucide-react";
import type { ComponentType } from "react";

export default function Home() {
  // Icons nur als Komponenten-Referenzen, nicht als JSX
  const featureIcons: Record<"starter"|"growth"|"enterprise", ComponentType<any>> = {
    starter: Sparkles,
    growth: Rocket,
    enterprise: ShieldCheck
  };

  return (
    <div className="min-h-screen relative text-slate-100 overflow-hidden">
      {/* Hero-Beispiel */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0b0f19]/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-white text-[#0b0f19] grid place-items-center font-bold">I</div>
            <span className="font-semibold text-lg tracking-wide">Infrasenseai</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#benefits" className="hover:text-white">Vorteile</a>
            <a href="#leistungen" className="hover:text-white">Leistungen</a>
            <a href="#pakete" className="hover:text-white">Pakete</a>
            <a href="#prozess" className="hover:text-white">Ablauf</a>
            <a href="#cases" className="hover:text-white">Use-Cases</a>
            <a href="#about" className="hover:text-white">Über uns</a>
            <a href="#kontakt" className="hover:text-white">Kontakt</a>
          </nav>
          <a href="#kontakt" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0b0f19] shadow hover:opacity-90 transition">Jetzt anfragen</a>
        </div>
      </header>

      {/* Pakete-Beispiel */}
      <section id="pakete" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Pakete</h2>
          <p className="mt-3 text-slate-300">Klar strukturierte Leistungspakete – transparent & erweiterbar.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {badge:"Starter", icon:featureIcons.starter, items:["Superchat-Onboarding","1 Basis-Workflow in n8n","Standard-Templates & Quick-Replies","E-Mail Support"]},
              {badge:"Growth", icon:featureIcons.growth, items:["Alles aus Starter","KI-Antworten & Bot-Flows","3 zusätzliche n8n-Workflows","Monatliche Optimierung"]},
              {badge:"Enterprise", icon:featureIcons.enterprise, items:["Individuelle Integrationen (ERP/CRM)","Monitoring & Alarmierung","Priorisierte Umsetzung","Sicherheit & Compliance erweitert"]},
            ].map((p, i) => (
              <div key={p.badge} className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
                <div className="flex items-center gap-2 text-sm font-semibold mb-4">
                  <span className={`${p.badge==="Starter" ? "text-emerald-300" : p.badge==="Enterprise" ? "text-violet-300" : "text-white"}`}>{p.badge}</span>
                  <span className="opacity-80">•</span>
                  <span className="text-slate-300 flex items-center gap-2">
                    <p.icon className="h-5 w-5" /> Paket
                  </span>
                </div>
                <ul className="mt-4 text-sm text-slate-200 space-y-2 list-disc pl-5">
                  {p.items.map((it) => (<li key={it}>{it}</li>))}
                </ul>
                <a href="#kontakt" className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0b0f19]">
                  {p.badge==="Enterprise" ? "Gespräch vereinbaren" : p.badge==="Growth" ? "Demo buchen" : "Anfragen"}
                  <ArrowRightCircle className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
