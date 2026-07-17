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
          <h1 className="about-heading">About</h1>
        </header>

        <section className="about-profile" aria-label="Profile">
          <aside className="about-side">
            <figure className="about-portrait">
              <img
                src="/about/portrait.png"
                alt="Anika Mahns"
                className="about-portrait-image"
              />
            </figure>
            <div className="about-brown-row">
              <img
                src={brownLogo}
                alt="Brown University"
                className="about-brown-logo"
              />
              <p className="about-brown-text">Brown University</p>
            </div>
          </aside>

          <div className="about-profile-main">
            <p className="about-name">Anika Mahns</p>
            <p className="about-degree">
              BA Computer Science · May 2026
            </p>
            <p className="about-role">
              Incoming Software Engineer at Fidelity Investments
            </p>
            <p className="about-blurb">
              I build software, ship projects, and like hard problems. Outside
              of that: photos, origami, music, rock climbing, and running.
            </p>
            <div className="about-emails">
              <a className="about-email" href="mailto:anika.mahns@gmail.com">
                anika.mahns@gmail.com
              </a>
              <a
                className="about-email"
                href="mailto:anika_mahns@alumni.brown.edu"
              >
                anika_mahns@alumni.brown.edu
              </a>
            </div>
          </div>
        </section>

        <section className="about-life" aria-label="Outdoors">
          <h2 className="about-life-title">Outdoors</h2>
          <p className="about-life-intro">
            Physical movement has always given me mental clarity and helps me
            continue to challenge myself.
          </p>
          <div className="about-moments">
            <figure className="about-moment">
              <img
                src="/about/climbing.png"
                alt="Rock climbing outdoors"
                className="about-moment-image about-moment-image--tall"
              />
              <figcaption className="about-moment-caption">
                Brown University competitive climbing team
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
            Half marathon PR: 1:46:09.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
