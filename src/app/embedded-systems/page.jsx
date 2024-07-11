'use client';

import { useLanguageStore } from '../stores/languageStore';
import content from '../content.json';
import './embedded.css';
import CheckWindowWidth from '../hooks/useWindowWidth';
import { screenSizes } from '../lib/screenSizes';
import Image from 'next/image';
import embedded1 from '../assets/images/embedded/embedded1.webp';

export default function EmbeddedSystems() {
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();

  return(
    <main>
      <section className='embedded-section'>
        <div className='container-img'>
          <Image src={embedded1} alt='PCB' fill={true}/>
        </div>
      </section>
      {
        screenWidth >= screenSizes.laptop &&
          <div className='scroll'>
            <p>{content[language].EmbeddedSystems.scroll}</p>
            <span></span>
          </div>
      }
    </main>
  )
}