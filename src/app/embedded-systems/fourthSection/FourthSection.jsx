import { useEffect } from 'react';
import content from '../../content.json';
import { useLanguageStore } from '../../stores/languageStore';
import pcbBG from '../../assets/images/embedded/pcbBG.webp';
import Image from 'next/image';
import { screenSizes } from '../../lib/screenSizes';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import './fourthSection.css';

export default function FourthSection() {
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.embedded-fourthSection');
      const textElements = section.querySelectorAll('h2, h3');
      const imageContainer = section.querySelector('.pcb-bg-container');
      
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const windowHeight = window.innerHeight;

      if (sectionTop <= 0 && sectionTop >= -windowHeight) {
        const opacity = 1 + ((sectionTop / windowHeight) * 5);
        textElements.forEach(el => {
          el.style.opacity = opacity;
        });
        if(screenWidth < screenSizes.laptop) {
          imageContainer.style.transform = `translateY(${(sectionTop / 4) / 2}px)`;
        } else {
          imageContainer.style.transform = `translateY(${sectionTop / 2.5}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [screenWidth]);

  return (
    <section className='embedded-fourthSection'>
      <h2>{content[language].EmbeddedSystems.fourthSection.title}</h2>
      <h3>
        {content[language].EmbeddedSystems.fourthSection.text1}
        <span> {content[language].EmbeddedSystems.fourthSection.tested} </span>
        <p>{content[language].EmbeddedSystems.fourthSection.and}</p>
        <span> {content[language].EmbeddedSystems.fourthSection.proven} </span>
      </h3>
      <div className='pcb-bg-container'>
        <Image src={pcbBG} alt="Black and white pcb" fill={true}/>
      </div>
    </section>
  );
}