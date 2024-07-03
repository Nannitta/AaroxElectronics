'use client';

import Image from 'next/image';
import content from './content.json';
import Logo from './assets/images/logo.webp';
import borderLarge from './assets/images/homePage/borderLarge.svg';
import border from './assets/images/homePage/border.svg';
import arrowRight from './assets/images/homePage/arrowRight.svg';
import CheckWindowWidth from './hooks/useWindowWidth';
import { useLanguageStore } from './stores/languageStore';
import './home.css';

export default function Home() {
  const { screenWidth } = CheckWindowWidth();
  const language = useLanguageStore((state) => state.language);

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
