export default {
  async fetch(request, env) {
    const provided = request.headers.get("Authorization") || "";
    const expected = "Basic " + btoa(`${env.BASIC_USER}:${env.BASIC_PASS}`);

    let ok = provided.length === expected.length;
    for (let i = 0; i < expected.length; i++) {
      if (provided.charCodeAt(i) !== expected.charCodeAt(i)) ok = false;
    }

    if (!ok) {
      return new Response("Authentication required\n", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Energym", charset="UTF-8"',
          "Cache-Control": "no-store",
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
