import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BzUaCFSz.mjs';
import { $ as $$UnitHeader } from '../../../chunks/UnitHeader_B6YjEW8Q.mjs';
import { i as icon } from '../../../chunks/icons_BgEnv9BM.mjs';
import { g as getUnitBySlug, a as getUnitProducts } from '../../../chunks/units_CihJ_dgi.mjs';
import { f as formatRupiah } from '../../../chunks/utils_qT6bob4x.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://smkn1bantul.sch.id");
const $$Katalog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Katalog;
  const { unitSlug } = Astro2.params;
  const unit = unitSlug ? await getUnitBySlug(unitSlug) : null;
  if (!unit) return Astro2.redirect("/blud/unit");
  const products = await getUnitProducts(unit.id);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Katalog ${unit.name} - SKANSABA BLUD-MART` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "UnitHeader", $$UnitHeader, { "unitSlug": unit.slug, "unitName": unit.name })} ${maybeRenderHead()}<main class="py-12"> <div class="container"> <h1 class="text-3xl font-bold mb-2">Katalog Produk</h1> <p class="text-muted-foreground mb-8">Semua produk yang dijual oleh ${unit.name}.</p> ${products.length === 0 ? renderTemplate`<div class="text-center py-12 border rounded-xl bg-card"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("package", "h-12 w-12 text-muted-foreground mx-auto mb-4"))}` })} <h3 class="font-semibold mb-2">Belum ada produk</h3> <p class="text-sm text-muted-foreground">Produk akan segera hadir.</p> </div>` : renderTemplate`<div class="grid md:grid-cols-3 gap-6"> ${products.map((product) => renderTemplate`<div class="rounded-xl border bg-card overflow-hidden hover:shadow-md transition-all"> <div class="h-40 bg-muted flex items-center justify-center"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("image", "h-10 w-10 text-muted-foreground"))}` })} </div> <div class="p-6"> ${product.estimatedDuration && renderTemplate`<span class="text-xs text-muted-foreground">${product.estimatedDuration}</span>`} <h3 class="font-semibold mb-2">${product.name}</h3> <p class="text-sm text-muted-foreground mb-3 line-clamp-2">${product.description}</p> <p class="text-secondary font-bold">${formatRupiah(product.price)}</p> </div> </div>`)} </div>`} </div> </main> <footer class="border-t py-8 bg-muted/50"> <div class="container text-center text-sm text-muted-foreground">
© ${(/* @__PURE__ */ new Date()).getFullYear()} ${unit.name} - SKANSABA BLUD-MART
</div> </footer> ` })}`;
}, "/home/lneo/Documents/BLUD-Mart/src/pages/blud/[unitSlug]/katalog.astro", void 0);

const $$file = "/home/lneo/Documents/BLUD-Mart/src/pages/blud/[unitSlug]/katalog.astro";
const $$url = "/blud/[unitSlug]/katalog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Katalog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
