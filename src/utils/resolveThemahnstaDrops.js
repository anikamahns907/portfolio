import themahnstaDrops from "../data/themahnstaDrops.json";
import geocodeLocation from "./geocodeLocation";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Drops at the same spot would hide each other, so place them on a small circle.
const OVERLAP_SPREAD_DEGREES = 0.0004;

const spreadOverlappingDrops = (drops) => {
  const groups = new Map();
  drops.forEach((drop) => {
    const key = `${drop.lat},${drop.lng}`;
    groups.set(key, [...(groups.get(key) || []), drop]);
  });

  return drops.map((drop) => {
    const group = groups.get(`${drop.lat},${drop.lng}`);
    if (group.length < 2) return drop;

    const angle = (2 * Math.PI * group.indexOf(drop)) / group.length;
    // Longitude degrees shrink with latitude; scale so the circle stays round.
    const lngScale = 1 / Math.cos((drop.lat * Math.PI) / 180);
    return {
      ...drop,
      lat: drop.lat + OVERLAP_SPREAD_DEGREES * Math.sin(angle),
      lng: drop.lng + OVERLAP_SPREAD_DEGREES * Math.cos(angle) * lngScale,
    };
  });
};

const resolveThemahnstaDrops = async () => {
  const resolved = [];

  for (let index = 0; index < themahnstaDrops.length; index += 1) {
    const drop = themahnstaDrops[index];
    if (!drop.location?.trim()) continue;
    const id = drop.id || slugify(drop.image.replace(/\.[^.]+$/, ""));

    let lat = drop.lat;
    let lng = drop.lng;
    let name = drop.name;

    if (lat == null || lng == null) {
      const geocoded = await geocodeLocation(drop.location);
      lat = geocoded.lat;
      lng = geocoded.lng;
      name = name || geocoded.name;
      // Nominatim asks for at most 1 request per second.
      await new Promise((resolve) => setTimeout(resolve, 1100));
    }

    const rawPath = drop.image.startsWith("/")
      ? drop.image
      : `/themahnsta/${drop.image}`;
    const image = rawPath
      .split("/")
      .map((segment) => encodeURIComponent(segment))
      .join("/");

    resolved.push({
      id,
      name: name || drop.location,
      neighborhood: drop.neighborhood || drop.location,
      lat,
      lng,
      date: drop.date || null,
      image,
      instagramUrl: drop.instagramUrl || null,
      caption: drop.caption || null,
      locationQuery: drop.location,
      sortOrder: drop.sortOrder ?? index,
    });
  }

  return spreadOverlappingDrops(resolved).sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
};

export default resolveThemahnstaDrops;
