const stats = [
  { label: "Simulasi Beban Aman", value: "99.98%" },
  { label: "Monitoring Real-time", value: "250ms" },
  { label: "Rencana Mitigasi", value: "48 jam" }
];

const features = [
  {
    title: "Traffic Shaping",
    description:
      "Atur pola lalu lintas sintetis agar meniru perilaku pengguna nyata tanpa membahayakan layanan produksi."
  },
  {
    title: "Isolation Zones",
    description:
      "Segmentasi lingkungan uji dengan kontrol akses ketat untuk mencegah kebocoran data atau dampak ke sistem utama."
  },
  {
    title: "Threat Playbooks",
    description:
      "Skenario terstruktur untuk menguji mitigasi DDoS, brute force, dan abuse API secara terukur."
  }
];

const safeguards = [
  "Gunakan environment staging dengan data sintetis",
  "Batasi rate-limit dan threshold sebelum pengujian",
  "Koordinasikan jadwal uji dengan tim infrastruktur",
  "Log dan audit semua aktivitas pengujian",
  "Aktifkan proteksi WAF serta auto-scaling"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-radial-fade">
      <div className="grid-lines">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple shadow-glow" />
            <div>
              <p className="text-lg font-semibold tracking-wide">VerSec Lab</p>
              <p className="text-xs uppercase text-slate-400">Security readiness suite</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#fitur">
              Fitur
            </a>
            <a className="transition hover:text-white" href="#praktek">
              Praktik Aman
            </a>
            <a className="transition hover:text-white" href="#simulasi">
              Simulasi
            </a>
          </nav>
          <button className="rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-neon-blue hover:text-neon-blue">
            Mulai Audit
          </button>
        </header>

        <main className="mx-auto w-full max-w-6xl px-6 pb-20">
          <section className="grid gap-12 pt-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-neon-blue">
                modern &amp; futuristik
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Platform ringan untuk menguji ketahanan layanan dari DDoS &amp; ancaman siber lainnya.
              </h1>
              <p className="text-base text-slate-300 md:text-lg">
                VerSec Lab menghadirkan simulasi beban yang aman, stabil, dan terukur. Dirancang untuk
                tim keamanan yang ingin memastikan kesiapan sistem tanpa mengganggu layanan produksi.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight shadow-glow transition hover:scale-[1.02]">
                  Jalankan Simulasi
                </button>
                <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-neon-purple hover:text-neon-purple">
                  Lihat Dokumentasi
                </button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-3xl p-6 shadow-glow">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Status</p>
                    <p className="text-2xl font-semibold text-white">Secure Simulation</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
                    Stable
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Rate-limit guard</span>
                    <span className="text-white">Aktif</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
                  </div>
                </div>
                <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Traffic burst</span>
                    <span className="text-white">2.4k rps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Auto-scale window</span>
                    <span className="text-white">15 detik</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>WAF signatures</span>
                    <span className="text-white">18/18</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="fitur" className="space-y-10 pb-16 pt-20">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-neon-purple">fitur utama</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Dirancang untuk pengujian yang aman &amp; ringan.
              </h2>
              <p className="text-slate-300">
                Fokus pada pengurangan resiko, observabilitas tinggi, dan kontrol penuh terhadap
                skenario yang dijalankan.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="glass-panel rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="praktek" className="grid gap-10 pb-16 pt-6 md:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-neon-blue">praktik aman</p>
              <h2 className="text-3xl font-semibold text-white">Keamanan maksimum tanpa kompromi.</h2>
              <p className="text-slate-300">
                Uji ketahanan dilakukan dalam batas aman dengan prosedur yang transparan. Gunakan
                checklist berikut sebelum menjalankan simulasi.
              </p>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-neon-blue hover:text-neon-blue">
                Unduh SOP
              </button>
            </div>
            <div className="glass-panel rounded-3xl p-6">
              <ul className="space-y-4 text-sm text-slate-200">
                {safeguards.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neon-blue/20 text-neon-blue">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="simulasi" className="space-y-10 pb-20">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-neon-purple">simulasi</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Pilih skenario pengujian yang terukur.
              </h2>
              <p className="text-slate-300">
                Setiap modul dibangun untuk memprioritaskan stabilitas dan keamanan. Tidak ada
                tindakan ofensif otomatis; semua hasil dikurasi untuk evaluasi internal.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "DDoS Readiness",
                  detail: "Simulasi lonjakan trafik terkontrol dengan guardrail dan rollback otomatis."
                },
                {
                  title: "API Abuse",
                  detail: "Uji batas limit dan validasi payload agar endpoint tetap aman saat spike."
                },
                {
                  title: "Auth Resilience",
                  detail: "Pengujian login burst dengan verifikasi bertahap dan proteksi brute force."
                }
              ].map((card) => (
                <div key={card.title} className="glass-panel rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{card.detail}</p>
                  <button className="mt-6 w-full rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-neon-purple hover:text-neon-purple">
                    Konfigurasi
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-white">VerSec Lab</p>
              <p>Simulasi keamanan untuk ketahanan layanan modern.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em]">
              <span>Zero compromise</span>
              <span>Audit ready</span>
              <span>Secure by design</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
