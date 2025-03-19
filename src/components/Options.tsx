"use client";

import React, { useState } from 'react';
import styles from '../styles/Options.module.css';
import banner1 from '@/img/banner1.svg'; 
import banner2 from '@/img/banner2.svg'; 
import banner3 from '@/img/banner3.svg';

const Banner: React.FC = () => {
    // astado para controlar o banner atual
    const [currentBanner, setCurrentBanner] = useState(1);

    // array de banners com textos personalizados
    const banners = [
        {
            id: 1,
            image: banner1,
            topTitle: "Seja bem-vindo",
            topText: "Encontre os móveis perfeitos para transformar seu espaço.",
            rightText: "Móveis que combinam estilo, conforto e qualidade para deixar sua casa ainda mais aconchegante. Explore nossas opções e descubra o que há de melhor para seu lar.",
            buttonText: "Mais detalhes",
        },
        {
            id: 2,
            image: banner2,
            topTitle: "Banner 2 Título",
            topText: "Texto do Banner 2",
            rightText: "Outro texto para o Banner 2.",
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
                style={{ backgroundImage: `url(${banners[currentBanner - 1].image.src})` }}
            >
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
            </div>

            {/* seta direita */}
            <div className={styles.arrowRight} onClick={nextBanner}>
                &#10095; {/* símbolo de seta direita */}
            </div>
        </div>
    );
};

export default Banner;
