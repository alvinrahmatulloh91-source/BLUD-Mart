export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  return new Response(
    JSON.stringify({
      status: "ok",
      service: "skansaba-blud-mart",
      time: (/* @__PURE__ */ new Date()).toISOString()
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
