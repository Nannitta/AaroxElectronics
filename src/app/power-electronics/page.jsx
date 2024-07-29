"use client";

import { useEffect, useRef, useState } from 'react';
import ScrollButton from './scrollButton/ScrollButton';
import SecondSection from './secondSection/SecondSection';
import './firstSection.css';

export default function PowerElectronics() {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);

  const [nextSection, setNextSection] = useState('secondSection-power');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = [
        { ref: firstSectionRef, id: 'firstSection-power' },
        { ref: secondSectionRef, id: 'secondSection-power' },
        { ref: thirdSectionRef, id: 'thirdSection-power' }
      ];

      let foundActive = false;

      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].ref.current?.getBoundingClientRect();

        if (rect?.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setNextSection(sections[i + 1]?.id || null);
          foundActive = true;
          break;
        }
      }

      if (!foundActive) {
        setNextSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const handleScrollSection = (section) => {
    switch (section) {
      case 'firstSection-power':
        scrollToSection(firstSectionRef);
        break;
      case 'secondSection-power':
        scrollToSection(secondSectionRef);
        break;
      case 'thirdSection-power':
        scrollToSection(thirdSectionRef);
        break;
      default:
        break;
    }
  }

  return(
    <main>
      <ScrollButton nextSection={nextSection} handleScrollSection={handleScrollSection}/>
      <div ref={firstSectionRef}>
        <section className='power-firstSection'></section>
      </div>
      <div ref={secondSectionRef}><SecondSection/></div>
      <div ref={thirdSectionRef}>
        <section style={{backgroundColor: 'red', height: '100vh'}}></section>
      </div>
    </main>
  )
}