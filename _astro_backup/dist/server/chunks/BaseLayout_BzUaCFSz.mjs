import { e as createAstro, f as createComponent, h as addAttribute, p as renderHead, n as renderSlot, r as renderTemplate } from './astro/server_tnEpuV-G.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

function systemInter() {
  return {
    className: "font-sans"
  };
}
async function loadInter() {
  try {
    const mod = await Promise.resolve({                    });
    void mod;
    return { className: "font-sans" };
  } catch {
    return systemInter();
  }
}
const Inter = await loadInter();

const $$Astro = createAstro("https://smkn1bantul.sch.id");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "SMKN 1 BANTUL - Sekolah Pusat Keunggulan & SKANSABA BLUD-MART",
    description = "Website Resmi SMKN 1 Bantul terintegrasi dengan Platform Digital SKANSABA BLUD-MART - Portal Unit Produksi, Jasa, dan Katalog Kreatif."
  } = Astro2.props;
  return renderTemplate`<html lang="id" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="https://smkn1bantul.sch.id/logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:locale" content="id_ID"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body${addAttribute(`${Inter.className} antialiased selection:bg-primary selection:text-white bg-slate-50 text-slate-900`, "class")}> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/lneo/Documents/BLUD-Mart/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
