/**
 * Returns @themahnsta Instagram post count (= total shurikans dropped).
 *
 * Prefers Instagram Graph API when INSTAGRAM_USER_ID + INSTAGRAM_ACCESS_TOKEN
 * are set in Netlify env. Falls back to Instagram's public web profile endpoint.
 *
 * Note: undici/fetch adds Sec-Fetch headers that Instagram rejects, so the
 * fallback uses Node's https module instead.
 */
const https = require("https");

const USERNAME = "themahnsta";

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const ok = (body, cacheControl) => ({
  statusCode: 200,
  headers: {
    ...corsHeaders,
    "Cache-Control": cacheControl,
  },
  body: JSON.stringify(body),
});

const getJson = (url, headers = {}) =>
  new Promise((resolve, reject) => {
    const request = https.get(
      url,
      {
        headers: {
          Accept: "application/json",
          ...headers,
        },
      },
      (response) => {
        let raw = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          raw += chunk;
        });
        response.on("end", () => {
          if (response.statusCode && response.statusCode >= 400) {
            reject(
              new Error(
                `HTTP ${response.statusCode}: ${raw.slice(0, 120) || "error"}`
              )
            );
            return;
          }
          try {
            resolve(JSON.parse(raw));
          } catch (error) {
            reject(new Error(`Invalid JSON: ${raw.slice(0, 120)}`));
          }
        });
      }
    );

    request.on("error", reject);
    request.setTimeout(8000, () => {
      request.destroy(new Error("Request timed out"));
    });
  });

async function fetchViaGraphApi() {
  const userId = process.env.INSTAGRAM_USER_ID;
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!userId || !token) return null;

  const url = `https://graph.facebook.com/v21.0/${userId}?fields=media_count,username&access_token=${encodeURIComponent(
    token
  )}`;
  const data = await getJson(url);
  const count = data?.media_count;

  if (typeof count !== "number") {
    throw new Error("Graph API missing media_count");
  }

  return { count, source: "instagram-graph" };
}

async function fetchViaWebProfile() {
  const data = await getJson(
    `https://i.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}`,
    {
      "User-Agent": "Instagram 192.168.0.0.4 Android",
      "X-IG-App-ID": "936619743392459",
    }
  );

  const user = data?.data?.user;
  const count =
    user?.edge_owner_to_timeline_media?.count ?? user?.media_count;

  if (typeof count !== "number") {
    throw new Error("Web profile missing post count");
  }

  return { count, source: "instagram-web" };
}

exports.handler = async () => {
  try {
    const result = (await fetchViaGraphApi()) || (await fetchViaWebProfile());
    return ok(result, "public, s-maxage=3600, stale-while-revalidate=86400");
  } catch (error) {
    return {
      statusCode: 502,
      headers: corsHeaders,
      body: JSON.stringify({
        count: null,
        error: error.message || "Failed to fetch Instagram count",
      }),
    };
  }
};
