import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, u as unescapeHTML } from '../../chunks/astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BzUaCFSz.mjs';
import { $ as $$BludHeader, a as $$BludFooter } from '../../chunks/BludFooter_DZldsl2r.mjs';
import { $ as $$Link } from '../../chunks/Link_Bg6bhCdz.mjs';
import { i as icon } from '../../chunks/icons_BgEnv9BM.mjs';
import { c as getPublicUnits, a as getUnitProducts, b as getUnitServices } from '../../chunks/units_CihJ_dgi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const units = await getPublicUnits();
  const unitsWithCounts = await Promise.all(
    units.map(async (unit) => {
      const [products, services] = await Promise.all([
        getUnitProducts(unit.id),
        getUnitServices(unit.id)
      ]);
      return { ...unit, productCount: products.length, serviceCount: services.length };
    })
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Semua Unit BLUD - SKANSABA BLUD-MART" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BludHeader", $$BludHeader, {})} ${maybeRenderHead()}<main class="py-12"> <div class="container"> <div class="mb-8"> ${renderComponent($$result2, "Link", $$Link, { "href": "/blud", "class": "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${unescapeHTML(icon("arrow-left", "h-4 w-4"))}` })}
Kembali ke Beranda BLUD
` })} <h1 class="text-4xl font-bold mb-4">Semua Unit BLUD</h1> <p class="text-xl text-muted-foreground max-w-3xl">
Pilih unit untuk melihat website, layanan, katalog, dan portofolio unit
          tersebut.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${unitsWithCounts.map((unit) => renderTemplate`<div class="rounded-xl border bg-card p-6 hover:shadow-lg transition-all flex flex-col"> <div class="mb-4"> <span class="text-xs font-medium px-2 py-1 rounded-full bg-secondary/10 text-secondary"> ${unit.category} </span> </div> <h3 class="text-xl font-semibold mb-2">${unit.name}</h3> <p class="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1"> ${unit.description} </p> <div class="flex gap-4 text-xs text-muted-foreground mb-4"> ${unit.serviceCount > 0 && renderTemplate`<span>${unit.serviceCount} Layanan</span>`} ${unit.productCount > 0 && renderTemplate`<span>${unit.productCount} Produk</span>`} ${unit.serviceCount === 0 && unit.productCount === 0 && renderTemplate`<span>Informasi segera hadir</span>`} </div> ${renderComponent($$result2, "Link", $$Link, { "href": `/blud/${unit.slug}`, "class": "inline-flex items-center gap-2 w-full justify-center bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors" }, { "default": async ($$result3) => renderTemplate`
Masuk ke Website Unit
${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${unescapeHTML(icon("external-link", "h-4 w-4"))}` })} ` })} </div>`)} </div> </div> </main> ${renderComponent($$result2, "BludFooter", $$BludFooter, {})} ` })}`;
}, "/home/lneo/Documents/BLUD-Mart/src/pages/blud/unit/index.astro", void 0);

const $$file = "/home/lneo/Documents/BLUD-Mart/src/pages/blud/unit/index.astro";
const $$url = "/blud/unit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
