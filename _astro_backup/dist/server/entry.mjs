import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_9GHNbS23.mjs';
import { manifest } from './manifest_ylQog0pa.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/health.astro.mjs');
const _page3 = () => import('./pages/blud/karya-siswa.astro.mjs');
const _page4 = () => import('./pages/blud/tentang.astro.mjs');
const _page5 = () => import('./pages/blud/unit.astro.mjs');
const _page6 = () => import('./pages/blud/_unitslug_/katalog.astro.mjs');
const _page7 = () => import('./pages/blud/_unitslug_/kontak.astro.mjs');
const _page8 = () => import('./pages/blud/_unitslug_/layanan.astro.mjs');
const _page9 = () => import('./pages/blud/_unitslug_/portofolio.astro.mjs');
const _page10 = () => import('./pages/blud/_unitslug_.astro.mjs');
const _page11 = () => import('./pages/blud.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/health.ts", _page2],
    ["src/pages/blud/karya-siswa/index.astro", _page3],
    ["src/pages/blud/tentang.astro", _page4],
    ["src/pages/blud/unit/index.astro", _page5],
    ["src/pages/blud/[unitSlug]/katalog.astro", _page6],
    ["src/pages/blud/[unitSlug]/kontak.astro", _page7],
    ["src/pages/blud/[unitSlug]/layanan.astro", _page8],
    ["src/pages/blud/[unitSlug]/portofolio.astro", _page9],
    ["src/pages/blud/[unitSlug]/index.astro", _page10],
    ["src/pages/blud/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/lneo/Documents/BLUD-Mart/dist/client/",
    "server": "file:///home/lneo/Documents/BLUD-Mart/dist/server/",
    "host": false,
    "port": 3000,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
