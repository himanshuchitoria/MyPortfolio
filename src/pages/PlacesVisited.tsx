import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ReactComponent as WorldSVG } from "../images/world.svg";
import { ReactComponent as IndiaSVG } from "../images/in.svg";
import "./PlacesVisited.css";
import Blue from "../images/blue.jpg"; // Demo image, update as needed

const INDIA_COLORS: Record<string, { name: string; color: string }> = {
  INHR: { name: "Haryana", color: "#ffd54f" },
  INRJ: { name: "Rajasthan", color: "#ef6c00" },
  INMP: { name: "Madhya Pradesh", color: "#81c784" },
  INMH: { name: "Maharashtra", color: "#64b5f6" },
  INAP: { name: "Andhra Pradesh", color: "#ba68c8" },
  INHP: { name: "Himachal Pradesh", color: "#81d4fa" },
  INUT: { name: "Uttarakhand", color: "#aed581" },
  INUK: { name: "Uttarakhand", color: "#aed581" },
  INUP: { name: "Uttar Pradesh", color: "#e57373" },
  INJH: { name: "Jharkhand", color: "#90caf9" },
  INPB: { name: "Punjab", color: "#ffe082" }
};

const STATE_POPDATA: Record<string, { header: string; body: string }> = {
  INHR: { header: "Haryana", body: "Land of Green Revolution and sports." },
  INRJ: { header: "Rajasthan", body: "Great forts, desert palaces, vibrant culture." },
  INMP: { header: "Madhya Pradesh", body: "Heart of India, temples and jungles." },
  INMH: { header: "Maharashtra", body: "Home to Mumbai, forts, and coastal beauty." },
  INAP: { header: "Andhra Pradesh", body: "Land of temples, beaches, spicy food!" },
  INHP: { header: "Himachal Pradesh", body: "Mountains, valleys, snow escapes." },
  INUT: { header: "Uttarakhand", body: "Adventure, yoga, Himalayas!" },
  INUK: { header: "Uttarakhand", body: "Adventure, yoga, Himalayas!" },
  INUP: { header: "Uttar Pradesh", body: "Taj Mahal, culture, ghats of the Ganga." },
  INJH: { header: "Jharkhand", body: "Forests, waterfalls, tribal art." },
  INPB: { header: "Punjab", body: "Bhangra, farms, Sikh shrines, food!" }
};

const PALETTE_IMAGES: { [id: string]: [string, string] } = {
  INHR: [Blue, Blue],
  INRJ: [Blue, Blue],
  INMP: [Blue, Blue],
  INMH: [Blue, Blue],
  INAP: [Blue, Blue],
  INHP: [Blue, Blue],
  INUT: [Blue, Blue],
  INUK: [Blue, Blue],
  INUP: [Blue, Blue],
  INJH: [Blue, Blue],
  INPB: [Blue, Blue],
};

const SOLAR_SIZE = 780;
const ORBITS = { mercury: 65, venus: 107.5, earth: 160, mars: 212.5 };
const PLANET_SPEEDS = { mercury: 4.7, venus: 2.7, earth: 1.0, mars: 0.53 };
const PLANET_OFFSETS = { mercury: 0, venus: 60, earth: 120, mars: 180 };

const stars = Array.from({ length: 220 }).map((_, i) => ({
  left: `${Math.random() * 99.8}vw`,
  top: `${Math.random() * 99.8}vh`,
  size: `${Math.random() * 2.5 + 1.3}px`,
  opacity: Math.random() * 0.38 + 0.14,
  key: `star-${i}`
}));

function getPlanetPosition(angle: number, radius: number) {
  const theta = (angle * Math.PI) / 180;
  return { x: radius * Math.cos(theta), y: radius * Math.sin(theta) };
}

type Stage = "solar" | "world" | "india";

export default function PlacesVisited() {
  const [stage, setStage] = useState<Stage>("solar");
  const [orbit, setOrbit] = useState({
    mercury: PLANET_OFFSETS.mercury,
    venus: PLANET_OFFSETS.venus,
    earth: PLANET_OFFSETS.earth,
    mars: PLANET_OFFSETS.mars
  });
  const [paused, setPaused] = useState(false);
  const solarControls = useAnimation();
  const worldControls = useAnimation();
  const [highlightIndia, setHighlightIndia] = useState(false);
  const [stateCard, setStateCard] = useState<{ id: string } | null>(null);
  const [cardImagesVisible, setCardImagesVisible] = useState(false);
  const animReq = useRef<number>();

  useEffect(() => {
    let lastTime = Date.now();
    function step() {
      if (!paused && stage === "solar") {
        const now = Date.now();
        const elapsed = (now - lastTime) / 1000;
        lastTime = now;
        setOrbit((o) => ({
          mercury: (o.mercury + PLANET_SPEEDS.mercury * elapsed * 13) % 360,
          venus: (o.venus + PLANET_SPEEDS.venus * elapsed * 8) % 360,
          earth: (o.earth + PLANET_SPEEDS.earth * elapsed * 4.7) % 360,
          mars: (o.mars + PLANET_SPEEDS.mars * elapsed * 3.3) % 360
        }));
        animReq.current = requestAnimationFrame(step);
      }
    }
    if (!paused && stage === "solar") animReq.current = requestAnimationFrame(step);
    return () => { if (animReq.current) cancelAnimationFrame(animReq.current); };
  }, [paused, stage]);

  const handleEarthClick = async () => {
    setPaused(true);
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    const rp = getPlanetPosition(orbit.earth, ORBITS.earth);
    await new Promise((res) => setTimeout(res, 300));
    await solarControls.start({
      scale: 7.8,
      x: cx - (SOLAR_SIZE / 2 + rp.x),
      y: cy - (SOLAR_SIZE / 2 + rp.y),
      opacity: 0,
      transition: { duration: 1.15, ease: [0.26, 1, 0.36, 1] }
    });
    setStage("world");
  };

  async function handleCountryClick(e: React.MouseEvent<SVGElement>) {
    const target = e.target as SVGElement;
    if (target && target.id?.toUpperCase() === "IN") {
      setHighlightIndia(true);
      await worldControls.start({ scale: 2.5, opacity: 0, transition: { duration: 1 } });
      setTimeout(() => setStage("india"), 900);
    }
  }

  function handleIndiaStateClick(e: React.MouseEvent<SVGElement>) {
    const target = e.target as SVGElement;
    const sID = target.id?.toUpperCase?.();
    if (sID && INDIA_COLORS[sID]) {
      setStateCard({ id: sID });
      setCardImagesVisible(false);
    }
  }
  function closeStateCard() {
    setStateCard(null);
    setCardImagesVisible(false);
  }

  const planetStyle = (
    angle: number,
    r: number,
    size: number,
    extra?: React.CSSProperties
  ) => {
    const pos = getPlanetPosition(angle, r);
    return {
      left: `calc(50% + ${pos.x}px)`,
      top: `calc(50% + ${pos.y}px)`,
      width: size,
      height: size,
      marginLeft: -size / 2,
      marginTop: -size / 2,
      position: "absolute" as const,
      borderRadius: "50%",
      ...extra
    };
  };

  return (
    <div className="visit-root">
      <h2>🌍 Places Visited</h2>
      <p>A glimpse into my travel experiences and places I've explored around the world.</p>
      <div className="background-stars">
        {stars.map((star) => (
          <span
            key={star.key}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              opacity: star.opacity
            }}
          />
        ))}
      </div>
      <div className="main-visual-area">
        {stage === "solar" && (
          <motion.div
            className="solar-system-container"
            animate={solarControls}
            style={{
              width: SOLAR_SIZE,
              height: SOLAR_SIZE,
              position: "absolute",
              left: "50%",
              top: "52%",
              transform: "translate(-50%, -50%)",
              willChange: "transform, opacity"
            }}
          >
            <div className="solar-system" style={{ width: "100%", height: "100%", position: "relative" }}>
              <div className="sun"></div>
              <div className="orbit mercury-orbit-line"></div>
              <div className="orbit venus-orbit-line"></div>
              <div className="orbit earth-orbit-line"></div>
              <div className="orbit mars-orbit-line"></div>
              <div className="planet mercury"
                style={planetStyle(orbit.mercury, ORBITS.mercury, 16, {
                  background: "#d2ccc2", boxShadow: "0 0 4px #bbb"
                })} />
              <div className="planet venus"
                style={planetStyle(orbit.venus, ORBITS.venus, 26, {
                  background: "#f9d58a", boxShadow: "0 0 7px #edc600"
                })} />
              <div className="planet earth"
                style={planetStyle(orbit.earth, ORBITS.earth, 30, {
                  background: "radial-gradient(circle at 65% 40%, #60bcfe 70%, #0174D8 108%)",
                  boxShadow: "0 0 8px #31bccd",
                  zIndex: 10,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                })}
                tabIndex={0}
                aria-label="Earth"
                onClick={handleEarthClick}
                onKeyDown={e => e.key === "Enter" && handleEarthClick()}
              >
                <span className="earth-label">Earth</span>
              </div>
              <div className="planet mars"
                style={planetStyle(orbit.mars, ORBITS.mars, 22, {
                  background: "#c1440e", boxShadow: "0 0 13px #fda181"
                })} />
              <span className="solar-caption">
                I've only visited <b>Earth 🌎</b> till now <span role="img" aria-label="smile">😅  </span>
               <span style={{ color: "white", fontSize: "0.92rem" }}>
  Click on earth to know more where in earth ?
  <br /> As I live on earth I only know planets nearer to earth 😅
</span>

              </span>
            </div>
          </motion.div>
        )}
        {stage === "world" && (
          <motion.div
            animate={worldControls}
            initial={{ scale: 1, opacity: 1 }}
            className="map-zoom-container"
          >
            <WorldSVG
              className="world-map-svg"
              onClick={handleCountryClick}
              style={{ cursor: "pointer" }}
            />
            <div className="world-caption">
              I've only covered <b>India</b> so far. <br />
              <span style={{ color: "#ffd952" }}>Click India to know more!</span>
            </div>
            <style>
              {`
                .world-map-svg #IN {
                  stroke: #ff5029;
                  stroke-width: 3;
                  fill: ${highlightIndia ? "#ffc745" : "#64b5f6"};
                  transition: fill 0.3s, stroke 0.2s;
                  filter: drop-shadow(0 0 7px #fdc400);
                }
                .world-map-svg #IN:hover {
                  fill: #ffd800 !important;
                  filter: drop-shadow(0 0 12px #ffb600);
                }
              `}
            </style>
          </motion.div>
        )}
        {stage === "india" && (
          <div className="india-map-area india-labeled">
            <IndiaSVG className="india-svg" onClick={handleIndiaStateClick} style={{ cursor: "pointer" }} />
            <div className="india-map-legend">
              <div className="legend-title">I've visited these states till now.</div>
              <div className="legend-caption">(for photos, click on a state)</div>
              {Object.entries(INDIA_COLORS).map(([id, { name, color }]) => (
                <div className="legend-row" key={id}>
                  <span className="legend-swatch" style={{ background: color }} />
                  <span className="legend-name">{name}</span>
                </div>
              ))}
            </div>
            <style>
              {`
                ${Object.entries(INDIA_COLORS).map(([id, { color }]) =>
                  `.india-svg #${id} { fill: ${color} !important; stroke: #333; stroke-width: 1.5px; cursor: pointer; }`
                ).join("\n")}
                .india-svg path,state,polygon {
                  fill: #dadada;
                  stroke: #aaa;
                  filter: none;
                }
              `}
            </style>
            {stateCard && (
              <>
                <div className="card-blur-overlay"></div>
                <motion.div
                  className="state-card-popup vertical"
                  initial={{ opacity: 0, scale: 0.89, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 35 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  onMouseEnter={() => setCardImagesVisible(true)}
                  onMouseLeave={() => setCardImagesVisible(false)}
                  onClick={() => setCardImagesVisible((v) => !v)}
                >
                  <motion.div
                    className="state-card-imgpanel top"
                    initial={false}
                    animate={cardImagesVisible ? { maxHeight: 240, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
                    transition={{ duration: 0.34 }}
                  >
                    <img src={PALETTE_IMAGES[stateCard.id][0]} alt="" className="state-card-img-exp img-top" />
                  </motion.div>
                  <div className="state-card-content">
                    <button className="state-card-close" onClick={closeStateCard}>×</button>
                    <div className="state-card-header">{STATE_POPDATA[stateCard.id].header}</div>
                    <div className="state-card-divider"/>
                  </div>
                  <motion.div
                    className="state-card-imgpanel bottom"
                    initial={false}
                    animate={cardImagesVisible ? { maxHeight: 240, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
                    transition={{ duration: 0.34 }}
                  >
                    <img src={PALETTE_IMAGES[stateCard.id][1]} alt="" className="state-card-img-exp img-bottom" />
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
