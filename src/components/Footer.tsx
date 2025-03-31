// components/Footer.tsx
import React from 'react';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className={styles.footerBackground}>
      <div className={styles.footerContainer}>
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <div className={styles.logoAndName}>
              <div className={styles.logoPlaceholder}></div>
              <h2 className={styles.brandName}>dreamy.</h2>
            </div>
            <p className={styles.tagline}>
              Dreamy List for. Certifi cly<br />
              crafi ed UI components for<br />
              Addice Experience Design.
            </p>
          </div>

          <nav className={styles.navLinks}>
            <a href="#" className={styles.link}>GUIA</a>
            <a href="#" className={styles.link}>GALERIA</a>
            <a href="#" className={styles.link}>PROJETOS</a>
            <a href="#" className={styles.link}>CONTATO</a>
          </nav>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.copyright}>
          © 2025 Dreamy Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
