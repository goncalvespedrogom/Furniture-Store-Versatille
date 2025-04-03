"use client";

import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../styles/Catalog.module.css";
import {
  FaChevronUp,
  FaChevronDown,
  FaStar,
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaSortAmountDown,
  FaSortAmountDownAlt,
} from "react-icons/fa";

// Import product images
import produto01 from "@/img/produto01.svg";
import Produto02 from "@/img/produto02.svg";
import Produto03 from "@/img/produto03.svg";
import Produto04 from "@/img/produto04.svg";
import Produto05 from "@/img/produto05.svg";
import Produto06 from "@/img/produto06.svg";
import Produto07 from "@/img/produto07.svg";
import Produto08 from "@/img/produto08.svg";
import Produto09 from "@/img/produto09.svg";
import Produto10 from "@/img/produto10.svg";
import Produto11 from "@/img/produto11.svg";
import Produto12 from "@/img/produto12.svg";
import Produto13 from "@/img/produto13.svg";
import Produto14 from "@/img/produto14.svg";
import Produto15 from "@/img/produto15.svg";
import Produto16 from "@/img/produto16.svg";
import Produto17 from "@/img/produto17.svg";
import Produto18 from "@/img/produto18.svg";
import Produto19 from "@/img/produto19.svg";
import Produto20 from "@/img/produto20.svg";
import Produto21 from "@/img/produto21.svg";
import Produto22 from "@/img/produto22.svg";
import Produto23 from "@/img/produto23.svg";
import Produto24 from "@/img/produto24.svg";

type CategoryId =
  | "all"
  | "cadeiras"
  | "sofas"
  | "mesas"
  | "camas"
  | "acessorios";

interface Product {
  id: number;
  name: string;
  price: string;
  image: StaticImageData;
  category: CategoryId;
}

interface Category {
  id: CategoryId;
  name: string;
}

const Catalog = () => {
  const allProducts: Product[] = [
    {
      id: 1,
      name: "Sofá Retrátil",
      price: "R$1.800,00",
      image: produto01,
      category: "sofas",
    },
    {
      id: 2,
      name: "Cama",
      price: "R$2.150,00",
      image: Produto02,
      category: "camas",
    },
    {
      id: 3,
      name: "Mesa de Centro",
      price: "R$610,00",
      image: Produto03,
      category: "mesas",
    },
    {
      id: 4,
      name: "Poltrona",
      price: "R$780,00",
      image: Produto04,
      category: "cadeiras",
    },
    {
      id: 5,
      name: "Mini Poltrona",
      price: "R$560,00",
      image: Produto05,
      category: "cadeiras",
    },
    {
      id: 6,
      name: "Mesa",
      price: "R$370,00",
      image: Produto06,
      category: "mesas",
    },
    {
      id: 7,
      name: "Prateleira Decorativa",
      price: "R$200,00",
      image: Produto07,
      category: "acessorios",
    },
    {
      id: 8,
      name: "Cadeira Rústica",
      price: "R$520,00",
      image: Produto08,
      category: "cadeiras",
    },
    {
      id: 9,
      name: "Mini Sofá",
      price: "R$1.020,00",
      image: Produto09,
      category: "sofas",
    },
    {
      id: 10,
      name: "Sofá",
      price: "R$1.300,00",
      image: Produto10,
      category: "sofas",
    },
    {
      id: 11,
      name: "Cama",
      price: "R$2.250,00",
      image: Produto11,
      category: "camas",
    },
    {
      id: 12,
      name: "Cama",
      price: "R$2.000,00",
      image: Produto12,
      category: "camas",
    },
    {
      id: 13,
      name: "Conjunto de Mesa",
      price: "R$12.500,00",
      image: Produto13,
      category: "mesas",
    },
    {
      id: 14,
      name: "Abajur Moderno",
      price: "R$350,00",
      image: Produto14,
      category: "acessorios",
    },
    {
      id: 15,
      name: "Mesa de Varanda",
      price: "R$850,00",
      image: Produto15,
      category: "mesas",
    },
    {
      id: 16,
      name: "Vaso de Plantas",
      price: "R$720,00",
      image: Produto16,
      category: "acessorios",
    },
    {
      id: 17,
      name: "Sofá de canto em L",
      price: "R$380,00",
      image: Produto17,
      category: "sofas",
    },
    {
      id: 18,
      name: "Mesa",
      price: "R$600,00",
      image: Produto18,
      category: "mesas",
    },
    {
      id: 19,
      name: "Mesinha",
      price: "R$3.200,00",
      image: Produto19,
      category: "mesas",
    },
    {
      id: 20,
      name: "Cadeira Acolchoada",
      price: "R$450,00",
      image: Produto20,
      category: "cadeiras",
    },
    {
      id: 21,
      name: "Cama",
      price: "R$1.500,00",
      image: Produto21,
      category: "camas",
    },
    {
      id: 22,
      name: "Espreguiçadeira",
      price: "R$1.800,00",
      image: Produto22,
      category: "acessorios",
    },
    {
      id: 23,
      name: "Cama de Casal",
      price: "R$1.300,00",
      image: Produto23,
      category: "camas",
    },
    {
      id: 24,
      name: "Prateleira Multiuso",
      price: "R$950,00",
      image: Produto24,
      category: "acessorios",
    },
  ];

  const categories: Category[] = [
    { id: "all", name: "Todos os produtos" },
    { id: "cadeiras", name: "Cadeiras" },
    { id: "sofas", name: "Sofás" },
    { id: "mesas", name: "Mesas" },
    { id: "camas", name: "Camas" },
    { id: "acessorios", name: "Acessórios" },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");
  const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>("default");
  const productsPerPage = 8;
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowFilterOptions(false);
      }
    };

    if (showFilterOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilterOptions]);

  const parsePrice = (priceString: string): number => {
    return parseFloat(
      priceString.replace("R$", "").replace(".", "").replace(",", ".")
    );
  };

  const filteredProducts =
    selectedCategory === "all"
      ? [...allProducts]
      : allProducts.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        return parsePrice(a.price) - parsePrice(b.price);
      case "price-desc":
        return parsePrice(b.price) - parsePrice(a.price);
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleCategoryChange = (categoryId: CategoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const toggleFilterOptions = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const handleSortOption = (option: string) => {
    setSortOption(option);
    setCurrentPage(1);
    setShowFilterOptions(false);
  };

  const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false);
  const categoryMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node) &&
        categoryMenuRef.current &&
        !categoryMenuRef.current.contains(event.target as Node)
      ) {
        setShowFilterOptions(false);
        setShowCategoryMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.sectionWithBackground} id="catalog">
      <div className={styles.catalogContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Showroom</h1>
          <div className={styles.titleBorder}></div>
        </div>

        <div className={styles.navContainer}>
          {/* Mobile Categories Button */}
          <div
            className={styles.mobileCategoriesContainer}
            ref={categoryMenuRef}
          >
            <button
              className={styles.filterButton}
              onClick={() => setShowCategoryMenu(!showCategoryMenu)}
            >
              Categorias
              <span className={styles.filterIcons}>
                <FaChevronUp className={styles.filterIcon} />
                <FaChevronDown className={styles.filterIcon} />
              </span>
            </button>

            {showCategoryMenu && (
              <div className={styles.filterDropdown}>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`${styles.categoryMenuButton} ${
                      selectedCategory === category.id
                        ? styles.activeFilter
                        : ""
                    }`}
                    onClick={() => {
                      handleCategoryChange(category.id);
                      setShowCategoryMenu(false);
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Categories List */}
          <div className={styles.desktopCategories}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${
                  selectedCategory === category.id ? styles.active : ""
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Filter Button */}
          <div className={styles.filterContainer} ref={filterRef}>
            <button
              className={styles.filterButton}
              onClick={toggleFilterOptions}
            >
              Ordem
              <span className={styles.filterIcons}>
                <FaChevronUp className={styles.filterIcon} />
                <FaChevronDown className={styles.filterIcon} />
              </span>
            </button>

            {showFilterOptions && (
              <div className={styles.filterDropdown}>
                <div className={styles.filterGroup}>
                  <h4 className={styles.filterGroupTitle}>Ordenar por nome</h4>
                  <div className={styles.filterOptionsRow}>
                    <button
                      className={`${styles.filterIconButton} ${
                        sortOption === "name-asc" ? styles.activeFilter : ""
                      }`}
                      onClick={() => handleSortOption("name-asc")}
                      title="Ordenar A-Z"
                    >
                      <FaSortAlphaDown className={styles.filterOptionIcon} />
                    </button>
                    <button
                      className={`${styles.filterIconButton} ${
                        sortOption === "name-desc" ? styles.activeFilter : ""
                      }`}
                      onClick={() => handleSortOption("name-desc")}
                      title="Ordenar Z-A"
                    >
                      <FaSortAlphaDownAlt className={styles.filterOptionIcon} />
                    </button>
                  </div>
                </div>

                <div className={styles.filterGroup}>
                  <h4 className={styles.filterGroupTitle}>Ordenar por preço</h4>
                  <div className={styles.filterOptionsRow}>
                    <button
                      className={`${styles.filterIconButton} ${
                        sortOption === "price-asc" ? styles.activeFilter : ""
                      }`}
                      onClick={() => handleSortOption("price-asc")}
                      title="Ordenar do menor para o maior"
                    >
                      <FaSortAmountDown className={styles.filterOptionIcon} />
                    </button>
                    <button
                      className={`${styles.filterIconButton} ${
                        sortOption === "price-desc" ? styles.activeFilter : ""
                      }`}
                      onClick={() => handleSortOption("price-desc")}
                      title="Ordenar do maior para o menor"
                    >
                      <FaSortAmountDownAlt
                        className={styles.filterOptionIcon}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.productsGrid}>
          {currentProducts.map((product) => (
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

        {totalPages > 1 && (
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`${styles.pageButton} ${
                  currentPage === page ? styles.activePage : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
