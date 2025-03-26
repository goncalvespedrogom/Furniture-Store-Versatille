"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Catalog.module.css";
import { FaChevronUp, FaChevronDown, FaStar } from "react-icons/fa";

// Import product images
import produto01 from "@/img/produto01.svg";
import Produto02 from '@/img/produto02.svg';
import Produto03 from '@/img/produto03.svg';
import Produto04 from '@/img/produto04.svg';
import Produto05 from '@/img/produto05.svg';
import Produto06 from '@/img/produto06.svg';
import Produto07 from '@/img/produto07.svg';
import Produto08 from '@/img/produto08.svg';
import Produto09 from '@/img/produto09.svg';
import Produto10 from '@/img/produto10.svg';
import Produto11 from '@/img/produto11.svg';
import Produto12 from '@/img/produto12.svg';
import Produto13 from '@/img/produto13.svg';
import Produto14 from '@/img/produto14.svg';
import Produto15 from '@/img/produto15.svg';

const Catalog = () => {
  // Product data - Page 1
  const page1Products = [
    { id: 1, name: "Sofá Retrátil", price: "R$1.800,00", image: produto01 },
    { id: 2, name: "Cadeira", price: "R$350,00", image: Produto02 },
    { id: 3, name: "Cadeira Acolchoada", price: "R$610,00", image: Produto03 },
    { id: 4, name: "Poltrona", price: "R$780,00", image: Produto04 },
    { id: 5, name: "Mini Poltrona", price: "R$560,00", image: Produto05 },
    { id: 6, name: "Mesa", price: "R$370,00", image: Produto06 },
    { id: 7, name: "Sofá", price: "R$1.400,00", image: Produto07 },
    { id: 8, name: "Cadeira Rústica", price: "R$520,00", image: Produto08 },
  ];

  // Product data - Page 2
  const page2Products = [
    { id: 9, name: "Mini Sofá", price: "R$1.020,00", image: Produto09 },
    { id: 10, name: "Sofá", price: "R$1.300,00", image: Produto10 },
    { id: 11, name: "Cama", price: "R$2.250,00", image: Produto11 },
    { id: 12, name: "Cama", price: "R$2.000,00", image: Produto12 },
    { id: 13, name: "Conjunto de Mesa", price: "R$12.500,00", image: Produto13 },
    { id: 14, name: "Abajur Moderno", price: "R$350,00", image: Produto14 },
    { id: 15, name: "Mesa de Varanda", price: "R$850,00", image: Produto15 },
    { id: 16, name: "Rack de Canto", price: "R$720,00", image: produto01 },
  ];

  // Product data - Page 3
  const page3Products = [
    { id: 17, name: "Banqueta Alta", price: "R$380,00", image: produto01 },
    { id: 18, name: "Mesa de Centro", price: "R$600,00", image: produto01 },
    { id: 19, name: "Sofá de Canto", price: "R$3.200,00", image: produto01 },
    { id: 20, name: "Estante Flutuante", price: "R$450,00", image: produto01 },
    { id: 21, name: "Cama Box Casal", price: "R$1.500,00", image: produto01 },
    { id: 22, name: "Lustre Moderno", price: "R$1.800,00", image: produto01 },
    { id: 23, name: "Poltrona Giratória", price: "R$1.300,00", image: produto01 },
    { id: 24, name: "Rack Multiuso", price: "R$950,00", image: produto01 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  
  // Get products for current page
  const products = 
    currentPage === 1 ? page1Products :
    currentPage === 2 ? page2Products :
    page3Products;

  return (
    <div className={styles.sectionWithBackground}>
      <div className={styles.catalogContainer}>
        {/* Title section */}
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Showroom</h1>
          <div className={styles.titleBorder}></div>
        </div>

        {/* Navigation and filter */}
        <div className={styles.navContainer}>
          <div className={styles.categories}>
            <button className={`${styles.categoryButton} ${styles.active}`}>
              Todos os produtos
            </button>
            <button className={styles.categoryButton}>Cadeiras</button>
            <button className={styles.categoryButton}>Mesas</button>
            <button className={styles.categoryButton}>Camas</button>
            <button className={styles.categoryButton}>Acessórios</button>
          </div>

          <div className={styles.filterContainer}>
            <button className={styles.filterButton}>
              Filtro
              <span className={styles.filterIcons}>
                <FaChevronUp className={styles.filterIcon} />
                <FaChevronDown className={styles.filterIcon} />
              </span>
            </button>
          </div>
        </div>

        {/* Product grid */}
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={280}
                  height={280}
                  objectFit="cover"
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.starsContainer}>
                  <div className={styles.productRating}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={styles.starIcon} />
                    ))}
                  </div>
                </div>
                <span className={styles.productPrice}>{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          {[1, 2, 3].map((page) => (
            <button 
              key={page}
              className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
