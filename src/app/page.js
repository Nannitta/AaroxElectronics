'use client';

import Image from 'next/image';
import content from './content.json';
import Logo from './assets/images/logo.webp';
import borderLarge from './assets/images/homePage/borderLarge.svg';
import border from './assets/images/homePage/border.svg';
import arrowRight from './assets/images/homePage/arrowRight.svg';
import CheckWindowWidth from './hooks/useWindowWidth';
import { useLanguageStore } from './stores/languageStore';
import pcb1 from './assets/images/homePage/pcb1.webp';
import pcb2 from './assets/images/homePage/pcb2.webp';
import pcb3 from './assets/images/homePage/pcb3.webp';
import pcb4 from './assets/images/homePage/pcb4.webp';
import './home.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const { screenWidth } = CheckWindowWidth();
  const language = useLanguageStore((state) => state.language);
  const images = [pcb1, pcb2, pcb3, pcb4];
  const [img, setImg] = useState(images[0]);

  useEffect(() => {
    const pcb = document.querySelector('.pcb');

    const animateZoom = () => {
      pcb.classList.add('zoom');
      setTimeout(() => {
        pcb.classList.remove('zoom');
      }, 10000);
    };

    animateZoom();
    const carousel = setInterval(() => {
      const currentIndex = images.indexOf(img);
      const nextIndex = (currentIndex + 1) % images.length;
      setImg(images[nextIndex]);
      animateZoom();
    }, 10000);

    return () => clearInterval(carousel);
  });

  return (
    <main>
      <section className='home-first-section'>
        <div className='home-title'>
          <Image 
            src={Logo} 
            alt='Logo Aarox Electronics' 
            width={screenWidth < 768 ? 150 : 250} 
            height={screenWidth < 768 ? 46 : 76}/>
          <h2>{content[language].HomePage.title}</h2>
        </div>
        <div className='border-zoom-image'>
          <Image src={screenWidth >= 1366 ? borderLarge : border} alt='Image container border' fill={true} className='border-image'/>
          <div className='pcb-container'>
            <Image src={img} alt='PCB' fill={true} className='pcb'/>
          </div>
        </div>
        <div className='our-approach'>
          <p>{content[language].HomePage.stay}</p>
          <button>
            {content[language].HomePage.textButton}
            <Image src={arrowRight} width={24} height={24} alt='Right arrow' className='bounce'/>
          </button>
        </div>
      </section>
      <section className='home-section'>
        <h2>Navegación</h2>
      </section>
      <section className='home-section'>
        <h2>Secciones zoom</h2>
      </section>
    </main>
  );
}
