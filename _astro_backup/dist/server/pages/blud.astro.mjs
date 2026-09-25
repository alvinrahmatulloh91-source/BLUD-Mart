import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, u as unescapeHTML, h as addAttribute } from '../chunks/astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzUaCFSz.mjs';
import { $ as $$BludHeader, a as $$BludFooter } from '../chunks/BludFooter_DZldsl2r.mjs';
import { $ as $$Link } from '../chunks/Link_Bg6bhCdz.mjs';
import { i as icon } from '../chunks/icons_BgEnv9BM.mjs';
import { c as getPublicUnits } from '../chunks/units_CihJ_dgi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const units = (await getPublicUnits()).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "SKANSABA BLUD-MART - Portal BLUD SMKN 1 Bantul" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BludHeader", $$BludHeader, {})}  ${maybeRenderHead()}<section class="py-20 bg-gradient-to-br from-secondary/10 to-primary/5"> <div class="container text-center"> <h1 class="text-4xl md:text-5xl font-bold mb-6 text-primary">
Semua Unit BLUD dalam Satu Platform
</h1> <p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
Kenali berbagai unit produksi, jasa, layanan, dan karya produktif dalam
        ekosistem BLUD SMKN 1 Bantul.
</p> <div class="flex justify-center gap-4"> ${renderComponent($$result2, "Link", $$Link, { "href": "/blud/unit", "class": "inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-lg" }, { "default": async ($$result3) => renderTemplate`
Jelajahi Semua Unit
${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${unescapeHTML(icon("arrow-right", "h-5 w-5"))}` })} ` })} ${renderComponent($$result2, "Link", $$Link, { "href": "/blud/tentang", "class": "inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors text-lg" }, { "default": async ($$result3) => renderTemplate`
Pelajari BLUD
` })} </div> </div> </section>  <section class="py-16"> <div class="container"> <h2 class="text-3xl font-bold text-center mb-12">Ekosistem BLUD SMKN 1 Bantul</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="p-6 rounded-xl border bg-card hover:shadow-lg transition-all"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("layers", "h-12 w-12 text-secondary mb-4"))}` })} <h3 class="text-xl font-semibold mb-2">Unit Produksi</h3> <p class="text-muted-foreground">
Berbagai unit produksi yang dikelola oleh siswa dengan bimbingan guru
            profesional.
</p> ${renderComponent($$result2, "Link", $$Link, { "href": "/blud/unit", "class": "text-secondary font-medium mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all" }, { "default": async ($$result3) => renderTemplate`
Lihat Unit ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${unescapeHTML(icon("arrow-right", "h-4 w-4"))}` })} ` })} </div> <div class="p-6 rounded-xl border bg-card hover:shadow-lg transition-all"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("award", "h-12 w-12 text-secondary mb-4"))}` })} <h3 class="text-xl font-semibold mb-2">Karya Siswa</h3> <p class="text-muted-foreground">
Portofolio dan karya inovatif siswa dari berbagai program keahlian.
</p> ${renderComponent($$result2, "Link", $$Link, { "href": "/blud/karya-siswa", "class": "text-secondary font-medium mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all" }, { "default": async ($$result3) => renderTemplate`
Lihat Karya ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${unescapeHTML(icon("arrow-right", "h-4 w-4"))}` })} ` })} </div> <div class="p-6 rounded-xl border bg-card hover:shadow-lg transition-all"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("users", "h-12 w-12 text-secondary mb-4"))}` })} <h3 class="text-xl font-semibold mb-2">Pembelajaran Nyata</h3> <p class="text-muted-foreground">
Pengalaman bisnis riil sebagai bagian dari pembelajaran berbasis produksi.
</p> ${renderComponent($$result2, "Link", $$Link, { "href": "/blud/tentang", "class": "text-secondary font-medium mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all" }, { "default": async ($$result3) => renderTemplate`
Pelajari Lebih ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${unescapeHTML(icon("arrow-right", "h-4 w-4"))}` })} ` })} </div> </div> </div> </section>  <section class="py-16 bg-muted/50"> <div class="container"> <div class="flex justify-between items-center mb-8"> <h2 class="text-2xl font-bold">Unit Unggulan</h2> ${renderComponent($$result2, "Link", $$Link, { "href": "/blud/unit", "class": "text-secondary font-medium hover:underline" }, { "default": async ($$result3) => renderTemplate`
Lihat Semua →
` })} </div> <div class="grid md:grid-cols-3 gap-6"> ${units.map((unit) => renderTemplate`<a${addAttribute(`/blud/${unit.slug}`, "href")} class="p-6 rounded-xl border bg-card hover:shadow-md transition-all block"> <h3 class="font-semibold text-lg">${unit.name}</h3> <p class="text-sm text-muted-foreground">${unit.category}</p> </a>`)} </div> </div> </section> ${renderComponent($$result2, "BludFooter", $$BludFooter, {})} ` })}`;
}, "/home/lneo/Documents/BLUD-Mart/src/pages/blud/index.astro", void 0);

const $$file = "/home/lneo/Documents/BLUD-Mart/src/pages/blud/index.astro";
const $$url = "/blud";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
