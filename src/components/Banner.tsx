import React from "react";
import Image from "next/image";
import styles from "../styles/Banner.module.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Logo from "@/img/logo.svg";
import ImgTopo from '@/img/img-topo-do-site.svg'

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      {/* menu */}
      <nav className={styles.menu}>
        {/* logo à esquerda */}
        <div className={styles.logo}>
          <a href="/">
            <Image src={Logo} alt="Logo da Versatille" />
          </a>
        </div>

        {/* opções do menu no meio */}
        <ul className={styles.menuOptions}>
          <li>
            <a href="#">Área Externa</a>
          </li>
          <li>
            <a href="#">Acessórios</a>
          </li>
          <li>
            <a href="#">Móveis</a>
          </li>
          <li>
            <a href="#">Iluminação</a>
          </li>
        </ul>

        {/* ícones à direita */}
        <div className={styles.icons}>
          <a href="#" aria-label="Favoritos">
            <FaHeart className={styles.icon} />
          </a>
          <a href="#" aria-label="Carrinho de Compras">
            <FaShoppingCart className={styles.icon} />
          </a>
        </div>
      </nav>

      {/* conteúdo centralizado: texto à esquerda e imagem à direita */}
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Bem-vindo à Versatille</h1>
          <p>Encontre os melhores móveis e acessórios para sua casa.</p>
        </div>
        <div className={styles.image}>
          <Image
            src={ImgTopo} 
            alt="Móveis modernos"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
