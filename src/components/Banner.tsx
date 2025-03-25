import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Banner.module.css";
import { FaHeart } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Logo from "@/img/logo.svg";
import ImgTopo from "@/img/img-topo-do-site.svg";
import { Montserrat } from "next/font/google"; 

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat", 
});

const Banner: React.FC = () => {
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
          <a href="#" aria-label="Telefone"> 
            <BsFillTelephoneFill className={`${styles.icon} ${styles.phoneIcon}`}/>
          </a>
        </div>
      </nav>

      {/* conteúdo centralizado: texto à esquerda e imagem à direita */}
      <div className={styles.content}>
        <div className={styles.text}>
          {/* aplicando a classe da fonte montserrat no h1 */}
          <h1 className={montserrat.className}>Versatille</h1>
          <p>Transforme o seu espaço com elegância e sofisticação. Descubra móveis exclusivos, design impecável e qualidade premium para um ambiente verdadeiramente luxuoso.</p>
          {/* botão adicionado aqui */}
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
