import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const STUDY_ABROAD_FOLDER = "studyabroad";
const API_URL =
  "https://k7rdqegg4c.execute-api.us-east-1.amazonaws.com/default/anika-portfolio";

const StudyAbroad = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    axios
      .get(
        `${API_URL}?locationId=${encodeURIComponent(STUDY_ABROAD_FOLDER)}`
      )
      .then((response) => {
        if (cancelled) return;
        const imageUrls = (response.data.resources || []).map(
          (resource) => resource.secure_url
        );
        setContent(imageUrls);
        setLoading(false);
      })
      .catch((error) => {
        if (cancelled) return;
        console.error("Error fetching study abroad images:", error);
        setContent([]);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="journey-shell">
      <div className="journey-page">
        <header className="journey-hero">
          <h1 className="journey-title">Study Abroad</h1>
          <div className="journey-story">
            <p>
              I studied abroad in Thessaloniki, Greece from January 2025 to
              April 2026.
            </p>
            <p>
              It was a transformational stretch of my life. New city, new
              community, new everything. I learned a lot, moved fast, and made
              friends I will forever cherish.
            </p>
          </div>
        </header>

        <section className="journey-gallery-section" aria-label="Photo gallery">
          {loading ? (
            <p className="journey-loading">Loading</p>
          ) : content.length === 0 ? (
            <p className="journey-empty">No photos yet.</p>
          ) : (
            <ul className="journey-gallery">
              {content.map((picture, index) => (
                <li key={`studyabroad-${index}`} className="journey-gallery-item">
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

export default StudyAbroad;
