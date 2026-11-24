import React, { useState, useEffect } from 'react';
import './BackgroundSlider.css';
import fotoap from './assets/brand/fotoap.jpg'
import fotoap2 from './assets/brand/fotoap2.jpg'

const imagens = [fotoap, fotoap2]

export default function BackgroundSlider({ children }) {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prevIndice) =>
        prevIndice === imagens.length - 1 ? 0 : prevIndice + 1
      );
    }, 4000); // Troca a cada 4 segundos

    // Limpa o intervalo se o usuário sair da página
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="slider-wrapper">
      {/* Fundo deslizante */}
      <div className="background-slider">
        <div
          className="slides-track"
          style={{ transform: `translateX(-${indiceAtual * 100}vw)` }}
        >
          {imagens.map((url, index) => (
            <div
              key={index}
              className="slide"
              style={{ backgroundImage: `url(${url})` }}
            />
          ))}
        </div>
      </div>

      {/* Conteúdo da página por cima do fundo */}
      <div className="conteudo">{children}</div>
    </div>
  );
}