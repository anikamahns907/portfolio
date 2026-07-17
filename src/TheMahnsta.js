import React, { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, ZoomControl, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import resolveThemahnstaDrops from "./utils/resolveThemahnstaDrops";
import themahnstaMeta from "./data/themahnstaMeta.json";
import ShurikenMark, { SHURIKEN_SVG } from "./ShurikenMark";
import "./index.css";

const NYC_CENTER = [40.728, -73.995];
const DEFAULT_ZOOM = 12;
const INSTAGRAM_URL = themahnstaMeta.instagramUrl;
const TOTAL_DROPS = themahnstaMeta.totalDrops;
const INSTAGRAM_HANDLE = themahnstaMeta.instagramHandle;

const REGIONS = [
  {
    id: "nyc",
    label: "New York",
    test: (loc) =>
      loc.lat > 40.4 && loc.lat < 41.1 && loc.lng > -74.4 && loc.lng < -73.6,
  },
  {
    id: "la",
    label: "Los Angeles",
    test: (loc) =>
      loc.lat > 33.4 && loc.lat < 34.5 && loc.lng > -118.8 && loc.lng < -117.8,
  },
  {
    id: "boston",
    label: "Boston",
    test: (loc) =>
      loc.lat > 42.2 && loc.lat < 42.5 && loc.lng > -71.2 && loc.lng < -70.9,
  },
];

const createShurikenIcon = (isActive) =>
  L.divIcon({
    className: "themahnsta-star-icon",
    html: `<span class="themahnsta-star${
      isActive ? " themahnsta-star--active" : ""
    }" aria-hidden="true">${SHURIKEN_SVG}</span>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

const flyToLocations = (map, locations, { maxZoom = 14 } = {}) => {
  if (!locations.length) return;

  if (locations.length === 1) {
    map.flyTo([locations[0].lat, locations[0].lng], Math.min(15, maxZoom), {
      duration: 0.85,
      easeLinearity: 0.25,
    });
    return;
  }

  const bounds = L.latLngBounds(locations.map((loc) => [loc.lat, loc.lng]));
  map.flyToBounds(bounds, {
    padding: [72, 72],
    maxZoom,
    duration: 0.85,
    easeLinearity: 0.25,
  });
};

const MapCamera = ({ locations, regionId }) => {
  const map = useMap();

  useEffect(() => {
    map.attributionControl.setPrefix(false);
  }, [map]);

  useEffect(() => {
    if (locations.length === 0) return;

    if (regionId === "all") {
      flyToLocations(map, locations, { maxZoom: 5 });
      return;
    }

    const region = REGIONS.find((item) => item.id === regionId);
    const focused = region ? locations.filter(region.test) : locations;

    flyToLocations(map, focused.length ? focused : locations, {
      maxZoom: regionId === "nyc" ? 13 : 12,
    });
  }, [locations, map, regionId]);

  return null;
};

const DropLightbox = ({ drop, onClose }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [drop?.id]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!drop) return null;

  return (
    <div
      className="themahnsta-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Drop at ${drop.name}`}
      onClick={onClose}
    >
      <div
        className="themahnsta-lightbox-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="themahnsta-lightbox-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="themahnsta-lightbox-media">
          {imageError ? (
            <div className="themahnsta-lightbox-fallback">
              <ShurikenMark />
              <p>Photo unavailable</p>
            </div>
          ) : (
            <img
              src={drop.image}
              alt={`Shuriken drop at ${drop.name}`}
              className="themahnsta-lightbox-image"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <footer className="themahnsta-lightbox-footer">
          <span className="themahnsta-lightbox-footer-mark" aria-hidden="true">
            <ShurikenMark />
          </span>
          <p className="themahnsta-lightbox-location">{drop.name}</p>
        </footer>
      </div>
    </div>
  );
};

const TheMahnsta = () => {
  const [locations, setLocations] = useState([]);
  const [view, setView] = useState("gallery");
  const [selected, setSelected] = useState(null);
  const [regionId, setRegionId] = useState("nyc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    resolveThemahnstaDrops()
      .then((resolved) => {
        if (cancelled) return;
        setLocations(resolved);

        const firstRegion = REGIONS.find((region) =>
          resolved.some(region.test)
        );
        setRegionId(firstRegion?.id || "all");
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message || "Could not load drop locations.");
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const availableRegions = useMemo(
    () =>
      REGIONS.filter((region) => locations.some(region.test)).map((region) => ({
        ...region,
        count: locations.filter(region.test).length,
      })),
    [locations]
  );

  const showAllRegions = availableRegions.length > 1;

  return (
    <div className="themahnsta-shell">
      <div className="themahnsta-atmosphere" aria-hidden="true" />

      <header className="themahnsta-hero">
        <p className="themahnsta-hero-mark" aria-hidden="true">
          <ShurikenMark />
        </p>
        <h1 className="themahnsta-brand" aria-label="@themahnsta">
          <span className="themahnsta-brand-at">@</span>
          <span className="themahnsta-brand-the">the</span>
          <span className="themahnsta-brand-name">MAHNSTA</span>
        </h1>
        <div className="themahnsta-story">
          <p>A flow state catalyst.</p>
          <p>
            I began making these and handing them out. Handing out even a small
            smile is always worth it. I decided to continue the effect.
          </p>
          <p>
            Shurikans represent{" "}
            <em className="themahnsta-story-emphasis">discipline</em> and{" "}
            <em className="themahnsta-story-emphasis">precision</em>. We embody
            those qualities.
          </p>
          <p className="themahnsta-story-tag">#SUREICAN</p>
        </div>
        <div className="themahnsta-view-toggle" role="tablist" aria-label="View mode">
          <button
            type="button"
            role="tab"
            aria-selected={view === "map"}
            className={`themahnsta-view-btn${view === "map" ? " is-active" : ""}`}
            onClick={() => {
              setSelected(null);
              setView("map");
            }}
          >
            Map
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === "gallery"}
            className={`themahnsta-view-btn${
              view === "gallery" ? " is-active" : ""
            }`}
            onClick={() => {
              setSelected(null);
              setView("gallery");
            }}
          >
            Gallery
          </button>
        </div>
        <div className="themahnsta-hero-meta">
          <p className="themahnsta-status">
            <span className="themahnsta-count">
              <ShurikenMark /> {TOTAL_DROPS} drops
            </span>
            {!loading && !error && (
              <span className="themahnsta-loaded">
                {locations.length} on the map
              </span>
            )}
          </p>
          <p className="themahnsta-wip">
            More coming soon ·{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="themahnsta-ig"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </p>
        </div>
      </header>

      {loading ? (
        <div className="themahnsta-empty">
          <span className="themahnsta-star themahnsta-star--spin" aria-hidden="true">
            <ShurikenMark />
          </span>
          <p>Loading drops...</p>
        </div>
      ) : error ? (
        <div className="themahnsta-empty">
          <p>{error}</p>
        </div>
      ) : locations.length === 0 ? (
        <div className="themahnsta-empty">
          <p>No drops yet.</p>
        </div>
      ) : view === "map" ? (
        <section className="themahnsta-map-stage" aria-label="Drop map">
          <div className="themahnsta-map-frame">
            <div className="themahnsta-map-toolbar">
              {showAllRegions && (
                <div
                  className="themahnsta-regions"
                  role="group"
                  aria-label="Jump to city"
                >
                  {availableRegions.map((region) => (
                    <button
                      key={region.id}
                      type="button"
                      className={`themahnsta-region-btn${
                        regionId === region.id ? " is-active" : ""
                      }`}
                      onClick={() => setRegionId(region.id)}
                    >
                      {region.label}
                      <span className="themahnsta-region-count">
                        {region.count}
                      </span>
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`themahnsta-region-btn${
                      regionId === "all" ? " is-active" : ""
                    }`}
                    onClick={() => setRegionId("all")}
                  >
                    All
                  </button>
                </div>
              )}
              <p className="themahnsta-map-hint">Select a shuriken</p>
            </div>

            <div className="themahnsta-map-bleed">
              <MapContainer
                center={NYC_CENTER}
                zoom={DEFAULT_ZOOM}
                className="themahnsta-map"
                scrollWheelZoom
                zoomControl={false}
                zoomSnap={0.5}
                zoomDelta={0.5}
                wheelPxPerZoomLevel={90}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <ZoomControl position="topright" />
                <MapCamera locations={locations} regionId={regionId} />
                {locations.map((loc) => (
                  <Marker
                    key={loc.id}
                    position={[loc.lat, loc.lng]}
                    icon={createShurikenIcon(selected?.id === loc.id)}
                    eventHandlers={{
                      click: () => setSelected(loc),
                    }}
                  />
                ))}
              </MapContainer>
            </div>
          </div>
        </section>
      ) : (
        <section className="themahnsta-gallery" aria-label="Drop gallery">
          <ul className="themahnsta-gallery-grid">
            {locations.map((loc) => (
              <li key={loc.id} className="themahnsta-gallery-item">
                <button
                  type="button"
                  className="themahnsta-gallery-button"
                  onClick={() => setSelected(loc)}
                  aria-label={`Open drop at ${loc.name}`}
                >
                  <img
                    src={loc.image}
                    alt=""
                    className="themahnsta-gallery-image"
                    loading="lazy"
                  />
                  <span className="themahnsta-gallery-caption">{loc.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {selected && (
        <DropLightbox drop={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default TheMahnsta;
