'use client';

import { useEffect, useRef, useState } from 'react';
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
import Link from 'next/link';
import lineGreen from './assets/images/homePage/secondSection/greenLine.svg';
import lineGreenLarge from './assets/images/homePage/secondSection/greenLineLarge.svg';
import limeArrow from './assets/images/homePage/secondSection/limeArrowRight.svg';
import './home.css';

export default function Home() {
  const { screenWidth } = CheckWindowWidth();
  const language = useLanguageStore((state) => state.language);
  const [activeIndex, setActiveIndex] = useState(0);
  const pcbsRef = useRef([]);

  useEffect(() => {
    const animateZoom = () => {
      const pcb = pcbsRef.current[activeIndex];
      if (pcb) {
        pcb.classList.add('zoom');
        setTimeout(() => {
          pcb.classList.remove('zoom');
        }, 9500);
      }
    };

    animateZoom();

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <main>
      <section className='home-first-section'>
        <div className='home-title'>
          <Image
            src={Logo}
            alt='Logo Aarox Electronics'
            width={screenWidth < 768 ? 150 : 250}
            height={screenWidth < 768 ? 46 : 76}
          />
          <h2>{content[language].HomePage.title}</h2>
        </div>
        <div className='border-zoom-image'>
          <Image src={screenWidth >= 1366 ? borderLarge : border} alt='Image container border' fill={true} className='border-image'/>
          <div className='pcb-container'>
            <Image
              src={pcb1}
              alt='PCB 1'
              fill={true}
              className={`pcb ${activeIndex === 0 ? 'active' : 'inactive'}`}
              ref={(el) => (pcbsRef.current[0] = el)}
            />
            <Image
              src={pcb2}
              alt='PCB 2'
              fill={true}
              className={`pcb ${activeIndex === 1 ? 'active' : 'inactive'}`}
              ref={(el) => (pcbsRef.current[1] = el)}
            />
            <Image
              src={pcb3}
              alt='PCB 3'
              fill={true}
              className={`pcb ${activeIndex === 2 ? 'active' : 'inactive'}`}
              ref={(el) => (pcbsRef.current[2] = el)}
            />
            <Image
              src={pcb4}
              alt='PCB 4'
              fill={true}
              className={`pcb ${activeIndex === 3 ? 'active' : 'inactive'}`}
              ref={(el) => (pcbsRef.current[3] = el)}
            />
          </div>
        </div>
        <div className='our-approach'>
          <p>{content[language].HomePage.stay}</p>
          <Link href={'/'}>
            <button>
              {content[language].HomePage.textButton}
              <Image src={arrowRight} width={24} height={24} alt='Right arrow' className='bounce'/>
            </button>
          </Link>
        </div>
      </section>
      <section className='home-second-section'>
        <div className='line-container'>
          <Image src={screenWidth >= 1366 ? lineGreenLarge : lineGreen} alt='Border Green' fill={true} className='green-line'/>
        </div>
        <div className='article-container'>
          <article className='first-article'>
            <h2>{content[language].HomePage.secondSection.title1}</h2>
            <p>{content[language].HomePage.secondSection.def1}</p>
            <Link href={'/'}>
              <button>
                {content[language].HomePage.secondSection.textButton1}
                <Image src={limeArrow} width={16} height={16} alt='Right arrow' className='bounce'/>
              </button>
            </Link>
          </article>
          <article className='second-article'>
            <h2>{content[language].HomePage.secondSection.title2}</h2>
            <p>{content[language].HomePage.secondSection.def2}</p>
            <Link href={'/'}>
              <button>
                {content[language].HomePage.secondSection.textButton2}
                <Image src={limeArrow} width={16} height={16} alt='Right arrow' className='bounce'/>
              </button>
            </Link>
          </article>
        </div>
      </section>
      <section className='home-third-section'>
        <h2>Secciones zoom</h2>
      </section>
    </main>
  );
}

