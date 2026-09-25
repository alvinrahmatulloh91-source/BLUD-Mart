import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzUaCFSz.mjs';
import { $ as $$Link } from '../chunks/Link_Bg6bhCdz.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Halaman Tidak Ditemukan - SMKN 1 BANTUL" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center"> <div class="text-center"> <h1 class="text-6xl font-bold text-primary mb-4">404</h1> <h2 class="text-2xl font-semibold mb-4">Halaman Tidak Ditemukan</h2> <p class="text-muted-foreground mb-8">
Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
</p> <div class="flex justify-center gap-4"> ${renderComponent($$result2, "Link", $$Link, { "href": "/", "class": "inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors" }, { "default": ($$result3) => renderTemplate`
Kembali ke Beranda
` })} ${renderComponent($$result2, "Link", $$Link, { "href": "/blud", "class": "inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors" }, { "default": ($$result3) => renderTemplate`
Portal BLUD
` })} </div> </div> </div> ` })}`;
}, "/home/lneo/Documents/BLUD-Mart/src/pages/404.astro", void 0);

const $$file = "/home/lneo/Documents/BLUD-Mart/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
