import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, u as unescapeHTML } from '../../chunks/astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BzUaCFSz.mjs';
import { $ as $$UnitHeader } from '../../chunks/UnitHeader_B6YjEW8Q.mjs';
import { $ as $$Link } from '../../chunks/Link_Bg6bhCdz.mjs';
import { i as icon } from '../../chunks/icons_BgEnv9BM.mjs';
import { g as getUnitBySlug, a as getUnitProducts, b as getUnitServices } from '../../chunks/units_CihJ_dgi.mjs';
import { f as formatRupiah } from '../../chunks/utils_qT6bob4x.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://smkn1bantul.sch.id");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { unitSlug } = Astro2.params;
  const unit = unitSlug ? await getUnitBySlug(unitSlug) : null;
  if (!unit) {
    return Astro2.redirect("/blud/unit");
  }
  const [products, services] = await Promise.all([
    getUnitProducts(unit.id),
    getUnitServices(unit.id)
  ]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${unit.name} - SKANSABA BLUD-MART`, "description": unit.description ?? void 0 }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "UnitHeader", $$UnitHeader, { "unitSlug": unit.slug, "unitName": unit.name, "hasServices": services.length > 0 })}  ${maybeRenderHead()}<section class="py-16 bg-gradient-to-br from-primary/5 to-secondary/5"> <div class="container text-center"> ${unit.category && renderTemplate`<span class="text-sm font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-4 inline-block"> ${unit.category} </span>`} <h1 class="text-4xl md:text-5xl font-bold mb-6 text-primary">${unit.name}</h1> <p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"> ${unit.description} </p> <div class="flex justify-center gap-4"> ${renderComponent($$result2, "Link", $$Link, { "href": `/blud/${unit.slug}/katalog`, "class": "inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors" }, { "default": async ($$result3) => renderTemplate`
Lihat Katalog
${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${unescapeHTML(icon("arrow-right", "h-4 w-4"))}` })} ` })} ${services.length > 0 && renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": `/blud/${unit.slug}/layanan`, "class": "inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors" }, { "default": async ($$result3) => renderTemplate`
Pesan Layanan
` })}`} </div> </div> </section>  ${services.length > 0 && renderTemplate`<section class="py-16"> <div class="container"> <h2 class="text-2xl font-bold mb-8 flex items-center gap-2"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("wrench", "h-6 w-6 text-secondary"))}` })}
Layanan Unggulan
</h2> <div class="grid md:grid-cols-3 gap-6"> ${services.map((service) => renderTemplate`<div class="p-6 rounded-xl border bg-card hover:shadow-md transition-all"> <h3 class="font-semibold text-lg mb-2">${service.name}</h3> ${service.priceFrom !== null && renderTemplate`<p class="text-secondary font-medium">
Mulai ${formatRupiah(service.priceFrom)} </p>`} ${service.duration && renderTemplate`<p class="text-sm text-muted-foreground mt-1">${service.duration}</p>`} </div>`)} </div> </div> </section>`} ${products.length > 0 && renderTemplate`<section class="py-16 bg-muted/50"> <div class="container"> <h2 class="text-2xl font-bold mb-8 flex items-center gap-2"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("package", "h-6 w-6 text-secondary"))}` })}
Produk Unggulan
</h2> <div class="grid md:grid-cols-3 gap-6"> ${products.map((product) => renderTemplate`<div class="p-6 rounded-xl border bg-card hover:shadow-md transition-all"> <div class="h-32 bg-muted rounded-lg mb-4 flex items-center justify-center"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("image", "h-8 w-8 text-muted-foreground"))}` })} </div> <h3 class="font-semibold mb-2">${product.name}</h3> <p class="text-secondary font-medium">${formatRupiah(product.price)}</p> </div>`)} </div> </div> </section>`} <section class="py-16"> <div class="container text-center"> <h2 class="text-2xl font-bold mb-4">Tertarik untuk memesan?</h2> <p class="text-muted-foreground mb-8">
Hubungi kami atau kunjungi katalog untuk melihat semua layanan dan produk.
</p> ${renderComponent($$result2, "Link", $$Link, { "href": `/blud/${unit.slug}/kontak`, "class": "inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${unescapeHTML(icon("mail", "h-4 w-4"))}` })}
Hubungi Kami
` })} </div> </section> <footer class="border-t py-8 bg-muted/50"> <div class="container text-center text-sm text-muted-foreground">
© ${(/* @__PURE__ */ new Date()).getFullYear()} ${unit.name} - SKANSABA BLUD-MART
</div> </footer> ` })}`;
}, "/home/lneo/Documents/BLUD-Mart/src/pages/blud/[unitSlug]/index.astro", void 0);

const $$file = "/home/lneo/Documents/BLUD-Mart/src/pages/blud/[unitSlug]/index.astro";
const $$url = "/blud/[unitSlug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
