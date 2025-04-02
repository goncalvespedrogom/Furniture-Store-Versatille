// components/Footer.tsx
"use client";

import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import LogoFooter from "@/img/logofooter.svg";

const smoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  e.preventDefault();
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Footer: React.FC = () => {
  return (
    <div className={styles.footerBackground} id="footer">
      <div className={styles.footerContainer}>
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <div className={styles.logoAndName}>
              <Image
                src={LogoFooter}
                alt="Versatille Logo"
                className={styles.logo}
              />
              <h2 className={styles.brandName}>versatille.</h2>
            </div>
            <p className={styles.tagline}>
              Transforme seu espaço com <br /> elegância e sofisticação. <br />
              Móveis exclusivos para um <br />
              estilo de vida moderno.
            </p>
          </div>

          <nav className={styles.navLinks}>
            <a
              href="#home"
              onClick={(e) => smoothScroll(e, "home")}
              className={styles.link}
            >
              INÍCIO
            </a>
            <a
              href="#options"
              onClick={(e) => smoothScroll(e, "options")}
              className={styles.link}
            >
              GUIA
            </a>
            <a
              href="#catalog"
              onClick={(e) => smoothScroll(e, "catalog")}
              className={styles.link}
            >
              CATÁLOGO
            </a>
          </nav>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.copyright}>
          © 2025 Versatille. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
