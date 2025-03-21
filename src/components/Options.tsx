"use client";

import React, { useState } from 'react';
import styles from '../styles/Options.module.css';
import banner1 from '@/img/banner1.svg'; 
import banner2 from '@/img/banner2.svg'; 
import banner3 from '@/img/banner3.svg';

const Banner: React.FC = () => {
    // estado para controlar o banner atual
    const [currentBanner, setCurrentBanner] = useState(1);

    // array de banners com textos personalizados
    const banners = [
        {
            id: 1,
            image: banner1,
            topTitle: "Seja bem-vindo",
            topText: "Encontre os móveis perfeitos para transformar seu espaço.",
            rightText: "Móveis que combinam estilo, conforto e qualidade para deixar sua casa ainda mais aconchegante. Explore nossas opções e descubra o que há de melhor para seu lar.",
            buttonText: "Conferir",
        },
        {
            id: 2,
            image: banner2,
            topTitle: "Conteúdos",
            topText: "Boas-vindas . . . . . . . . . . . . . . . . . . . . . . . . . pág. 02\nConteúdos . . . . . . . . . . . . . . . . . . . . . . . . . . . pág. 03\nBehind the Brand . . . . . . . . . . . . . . . . . . . . . pág. 02\nVision & Mission . . . . . . . . . . . . . . . . . . . . . . pág. 02\nTimeline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . pág. 02\nMeet Our Teams . . . . . . . . . . . . . . . . . . . . . . pág. 02\nSection Breaks . . . . . . . . . . . . . . . . . . . . . . . . pág. 02\nPortfolio & Mockup . . . . . . . . . . . . . . . . . . . pág. 02\nTestimonial . . . . . . . . . . . . . . . . . . . . . . . . . . . pág. 02\nChart Infographic . . . . . . . . . . . . . . . . . . . . pág. 02\nContact Information . . . . . . . . . . . . . . . . . . pág. 02",
            rightText: "", // texto vazio, pois o conteúdo será exibido no topContent
            buttonText: "Saiba mais",
        },
        {
            id: 3,
            image: banner3,
            topTitle: "Banner 3 Título",
            topText: "Texto do Banner 3",
            rightText: "Mais um texto para o Banner 3.",
            buttonText: "Explorar",
        },
    ];

    // função para avançar para o próximo banner
    const nextBanner = () => {
        setCurrentBanner((prev) => (prev === banners.length ? 1 : prev + 1));
    };

    // função para voltar ao banner anterior
    const prevBanner = () => {
        setCurrentBanner((prev) => (prev === 1 ? banners.length : prev - 1));
    };

    return (
        <div className={styles.options}>
            {/* seta esquerda */}
            <div className={styles.arrowLeft} onClick={prevBanner}>
                &#10094; {/* símbolo de seta esquerda */}
            </div>

            {/* banner atual */}
            <div
                className={styles.banners}
                style={{
                    width: '50%', // largura fixa para todos os banners
                    backgroundImage: currentBanner === 2 ? 'none' : `url(${banners[currentBanner - 1].image.src})`,
                    backgroundPosition: 'center',
                    padding: currentBanner === 2 ? '0' : '2rem', // remover padding apenas no banner2
                }}
            >
                {/* conteúdo do banner2 (imagem + texto) */}
                {currentBanner === 2 ? (
                    <div className={styles.banner2Container}>
                        {/* imagem do banner2 */}
                        <div
                            className={styles.banner2Image}
                            style={{ backgroundImage: `url(${banners[currentBanner - 1].image.src})` }}
                        ></div>
                        {/* texto do banner2 */}
                        <div className={styles.banner2Text}>
                            <h1>{banners[currentBanner - 1].topTitle}</h1>
                            {banners[currentBanner - 1].topText.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        {/* conteúdo no topo (título e texto) */}
                        <div className={styles.topContent}>
                            <h1>{banners[currentBanner - 1].topTitle}</h1>
                            <p>{banners[currentBanner - 1].topText}</p>
                        </div>
                        {/* conteúdo à direita (parte inferior direita) */}
                        <div className={styles.rightContent}>
                            <p>{banners[currentBanner - 1].rightText}</p>
                            <button className={styles.button}>
                                {banners[currentBanner - 1].buttonText}
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* seta direita */}
            <div className={styles.arrowRight} onClick={nextBanner}>
                &#10095; {/* símbolo de seta direita */}
            </div>
        </div>
    );
};

export default Banner;
