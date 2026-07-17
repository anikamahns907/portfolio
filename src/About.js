import React, { useEffect, useRef } from "react";
import brownLogo from "./brown-logo.jpg";
import "./index.css";

const About = () => {
  const shellRef = useRef(null);

  useEffect(() => {
    const node = shellRef.current;
    if (!node) return;

    const frame = requestAnimationFrame(() => {
      node.classList.add("is-ready");
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="about-shell" ref={shellRef}>
      <div className="about-atmosphere" aria-hidden="true" />

      <div className="about-layout">
        <header className="about-lead">
          <p className="about-kicker">01 / Profile</p>
          <h1 className="about-heading">About</h1>
        </header>

        <section className="about-profile" aria-label="Profile">
          <div className="about-profile-main">
            <p className="about-name">Anika Mahns</p>
            <p className="about-degree">
              BA Computer Science, Brown University · May 2026
            </p>
            <p className="about-blurb">
              I build software, ship projects, and like hard problems. Outside
              of that: photos, origami, music, rock climbing, and running.
            </p>

            <ul className="about-signals" aria-label="Focus">
              <li>build</li>
              <li>ship</li>
              <li>solve</li>
            </ul>

            <a className="about-email" href="mailto:anika_mahns@brown.edu">
              anika_mahns@brown.edu
            </a>
          </div>

          <aside className="about-side">
            <div className="about-side-card">
              <img
                src={brownLogo}
                alt="Brown University"
                className="about-side-logo"
              />
              <p className="about-side-label">Brown University</p>
              <p className="about-side-copy">
                Graduated May 2026. Always building.
              </p>
              <a className="about-side-cta" href="mailto:anika_mahns@brown.edu">
                Contact
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </aside>
        </section>

        <section className="about-life" aria-label="Outdoors">
          <p className="about-kicker">02 / Outdoors</p>
          <div className="about-moments">
            <figure className="about-moment">
              <img
                src="/about/climbing.png"
                alt="Rock climbing outdoors"
                className="about-moment-image about-moment-image--tall"
              />
              <figcaption className="about-moment-caption">
                rock climbing
              </figcaption>
            </figure>
            <figure className="about-moment">
              <img
                src="/about/newport-half.png"
                alt="Finishing the Newport Half Marathon"
                className="about-moment-image"
              />
              <figcaption className="about-moment-caption">
                Newport Half Marathon
              </figcaption>
            </figure>
            <figure className="about-moment">
              <img
                src="/about/providence-half.png"
                alt="Crossing the finish line at the Providence Half Marathon, PR 1:46:09"
                className="about-moment-image"
              />
              <figcaption className="about-moment-caption">
                Providence Half · PR 1:46:09
              </figcaption>
            </figure>
          </div>
          <p className="about-race-note">
            I have run two half marathons: Newport and Providence. My PR is
            1:46:09 at Providence.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
