"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/OptionsMobile.module.css";
import Banner1 from "@/img/banner1-mobile.svg";
import Banner2 from "@/img/banner2-mobile.svg";
import Banner3 from "@/img/banner3-mobile.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const OptionsMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleSlideChange = (e: CustomEvent) => {
      setCurrentSlide(e.detail.slideIndex);
    };

    window.addEventListener('showMobileSlide', handleSlideChange as EventListener);
    return () => {
      window.removeEventListener('showMobileSlide', handleSlideChange as EventListener);
    };
  }, []);

  const slides = [
    {
      title: "Seja bem-vindo",
      subtitle: "Encontre os móveis perfeitos para transformar seu espaço...",
      image: Banner1,
      buttonText: "Conferir",
      showButton: true,
      buttonAction: () => setCurrentSlide(1)
    },
    {
      title: "Conteúdos",
      subtitle: "Nossa coleção foi selecionada para oferecer sofisticação...",
      image: Banner2,
      buttonText: "",
      showButton: false
    },
    {
      title: "Showroom",
      subtitle: "Encontre uma seleção completa de móveis que unem estilo...",
      image: Banner3,
      buttonText: "Mais detalhes",
      showButton: true,
      buttonAction: () => {
        const catalog = document.getElementById('catalog');
        if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className={styles.section} id="optionsMobile">
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
          <button className={styles.button} onClick={slides[currentSlide].buttonAction}>
            {slides[currentSlide].buttonText}
          </button>
        )}

        <div className={styles.arrowsContainer}>
          <button className={styles.arrowButton} onClick={prevSlide} aria-label="Voltar">
            <FiChevronLeft className={styles.arrowIcon} />
          </button>
          <button className={styles.arrowButton} onClick={nextSlide} aria-label="Avançar">
            <FiChevronRight className={styles.arrowIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OptionsMobile;
