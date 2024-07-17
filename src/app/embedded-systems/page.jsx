'use client';

import './embedded.css';
import FirstSection from './firstSection/FirstSection';
import SecondSection from './secondSection/SecondSection';
import ThirdSection from './thirdSection/ThirdSection';
import { useRef } from 'react';
import ScrollButton from './scroll/ScrollButton';
/* import content from '../content.json';
import { useLanguageStore } from '../stores/languageStore'; */

export default function EmbeddedSystems() {
  const secondSectionRef = useRef(null);
/*   const language = useLanguageStore((state) => state.language); */

  return(
    <main className='aaa'>
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
      <SecondSection refSection={secondSectionRef}/>
      <ThirdSection/>
      <section className='test'></section>
      <ScrollButton refSection={secondSectionRef}/>
    </main>
  )
}