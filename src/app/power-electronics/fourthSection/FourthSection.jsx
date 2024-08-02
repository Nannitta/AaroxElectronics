import smallDashboard from '../../assets/images/power/smallDashboard.webp';
import test from '../../assets/images/power/test.webp';
import Image from 'next/image';
import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import { Work_Sans } from 'next/font/google';
import './fourthSection.css';
import { useEffect, useRef, useState } from 'react';

const workSans = Work_Sans({
  weight: ['600', '700'],
  subsets: ['latin']
});

const images = [smallDashboard, test, smallDashboard, test, smallDashboard];

export default function FourthSection() {
  const language = useLanguageStore((state) => state.language);
  const [isFixed, setFixed] = useState(false);
  const topRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('arriba');
          setFixed(true);
        } else {
          console.log('abajo');
          setFixed(false);
        }
      });
    }, { threshold: [0, 1] });

    if (topRef.current) {
      observer.observe(topRef.current);
    }

    return () => observer.disconnect();
  });

  useEffect(() => {
    const handleScrollFourthSection = () => {
      const section = document.querySelector('.power-fourthSection');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollPosition = windowHeight - sectionTop;

      const scrollPercentage = (scrollPosition / sectionHeight) * 100;
      const currentPart = Math.floor((scrollPercentage / 100) * 6);
      
      let index;

      if (currentPart === 0 || currentPart === 1) index = 0;
      else if (currentPart === 2) index = 1;
      else if (currentPart === 3) index = 2;
      else if (currentPart === 4) index = 3;
      else index = 4;

      setActiveIndex(index);
      
      const imgContainer = document.querySelector('.container-img-fourthSection');
      const listItems = document.querySelector('.list-fourthSection');

      if (isFixed && sectionTop <= 0) {
        imgContainer.classList.add('fixed');
        listItems.classList.add('fixed');
      } else {
        imgContainer.classList.remove('fixed');
        listItems.classList.remove('fixed');
      }
    };
    
    window.addEventListener('scroll', handleScrollFourthSection);
    return () => {
      window.removeEventListener('scroll', handleScrollFourthSection);
    };
  }, [isFixed]);

  return (
    <section className={`power-fourthSection ${workSans.className}`} ref={topRef}>
      <div className={`container-img-fourthSection`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-wrapper ${activeIndex === index ? 'active' : ''} ${index === 0 ? 'initial' : ''}`}
          >
            <Image src={image} alt={`Dashboard ${index}`} fill={true} />
          </div>
        ))}
      </div>
      <ol className={`list-fourthSection`}>
        {['topology', 'magnetics', 'modeling', 'simulations', 'control'].map((id, index) => (
          <li
            key={id}
            id={id}
            className={[
              index === activeIndex ? 'active' : '',
              index === 4 ? 'last' : '',
              index !== activeIndex ? 'inactive' : ''
            ].join(' ')}
          >
            <span>{index + 1}. {content[language].PowerElectronics.fourthSection[`${index + 1}`].title}</span>
            <p>{content[language].PowerElectronics.fourthSection[`${index + 1}`].text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}