import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from './astro/server_tnEpuV-G.mjs';
import 'piccolore';
import 'clsx';
import { $ as $$Link } from './Link_Bg6bhCdz.mjs';

const $$Astro = createAstro("https://smkn1bantul.sch.id");
const $$BludHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BludHeader;
  const path = Astro2.url.pathname;
  const isActive = (href) => href === "/blud" ? path === "/blud" : path.startsWith(href);
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm"> <div class="container mx-auto px-4 lg:px-8"> <div class="flex h-16 items-center justify-between"> <!-- Brand Logo --> <a href="/blud" class="flex items-center gap-3"> <img src="https://smkn1bantul.sch.id/logo.png" alt="Logo SMKN 1 Bantul" class="w-8 h-8 object-contain" onerror="this.src='/logo.png'"> <div> <span class="text-base font-extrabold text-secondary tracking-tight">SKANSABA BLUD-MART</span> <p class="text-[10px] text-slate-500 font-medium hidden sm:block">Portal Digital BLUD SMKN 1 Bantul</p> </div> </a> <!-- Desktop Nav --> <nav class="hidden md:flex items-center gap-6"> <a href="/blud"${addAttribute([
    "text-sm font-semibold transition-colors hover:text-primary",
    isActive("/blud") && !isActive("/blud/unit") && !isActive("/blud/karya-siswa") && !isActive("/blud/tentang") ? "text-primary border-b-2 border-primary py-1" : "text-slate-600"
  ], "class:list")}>
Beranda BLUD
</a> <a href="/blud/unit"${addAttribute([
    "text-sm font-semibold transition-colors hover:text-primary",
    isActive("/blud/unit") ? "text-primary border-b-2 border-primary py-1" : "text-slate-600"
  ], "class:list")}>
Semua Unit
</a> <a href="/blud/karya-siswa"${addAttribute([
    "text-sm font-semibold transition-colors hover:text-primary",
    isActive("/blud/karya-siswa") ? "text-primary border-b-2 border-primary py-1" : "text-slate-600"
  ], "class:list")}>
Karya Siswa
</a> <a href="/blud/tentang"${addAttribute([
    "text-sm font-semibold transition-colors hover:text-primary",
    isActive("/blud/tentang") ? "text-primary border-b-2 border-primary py-1" : "text-slate-600"
  ], "class:list")}>
Tentang BLUD
</a> </nav> <!-- Back to Main Website --> <div class="flex items-center gap-2"> <a href="/" class="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-primary bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-full border border-blue-200 transition-colors"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> <span>Web SMKN 1 Bantul</span> </a> </div> </div> </div> </header>`;
}, "/home/lneo/Documents/BLUD-Mart/src/components/BludHeader.astro", void 0);

const $$BludFooter = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="border-t py-12 bg-slate-900 text-white"> <div class="container mx-auto px-6 lg:px-12"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <div> <div class="flex items-center gap-2 mb-3"> <img src="https://smkn1bantul.sch.id/logo.png" alt="Logo SMKN 1 Bantul" class="w-7 h-7 object-contain" onerror="this.src='/logo.png'"> <h3 class="font-bold text-lg text-secondary">SKANSABA BLUD-MART</h3> </div> <p class="text-xs text-slate-400 leading-relaxed">
Portal Digital Badan Layanan Umum Daerah (BLUD) dan Teaching Factory SMKN 1 Bantul.
</p> </div> <div> <h4 class="font-semibold text-sm mb-4 text-slate-200">Navigasi BLUD</h4> <ul class="space-y-2 text-xs text-slate-400"> <li>${renderComponent($$result, "Link", $$Link, { "href": "/blud", "class": "hover:text-amber-400" }, { "default": ($$result2) => renderTemplate`Beranda BLUD` })}</li> <li>${renderComponent($$result, "Link", $$Link, { "href": "/blud/unit", "class": "hover:text-amber-400" }, { "default": ($$result2) => renderTemplate`Semua Unit Bisnis` })}</li> <li>${renderComponent($$result, "Link", $$Link, { "href": "/blud/karya-siswa", "class": "hover:text-amber-400" }, { "default": ($$result2) => renderTemplate`Portofolio Karya Siswa` })}</li> <li>${renderComponent($$result, "Link", $$Link, { "href": "/blud/tentang", "class": "hover:text-amber-400" }, { "default": ($$result2) => renderTemplate`Tentang Ekosistem BLUD` })}</li> </ul> </div> <div> <h4 class="font-semibold text-sm mb-4 text-slate-200">Website Sekolah</h4> <ul class="space-y-2 text-xs text-slate-400"> <li>${renderComponent($$result, "Link", $$Link, { "href": "/", "class": "hover:text-blue-300" }, { "default": ($$result2) => renderTemplate`Beranda SMKN 1 Bantul` })}</li> <li><a href="/#profil" class="hover:text-blue-300">Profil & Sambutan</a></li> <li><a href="/#jurusan" class="hover:text-blue-300">7 Program Keahlian</a></li> <li><a href="/#berita" class="hover:text-blue-300">Berita & Informasi</a></li> </ul> </div> <div> <h4 class="font-semibold text-sm mb-4 text-slate-200">Kontak Resmi</h4> <p class="text-xs text-slate-400 leading-relaxed space-y-1"> <span>Jl. Parangtritis No.KM.11, Sabdodadi, Bantul</span><br> <span>Hotline: +62 851-2260-3820</span><br> <span>Email: blud@smkn1bantul.sch.id</span> </p> </div> </div> <div class="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
© ${year} SKANSABA BLUD-MART & SMKN 1 BANTUL. All rights reserved.
</div> </div> </footer>`;
}, "/home/lneo/Documents/BLUD-Mart/src/components/BludFooter.astro", void 0);

export { $$BludHeader as $, $$BludFooter as a };
