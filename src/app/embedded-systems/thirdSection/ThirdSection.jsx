import { useEffect } from 'react';
import content from '../../content.json';
import { useLanguageStore } from '../../stores/languageStore';
import pcbBG from '../../assets/images/embedded/pcbBG.webp';
import Image from 'next/image';
import './thirdSection.css';

export default function ThirdSection() {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.embedded-thirdSection');
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
        imageContainer.style.transform = `translateY(${sectionTop / 2.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='embedded-thirdSection'>
      <h2>{content[language].EmbeddedSystems.thirdSection.title}</h2>
      <h3>
        {content[language].EmbeddedSystems.thirdSection.text1}
        <span> {content[language].EmbeddedSystems.thirdSection.tested} </span>
        <p>{content[language].EmbeddedSystems.thirdSection.and}</p>
        <span> {content[language].EmbeddedSystems.thirdSection.proven} </span>
      </h3>
      <div className='pcb-bg-container'>
        <Image src={pcbBG} alt="Black and white pcb" fill={true}/>
      </div>
    </section>
  );
}