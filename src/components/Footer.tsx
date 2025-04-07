"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import LogoFooter from "@/img/logofooter.svg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 1780);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  const handleGuideClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = isMobileView ? 'optionsMobile' : 'options';
    smoothScroll(e, targetId);
  };

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
            <div className={styles.socialIcons}>
              <a
                href="https://github.com/goncalvespedrogom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={styles.icon} />
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-goncalves-gomes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={styles.icon} />
              </a>
              <a
                href="https://wa.me/5528999017096?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className={styles.icon} />
              </a>
            </div>
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
              onClick={handleGuideClick}
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
