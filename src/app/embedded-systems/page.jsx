'use client';

import { useLanguageStore } from '../stores/languageStore';
import content from '../content.json';
import './embedded.css';
import CheckWindowWidth from '../hooks/useWindowWidth';
import { screenSizes } from '../lib/screenSizes';
import FirstSection from './firstSection/FirstSection';

export default function EmbeddedSystems() {
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();

  return(
    <main>
{/*       <nav className='nav-embedded'>
        <ul>
          <li>CONCEPT & SPECIFICATION</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav> */}
      <FirstSection/>
      <section className='embedded-secondSection'>
        <h2>Taking <span>all variables</span> into account from day one</h2>
      </section>
      {
        screenWidth >= screenSizes.tablet &&
          <div className='scroll'>
            <p>{content[language].EmbeddedSystems.scroll}</p>
            <span></span>
          </div>
      }
    </main>
  )
}