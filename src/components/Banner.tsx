"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Banner.module.css";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import Logo from "@/img/logo.svg";
import ImgTopo from "@/img/img-topo-do-site.svg";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const Banner: React.FC = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isMobileView = () => window.innerWidth < 1780;

  const scrollToSection = (targetId: string, showSecondContent = false) => {
    setShowMobileMenu(false);
    setShowOverlay(false);

    if (targetId === "options") {
      if (isMobileView()) {
        const optionsMobile = document.getElementById('optionsMobile');
        if (optionsMobile) {
          optionsMobile.scrollIntoView({ behavior: 'smooth' });
          
          if (showSecondContent) {
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent("showMobileSlide", {
                detail: { slideIndex: 1 }
              }));
            }, 500);
          }
        }
      } else {
        const optionsDesktop = document.getElementById('options');
        if (optionsDesktop) {
          optionsDesktop.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          if (showSecondContent) {
            window.dispatchEvent(new CustomEvent("showBanner2"));
          }
        }
      }
      return;
    }

    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    showSecondContent = false
  ) => {
    e.preventDefault();
    scrollToSection(targetId, showSecondContent);
  };

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setShowOverlay(!showMobileMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showContactPopup &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowContactPopup(false);
      }

      if (
        showMobileMenu &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(`.${styles.mobileMenuButton}`)
      ) {
        setShowMobileMenu(false);
        setShowOverlay(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showContactPopup, showMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (showMobileMenu) {
        setShowMobileMenu(false);
        setShowOverlay(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showMobileMenu]);

  return (
    <div className={styles.banner} id="home">
      <div 
        className={`${styles.overlay} ${showOverlay ? styles.showOverlay : ''}`}
        onClick={toggleMobileMenu}
      ></div>

      <nav className={styles.menu}>
        <div className={styles.logo}>
          <Link href="https://versatille-devpedro.vercel.app/">
            <Image src={Logo} alt="Logo da Versatille" width={150} height={50} />
          </Link>
        </div>

        <ul className={styles.menuOptions}>
          <li>
            <a href="#options" onClick={(e) => handleLinkClick(e, "options")}>
              Guia
            </a>
          </li>
          <li>
            <a
              href="#options"
              onClick={(e) => handleLinkClick(e, "options", true)}
            >
              Conteúdos
            </a>
          </li>
          <li>
            <a href="#catalog" onClick={(e) => handleLinkClick(e, "catalog")}>
              Catálogo
            </a>
          </li>
          <li>
            <a href="#footer" onClick={(e) => handleLinkClick(e, "footer")}>
              Infos
            </a>
          </li>
        </ul>

        <div className={styles.icons}>
          <button
            ref={buttonRef}
            onClick={toggleContactPopup}
            aria-label="Contatos"
            className={styles.contactButton}
          >
            <span className={styles.contactTextTitle}>Contatos</span>
          </button>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </button>

        {showContactPopup && (
          <div className={styles.contactPopup} ref={popupRef}>
            <div className={styles.contactContent}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <BsFillTelephoneFill className={styles.contactIcon} />
                  <span className={styles.contactText}>
                    +55 (28) 99901-7096
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <BsEnvelopeFill className={styles.contactIcon} />
                  <span className={styles.contactText}>
                    goncalvespedrogom@gmail.com
                  </span>
                </div>
                <div className={styles.socialIcons}>
                  <a
                    href="https://www.linkedin.com/in/pedro-goncalves-gomes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <FaLinkedin className={styles.socialIcon} />
                    <span className={styles.socialText}>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/goncalvespedrogom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <FaGithub className={styles.socialIcon} />
                    <span className={styles.socialText}>GitHub</span>
                  </a>
                </div>
              </div>
              <button
                onClick={toggleContactPopup}
                className={styles.closeButton}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </nav>

      <div
        className={`${styles.mobileMenu} ${showMobileMenu ? styles.show : ""}`}
        ref={mobileMenuRef}
      >
        <button
          className={styles.mobileMenuCloseButton}
          onClick={toggleMobileMenu}
          aria-label="Fechar menu"
        >
          <FaTimes />
        </button>

        <ul className={styles.mobileMenuOptions}>
          <li className={styles.mobileMenuItem}>
            <a href="#options" onClick={(e) => handleLinkClick(e, "options")}>
              Guia
            </a>
          </li>
          <li className={styles.mobileMenuItem}>
            <a
              href="#options"
              onClick={(e) => handleLinkClick(e, "options", true)}
            >
              Conteúdos
            </a>
          </li>
          <li className={styles.mobileMenuItem}>
            <a href="#catalog" onClick={(e) => handleLinkClick(e, "catalog")}>
              Catálogo
            </a>
          </li>
          <li className={styles.mobileMenuItem}>
            <a href="#footer" onClick={(e) => handleLinkClick(e, "footer")}>
              Infos
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={montserrat.className}>Versatille</h1>
          <p className={styles.description}>
            Transforme o seu espaço com elegância e sofisticação.{" "}
            <span className={styles.fullText}>
              Descubra móveis exclusivos, design impecável e qualidade premium
              para um ambiente verdadeiramente luxuoso.
            </span>
          </p>
          <button
            className={styles.button}
            onClick={() => scrollToSection("options", true)}
          >
            Mais detalhes
          </button>
        </div>
        <div className={styles.image}>
          <Image src={ImgTopo} alt="Móveis modernos" width={500} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
