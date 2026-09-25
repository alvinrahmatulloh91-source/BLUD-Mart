import { f as createComponent, m as maybeRenderHead, o as renderScript, r as renderTemplate, k as renderComponent, l as Fragment, u as unescapeHTML, h as addAttribute } from '../chunks/astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzUaCFSz.mjs';
import 'clsx';
import { i as icon } from '../chunks/icons_BgEnv9BM.mjs';
import { c as getPublicUnits } from '../chunks/units_CihJ_dgi.mjs';
import { g as getStudentWorks } from '../chunks/student-works_DQZdYIo0.mjs';
export { renderers } from '../renderers.mjs';

const $$SchoolHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Top announcement bar -->${maybeRenderHead()}<div class="bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white text-xs py-2 px-4 border-b border-blue-700/50"> <div class="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2"> <div class="flex items-center gap-4 text-slate-200"> <span class="inline-flex items-center gap-1.5"> <svg class="w-3.5 h-3.5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
Bantul, D.I. Yogyakarta
</span> <span class="hidden md:inline-flex items-center gap-1.5"> <svg class="w-3.5 h-3.5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
Hotline: +62 851-2260-3820
</span> </div> <div class="flex items-center gap-3"> <a href="https://spmb.jogjaprov.go.id" target="_blank" rel="noopener noreferrer" class="hover:text-secondary transition-colors font-medium">SPMB 2025/2026</a> <span class="text-blue-400">|</span> <a href="/blud" class="inline-flex items-center gap-1 text-secondary font-semibold hover:text-amber-300 transition-colors"> <span class="inline-block w-2 h-2 rounded-full bg-secondary animate-ping"></span>
Unit Bisnis BLUD-Mart
</a> </div> </div> </div> <!-- Main Navigation --> <header id="main-header" class="sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"> <div class="container mx-auto px-4 lg:px-8"> <div class="flex h-20 items-center justify-between"> <!-- Brand Logo --> <a href="/" class="flex items-center gap-3 group"> <img src="https://smkn1bantul.sch.id/logo.png" alt="Logo SMKN 1 Bantul" class="w-10 h-10 md:w-11 md:h-11 object-contain transition-transform group-hover:scale-105" onerror="this.src='/logo.png'"> <div class="flex flex-col"> <span class="font-extrabold text-lg md:text-xl tracking-tight text-blue-900 group-hover:text-primary transition-colors">
SMKN 1 BANTUL
</span> <span class="text-[11px] font-medium text-slate-500 uppercase tracking-widest hidden sm:block">
Sekolah Pusat Keunggulan
</span> </div> </a> <!-- Desktop Navigation Menu --> <nav class="hidden xl:flex items-center gap-1 font-medium text-sm text-slate-700"> <a href="/" class="px-3 py-2 rounded-lg hover:text-primary hover:bg-blue-50/70 transition-colors font-semibold text-primary">
Beranda
</a> <!-- Dropdown Profil --> <div class="relative group"> <button class="px-3 py-2 rounded-lg hover:text-primary hover:bg-blue-50/70 transition-colors inline-flex items-center gap-1">
Profil Sekolah
<svg class="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </button> <div class="absolute left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1"> <a href="#profil" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Sambutan Kepala Sekolah</a> <a href="https://smkn1bantul.sch.id/sejarah" target="_blank" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Sejarah</a> <a href="https://smkn1bantul.sch.id/visi-misi" target="_blank" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Visi & Misi</a> <a href="https://smkn1bantul.sch.id/struktur-organisasi" target="_blank" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Struktur Organisasi</a> <a href="https://smkn1bantul.sch.id/sarana-prasarana" target="_blank" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Sarana Prasarana</a> <a href="https://smkn1bantul.sch.id/teaching-factory" target="_blank" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Teaching Factory (TEFA)</a> </div> </div> <!-- Dropdown Informasi --> <div class="relative group"> <button class="px-3 py-2 rounded-lg hover:text-primary hover:bg-blue-50/70 transition-colors inline-flex items-center gap-1">
Informasi
<svg class="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </button> <div class="absolute left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1"> <a href="#berita" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Berita & Pengumuman</a> <a href="#prestasi" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Prestasi Siswa</a> <a href="https://smkn1bantul.sch.id/download" target="_blank" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Download Dokumen</a> <a href="https://spmb.jogjaprov.go.id" target="_blank" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">SPMB 2025/2026</a> </div> </div> <!-- Dropdown Program Keahlian --> <div class="relative group"> <button class="px-3 py-2 rounded-lg hover:text-primary hover:bg-blue-50/70 transition-colors inline-flex items-center gap-1">
Program Keahlian
<svg class="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </button> <div class="absolute left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1"> <a href="#jurusan" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Akuntansi & Keuangan Lembaga (AKL)</a> <a href="#jurusan" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Layanan Perbankan Syariah (LPS)</a> <a href="#jurusan" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Manajemen Perkantoran & Bisnis (MPLB)</a> <a href="#jurusan" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Pemasaran (PM)</a> <a href="#jurusan" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Desain Komunikasi Visual (DKV)</a> <a href="#jurusan" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Rekayasa Perangkat Lunak (RPL)</a> <a href="#jurusan" class="block px-4 py-2 hover:bg-blue-50 hover:text-primary transition-colors">Teknik Komputer Jaringan (TKJ)</a> </div> </div> <a href="#mitra" class="px-3 py-2 rounded-lg hover:text-primary hover:bg-blue-50/70 transition-colors">
Kerjasama
</a> <a href="#kontak" class="px-3 py-2 rounded-lg hover:text-primary hover:bg-blue-50/70 transition-colors">
Kontak
</a> </nav> <!-- BLUD-Mart Featured Action Button (Paling Menonjol) --> <div class="hidden lg:flex items-center gap-3"> <a href="/blud" class="relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary to-amber-500 hover:from-amber-600 hover:to-secondary text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> <span>SKANSABA BLUD-MART</span> <span class="text-[10px] bg-white text-secondary font-extrabold px-1.5 py-0.5 rounded-full">
PORTAL
</span> </a> </div> <!-- Mobile Hamburger Toggle Button --> <button id="mobile-menu-btn" type="button" class="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-primary hover:bg-slate-100 transition-colors" aria-label="Menu"> <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> </button> </div> </div> <!-- Mobile Menu Drawer --> <div id="mobile-menu" class="xl:hidden hidden border-t border-slate-100 bg-white/98 px-6 py-6 space-y-4 shadow-xl"> <div class="space-y-1"> <a href="/" class="block px-3 py-2 text-base font-semibold text-primary bg-blue-50 rounded-lg">Beranda</a> <a href="#profil" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary rounded-lg">Sambutan Kepala Sekolah</a> <a href="#jurusan" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary rounded-lg">Program Keahlian</a> <a href="#berita" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary rounded-lg">Berita & Informasi</a> <a href="#prestasi" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary rounded-lg">Prestasi Siswa</a> <a href="#mitra" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary rounded-lg">Kerjasama Mitra Industri</a> <a href="#kontak" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary rounded-lg">Kontak & Lokasi</a> </div> <!-- BLUD Mobile Highlight --> <div class="pt-4 border-t border-slate-100"> <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200"> <h4 class="font-bold text-amber-900 text-sm mb-1 flex items-center gap-1.5"> <svg class="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
SKANSABA BLUD-MART
</h4> <p class="text-xs text-amber-700/90 mb-3">Unit Produksi, Jasa & Katalog Kreatif Siswa SMKN 1 Bantul</p> <a href="/blud" class="w-full text-center inline-block py-2.5 px-4 rounded-xl bg-secondary text-white font-bold text-sm shadow hover:bg-amber-600 transition-colors">
Masuk ke BLUD-Mart →
</a> </div> </div> </div> </header> ${renderScript($$result, "/home/lneo/Documents/BLUD-Mart/src/components/SchoolHeader.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/lneo/Documents/BLUD-Mart/src/components/SchoolHeader.astro", void 0);

const $$SchoolFooter = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer id="kontak" class="w-full bg-[#0033A0] text-white"> <div class="container mx-auto px-6 lg:px-12 py-14"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> <!-- Column 1: School Identity & Contacts --> <div class="space-y-4"> <div class="flex items-center gap-3"> <img src="https://smkn1bantul.sch.id/logo.png" alt="Logo SMKN 1 Bantul" class="w-10 h-10 object-contain brightness-0 invert" onerror="this.src='/logo.png'"> <h2 class="text-xl font-bold tracking-tight">SMKN 1 BANTUL</h2> </div> <p class="text-blue-100 text-sm leading-relaxed">
Jl. Parangtritis No.KM.11, Dukuh, Sabdodadi, Kec. Bantul, Kab. Bantul, Daerah Istimewa Yogyakarta 55715
</p> <div class="pt-2 space-y-2"> <a href="tel:+6285122603820" class="inline-flex items-center gap-2 text-sm text-amber-300 font-semibold hover:text-white transition-colors"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
Hotline: +62 851-2260-3820
</a> <br> <a href="mailto:smkn1bantul@yahoo.com" class="inline-flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
info@smkn1bantul.sch.id
</a> </div> <!-- Social Media Icons --> <div class="flex items-center gap-3 pt-3"> <a href="https://wa.me/6285122603820" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="w-9 h-9 rounded-full border border-blue-400/50 flex justify-center items-center hover:bg-white hover:text-blue-700 transition-all"> <span class="text-sm font-bold">WA</span> </a> <a href="https://www.youtube.com/@officialsmkn1bantul" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="w-9 h-9 rounded-full border border-blue-400/50 flex justify-center items-center hover:bg-white hover:text-red-600 transition-all"> <span class="text-sm font-bold">YT</span> </a> <a href="https://instagram.com/smkn1bantul" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-9 h-9 rounded-full border border-blue-400/50 flex justify-center items-center hover:bg-white hover:text-pink-600 transition-all"> <span class="text-sm font-bold">IG</span> </a> <a href="https://x.com/skansaba_id" target="_blank" rel="noopener noreferrer" aria-label="X Twitter" class="w-9 h-9 rounded-full border border-blue-400/50 flex justify-center items-center hover:bg-white hover:text-black transition-all"> <span class="text-sm font-bold">X</span> </a> <a href="https://tiktok.com/@skansaba.id" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="w-9 h-9 rounded-full border border-blue-400/50 flex justify-center items-center hover:bg-white hover:text-black transition-all"> <span class="text-sm font-bold">TT</span> </a> </div> </div> <!-- Column 2: Profil & Informasi --> <div> <h3 class="text-lg font-bold mb-4 border-b border-blue-400/40 pb-2">Navigasi Singkat</h3> <ul class="space-y-2.5 text-sm text-blue-100"> <li><a href="https://smkn1bantul.sch.id/sejarah" target="_blank" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform">→ Sejarah Sekolah</a></li> <li><a href="https://smkn1bantul.sch.id/visi-misi" target="_blank" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform">→ Visi & Misi</a></li> <li><a href="https://smkn1bantul.sch.id/struktur-organisasi" target="_blank" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform">→ Struktur Organisasi</a></li> <li><a href="https://smkn1bantul.sch.id/sarana-prasarana" target="_blank" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform">→ Sarana & Prasarana</a></li> <li><a href="https://smkn1bantul.sch.id/teaching-factory" target="_blank" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform">→ Teaching Factory (TEFA)</a></li> <li><a href="https://spmb.jogjaprov.go.id" target="_blank" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform">→ SPMB Jogja 2025</a></li> </ul> </div> <!-- Column 3: SKANSABA BLUD-MART Direct Links --> <div> <h3 class="text-lg font-bold mb-4 border-b border-blue-400/40 pb-2 flex items-center gap-2"> <span>SKANSABA BLUD</span> <span class="bg-amber-400 text-blue-900 text-xs px-2 py-0.5 rounded-full font-extrabold">MART</span> </h3> <p class="text-blue-100 text-xs mb-3">
Platform digital belanja produk & pemesanan jasa unit produksi SMKN 1 Bantul.
</p> <ul class="space-y-2.5 text-sm text-blue-100"> <li><a href="/blud" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform font-medium">🛍️ Portal BLUD-Mart</a></li> <li><a href="/blud/unit" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform">🏢 Semua Unit Bisnis</a></li> <li><a href="/blud/k-tuba-digital-printing" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform">🖨️ K-Tuba Digital Printing</a></li> <li><a href="/blud/solusi-sistem-digital" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform">💻 Solusi Sistem Digital (SSD)</a></li> <li><a href="/blud/jari-manis" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform">🎨 Jari Manis Kreatif</a></li> <li><a href="/blud/karya-siswa" class="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform">🌟 Portofolio Karya Siswa</a></li> </ul> </div> <!-- Column 4: Google Maps Embed --> <div> <h3 class="text-lg font-bold mb-4 border-b border-blue-400/40 pb-2">Lokasi Sekolah</h3> <div class="rounded-xl overflow-hidden border border-blue-400/40 shadow-lg h-52 bg-blue-950"> <iframe src="https://maps.google.com/maps?q=SMK+Negeri+1+Bantul+Yogyakarta&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Peta Lokasi SMKN 1 Bantul"></iframe> </div> </div> </div> </div> <!-- Bottom Copyright Bar --> <div class="bg-[#002573] py-4 border-t border-blue-800 text-center text-xs text-blue-200"> <div class="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2"> <p>© ${year} SMKN 1 BANTUL & SKANSABA BLUD-MART. All rights reserved.</p> <p class="text-blue-300 text-[11px]">Center of Excellence & Sekolah Pusat Keunggulan Bantul, D.I. Yogyakarta</p> </div> </div> </footer>`;
}, "/home/lneo/Documents/BLUD-Mart/src/components/SchoolFooter.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const publicUnits = await getPublicUnits();
  const studentWorks = (await getStudentWorks()).slice(0, 4);
  const programs = [
    {
      code: "AKL",
      name: "Akuntansi dan Keuangan Lembaga",
      desc: "Kompetensi di bidang akuntansi keuangan, perpajakan, audit, dan pembukuan berbasis software akuntansi terstandar industri.",
      unitRel: "LKM Mitra Siswa Abadi",
      unitLink: "/blud/lkm-mitra-siswa-abadi",
      iconName: "book-open",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      code: "LPS",
      name: "Layanan Perbankan Syariah",
      desc: "Keahlian transaksi perbankan syariah, operasional customer service, teller, serta etika perbankan profesional.",
      unitRel: "LKM Mitra Siswa Abadi",
      unitLink: "/blud/lkm-mitra-siswa-abadi",
      iconName: "award",
      badgeColor: "bg-emerald-100 text-emerald-800"
    },
    {
      code: "MPLB",
      name: "Manajemen Perkantoran & Bisnis",
      desc: "Pengelolaan administrasi perkantoran modern, tata kelola kearsipan digital, public relations, dan komunikasi bisnis.",
      unitRel: "Skansaba Store & Admin",
      unitLink: "/blud/skansaba-store",
      iconName: "users",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      code: "PM",
      name: "Pemasaran (Marketing)",
      desc: "Strategi digital marketing, e-commerce, content creator, merchandising, retail modern, dan kepuasan pelanggan.",
      unitRel: "SKANSABA STORE",
      unitLink: "/blud/skansaba-store",
      iconName: "target",
      badgeColor: "bg-amber-100 text-amber-800"
    },
    {
      code: "DKV",
      name: "Desain Komunikasi Visual",
      desc: "Kreativitas grafis, branding, fotografi, videografi, packaging, ilustrasi digital, dan media periklanan visual.",
      unitRel: "K-Tuba Digital & Jari Manis",
      unitLink: "/blud/k-tuba-digital-printing",
      iconName: "image",
      badgeColor: "bg-rose-100 text-rose-800"
    },
    {
      code: "RPL",
      name: "Rekayasa Perangkat Lunak",
      desc: "Pengembangan web modern, mobile apps, rekayasa basis data, API development, serta solusi perangkat lunak terintegrasi.",
      unitRel: "Solusi Sistem Digital (SSD)",
      unitLink: "/blud/solusi-sistem-digital",
      iconName: "layers",
      badgeColor: "bg-indigo-100 text-indigo-800"
    },
    {
      code: "TKJ",
      name: "Teknik Komputer dan Jaringan",
      desc: "Infrastruktur jaringan komputer, fiber optik, router & switch Cisco/MikroTik, cloud computing, dan cyber security dasar.",
      unitRel: "Skansaba IT Solution",
      unitLink: "/blud/skansaba-it-solution",
      iconName: "wrench",
      badgeColor: "bg-cyan-100 text-cyan-800"
    }
  ];
  const achievements = [
    {
      title: "Medallion For Excellence",
      event: "Web Technologies - LKS Nasional 2024",
      student: "Muhammad Eksa Arifa",
      major: "XII RPL 1",
      rank: "Nasional",
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      title: "Juara 1 Tingkat Provinsi DIY",
      event: "Festival Inovasi Kewirausahaan Siswa (FIKSI) 2024",
      student: "Haryo Djati R & Anggara Deni A",
      major: "XII RPL 1 & XII MP 2",
      rank: "Juara 1",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Juara 1 Web Technologies",
      event: "LKS Tingkat Provinsi D.I. Yogyakarta",
      student: "Muhammad Eksa Arifa",
      major: "XII RPL 1",
      rank: "Juara 1",
      gradient: "from-blue-600 to-cyan-600"
    }
  ];
  const partners = [
    { name: "PT Time Excelindo", type: "Industri IT" },
    { name: "Gmedia (PT Media Sarana Data)", type: "Internet & Network" },
    { name: "Universitas AMIKOM Yogyakarta", type: "Perguruan Tinggi" },
    { name: "Maspion IT", type: "Manufaktur & IT" },
    { name: "Seven Inc", type: "Digital Media & Agency" },
    { name: "Mirota", type: "Retail & Bisnis" },
    { name: "Universitas Mercu Buana", type: "Perguruan Tinggi" },
    { name: "Universitas Ahmad Dahlan", type: "Perguruan Tinggi" },
    { name: "Universitas Janabadra", type: "Perguruan Tinggi" },
    { name: "UTY (Univ. Teknologi Yogyakarta)", type: "Perguruan Tinggi" },
    { name: "UTDI (Univ. Teknologi Digital)", type: "Perguruan Tinggi" },
    { name: "Hotel Ambarukmo & AMPTA", type: "Hospitality & Jasa" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "SMKN 1 BANTUL - Sekolah Pusat Keunggulan & SKANSABA BLUD-MART" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SchoolHeader", $$SchoolHeader, {})}  ${maybeRenderHead()}<section class="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-slate-900"> <div id="hero-slider" class="relative w-full h-full"> <!-- Slide 1: Welcome to SMKN 1 Bantul --> <div class="slider-item absolute inset-0 transition-opacity duration-1000 opacity-100 z-10"> <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Front_view_of_SMKN_1_Bantul.jpg" alt="Gedung SMKN 1 Bantul" class="w-full h-full object-cover brightness-[0.4] scale-105 transform animate-fade-in"> <div class="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-black/40 to-transparent"></div> <div class="absolute inset-0 flex items-center justify-center text-center px-4 md:px-8"> <div class="max-w-4xl text-white space-y-6"> <span class="inline-block py-1.5 px-4 rounded-full bg-blue-600/80 backdrop-blur-md text-blue-100 text-xs md:text-sm font-semibold tracking-wider uppercase border border-blue-400/40">
Center of Excellence & Sekolah Pusat Keunggulan
</span> <h1 class="text-3xl md:text-5xl lg:text-6xl font-black font-['Montserrat'] leading-tight tracking-tight uppercase drop-shadow-md">
SELAMAT DATANG DI <br class="hidden sm:block"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-amber-300">
SMKN 1 BANTUL
</span> </h1> <p class="text-base md:text-xl text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed">
Mewujudkan generasi unggul, berkarakter Profil Pelajar Pancasila, dan siap bersaing di dunia industri, wirausaha, serta perguruan tinggi.
</p> <div class="pt-4 flex flex-wrap justify-center gap-4"> <a href="#profil" class="px-7 py-3.5 rounded-full bg-white text-blue-900 font-bold text-sm md:text-base hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
Profil Sekolah
</a> <a href="/blud" class="px-7 py-3.5 rounded-full bg-secondary text-white font-bold text-sm md:text-base hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"> <span>Kunjungi BLUD-Mart</span> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("arrow-right", "h-4 w-4"))}` })} </a> </div> </div> </div> </div> <!-- Slide 2: SKANSABA BLUD-MART Spotlight Banner --> <div class="slider-item absolute inset-0 transition-opacity duration-1000 opacity-0 z-0"> <div class="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 relative"> <!-- Geometric background glow --> <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary/40 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute inset-0 flex items-center justify-center text-center px-4 md:px-8"> <div class="max-w-4xl text-white space-y-6"> <div class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-300 text-xs md:text-sm font-bold border border-amber-400/40"> <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
Inovasi Badan Layanan Umum Daerah (BLUD)
</div> <h1 class="text-3xl md:text-5xl lg:text-6xl font-black font-['Montserrat'] leading-tight tracking-tight uppercase drop-shadow-md">
SKANSABA <span class="text-secondary">BLUD-MART</span> </h1> <p class="text-base md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
Platform digital belanja produk kreatif, jasa digital printing, software development, IT solution, dan layanan perbankan siswa secara resmi.
</p> <div class="pt-4 flex flex-wrap justify-center gap-4"> <a href="/blud" class="px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-amber-500 hover:from-amber-600 hover:to-secondary text-white font-extrabold text-sm md:text-base transition-all shadow-xl hover:shadow-amber-500/20 transform hover:-translate-y-0.5 flex items-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> <span>Buka Portal BLUD-Mart</span> </a> <a href="/blud/unit" class="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm md:text-base transition-all border border-white/30">
Lihat 6 Unit Usaha
</a> </div> </div> </div> </div> </div> <!-- Slide 3: Center of Excellence --> <div class="slider-item absolute inset-0 transition-opacity duration-1000 opacity-0 z-0"> <div class="w-full h-full bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 relative"> <div class="absolute inset-0 bg-blue-950/60"></div> <div class="absolute inset-0 flex items-center justify-center text-center px-4 md:px-8"> <div class="max-w-4xl text-white space-y-6"> <span class="inline-block py-1.5 px-4 rounded-full bg-blue-500/30 backdrop-blur-md text-blue-200 text-xs md:text-sm font-semibold tracking-wider uppercase border border-blue-400/40">
Pendidikan Vokasi Berbasis Industri
</span> <h2 class="text-3xl md:text-5xl lg:text-6xl font-black font-['Montserrat'] leading-tight tracking-tight uppercase drop-shadow-md">
SMK BISA, SMK HEBAT!
</h2> <p class="text-base md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
Mempersiapkan lulusan yang kompeten di era transformasi digital melalui Teaching Factory dan kurikulum terintegrasi dunia kerja.
</p> <div class="pt-4 flex flex-wrap justify-center gap-4"> <a href="#jurusan" class="px-7 py-3.5 rounded-full bg-white text-blue-900 font-bold text-sm md:text-base hover:bg-blue-50 transition-all shadow-lg">
7 Program Keahlian
</a> <a href="#prestasi" class="px-7 py-3.5 rounded-full bg-blue-600 text-white font-bold text-sm md:text-base hover:bg-blue-700 transition-all shadow-lg">
Prestasi Nasional
</a> </div> </div> </div> </div> </div> </div> <!-- Slider Navigation Buttons --> <button id="slider-prev" type="button" class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all focus:outline-none" aria-label="Slide sebelumnya"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> </button> <button id="slider-next" type="button" class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all focus:outline-none" aria-label="Slide berikutnya"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> </button> <!-- Slider Indicators --> <div id="slider-dots" class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5"> <button class="dot-btn w-8 h-2.5 rounded-full bg-white transition-all duration-300" data-index="0" aria-label="Slide 1"></button> <button class="dot-btn w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300" data-index="1" aria-label="Slide 2"></button> <button class="dot-btn w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300" data-index="2" aria-label="Slide 3"></button> </div> </section>  <section class="relative z-20 -mt-10 max-w-6xl mx-auto px-4"> <div class="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"> <div class="space-y-1 border-r last:border-r-0 border-slate-100"> <div class="text-3xl lg:text-4xl font-black text-primary font-['Montserrat']">7</div> <div class="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wide">Program Keahlian</div> </div> <div class="space-y-1 border-r last:border-r-0 border-slate-100"> <div class="text-3xl lg:text-4xl font-black text-secondary font-['Montserrat']">6</div> <div class="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wide">Unit Usaha BLUD</div> </div> <div class="space-y-1 border-r last:border-r-0 border-slate-100"> <div class="text-3xl lg:text-4xl font-black text-primary font-['Montserrat']">100%</div> <div class="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wide">Teaching Factory</div> </div> <div class="space-y-1"> <div class="text-3xl lg:text-4xl font-black text-secondary font-['Montserrat']">50+</div> <div class="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wide">Mitra Industri (DUDI)</div> </div> </div> </section>  <section id="profil" class="py-20 lg:py-24 overflow-hidden"> <div class="container mx-auto px-6 lg:px-12"> <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"> <!-- Foto Kepala Sekolah --> <div class="w-full lg:w-5/12 flex flex-col items-center"> <div class="relative group"> <div class="absolute -inset-3 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-300"></div> <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white max-w-[340px] md:max-w-[380px]"> <img src="https://smkn1bantul.sch.id/assets/images/kepsek.jpeg" alt="Raharjo, S.IP, M.Pd - Kepala Sekolah SMKN 1 Bantul" class="w-full h-[400px] object-cover object-top transition duration-500 group-hover:scale-105" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Front_view_of_SMKN_1_Bantul.jpg'"> <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-950 via-blue-900/80 to-transparent p-5 text-white text-center"> <h3 class="text-xl font-bold font-['Montserrat']">Raharjo, S.IP, M.Pd</h3> <p class="text-xs text-amber-300 font-medium">Kepala Sekolah SMKN 1 Bantul</p> </div> </div> </div> </div> <!-- Teks Sambutan --> <div class="w-full lg:w-7/12 space-y-6"> <div class="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider">
Sambutan Pimpinan
</div> <h2 class="text-3xl md:text-4xl font-black text-slate-900 font-['Montserrat'] tracking-tight">
Mencetak Lulusan Unggul, Berkompeten, & Siap Bersaing Global
</h2> <div class="h-1 w-20 bg-primary rounded-full"></div> <div class="relative text-slate-600 space-y-4 text-base leading-relaxed"> <p> <strong>Assalamualaikum warahmatullahi wabarakatuh, Salam sejahtera bagi kita semua.</strong> </p> <p>
Saya, Raharjo, M.Pd., Kepala SMK Negeri 1 Bantul, dengan bangga menyampaikan visi dan misi sekolah kami, yaitu mencetak lulusan yang unggul, berkompeten, dan siap bersaing di dunia global. Visi ini kami wujudkan melalui pendidikan yang berbasis pada penguatan karakter, keterampilan, dan penguasaan teknologi.
</p> <!-- Collapsible Section --> <div id="sambutan-more" class="hidden space-y-4"> <p>
Di SMK Negeri 1 Bantul, kami menerapkan pembelajaran yang memanusiakan hubungan, memahami konsep, membangun keberlanjutan, memilih tantangan, dan memberdayakan konteks. Dengan pendekatan ini, kami berupaya menciptakan siswa yang tidak hanya cerdas secara akademik, tetapi juga memiliki karakter yang sesuai dengan Profil Pelajar Pancasila.
</p> <p>
Salah satu wujud nyata kemandirian dan pembelajaran riil adalah hadirnya <strong>SKANSABA BLUD-MART</strong>, wadah unit bisnis dan Teaching Factory sekolah yang memungkinkan siswa merasakan secara langsung siklus produksi, pelayanan prima, dan transaksi komersial profesional.
</p> <p>
Harapan besar kami adalah lulusan SMK Negeri 1 Bantul menjadi generasi yang siap kerja di dunia industri, siap berwirausaha dengan ide-ide kreatifnya, serta siap melanjutkan pendidikan ke jenjang yang lebih tinggi. Teruslah belajar, berinovasi, dan berkontribusi untuk masa depan yang lebih baik.
</p> <p> <strong>Wassalamualaikum warahmatullahi wabarakatuh.</strong> </p> </div> <button id="toggle-sambutan-btn" type="button" class="inline-flex items-center gap-2 mt-2 px-6 py-2.5 rounded-full bg-primary hover:bg-blue-800 text-white font-semibold text-sm transition-all shadow-md"> <span id="btn-text">Baca Selengkapnya</span> <svg id="btn-icon" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </button> </div> </div> </div> </div> </section>    <section id="blud-mart" class="py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden"> <!-- Background accents --> <div class="absolute -top-40 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute -bottom-40 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none"></div> <div class="container mx-auto px-6 lg:px-12 relative z-10"> <!-- Section Header --> <div class="text-center max-w-3xl mx-auto space-y-4 mb-16"> <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-xs font-bold tracking-wider uppercase"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
Platform Bisnis & Teaching Factory Resmi
</div> <h2 class="text-3xl md:text-5xl font-black font-['Montserrat'] tracking-tight">
PORTAL <span class="text-secondary">SKANSABA BLUD-MART</span> </h2> <p class="text-slate-300 text-base md:text-lg leading-relaxed">
Koneksi langsung antara SMKN 1 Bantul dengan ekosistem unit produksi dan layanan profesional. Belanja karya siswa, pesan jasa digital, dan dukung kemandirian vokasi.
</p> </div> <!-- Unit Cards Grid (6 Unit Usaha) --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${publicUnits.map((unit) => renderTemplate`<div class="group relative rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-secondary/60 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/10 flex flex-col justify-between"> <div class="space-y-4"> <div class="flex items-start justify-between gap-3"> <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg> </div> <span class="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800"> ${unit.category} </span> </div> <div> <h3 class="text-xl font-bold text-white group-hover:text-amber-300 transition-colors"> ${unit.name} </h3> <p class="text-slate-400 text-sm mt-2 line-clamp-3 leading-relaxed"> ${unit.description} </p> </div> </div> <div class="pt-6 mt-6 border-t border-slate-700/60 flex items-center justify-between"> <a${addAttribute(`/blud/${unit.slug}`, "href")} class="inline-flex items-center gap-1.5 text-secondary hover:text-amber-300 font-semibold text-sm transition-colors"> <span>Buka Unit</span> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("arrow-right", "h-4 w-4"))}` })} </a> <a${addAttribute(`/blud/${unit.slug}/katalog`, "href")} class="text-xs text-slate-400 hover:text-white transition-colors">
Lihat Katalog →
</a> </div> </div>`)} </div> <!-- Inovasi & Karya Siswa Terpilih --> <div class="my-14 pt-8 border-t border-slate-700/60"> <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"> <div> <h3 class="text-2xl font-bold font-['Montserrat'] text-white">
Karya & Inovasi Siswa Terbaru
</h3> <p class="text-slate-400 text-sm mt-1">
Produk nyata hasil pembelajaran berbasis proyek dan riset terapan di BLUD.
</p> </div> <a href="/blud/karya-siswa" class="text-xs md:text-sm font-semibold text-secondary hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"> <span>Lihat Semua Karya Siswa</span> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("arrow-right", "h-4 w-4"))}` })} </a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"> ${studentWorks.map((work) => renderTemplate`<div class="rounded-xl bg-slate-800/60 border border-slate-700/80 p-5 hover:border-slate-500 transition-all flex flex-col justify-between"> <div> <span class="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-200 mb-3 border border-blue-700"> ${work.major} • ${work.year} </span> <h4 class="font-bold text-white text-base leading-snug line-clamp-2"> ${work.title} </h4> <p class="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed"> ${work.description} </p> </div> <div class="pt-4 mt-4 border-t border-slate-700/40 flex items-center justify-between text-xs text-slate-400"> <span>${work.studentTeam}</span> <span class="text-secondary font-semibold">Tersertifikasi</span> </div> </div>`)} </div> </div> <!-- Action Banner inside BLUD section --> <div class="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 border border-blue-700/50 p-8 md:p-12 shadow-2xl"> <div class="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"> <div class="space-y-3 max-w-2xl"> <h3 class="text-2xl md:text-3xl font-extrabold font-['Montserrat'] text-white">
Siap Bermitra atau Memesan Layanan dari Siswa Kami?
</h3> <p class="text-slate-300 text-sm md:text-base">
Dari kebutuhan merchandise, cetak brosur, pembuatan website sekolah/instansi, hingga maintenance jaringan komputer kantor Anda.
</p> </div> <div class="flex flex-wrap items-center justify-center gap-4"> <a href="/blud" class="px-8 py-4 rounded-full bg-secondary hover:bg-amber-600 text-white font-extrabold text-base transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"> <span>Jelajahi Portal BLUD-Mart</span> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("arrow-right", "h-5 w-5"))}` })} </a> <a href="/blud/karya-siswa" class="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-all border border-white/20">
Portofolio Karya Siswa
</a> </div> </div> </div> </div> </section>  <section id="jurusan" class="py-20 lg:py-24 bg-slate-50"> <div class="container mx-auto px-6 lg:px-12"> <div class="text-center max-w-3xl mx-auto space-y-4 mb-16"> <div class="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider">
Konsentrasi Keahlian
</div> <h2 class="text-3xl md:text-4xl font-black text-slate-900 font-['Montserrat'] tracking-tight">
7 Program Keahlian Unggulan
</h2> <p class="text-slate-600 text-base md:text-lg">
Kurikulum berbasis industri dan Teaching Factory terintegrasi untuk mempersiapkan siswa menjadi tenaga profesional yang kompeten.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${programs.map((prog) => renderTemplate`<div class="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"> <div class="space-y-4"> <div class="flex items-center justify-between"> <span${addAttribute(`text-xs font-black tracking-wider uppercase px-3 py-1 rounded-full ${prog.badgeColor}`, "class")}> ${prog.code} </span> <span class="text-xs font-medium text-slate-400">SMKN 1 Bantul</span> </div> <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors"> ${prog.name} </h3> <p class="text-slate-600 text-sm leading-relaxed"> ${prog.desc} </p> </div> <div class="pt-6 mt-6 border-t border-slate-100"> <div class="flex items-center justify-between text-xs"> <span class="text-slate-500 font-medium">Unit TEFA / BLUD:</span> <a${addAttribute(prog.unitLink, "href")} class="font-semibold text-secondary hover:text-amber-700 hover:underline inline-flex items-center gap-1"> ${prog.unitRel} →
</a> </div> </div> </div>`)} <!-- Card Khusus: Semua Unit BLUD --> <div class="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-7 text-white shadow-lg flex flex-col justify-between"> <div class="space-y-4"> <span class="text-xs font-black tracking-wider uppercase px-3 py-1 rounded-full bg-amber-400 text-blue-900">
EKOSISTEM BLUD
</span> <h3 class="text-2xl font-bold font-['Montserrat']">
Teaching Factory Terintegrasi
</h3> <p class="text-blue-200 text-sm leading-relaxed">
Setiap jurusan memiliki unit produksi riil di bawah Badan Layanan Umum Daerah untuk mempraktikkan keterampilan kejuruan secara komersial dan mandiri.
</p> </div> <div class="pt-6 mt-6 border-t border-blue-800"> <a href="/blud" class="w-full text-center inline-block py-3 px-6 rounded-xl bg-secondary hover:bg-amber-600 text-white font-bold text-sm transition-all">
Masuk ke SKANSABA BLUD-MART →
</a> </div> </div> </div> </div> </section>  <section id="berita" class="py-20 lg:py-24 bg-white border-t border-slate-100"> <div class="container mx-auto px-6 lg:px-12"> <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"> <div class="space-y-2"> <span class="text-xs font-bold text-primary uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
Kabar Sekolah
</span> <h2 class="text-3xl md:text-4xl font-black text-slate-900 font-['Montserrat']">
Berita & Pengumuman Terbaru
</h2> </div> <a href="https://smkn1bantul.sch.id/berita" target="_blank" class="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:underline">
Lihat Semua Berita
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> </a> </div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8"> <!-- Featured News Card (Left Column) --> <div class="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-md group hover:shadow-xl transition-all flex flex-col justify-between bg-white"> <div class="relative overflow-hidden h-72 md:h-80 bg-slate-100"> <img src="https://smkn1bantul.sch.id/storage/01M0CF6A9BMRB56D0WDFD9SFNB.JPG" alt="SMKN 1 Bantul Kemitraan Industri MoU Bnet" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Front_view_of_SMKN_1_Bantul.jpg'"> <div class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">
Kemitraan Industri
</div> </div> <div class="p-6 md:p-8 space-y-4"> <div class="flex items-center gap-4 text-xs text-slate-400"> <span>SMKN 1 Bantul</span> <span>•</span> <span>Terbaru</span> </div> <h3 class="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug"> <a href="https://smkn1bantul.sch.id/berita/smkn-1-bantul-perkuat-kemitraan-industri-melalui-penandatanganan-mou-dengan-bnet" target="_blank">
SMKN 1 Bantul Perkuat Kemitraan Industri melalui Penandatanganan MoU dengan Bnet
</a> </h3> <p class="text-slate-600 text-sm leading-relaxed">
Langkah strategis memperluas kesempatan praktik kerja industri, sinkronisasi kurikulum, dan rekrutmen lulusan langsung di bidang teknologi jaringan dan sistem digital.
</p> </div> </div> <!-- News List (Right Column) --> <div class="lg:col-span-5 flex flex-col justify-between space-y-4"> <div class="space-y-4"> <a href="https://smkn1bantul.sch.id/berita/pengumuman-dan-daftar-ulang-spmb-20262027" target="_blank" class="block p-5 rounded-xl border border-slate-200/90 hover:border-primary/50 hover:bg-blue-50/50 transition-all group"> <div class="flex items-center gap-2 text-xs text-slate-400 mb-1"> <span class="text-secondary font-bold">SPMB</span> <span>•</span> <span>Pengumuman</span> </div> <h4 class="font-bold text-slate-900 text-base group-hover:text-primary transition-colors line-clamp-2">
Pengumuman dan Alur Daftar Ulang SPMB SMKN 1 Bantul
</h4> <p class="text-xs text-slate-500 mt-1">Panduan lengkap verifikasi berkas dan registrasi ulang siswa baru.</p> </a> <a href="https://smkn1bantul.sch.id/berita/selamat-untuk-576-siswa-baru-smkn-1-bantul" target="_blank" class="block p-5 rounded-xl border border-slate-200/90 hover:border-primary/50 hover:bg-blue-50/50 transition-all group"> <div class="flex items-center gap-2 text-xs text-slate-400 mb-1"> <span class="text-blue-600 font-bold">Kesiswaan</span> <span>•</span> <span>MPLS</span> </div> <h4 class="font-bold text-slate-900 text-base group-hover:text-primary transition-colors line-clamp-2">
Selamat Datang untuk 576 Siswa Baru SMKN 1 Bantul
</h4> <p class="text-xs text-slate-500 mt-1">Kegiatan Pengenalan Lingkungan Sekolah dengan penanaman nilai budi pekerti.</p> </a> <a href="https://smkn1bantul.sch.id/berita/snbp-2026" target="_blank" class="block p-5 rounded-xl border border-slate-200/90 hover:border-primary/50 hover:bg-blue-50/50 transition-all group"> <div class="flex items-center gap-2 text-xs text-slate-400 mb-1"> <span class="text-emerald-600 font-bold">Prestasi Akademik</span> <span>•</span> <span>SNBP</span> </div> <h4 class="font-bold text-slate-900 text-base group-hover:text-primary transition-colors line-clamp-2">
Lolos Seleksi Nasional Berdasarkan Prestasi (SNBP)
</h4> <p class="text-xs text-slate-500 mt-1">Puluhan siswa SMKN 1 Bantul sukses menembus perguruan tinggi negeri impian.</p> </a> <a href="https://smkn1bantul.sch.id/berita/tim-publikasi-smkn-1-bantul" target="_blank" class="block p-5 rounded-xl border border-slate-200/90 hover:border-primary/50 hover:bg-blue-50/50 transition-all group"> <div class="flex items-center gap-2 text-xs text-slate-400 mb-1"> <span class="text-purple-600 font-bold">Media & Kreatif</span> <span>•</span> <span>Publikasi</span> </div> <h4 class="font-bold text-slate-900 text-base group-hover:text-primary transition-colors line-clamp-2">
Tim Publikasi & Jurnalistik SMKN 1 Bantul Aktif Mengudara
</h4> <p class="text-xs text-slate-500 mt-1">Dokumentasi prestasi dan sinergi pembelajaran kreatif siswa multimedia.</p> </a> </div> </div> </div> </div> </section>  <section id="prestasi" class="py-20 lg:py-24 bg-gradient-to-r from-blue-900 via-primary to-blue-950 text-white overflow-hidden"> <div class="container mx-auto px-6 lg:px-12"> <div class="text-center max-w-3xl mx-auto space-y-4 mb-16"> <div class="inline-block px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/20">
Prestasi Membanggakan
</div> <h2 class="text-3xl md:text-4xl font-black font-['Montserrat'] tracking-tight">
Prestasi Siswa SMKN 1 Bantul
</h2> <p class="text-blue-100 text-base md:text-lg">
Bukti nyata dedikasi, bimbingan guru ahli, dan keunggulan kompetensi siswa di kancah daerah maupun nasional.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${achievements.map((item, idx) => renderTemplate`<div class="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-xl hover:bg-white/15 transition-all duration-300 flex flex-col justify-between group"> <div class="space-y-4"> <div class="flex items-center justify-between"> <span class="text-amber-400 text-xs font-extrabold tracking-widest uppercase bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30"> ${item.rank} </span> <span class="text-3xl font-black opacity-30 text-white font-['Montserrat']">
#${idx + 1} </span> </div> <div> <h3 class="text-xl font-bold font-['Montserrat'] text-white group-hover:text-amber-300 transition-colors"> ${item.title} </h3> <p class="text-blue-200 text-sm mt-1"> ${item.event} </p> </div> </div> <div class="pt-6 mt-6 border-t border-white/10"> <p class="font-bold text-white text-sm">${item.student}</p> <p class="text-xs text-blue-300">${item.major} • SMKN 1 Bantul</p> </div> </div>`)} </div> <div class="text-center mt-12"> <a href="https://smkn1bantul.sch.id/prestasi" target="_blank" class="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-blue-900 font-bold text-sm hover:bg-blue-50 transition-all shadow-lg"> <span>Lihat Semua Prestasi Siswa</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> </a> </div> </div> </section>  <section id="mitra" class="py-20 bg-slate-50 border-t border-slate-200"> <div class="container mx-auto px-6 lg:px-12 text-center"> <div class="max-w-2xl mx-auto space-y-3 mb-12"> <span class="text-xs font-bold text-primary uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
Sinergi Dunia Usaha & Industri
</span> <h2 class="text-3xl font-black text-slate-900 font-['Montserrat']">
Kerjasama & Kemitraan Industri
</h2> <p class="text-slate-600 text-sm md:text-base">
SMKN 1 Bantul bekerja sama dengan puluhan perusahaan terkemuka dan perguruan tinggi untuk magang, penyelarasan kurikulum, dan penyaluran kerja.
</p> </div> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"> ${partners.map((partner) => renderTemplate`<div class="bg-white rounded-xl border border-slate-200/80 p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all h-24"> <span class="font-bold text-xs md:text-sm text-slate-800 line-clamp-2"> ${partner.name} </span> <span class="text-[10px] text-slate-400 mt-1 uppercase tracking-wider"> ${partner.type} </span> </div>`)} </div> </div> </section>  <section class="py-16 bg-white border-t border-slate-100"> <div class="container mx-auto px-6 lg:px-12 text-center"> <h3 class="text-2xl font-bold font-['Montserrat'] text-slate-900 mb-8">
Terhubung dengan Komunitas Resmi SMKN 1 Bantul
</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"> <a href="https://www.youtube.com/@officialsmkn1bantul" target="_blank" rel="noopener noreferrer" class="p-6 rounded-2xl border border-slate-200 hover:border-red-500 hover:bg-red-50/30 transition-all flex flex-col items-center gap-3 group shadow-sm hover:shadow"> <div class="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
YT
</div> <span class="font-bold text-slate-800 text-sm">YouTube</span> <span class="text-xs text-slate-500">@officialsmkn1bantul</span> </a> <a href="https://instagram.com/smkn1bantul" target="_blank" rel="noopener noreferrer" class="p-6 rounded-2xl border border-slate-200 hover:border-pink-500 hover:bg-pink-50/30 transition-all flex flex-col items-center gap-3 group shadow-sm hover:shadow"> <div class="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
IG
</div> <span class="font-bold text-slate-800 text-sm">Instagram</span> <span class="text-xs text-slate-500">@smkn1bantul</span> </a> <a href="https://x.com/skansaba_id" target="_blank" rel="noopener noreferrer" class="p-6 rounded-2xl border border-slate-200 hover:border-slate-800 hover:bg-slate-50 transition-all flex flex-col items-center gap-3 group shadow-sm hover:shadow"> <div class="w-12 h-12 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
X
</div> <span class="font-bold text-slate-800 text-sm">Twitter / X</span> <span class="text-xs text-slate-500">@skansaba_id</span> </a> <a href="https://tiktok.com/@skansaba.id" target="_blank" rel="noopener noreferrer" class="p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/30 transition-all flex flex-col items-center gap-3 group shadow-sm hover:shadow"> <div class="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
TT
</div> <span class="font-bold text-slate-800 text-sm">TikTok</span> <span class="text-xs text-slate-500">@skansaba.id</span> </a> </div> </div> </section> ${renderComponent($$result2, "SchoolFooter", $$SchoolFooter, {})} ` })} <!-- Client scripts for interactive hero slider and sambutan toggle --> ${renderScript($$result, "/home/lneo/Documents/BLUD-Mart/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/lneo/Documents/BLUD-Mart/src/pages/index.astro", void 0);

const $$file = "/home/lneo/Documents/BLUD-Mart/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
