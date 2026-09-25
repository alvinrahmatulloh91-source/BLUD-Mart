import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, u as unescapeHTML } from '../../chunks/astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BzUaCFSz.mjs';
import { $ as $$BludHeader, a as $$BludFooter } from '../../chunks/BludFooter_DZldsl2r.mjs';
import { $ as $$Link } from '../../chunks/Link_Bg6bhCdz.mjs';
import { i as icon } from '../../chunks/icons_BgEnv9BM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Tentang = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tentang BLUD - SKANSABA BLUD-MART" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BludHeader", $$BludHeader, {})} ${maybeRenderHead()}<main class="py-12"> <div class="container max-w-4xl"> ${renderComponent($$result2, "Link", $$Link, { "href": "/blud", "class": "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(icon("arrow-left", "h-4 w-4"))}` })}
Kembali ke Beranda BLUD
` })} <h1 class="text-4xl font-bold mb-8 text-primary">Tentang BLUD</h1> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Apa itu BLUD?</h2> <p class="text-muted-foreground mb-4">
BLUD (Badan Layanan Umum Daerah) adalah unit kerja di lingkungan pemerintah
          daerah yang memberikan layanan kepada masyarakat dengan prinsip fleksibilitas
          dalam pengelolaan keuangan dan operasional.
</p> <p class="text-muted-foreground">
Di SMKN 1 Bantul, BLUD memungkinkan sekolah untuk mengelola unit-unit
          produksi dan jasa secara lebih mandiri, sehingga siswa dapat belajar dari
          pengalaman bisnis yang nyata.
</p> </section> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">BLUD di SMKN 1 Bantul</h2> <p class="text-muted-foreground mb-6">
SMKN 1 Bantul mengimplementasikan BLUD sebagai wadah pembelajaran berbasis
          produksi dan jasa (Teaching Factory). Melalui BLUD, siswa tidak hanya belajar
          teori di kelas, tetapi juga terlibat langsung dalam proses produksi,
          pemasaran, dan layanan kepada pelanggan.
</p> <div class="grid md:grid-cols-2 gap-6"> <div class="p-6 rounded-xl border bg-card"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon("target", "h-10 w-10 text-secondary mb-4"))}` })} <h3 class="font-semibold mb-2">Visi</h3> <p class="text-sm text-muted-foreground">
Menjadi lembaga pendidikan vokasi yang menghasilkan lulusan kompeten,
              berkarakter, dan siap menghadapi dunia kerja melalui pembelajaran
              berbasis produksi.
</p> </div> <div class="p-6 rounded-xl border bg-card"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon("lightbulb", "h-10 w-10 text-secondary mb-4"))}` })} <h3 class="font-semibold mb-2">Misi</h3> <ul class="text-sm text-muted-foreground list-disc list-inside space-y-1"> <li>Mengembangkan unit produksi yang relevan dengan kompetensi keahlian</li> <li>Memberikan pengalaman kerja nyata kepada siswa</li> <li>Menghasilkan produk dan jasa berkualitas</li> <li>Membangun kemandirian finansial sekolah</li> </ul> </div> </div> </section> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Hubungan BLUD dan Unit Produksi</h2> <p class="text-muted-foreground mb-6">
Unit Produksi (UP) adalah ujung tombak implementasi BLUD di SMKN 1 Bantul.
          Setiap UP dikelola oleh siswa dengan bimbingan guru dan tenaga profesional,
          menghasilkan produk dan jasa yang dapat diakses oleh masyarakat.
</p> <div class="rounded-xl border bg-card p-6"> <div class="flex items-start gap-4"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon("building-2", "h-8 w-8 text-secondary flex-shrink-0"))}` })} <div> <h3 class="font-semibold mb-2">Struktur Pengelolaan</h3> <p class="text-sm text-muted-foreground">
Setiap unit produksi memiliki pengelola tersendiri yang bertanggung
                jawab atas operasional harian, kualitas produk/layanan, dan kepuasan
                pelanggan. Sistem ini memastikan setiap unit dapat berjalan secara
                profesional sambil tetap menjadi media pembelajaran bagi siswa.
</p> </div> </div> </div> </section> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Peran Skansaba BLUD-Mart</h2> <p class="text-muted-foreground mb-6">
Skansaba BLUD-Mart adalah platform digital yang menghubungkan seluruh unit
          produksi BLUD SMKN 1 Bantul dengan masyarakat. Platform ini memudahkan akses
          informasi dan pemesanan layanan dari berbagai unit dalam satu tempat.
</p> <div class="grid md:grid-cols-3 gap-4"> <div class="p-4 rounded-lg border bg-card text-center"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon("users", "h-8 w-8 text-primary mx-auto mb-2"))}` })} <h4 class="font-medium text-sm">Akses Mudah</h4> <p class="text-xs text-muted-foreground mt-1">Satu platform untuk semua unit</p> </div> <div class="p-4 rounded-lg border bg-card text-center"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon("building-2", "h-8 w-8 text-primary mx-auto mb-2"))}` })} <h4 class="font-medium text-sm">Website Mandiri</h4> <p class="text-xs text-muted-foreground mt-1">Setiap unit punya halaman sendiri</p> </div> <div class="p-4 rounded-lg border bg-card text-center"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon("target", "h-8 w-8 text-primary mx-auto mb-2"))}` })} <h4 class="font-medium text-sm">Pemesanan Online</h4> <p class="text-xs text-muted-foreground mt-1">Proses pemesanan yang mudah</p> </div> </div> </section> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Manfaat Digitalisasi</h2> <ul class="space-y-3 text-muted-foreground"> <li class="flex items-start gap-3"> <span class="text-secondary font-bold">✓</span> <span>Meningkatkan aksesibilitas layanan unit produksi kepada masyarakat</span> </li> <li class="flex items-start gap-3"> <span class="text-secondary font-bold">✓</span> <span>Memberikan pengalaman digital kepada siswa dalam mengelola bisnis online</span> </li> <li class="flex items-start gap-3"> <span class="text-secondary font-bold">✓</span> <span>Mempermudah tracking pesanan dan manajemen layanan</span> </li> <li class="flex items-start gap-3"> <span class="text-secondary font-bold">✓</span> <span>Menampilkan portofolio dan karya siswa secara terstruktur</span> </li> <li class="flex items-start gap-3"> <span class="text-secondary font-bold">✓</span> <span>Meningkatkan profesionalisme pengelolaan unit produksi</span> </li> </ul> </section> <section class="pt-8 border-t"> <h2 class="text-2xl font-semibold mb-4">Unit Produksi BLUD</h2> <p class="text-muted-foreground mb-6">
Berikut adalah unit-unit produksi yang tergabung dalam BLUD SMKN 1 Bantul:
</p> <div class="grid md:grid-cols-2 gap-4"> ${[
    "K-Tuba Digital Printing",
    "Solusi Sistem Digital (SSD)",
    "Jari Manis",
    "Skansaba IT Solution",
    "LKM Mitra Siswa Abadi",
    "SKANSABA STORE"
  ].map((unit) => renderTemplate`<div class="p-4 rounded-lg border bg-card hover:shadow-md transition-all"> <p class="font-medium">${unit}</p> </div>`)} </div> </section> </div> </main> ${renderComponent($$result2, "BludFooter", $$BludFooter, {})} ` })}`;
}, "/home/lneo/Documents/BLUD-Mart/src/pages/blud/tentang.astro", void 0);

const $$file = "/home/lneo/Documents/BLUD-Mart/src/pages/blud/tentang.astro";
const $$url = "/blud/tentang";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tentang,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
