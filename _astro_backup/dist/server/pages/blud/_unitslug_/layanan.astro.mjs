import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BzUaCFSz.mjs';
import { $ as $$UnitHeader } from '../../../chunks/UnitHeader_B6YjEW8Q.mjs';
import { i as icon } from '../../../chunks/icons_BgEnv9BM.mjs';
import { g as getUnitBySlug, b as getUnitServices } from '../../../chunks/units_CihJ_dgi.mjs';
import { f as formatRupiah } from '../../../chunks/utils_qT6bob4x.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://smkn1bantul.sch.id");
const $$Layanan = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layanan;
  const { unitSlug } = Astro2.params;
  const unit = unitSlug ? await getUnitBySlug(unitSlug) : null;
  if (!unit) return Astro2.redirect("/blud/unit");
  const services = await getUnitServices(unit.id);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Layanan ${unit.name} - SKANSABA BLUD-MART` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "UnitHeader", $$UnitHeader, { "unitSlug": unit.slug, "unitName": unit.name })} ${maybeRenderHead()}<main class="py-12"> <div class="container"> <h1 class="text-3xl font-bold mb-2">Layanan</h1> <p class="text-muted-foreground mb-8">Layanan yang disediakan oleh ${unit.name}.</p> ${services.length === 0 ? renderTemplate`<div class="text-center py-12 border rounded-xl bg-card"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("wrench", "h-12 w-12 text-muted-foreground mx-auto mb-4"))}` })} <h3 class="font-semibold mb-2">Belum ada layanan</h3> <p class="text-sm text-muted-foreground">Layanan akan segera hadir.</p> </div>` : renderTemplate`<div class="grid md:grid-cols-2 gap-6"> ${services.map((service) => renderTemplate`<div class="p-6 rounded-xl border bg-card hover:shadow-md transition-all"> <div class="flex items-start justify-between mb-2"> <h3 class="font-semibold text-lg">${service.name}</h3> ${service.priceFrom !== null && renderTemplate`<span class="text-secondary font-bold whitespace-nowrap ml-4">
Mulai ${formatRupiah(service.priceFrom)} </span>`} </div> <p class="text-sm text-muted-foreground mb-4">${service.description}</p> <div class="flex flex-wrap gap-4 text-xs text-muted-foreground"> ${service.duration && renderTemplate`<span>⏱ ${service.duration}</span>`} ${service.requirements && renderTemplate`<span>📋 ${service.requirements}</span>`} </div> </div>`)} </div>`} </div> </main> <footer class="border-t py-8 bg-muted/50"> <div class="container text-center text-sm text-muted-foreground">
© ${(/* @__PURE__ */ new Date()).getFullYear()} ${unit.name} - SKANSABA BLUD-MART
</div> </footer> ` })}`;
}, "/home/lneo/Documents/BLUD-Mart/src/pages/blud/[unitSlug]/layanan.astro", void 0);

const $$file = "/home/lneo/Documents/BLUD-Mart/src/pages/blud/[unitSlug]/layanan.astro";
const $$url = "/blud/[unitSlug]/layanan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Layanan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
