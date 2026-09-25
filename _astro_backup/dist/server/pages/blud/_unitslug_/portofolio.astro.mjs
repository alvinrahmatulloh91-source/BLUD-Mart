import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BzUaCFSz.mjs';
import { $ as $$UnitHeader } from '../../../chunks/UnitHeader_B6YjEW8Q.mjs';
import { i as icon } from '../../../chunks/icons_BgEnv9BM.mjs';
import { g as getUnitBySlug } from '../../../chunks/units_CihJ_dgi.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://smkn1bantul.sch.id");
const $$Portofolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portofolio;
  const { unitSlug } = Astro2.params;
  const unit = unitSlug ? await getUnitBySlug(unitSlug) : null;
  if (!unit) return Astro2.redirect("/blud/unit");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Portofolio ${unit.name} - SKANSABA BLUD-MART` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "UnitHeader", $$UnitHeader, { "unitSlug": unit.slug, "unitName": unit.name })} ${maybeRenderHead()}<main class="py-12"> <div class="container"> <h1 class="text-3xl font-bold mb-2">Portofolio</h1> <p class="text-muted-foreground mb-8">
Karya dan proyek yang telah diselesaikan oleh ${unit.name}.
</p> <div class="text-center py-12 border rounded-xl bg-card"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("image", "h-12 w-12 text-muted-foreground mx-auto mb-4"))}` })} <h3 class="font-semibold mb-2">Portofolio segera hadir</h3> <p class="text-sm text-muted-foreground">
Dokumentasi proyek unit akan ditampilkan di sini.
</p> </div> </div> </main> <footer class="border-t py-8 bg-muted/50"> <div class="container text-center text-sm text-muted-foreground">
© ${(/* @__PURE__ */ new Date()).getFullYear()} ${unit.name} - SKANSABA BLUD-MART
</div> </footer> ` })}`;
}, "/home/lneo/Documents/BLUD-Mart/src/pages/blud/[unitSlug]/portofolio.astro", void 0);

const $$file = "/home/lneo/Documents/BLUD-Mart/src/pages/blud/[unitSlug]/portofolio.astro";
const $$url = "/blud/[unitSlug]/portofolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portofolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
