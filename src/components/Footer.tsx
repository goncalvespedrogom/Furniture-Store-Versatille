// components/Footer.tsx
import React from 'react';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import LogoFooter from '@/img/logofooter.svg'

const Footer: React.FC = () => {
  return (
    <div className={styles.footerBackground}>
      <div className={styles.footerContainer}>
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <div className={styles.logoAndName}>
              <Image 
                src={ LogoFooter }
                alt="Versatille Logo" 
                className={styles.logo}
              />
              <h2 className={styles.brandName}>versatille.</h2>
            </div>
            <p className={styles.tagline}>
              Transforme seu espaço
              com <br /> elegância e sofisticação. <br />
              Móveis exclusivos para um <br />estilo de vida moderno.
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
          © 2025 Versatille. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;