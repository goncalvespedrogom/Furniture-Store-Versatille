"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/Options.module.css";
import banner1 from "@/img/banner1.svg";
import banner2 from "@/img/banner2.svg";
import banner3 from "@/img/banner3.svg";

const Banner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(1);

  const banners = [
    {
      id: 1,
      image: banner1,
      topTitle: "Seja bem-vindo",
      topText: "Encontre os móveis perfeitos para transformar seu espaço.",
      rightText:
        "Móveis que combinam estilo, conforto e qualidade para deixar sua casa ainda mais aconchegante. Explore nossas opções e descubra o que há de melhor para seu lar.",
      buttonText: "Conferir",
    },
    {
      id: 2,
      image: banner2,
      topTitle: "Conteúdos",
      topText:
        "Pensada para facilitar sua busca pelos móveis perfeitos, nossa coleção foi cuidadosamente selecionada para oferecer sofisticação, conforto e funcionalidade. Além disso, organizamos o site para que sua experiência de compra seja a melhor possível. As seções são bem definidas, permitindo que você encontre rapidamente o que procura, seja para a sala, quarto, escritório ou área externa. Tudo isso para tornar sua navegação mais prática, intuitiva e prazerosa. Encontre o móvel ideal e transforme seu ambiente com estilo e elegância!",
      rightText: "",
      buttonText: "Saiba mais",
    },
    {
      id: 3,
      image: banner3,
      topTitle: "Showroom",
      topText:
        "Encontre uma seleção completa de móveis que unem estilo, conforto e qualidade. Explore nossa variedade de sofás, mesas, cadeiras, estantes e muito mais, tudo pensado para transformar seu ambiente com elegância e funcionalidade.",
      rightText: "",
      buttonText: "Mais detalhes",
    },
  ];

  useEffect(() => {
    const handleShowBanner2 = () => {
      setCurrentBanner(2);
    };

    window.addEventListener('showBanner2', handleShowBanner2);

    return () => {
      window.removeEventListener('showBanner2', handleShowBanner2);
    };
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev === banners.length ? 1 : prev + 1));
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev === 1 ? banners.length : prev - 1));
  };

  const handleButtonClick = () => {
    if (currentBanner === 1) {
      nextBanner();
    }
  };

  const scrollToCatalog = () => {
    const catalogSection = document.getElementById("catalog");
    if (catalogSection) {
      catalogSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={styles.options} id="options">
      <div className={styles.arrowLeft} onClick={prevBanner}>
        &#10094;
      </div>

      <div
        className={styles.banners}
        style={{
          width: "50%",
          backgroundImage:
            currentBanner === 1
              ? `url(${banners[currentBanner - 1].image.src})`
              : "none",
          backgroundPosition: "center",
          padding: [2, 3].includes(currentBanner) ? "0" : "2rem",
          backgroundColor: "transparent",
        }}
      >
        {currentBanner === 2 ? (
          <div className={styles.banner2Container}>
            <div
              className={styles.banner2Image}
              style={{
                backgroundImage: `url(${banners[currentBanner - 1].image.src})`,
              }}
            ></div>
            <div className={styles.banner2Text}>
              <h1>{banners[currentBanner - 1].topTitle}</h1>
              {banners[currentBanner - 1].topText
                .split("\n")
                .map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
            </div>
          </div>
        ) : currentBanner === 3 ? (
          <div className={styles.banner3Container}>
            <div className={styles.banner3Text}>
              <h1>{banners[currentBanner - 1].topTitle}</h1>
              <p>{banners[currentBanner - 1].topText}</p>
              <p>{banners[currentBanner - 1].rightText}</p>
              <button 
                className={styles.button} 
                onClick={scrollToCatalog}
              >
                {banners[currentBanner - 1].buttonText}
              </button>
            </div>
            <div
              className={styles.banner3Image}
              style={{
                backgroundImage: `url(${banners[currentBanner - 1].image.src})`,
                margin: "0",
              }}
            ></div>
          </div>
        ) : (
          <>
            <div className={styles.topContent}>
              <h1>{banners[currentBanner - 1].topTitle}</h1>
              <p>{banners[currentBanner - 1].topText}</p>
            </div>
            <div className={styles.rightContent}>
              <p>{banners[currentBanner - 1].rightText}</p>
              <button 
                className={styles.button} 
                onClick={handleButtonClick}
              >
                {banners[currentBanner - 1].buttonText}
              </button>
            </div>
          </>
        )}
      </div>

      <div className={styles.arrowRight} onClick={nextBanner}>
        &#10095;
      </div>
    </div>
  );
};

export default Banner;
