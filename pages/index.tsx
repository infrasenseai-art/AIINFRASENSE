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

  <!-- Tailwind via CDN (schnell & einfach) -->
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
    /* Subtle background grid */
    .grid-bg {
      background-image:
        radial-gradient(circle at 1px 1px, rgba(255,255,255,.10) 1px, transparent 0);
      background-size: 24px 24px;
    }
    /* Smooth scroll */
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
        <!-- Replace with your logo -->
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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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

        <!-- Hero card -->
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

      <!-- Trust bar -->
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
      <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 class="text-3xl font-semibold">Vorgehen</h2>
          <p class="mt-2 max-w-2xl text-white/70">
            Klarer, consulting-typischer Ablauf: Diagnose → Delivery → Enablement. So entsteht Wirkung – ohne Chaos.
          </p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          Typischer Start: <span class="font-semibold text-white">2–6 Wochen</span>
        </div>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-4">
        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="text-xs text-white/60">01 • Diagnose</div>
          <div class="mt-2 text-lg font-semibold">Kickoff & KPI-Ziele</div>
          <p class="mt-2 text-sm text-white/70">Use-Cases, Scope, Daten, Stakeholder, Success-Metriken.</p>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="text-xs text-white/60">02 • Design</div>
          <div class="mt-2 text-lg font-semibold">Architektur & Security</div>
          <p class="mt-2 text-sm text-white/70">Integrationen, Rollen, Logging, Guardrails, DSGVO-Konzept.</p>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="text-xs text-white/60">03 • Delivery</div>
          <div class="mt-2 text-lg font-semibold">Build & Pilot</div>
          <p class="mt-2 text-sm text-white/70">Workflow-Umsetzung, Tests, Monitoring, Pilot in Teilbereich.</p>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="text-xs text-white/60">04 • Scale</div>
          <div class="mt-2 text-lg font-semibold">Go-Live & Enablement</div>
          <p class="mt-2 text-sm text-white/70">Training, Playbooks, Review-Zyklen, kontinuierliche Optimierung.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Case Studies -->
  <section id="cases" class="border-t border-white/10 bg-slate2/35">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-3xl font-semibold">Case Studies (Beispiele)</h2>
      <p class="mt-2 max-w-2xl text-white/70">
        Hier bitte echte Cases ergänzen, sobald ihr sie habt. Bis dahin funktionieren „Beispiel-Cases“ als Platzhalter.
      </p>

      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="text-xs text-white/60">Kundenservice</div>
          <h3 class="mt-2 text-lg font-semibold">Omnichannel Routing + Agent Assist</h3>
          <p class="mt-2 text-sm text-white/70">Anliegen-Routing, Auto-Replies, Antwortvorschläge, Übergabe an Agents.</p>
          <div class="mt-4 space-y-2 text-sm">
            <div class="flex justify-between text-white/70"><span>Antwortzeit</span><span class="font-semibold text-emerald-300">-40%</span></div>
            <div class="flex justify-between text-white/70"><span>Tickets deflected</span><span class="font-semibold text-emerald-300">+25%</span></div>
          </div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="text-xs text-white/60">Sales Ops</div>
          <h3 class="mt-2 text-lg font-semibold">Lead-Qualifizierung + CRM Hygiene</h3>
          <p class="mt-2 text-sm text-white/70">Vorqualifizierung, Follow-ups, Dubletten-Check, Pipeline-Sync.</p>
          <div class="mt-4 space-y-2 text-sm">
            <div class="flex justify-between text-white/70"><span>Conversion</span><span class="font-semibold text-emerald-300">+12%</span></div>
            <div class="flex justify-between text-white/70"><span>Manuelle Arbeit</span><span class="font-semibold text-emerald-300">-30%</span></div>
          </div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="text-xs text-white/60">Operations</div>
          <h3 class="mt-2 text-lg font-semibold">Eskalationen + Monitoring/Alerts</h3>
          <p class="mt-2 text-sm text-white/70">SLAs, Alarme, Status-Updates, Reports, Verantwortlichkeiten.</p>
          <div class="mt-4 space-y-2 text-sm">
            <div class="flex justify-between text-white/70"><span>SLA-Breach</span><span class="font-semibold text-emerald-300">-18%</span></div>
            <div class="flex justify-between text-white/70"><span>Transparenz</span><span class="font-semibold text-emerald-300">↑</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stimmen -->
  <section id="stimmen" class="border-t border-white/10">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-3xl font-semibold">Was Kund:innen sagen</h2>
      <p class="mt-2 max-w-2xl text-white/70">Kurz, glaubwürdig, consulting-style. (Ersetzt die Namen/Branchen, sobald ihr echte Zitate habt.)</p>

      <div class="mt-10 grid gap-4 md:grid-cols-2">
        <figure class="rounded-3xl border border-white/10 bg-white/5 p-7">
          <blockquote class="text-white/80">
            „Wir haben Standardanfragen automatisiert und gleichzeitig saubere Übergaben an das Team behalten. Ergebnis: schnellere Antworten, weniger Stress.“
          </blockquote>
          <figcaption class="mt-4 text-sm text-white/60">
            <span class="font-semibold text-white/80">Leitung Customer Operations</span> • Service-Unternehmen
          </figcaption>
        </figure>

        <figure class="rounded-3xl border border-white/10 bg-white/5 p-7">
          <blockquote class="text-white/80">
            „Die Integrationen sind stabil, das Monitoring ist klar – und unser Team wurde wirklich befähigt, selbst weiterzuentwickeln.“
          </blockquote>
          <figcaption class="mt-4 text-sm text-white/60">
            <span class="font-semibold text-white/80">Head of RevOps</span> • B2B-SaaS
          </figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Compliance / FAQ -->
  <section id="faq" class="border-t border-white/10 bg-slate2/35">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 class="text-3xl font-semibold">FAQ & Compliance</h2>
          <p class="mt-2 max-w-2xl text-white/70">Datenschutz & Governance sind Teil des Konzepts, nicht ein nachträgliches Add-on.</p>
        </div>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-2">
        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <button class="faqBtn flex w-full items-start justify-between gap-4 text-left">
            <div>
              <div class="text-lg font-semibold">Ist das DSGVO-konform?</div>
              <div class="mt-1 text-sm text-white/60">Privacy by Design, Datenminimierung, Rollen & Logging.</div>
            </div>
            <span class="mt-1 text-white/70">⌄</span>
          </button>
          <div class="faqPanel mt-4 hidden text-sm text-white/70">
            Ja – sofern Architektur, Datenflüsse und Auftragsverarbeitung sauber umgesetzt sind. Wir planen Workflows mit Verschlüsselung,
            Zugriffskontrollen, Audit-Trails und Datenminimierung. Externe Dienste nur mit passenden Vereinbarungen (z. B. AVV) und
            transparenten Verarbeitungspfaden.
          </div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <button class="faqBtn flex w-full items-start justify-between gap-4 text-left">
            <div>
              <div class="text-lg font-semibold">Wie schnell sieht man Ergebnisse?</div>
              <div class="mt-1 text-sm text-white/60">Pilot-Go-Live in Wochen, Skalierung danach.</div>
            </div>
            <span class="mt-1 text-white/70">⌄</span>
          </button>
          <div class="faqPanel mt-4 hidden text-sm text-white/70">
            Oft liefern wir in 2–6 Wochen einen ersten messbaren Use-Case (Pilot). Danach skalieren wir entlang der priorisierten Roadmap
            und etablieren Review-Zyklen für kontinuierliche Verbesserung.
          </div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <button class="faqBtn flex w-full items-start justify-between gap-4 text-left">
            <div>
              <div class="text-lg font-semibold">Wo werden Daten verarbeitet?</div>
              <div class="mt-1 text-sm text-white/60">EU-Fokus, klare Datenflüsse.</div>
            </div>
            <span class="mt-1 text-white/70">⌄</span>
          </button>
          <div class="faqPanel mt-4 hidden text-sm text-white/70">
            Nach Möglichkeit in der EU. Wenn Drittsysteme nötig sind, setzen wir auf Datenminimierung, technische Schutzmaßnahmen und
            vertragliche Absicherung. Wir dokumentieren die Verarbeitung transparent.
          </div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <button class="faqBtn flex w-full items-start justify-between gap-4 text-left">
            <div>
              <div class="text-lg font-semibold">EU AI Act – was bedeutet das für uns?</div>
              <div class="mt-1 text-sm text-white/60">Risikoklassifizierung, Transparenz, Guardrails.</div>
            </div>
            <span class="mt-1 text-white/70">⌄</span>
          </button>
          <div class="faqPanel mt-4 hidden text-sm text-white/70">
            Wir bewerten Use-Cases, Daten und Risiken, schaffen Transparenz und bauen Guardrails ein (z. B. Human-in-the-Loop,
            Protokollierung, Qualitätsregeln). So bleibt eure Lösung anpassbar, auch wenn sich Anforderungen ändern.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Kontakt -->
  <section id="kontakt" class="border-t border-white/10">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <div class="grid gap-8 md:grid-cols-2">
        <div>
          <h2 class="text-3xl font-semibold">Erstgespräch anfragen</h2>
          <p class="mt-2 max-w-xl text-white/70">
            Schreib kurz euren Status (Branche, Systeme, Volumen, Ziel-KPIs). Wir antworten mit einem konkreten Vorschlag für die nächsten Schritte.
          </p>

          <div class="mt-8 space-y-3 text-sm text-white/75">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div class="font-semibold text-white/85">Was wir im Erstgespräch klären</div>
              <div class="mt-2 text-white/70">Use-Cases • Daten • Stakeholder • KPI-Ziele • Zeitplan • Budgetrahmen</div>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div class="font-semibold text-white/85">Typische Deliverables</div>
              <div class="mt-2 text-white/70">Roadmap • Architektur-Skizze • Pilot-Plan • Aufwand & Timeline</div>
            </div>
          </div>

          <!-- Replace with your Calendly / booking link -->
          <a class="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand to-brand2 px-5 py-3 font-semibold text-ink shadow-soft"
             href="https://infrasenseai.de/#kontakt">
            Terminlink einfügen (z. B. Calendly)
          </a>
        </div>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <form class="space-y-4" action="#" method="post" onsubmit="return false;">
            <div>
              <label class="text-sm text-white/70">Name</label>
              <input class="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand/60"
                     placeholder="Max Mustermann" />
            </div>
            <div>
              <label class="text-sm text-white/70">E-Mail</label>
              <input type="email"
                     class="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand/60"
                     placeholder="max@firma.de" />
            </div>
            <div>
              <label class="text-sm text-white/70">Worum geht’s?</label>
              <textarea rows="5"
                        class="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand/60"
                        placeholder="Branche, Systeme (CRM/ERP/Ticketing), Volumen, Ziele, Timeline …"></textarea>
            </div>

            <button class="w-full rounded-xl bg-white px-4 py-3 font-semibold text-ink hover:bg-white/90">
              Anfrage senden (Hook integrieren)
            </button>

            <p class="text-xs text-white/50">
              Hinweis: Dieses Formular ist ein Platzhalter. Ich kann dir auch direkt die passende Integration bauen (Formspree, Netlify Forms, HubSpot Forms etc.).
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-white/10 bg-black/20">
    <div class="mx-auto max-w-6xl px-4 py-10">
      <div class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <div class="flex items-center gap-2">
            <div class="h-8 w-8 rounded-xl bg-gradient-to-br from-brand to-brand2"></div>
            <div class="font-semibold">InfrasenseAI</div>
          </div>
          <p class="mt-2 max-w-md text-sm text-white/60">
            AI Consulting & Prozessautomatisierung für moderne Unternehmen – mit Fokus auf messbare Outcomes, Robustheit und Enablement.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-6 text-sm text-white/70 md:grid-cols-3">
          <div class="space-y-2">
            <div class="font-semibold text-white/80">Navigation</div>
            <a class="block hover:text-white" href="#leistungen">Leistungen</a>
            <a class="block hover:text-white" href="#vorgehen">Vorgehen</a>
            <a class="block hover:text-white" href="#cases">Case Studies</a>
          </div>
          <div class="space-y-2">
            <div class="font-semibold text-white/80">Kontakt</div>
            <a class="block hover:text-white" href="#kontakt">Erstgespräch</a>
            <a class="block hover:text-white" href="mailto:hello@infrasenseai.de">hello@infrasenseai.de</a>
          </div>
          <div class="space-y-2">
            <div class="font-semibold text-white/80">Rechtliches</div>
            <a class="block hover:text-white" href="/impressum">Impressum</a>
            <a class="block hover:text-white" href="/datenschutz">Datenschutz</a>
          </div>
        </div>
      </div>

      <div class="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
        <div>© <span id="year"></span> InfrasenseAI. Alle Rechte vorbehalten.</div>
        <div>Made for a consulting-grade presence.</div>
      </div>
    </div>
  </footer>

  <script>
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    menuBtn?.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    // FAQ accordion
    const btns = document.querySelectorAll('.faqBtn');
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const panel = btn.parentElement.querySelector('.faqPanel');
        const isOpen = !panel.classList.contains('hidden');
        document.querySelectorAll('.faqPanel').forEach(p => p.classList.add('hidden'));
        if (!isOpen) panel.classList.remove('hidden');
      });
    });

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
