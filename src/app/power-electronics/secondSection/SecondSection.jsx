import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import Image from 'next/image';
import largeDashboard from '../../assets/images/power/largeDashboard.webp';
import './secondSection.css';
import { useEffect, useState } from 'react';

export default function SecondSection() {
  const language = useLanguageStore((state) => state.language);

  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const handleScrollImage = () => {
      const section = document.querySelector('.power-secondSection');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.1 && rect.bottom >= 0) {
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
      }
    };

    window.addEventListener('scroll', handleScrollImage);
    return () => {
      window.removeEventListener('scroll', handleScrollImage);
    };
  }, []);

  return(
    <section className='power-secondSection'>
      <div className='container-title'>
        <h2 className='title-power-secondSection'>
          {content[language].PowerElectronics.secondSection.text1}
          <span> {content[language].PowerElectronics.secondSection.spec}</span>
        </h2>
        <h2 className='title-power-secondSection'>
          {content[language].PowerElectronics.secondSection.text2}
        <span> {content[language].PowerElectronics.secondSection.sheet}</span>
        </h2>
      </div>
      <div className={`container-largeDashboard ${isImageVisible ? 'visible' : ''}`}>
        <Image src={largeDashboard} alt='Small Dashboard' />
      </div>
    </section>
  )
}