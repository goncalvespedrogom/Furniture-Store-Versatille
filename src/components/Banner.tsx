"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Banner.module.css";
import { FaHeart, FaLinkedin, FaGithub } from "react-icons/fa";
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
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup);
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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showContactPopup]);

  return (
    <div className={styles.banner}>
      {/* menu */}
      <nav className={styles.menu}>
        {/* logo à esquerda */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo} alt="Logo da Versatille" />
          </Link>
        </div>

        {/* opções do menu no meio */}
        <ul className={styles.menuOptions}>
          <li>
            <a href="#">Guia</a>
          </li>
          <li>
            <a href="#">Galeria</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Loja</a>
          </li>
        </ul>

        {/* ícones à direita */}
        <div className={styles.icons}>
          <a href="#" aria-label="Favoritos">
            <FaHeart className={styles.icon} />
          </a>
          <button 
            ref={buttonRef}
            onClick={toggleContactPopup}
            aria-label="Contatos"
            className={styles.contactButton}
          > 
            <BsFillTelephoneFill className={`${styles.icon} ${styles.phoneIcon}`}/>
          </button>
        </div>

        {/* Popup de contatos */}
        {showContactPopup && (
          <div className={styles.contactPopup} ref={popupRef}>
            <div className={styles.contactContent}>
              <h3 className={styles.contactTitle}>Contatos</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <BsFillTelephoneFill className={styles.contactIcon} />
                  <span className={styles.contactText}>+55 (28) 99901-7096</span>
                </div>
                <div className={styles.contactItem}>
                  <BsEnvelopeFill className={styles.contactIcon} />
                  <span className={styles.contactText}>goncalvespedrogom@gmail.com</span>
                </div>
                <div className={styles.socialIcons}>
                  <a href="https://www.linkedin.com/in/pedro-goncalves-gomes/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FaLinkedin className={styles.socialIcon} />
                    <span className={styles.socialText}>LinkedIn</span>
                  </a>
                  <a href="https://github.com/goncalvespedrogom" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
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

      {/* conteúdo centralizado */}
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={montserrat.className}>Versatille</h1>
          <p>Transforme o seu espaço com elegância e sofisticação. Descubra móveis exclusivos, design impecável e qualidade premium para um ambiente verdadeiramente luxuoso.</p>
          <button className={styles.button}>Mais detalhes</button>
        </div>
        <div className={styles.image}>
          <Image src={ImgTopo} alt="Móveis modernos" width={500} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
