<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>InfrasenseAI | AI Consulting & Prozessautomatisierung</title>
  <meta name="description" content="InfrasenseAI ist Ihre Consulting-Boutique für AI-gestützte Prozessautomatisierung, Omnichannel-Service und Integrationen. Von Strategie bis Go-Live – messbar in Wochen." />
  <meta name="theme-color" content="#0b1220" />

  <!-- Open Graph -->
  <meta property="og:title" content="InfrasenseAI | AI Consulting & Prozessautomatisierung" />
  <meta property="og:description" content="Strategie, Implementierung, Enablement: AI-Workflows, Omnichannel und Integrationen für messbare Ergebnisse." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://infrasenseai.de/" />

  <!-- Tailwind via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
          },
          colors: {
            ink: '#0b1220',
            slate2: '#0f1b33',
            brand: '#6d5efc',
            brand2: '#22d3ee'
          },
          boxShadow: {
            soft: '0 12px 40px rgba(0,0,0,.18)'
          }
        }
      }
    }
  </script>

  <style>
    .grid-bg {
      background-image:
        radial-gradient(circle at 1px 1px, rgba(255,255,255,.10) 1px, transparent 0);
      background-size: 24px 24px;
    }
    html { scroll-behavior: smooth; }
  </style>
</head>

<body class="bg-ink text-white antialiased">
  <!-- Top bar -->
  <div class="border-b border-white/10 bg-black/20">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-white/70">
      <div class="flex items-center gap-3">
        <span class="inline-flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>Consulting • Automation • AI Enablement</span>
        </span>
      </div>
      <div class="flex items-center gap-4">
        <a class="hover:text-white" href="#kontakt">Kontakt</a>
        <a class="hover:text-white" href="#faq">FAQ</a>
      </div>
    </div>
  </div>

  <!-- Header / Nav -->
  <header class="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <a href="#" class="flex items-center gap-2">
        <div class="h-9 w-9 rounded-xl bg-gradient-to-br from-brand to-brand2"></div>
        <div class="leading-tight">
          <div class="text-sm font-semibold tracking-wide">InfrasenseAI</div>
          <div class="text-[11px] text-white/60">AI Consulting & Automatisierung</div>
        </div>
      </a>

      <nav class="hidden items-center gap-6 text-sm text-white/80 md:flex">
        <a class="hover:text-white" href="#leistungen">Leistungen</a>
        <a class="hover:text-white" href="#branchen">Branchen</a>
        <a class="hover:text-white" href="#vorgehen">Vorgehen</a>
        <a class="hover:text-white" href="#cases">Case Studies</a>
        <a class="hover:text-white" href="#stimmen">Stimmen</a>
        <a class="hover:text-white" href="#faq">FAQ</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="#kontakt"
           class="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 md:inline-flex">
          Erstgespräch
        </a>
        <button id="menuBtn"
                class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 md:hidden"
                aria-label="Menü öffnen">
          <svg xmlns="https://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div id="mobileNav" class="hidden border-t border-white/10 bg-ink/95 md:hidden">
      <div class="mx-auto max-w-6xl px-4 py-3 text-sm text-white/80">
        <div class="flex flex-col gap-3">
          <a class="hover:text-white" href="#leistungen">Leistungen</a>
          <a class="hover:text-white" href="#branchen">Branchen</a>
          <a class="hover:text-white" href="#vorgehen">Vorgehen</a>
          <a class="hover:text-white" href="#cases">Case Studies</a>
          <a class="hover:text-white" href="#stimmen">Stimmen</a>
          <a class="hover:text-white" href="#faq">FAQ</a>
          <a class="mt-2 inline-flex justify-center rounded-xl bg-gradient-to-r from-brand to-brand2 px-4 py-2 font-semibold text-ink"
             href="#kontakt">Erstgespräch buchen</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero -->
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-25"></div>
    <div class="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand/30 to-brand2/20 blur-3xl"></div>

    <div class="mx-auto max-w-6xl px-4 pb-16 pt-14 md:pb-24 md:pt-20">
      <div class="grid items-center gap-10 md:grid-cols-2">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span class="h-2 w-2 rounded-full bg-brand2"></span>
            <span>Von Strategie bis Go-Live • messbar in Wochen</span>
          </div>

          <h1 class="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            AI Consulting für <span class="bg-gradient-to-r from-brand to-brand2 bg-clip-text text-transparent">automatisierte</span> Kunden- & Betriebsprozesse.
          </h1>

          <p class="mt-4 max-w-xl text-base leading-relaxed text-white/75">
            Wir beraten, bauen und übergeben AI-gestützte Workflows, Omnichannel-Service und Integrationen (CRM/ERP/Ticketing).
            Fokus: klare Business-KPIs, robuste Umsetzung, Enablement für Ihr Team.
          </p>

          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand to-brand2 px-5 py-3 font-semibold text-ink shadow-soft">
              Erstgespräch anfragen
            </a>
            <a href="#cases" class="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10">
              Case Studies ansehen
            </a>
          </div>

          <div class="mt-8 grid grid-cols-3 gap-3 text-xs text-white/70">
            <div class="rounded-xl border border-white/10 bg-white/5 p-3">
              <div class="text-white">2–6 Wochen</div>
              <div class="mt-1 text-white/60">bis erster Go-Live</div>
            </div>
            <div class="rounded-xl border border-white/10 bg-white/5 p-3">
              <div class="text-white">End-to-End</div>
              <div class="mt-1 text-white/60">Strategie → Betrieb</div>
            </div>
            <div class="rounded-xl border border-white/10 bg-white/5 p-3">
              <div class="text-white">DSGVO-Fokus</div>
              <div class="mt-1 text-white/60">Privacy by Design</div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-soft">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-sm font-semibold">KPI-Board (Beispiel)</div>
                <div class="mt-1 text-xs text-white/60">Transparenz für Business & IT</div>
              </div>
              <div class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Live-Reporting</div>
            </div>

            <div class="mt-6 grid gap-3">
              <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium">Deflection Rate</div>
                  <div class="text-sm font-semibold text-emerald-300">+28%</div>
                </div>
                <div class="mt-2 h-2 w-full rounded-full bg-white/10">
                  <div class="h-2 w-[72%] rounded-full bg-gradient-to-r from-brand to-brand2"></div>
                </div>
              </div>

              <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium">Antwortzeit</div>
                  <div class="text-sm font-semibold text-emerald-300">-41%</div>
                </div>
                <div class="mt-2 h-2 w-full rounded-full bg-white/10">
                  <div class="h-2 w-[64%] rounded-full bg-gradient-to-r from-brand to-brand2"></div>
                </div>
              </div>

              <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium">Automatisierte Schritte</div>
                  <div class="text-sm font-semibold text-emerald-300">+115 / Woche</div>
                </div>
                <div class="mt-2 text-xs text-white/60">
                  Routing • Vorqualifizierung • Follow-ups • Syncs • Eskalationen
                </div>
              </div>
            </div>

            <div class="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div class="text-xs text-white/60">Typischer Stack</div>
              <div class="mt-2 flex flex-wrap gap-2 text-xs">
                <span class="rounded-full border border-white/10 bg-black/20 px-3 py-1">n8n</span>
                <span class="rounded-full border border-white/10 bg-black/20 px-3 py-1">WhatsApp</span>
                <span class="rounded-full border border-white/10 bg-black/20 px-3 py-1">CRM (HubSpot)</span>
                <span class="rounded-full border border-white/10 bg-black/20 px-3 py-1">Ticketing</span>
                <span class="rounded-full border border-white/10 bg-black/20 px-3 py-1">LLM / RAG</span>
              </div>
            </div>
          </div>

          <div class="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl"></div>
        </div>
      </div>

      <div class="mt-14 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-xs text-white/70">
        <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div class="font-medium text-white/80">Typische Integrationen & Plattformen</div>
          <div class="flex flex-wrap gap-2">
            <span class="rounded-full border border-white/10 bg-black/20 px-3 py-1">CRM</span>
            <span class="rounded-full border border-white/10 bg-black/20 px-3 py-1">ERP</span>
            <span class="rounded-full border border-white/10 bg-black/20 px-3 py-1">Ticketing</span>
            <span class="rounded-full border border-white/10 bg-black/20 px-3 py-1">Telefonie</span>
            <span class="rounded-full border border-white/10 bg-black/20 px-3 py-1">E-Mail</span>
            <span class="rounded-full border border-white/10 bg-black/20 px-3 py-1">WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Leistungen -->
  <section id="leistungen" class="border-t border-white/10">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 class="text-3xl font-semibold">Leistungen</h2>
          <p class="mt-2 max-w-2xl text-white/70">
            Consulting-Boutique statt „Tool-Implementierung“. Wir starten bei Zielen & Prozessen, liefern robuste Automatisierung und befähigen Ihr Team.
          </p>
        </div>
        <a href="#kontakt" class="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10">
          Leistungen besprechen
        </a>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="text-xs text-white/60">01</div>
          <h3 class="mt-2 text-lg font-semibold">AI Strategy & Process Design</h3>
          <p class="mt-2 text-sm text-white/70">
            Use-Cases priorisieren, KPIs definieren, Daten & Risiken bewerten. Ergebnis: Roadmap, Architektur, Governance.
          </p>
          <ul class="mt-4 space-y-2 text-sm text-white/70">
            <li>• KPI-Framework & Business Case</li>
            <li>• Prozess-Mapping (As-Is/To-Be)</li>
            <li>• Risiko/Compliance-Check</li>
          </ul>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="text-xs text-white/60">02</div>
          <h3 class="mt-2 text-lg font-semibold">Automation & Integrationen</h3>
          <p class="mt-2 text-sm text-white/70">
            End-to-End Workflows inkl. Monitoring: Routing, Eskalationen, Syncs, Datenvalidierung, Reporting.
          </p>
          <ul class="mt-4 space-y-2 text-sm text-white/70">
            <li>• CRM/ERP/Ticketing-Sync</li>
            <li>• SLAs, Alerts, Observability</li>
            <li>• Stabiler Betrieb & Doku</li>
          </ul>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="text-xs text-white/60">03</div>
          <h3 class="mt-2 text-lg font-semibold">AI Assistants & Enablement</h3>
          <p class="mt-2 text-sm text-white/70">
            Assistenten für Service & Sales: Antwortvorschläge, RAG, Guardrails, Human Handover – plus Trainings & Guidelines.
          </p>
          <ul class="mt-4 space-y-2 text-sm text-white/70">
            <li>• Knowledge Base / RAG</li>
            <li>• Prompting & Qualitätsregeln</li>
            <li>• Schulung & Playbooks</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Branchen -->
  <section id="branchen" class="border-t border-white/10 bg-slate2/35">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-3xl font-semibold">Branchen & typische Outcomes</h2>
      <p class="mt-2 max-w-2xl text-white/70">
        Wir arbeiten branchenübergreifend – dort, wo viele Anfragen, Medienbrüche oder wiederkehrende Prozesse bestehen.
      </p>

      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 class="text-lg font-semibold">Energie & Infrastruktur</h3>
          <p class="mt-2 text-sm text-white/70">Anschlussanfragen, Status-Updates, Dokumenten-Flows, Terminierung, Eskalationen.</p>
          <div class="mt-4 text-xs text-white/60">Outcome</div>
          <div class="mt-1 text-sm text-white/80">Weniger Rückfragen, schnellerer Durchlauf, klarere Verantwortlichkeiten.</div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 class="text-lg font-semibold">Service-intensive Unternehmen</h3>
          <p class="mt-2 text-sm text-white/70">Omnichannel-Routing, Auto-Replies, Ticket-Vorqualifizierung, CSAT-Flows.</p>
          <div class="mt-4 text-xs text-white/60">Outcome</div>
          <div class="mt-1 text-sm text-white/80">Kürzere Antwortzeiten, höhere CSAT, mehr Kapazität im Team.</div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 class="text-lg font-semibold">Sales & Operations</h3>
          <p class="mt-2 text-sm text-white/70">Lead-Qualifizierung, Follow-ups, CRM-Hygiene, Angebots-Pipelines.</p>
          <div class="mt-4 text-xs text-white/60">Outcome</div>
          <div class="mt-1 text-sm text-white/80">Mehr Conversion, weniger manuelle Aufgaben, bessere Datenqualität.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Vorgehen -->
  <section id="vorgehen" class="border-t border-white/10">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <div class="flex flex-
