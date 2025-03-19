import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Banner.module.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Logo from "@/img/logo.svg";
import ImgTopo from "@/img/img-topo-do-site.svg";
import { Montserrat } from "next/font/google"; // Importando Montserrat

// Configuração da fonte Montserrat
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"], // Pesos da fonte
  subsets: ["latin"], // Subconjuntos de caracteres
  variable: "--font-montserrat", // Variável CSS para a fonte
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
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Loja</a>
          </li>
          <li>
            <a href="#">Contato</a>
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
          {/* Aplicando a classe da fonte Montserrat ao h1 */}
          <h1 className={montserrat.className}>Versatille</h1>
          <p>Transforme o seu espaço com elegância e sofisticação. Descubra móveis exclusivos, design impecável e qualidade premium para um ambiente verdadeiramente luxuoso.</p>
          {/* Botão adicionado aqui */}
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