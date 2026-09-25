import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, u as unescapeHTML, h as addAttribute } from '../../../chunks/astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BzUaCFSz.mjs';
import { $ as $$UnitHeader } from '../../../chunks/UnitHeader_B6YjEW8Q.mjs';
import { i as icon } from '../../../chunks/icons_BgEnv9BM.mjs';
import { g as getUnitBySlug } from '../../../chunks/units_CihJ_dgi.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://smkn1bantul.sch.id");
const $$Kontak = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kontak;
  const { unitSlug } = Astro2.params;
  const unit = unitSlug ? await getUnitBySlug(unitSlug) : null;
  if (!unit) return Astro2.redirect("/blud/unit");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Kontak ${unit.name} - SKANSABA BLUD-MART` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "UnitHeader", $$UnitHeader, { "unitSlug": unit.slug, "unitName": unit.name })} ${maybeRenderHead()}<main class="py-12"> <div class="container max-w-3xl"> <h1 class="text-3xl font-bold mb-2">Hubungi Kami</h1> <p class="text-muted-foreground mb-8">
Untuk informasi pemesanan layanan dan produk dari ${unit.name}.
</p> <div class="grid md:grid-cols-2 gap-6"> <div class="p-6 rounded-xl border bg-card"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("mail", "h-8 w-8 text-secondary mb-4"))}` })} <h3 class="font-semibold mb-2">Email</h3> <p class="text-sm text-muted-foreground">blud@smkn1bantul.sch.id</p> </div> <div class="p-6 rounded-xl border bg-card"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("building-2", "h-8 w-8 text-secondary mb-4"))}` })} <h3 class="font-semibold mb-2">Alamat</h3> <p class="text-sm text-muted-foreground">
SMKN 1 Bantul<br>
Jl. Pramuka No. 27 Bantul
</p> </div> </div> <div class="mt-8 p-6 rounded-xl border bg-secondary/5"> <h3 class="font-semibold mb-2">Pemesanan</h3> <p class="text-sm text-muted-foreground">
Kunjungi katalog untuk melihat produk, atau layanan untuk melihat jasa yang
          tersedia, lalu hubungi kontak di atas untuk proses pemesanan.
</p> <div class="flex gap-4 mt-4"> <a${addAttribute(`/blud/${unit.slug}/katalog`, "href")} class="text-sm font-medium text-primary hover:underline">
Lihat Katalog →
</a> <a${addAttribute(`/blud/${unit.slug}/layanan`, "href")} class="text-sm font-medium text-secondary hover:underline">
Lihat Layanan →
</a> </div> </div> </div> </main> <footer class="border-t py-8 bg-muted/50"> <div class="container text-center text-sm text-muted-foreground">
© ${(/* @__PURE__ */ new Date()).getFullYear()} ${unit.name} - SKANSABA BLUD-MART
</div> </footer> ` })}`;
}, "/home/lneo/Documents/BLUD-Mart/src/pages/blud/[unitSlug]/kontak.astro", void 0);

const $$file = "/home/lneo/Documents/BLUD-Mart/src/pages/blud/[unitSlug]/kontak.astro";
const $$url = "/blud/[unitSlug]/kontak";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kontak,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
