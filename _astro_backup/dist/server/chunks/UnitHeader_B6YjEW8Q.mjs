import { e as createAstro, f as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate, l as Fragment, u as unescapeHTML } from './astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$Link } from './Link_Bg6bhCdz.mjs';
import { i as icon } from './icons_BgEnv9BM.mjs';

const $$Astro = createAstro("https://smkn1bantul.sch.id");
const $$UnitHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UnitHeader;
  const { unitSlug, unitName, hasServices = true } = Astro2.props;
  const path = Astro2.url.pathname;
  const nav = [
    { href: `/blud/${unitSlug}`, label: "Beranda", exact: true },
    { href: `/blud/${unitSlug}/katalog`, label: "Katalog", exact: false },
    { href: `/blud/${unitSlug}/layanan`, label: "Layanan", exact: false },
    { href: `/blud/${unitSlug}/portofolio`, label: "Portofolio", exact: false },
    { href: `/blud/${unitSlug}/kontak`, label: "Kontak", exact: false }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"> <div class="container flex h-16 items-center justify-between"> <div class="flex items-center gap-4"> ${renderComponent($$result, "Link", $$Link, { "href": "/blud/unit", "class": "text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon("arrow-left", "h-4 w-4"))}` })}
Semua Unit
` })} <div class="h-6 w-px bg-border"></div> <span class="text-lg font-bold text-primary">${unitName}</span> </div> <nav class="hidden md:flex items-center gap-6"> ${nav.map((item) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": item.href, "class:list": [
    "text-sm font-medium hover:text-primary",
    (item.exact ? path === item.href : path.startsWith(item.href)) && "text-primary"
  ] }, { "default": ($$result2) => renderTemplate`${item.label}` })}`)} </nav> ${renderComponent($$result, "Link", $$Link, { "href": "/blud", "class": "text-sm text-muted-foreground hover:text-primary" }, { "default": ($$result2) => renderTemplate`
Kembali ke BLUD-Mart
` })} </div> </header>`;
}, "/home/lneo/Documents/BLUD-Mart/src/components/UnitHeader.astro", void 0);

export { $$UnitHeader as $ };
