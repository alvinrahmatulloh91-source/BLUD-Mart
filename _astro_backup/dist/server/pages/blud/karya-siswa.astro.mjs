import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, u as unescapeHTML } from '../../chunks/astro/server_tnEpuV-G.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BzUaCFSz.mjs';
import { $ as $$BludHeader, a as $$BludFooter } from '../../chunks/BludFooter_DZldsl2r.mjs';
import { $ as $$Link } from '../../chunks/Link_Bg6bhCdz.mjs';
import { i as icon } from '../../chunks/icons_BgEnv9BM.mjs';
import { g as getStudentWorks } from '../../chunks/student-works_DQZdYIo0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const works = await getStudentWorks();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karya Siswa - SKANSABA BLUD-MART" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BludHeader", $$BludHeader, {})} ${maybeRenderHead()}<main class="py-12"> <div class="container"> ${renderComponent($$result2, "Link", $$Link, { "href": "/blud", "class": "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${unescapeHTML(icon("arrow-left", "h-4 w-4"))}` })}
Kembali ke Beranda BLUD
` })} <div class="mb-12"> <h1 class="text-4xl font-bold mb-4 text-primary">Karya Siswa</h1> <p class="text-xl text-muted-foreground max-w-3xl">
Portofolio dan karya inovatif siswa SMKN 1 Bantul dari berbagai program
          keahlian dan unit produksi.
</p> </div> ${works.length === 0 ? renderTemplate`<div class="text-center py-12"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("award", "h-16 w-16 text-muted-foreground mx-auto mb-4"))}` })} <h3 class="text-xl font-semibold mb-2">Belum ada karya siswa</h3> <p class="text-muted-foreground">
Karya siswa akan ditampilkan di sini setelah ditambahkan.
</p> </div>` : renderTemplate`<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${works.map((karya) => renderTemplate`<div class="rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all flex flex-col"> <div class="h-48 bg-muted flex items-center justify-center"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("award", "h-16 w-16 text-muted-foreground"))}` })} </div> <div class="p-6 flex-1"> <div class="flex items-center gap-2 mb-3"> ${karya.major && renderTemplate`<span class="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary"> ${karya.major} </span>`} ${karya.year && renderTemplate`<span class="text-xs text-muted-foreground flex items-center gap-1"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("calendar", "h-3 w-3"))}` })} ${karya.year} </span>`} </div> <h3 class="font-semibold text-lg mb-2">${karya.title}</h3> <p class="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1"> ${karya.description} </p> <div class="flex items-center justify-between text-xs text-muted-foreground mb-4"> ${karya.studentTeam && renderTemplate`<span class="flex items-center gap-1"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(icon("user", "h-3 w-3"))}` })} ${karya.studentTeam} </span>`} </div> </div> </div>`)} </div>`} </div> </main> ${renderComponent($$result2, "BludFooter", $$BludFooter, {})} ` })}`;
}, "/home/lneo/Documents/BLUD-Mart/src/pages/blud/karya-siswa/index.astro", void 0);

const $$file = "/home/lneo/Documents/BLUD-Mart/src/pages/blud/karya-siswa/index.astro";
const $$url = "/blud/karya-siswa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
