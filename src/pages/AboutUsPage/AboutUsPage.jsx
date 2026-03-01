import css from "./AboutUsPage.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import aboutUsDesctop from "../../assets/images/aboutUsDesctop.png";
import aboutUsTablet from "../../assets/images/aboutUsTablet.png";
import aboutUsMobile from "../../assets/images/aboutUsMobile.png";

export default function AboutUsPage() {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <section className={css.container}>
      <section className={css.background}>
        <section className={css.card}>
          <figure className={css.cardTopImages}>
            <picture>
              {/* Mobile */}
              <source media="(max-width: 599px)" srcSet={aboutUsMobile} />

              {/* Tablet */}
              <source media="(max-width: 1099px)" srcSet={aboutUsTablet} />

              {/* Desktop */}
              <img
                className={css.bigImagesTop}
                src={aboutUsDesctop}
                alt="About us"
              />
            </picture>
          </figure>
          <ul className={css.usContent}>
            <li className={css.carttextUs}>
              <strong>{t("aboutus.carttextUsTop")}</strong>
            </li>
            <li className={css.carttextUs}>
              <strong>{t("aboutus.carttextUsSecond")}</strong>
            </li>
            <li className={css.carttextUs}>
              <strong>{t("aboutus.carttextUsMidle")}</strong>
            </li>
            <li className={css.carttextUs}>
              <strong>{t("aboutus.carttextUsBotton")}</strong>
            </li>
          </ul>
        </section>
      </section>
      <section className={css.background}>
        <section className={css.sectionVideo}>
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
