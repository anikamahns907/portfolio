import themahnstaDrops from "../data/themahnstaDrops.json";
import geocodeLocation from "./geocodeLocation";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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

  return resolved.sort((a, b) => a.sortOrder - b.sortOrder);
};

export default resolveThemahnstaDrops;
