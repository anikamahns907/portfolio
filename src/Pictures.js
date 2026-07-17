import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import JourneyMap, { JOURNEY_LOCATIONS } from "./JourneyMap";
import "./index.css";

const Pictures = () => {
  const [location, setLocation] = useState("ALASKA");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeLabel = useMemo(
    () =>
      JOURNEY_LOCATIONS.find((loc) => loc.key === location)?.label || location,
    [location]
  );

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    axios
      .get(
        `https://k7rdqegg4c.execute-api.us-east-1.amazonaws.com/default/anika-portfolio?locationId=${encodeURIComponent(
          location
        )}`
      )
      .then((response) => {
        if (cancelled) return;
        const imageUrls = response.data.resources.map(
          (resource) => resource.secure_url
        );
        setContent(imageUrls);
        setLoading(false);
      })
      .catch((error) => {
        if (cancelled) return;
        console.error("Error fetching image data:", error);
        setContent([]);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [location]);

  return (
    <div className="journey-shell">
      <div className="journey-page">
        <header className="journey-hero">
          <h1 className="journey-title">My Nomadic Journey</h1>
          <div className="journey-story">
            <p>
              Born in Alaska. Lived in Maryland, Tokyo, Puerto Rico, and Los
              Angeles. Moving has shaped who I am today. I could not be more
              grateful for the people I have met around the world, and for the
              qualities I now carry, learned and adapted from others of diverse
              backgrounds.
            </p>
          </div>
        </header>

        <section className="journey-gallery-section" aria-label="Photo gallery">
          <div className="journey-gallery-header">
            <JourneyMap
              interactive
              onLocationClick={setLocation}
              activeLocation={location}
            />
            <p className="journey-active-place">{activeLabel}</p>
          </div>

          {loading ? (
            <p className="journey-loading">Loading</p>
          ) : content.length === 0 ? (
            <p className="journey-empty">No photos for this place yet.</p>
          ) : (
            <ul className="journey-gallery">
              {content.map((picture, index) => (
                <li key={`${location}-${index}`} className="journey-gallery-item">
                  <img
                    src={picture}
                    alt=""
                    className="journey-gallery-image"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default Pictures;
