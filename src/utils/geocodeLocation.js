const geocodeCache = new Map();

const geocodeLocation = async (query) => {
  const key = query.trim().toLowerCase();
  if (geocodeCache.has(key)) {
    return geocodeCache.get(key);
  }

  const params = new URLSearchParams({
    q: query,
    format: "json",
    limit: "1",
    countrycodes: "us",
  });

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?${params.toString()}`,
    { headers: { "Accept-Language": "en" } }
  );

  if (!response.ok) {
    throw new Error(`Geocoding failed for "${query}"`);
  }

  const results = await response.json();
  if (!results.length) {
    throw new Error(`No results for "${query}"`);
  }

  const [result] = results;
  const geocoded = {
    lat: parseFloat(result.lat),
    lng: parseFloat(result.lon),
    name: result.display_name.split(",")[0],
  };

  geocodeCache.set(key, geocoded);
  return geocoded;
};

export default geocodeLocation;
