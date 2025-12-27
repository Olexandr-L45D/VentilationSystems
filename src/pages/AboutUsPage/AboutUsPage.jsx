// import { Link } from "react-router-dom";
import css from "./AboutUsPage.module.css";
import Bakground from "../../assets/images/blendBakground.png";
import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import introVideo from "../../public/video/videoUs.MP4";

export default function AboutUsPage() {
  // const { t, ready } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <section
      className={css.container}
      style={{ backgroundImage: `url(${Bakground})` }}
    >
      <section className={css.background}>
        {/* <h1>About Us Page</h1> */}
        <section className={css.sectionVideo}>
          {/* ВІДЕО ІНТРО */}
          {showVideo && (
            <div className={css.videoOverlay}>
              <video
                src="/video/videoUs.MP4"
                autoPlay
                muted
                playsInline
                onEnded={() => setShowVideo(false)}
                className={css.video}
              />
            </div>
          )}
        </section>
      </section>
    </section>
  );
}

// useEffect(() => {
//   // блокуємо скрол під час відео
//   document.body.style.overflow = "hidden";
//   return () => (document.body.style.overflow = "auto");
// }, []);
