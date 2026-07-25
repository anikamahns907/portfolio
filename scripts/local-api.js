/**
 * Tiny local stand-in for Netlify's /api/instagram-count function.
 * Used by `npm run dev` via the CRA proxy to localhost:9999.
 */
const http = require("http");
const { handler } = require("../netlify/functions/instagram-count");

const PORT = 9999;

const server = http.createServer(async (req, res) => {
  if (req.url !== "/api/instagram-count" && req.url !== "/.netlify/functions/instagram-count") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  try {
    const result = await handler();
    res.writeHead(result.statusCode, result.headers);
    res.end(result.body);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: error.message || "Server error" }));
  }
});

server.listen(PORT, () => {
  console.log(`Local Instagram count API on http://localhost:${PORT}`);
});
