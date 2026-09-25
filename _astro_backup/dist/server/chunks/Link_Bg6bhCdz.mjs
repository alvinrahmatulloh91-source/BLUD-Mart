import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate } from './astro/server_tnEpuV-G.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://smkn1bantul.sch.id");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(className, "class")}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/home/lneo/Documents/BLUD-Mart/src/components/Link.astro", void 0);

export { $$Link as $ };
