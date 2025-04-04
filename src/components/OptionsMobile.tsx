"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/OptionsMobile.module.css";
import Banner1 from "@/img/banner1-mobile.svg";
import Banner2 from "@/img/banner2-mobile.svg";
import Banner3 from "@/img/banner3-mobile.svg"; // Importe a nova imagem
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const OptionsMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Seja bem-vindo",
      subtitle:
        "Encontre os móveis perfeitos para transformar seu espaço. Móveis que combinam estilo, conforto e qualidade para deixar sua casa ainda mais aconchegante. Explore nossas opções e descubra o que há de melhor para seu lar.",
      image: Banner1,
      buttonText: "Conferir",
      showButton: true,
    },
    {
      title: "Conteúdos",
      subtitle:
        "Nossa coleção foi selecionada para oferecer sofisticação, conforto e funcionalidade. Pensando nisso, o site foi organizado para uma experiência de compra otimizada, com seções bem definidas para facilitar sua busca por móveis ideais.",
      image: Banner2,
      buttonText: "",
      showButton: false,
    },
    {
      title: "Showroom",
      subtitle:
        "Encontre uma seleção completa de móveis que unem estilo, conforto e qualidade. Explore nossa variedade de sofás, mesas, cadeiras, estantes e muito mais, tudo pensado para transformar seu ambiente com elegância e funcionalidade.",
      image: Banner3,
      buttonText: "Mais detalhes",
      showButton: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>{slides[currentSlide].title}</h1>
        <p className={styles.subtitle}>{slides[currentSlide].subtitle}</p>
        <div className={styles.imageContainer}>
          <Image
            src={slides[currentSlide].image}
            alt="Banner de móveis"
            width={500}
            height={250}
            className={styles.image}
            priority
          />
        </div>

        {slides[currentSlide].showButton && (
          <button className={styles.button}>
            {slides[currentSlide].buttonText}
          </button>
        )}

        <div className={styles.arrowsContainer}>
          <button
            className={styles.arrowButton}
            aria-label="Voltar"
            onClick={prevSlide}
          >
            <FiChevronLeft className={styles.arrowIcon} />
          </button>
          <button
            className={styles.arrowButton}
            aria-label="Avançar"
            onClick={nextSlide}
          >
            <FiChevronRight className={styles.arrowIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OptionsMobile;
