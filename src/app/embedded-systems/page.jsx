'use client';

import './embedded.css';
import FirstSection from './firstSection/FirstSection';
import SecondSection from './secondSection/SecondSection';
import { useRef } from 'react';
import ScrollButton from './scroll/ScrollButton';

export default function EmbeddedSystems() {
  const secondSectionRef = useRef(null);

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
      <ScrollButton refSection={secondSectionRef}/>
    </main>
  )
}