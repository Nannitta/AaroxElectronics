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
  const imgRef = useRef(null);
  const listRef = useRef(null);
  const [isSticky, setSticky] = useState(false);
  const topRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observerImgAndList = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSticky(true);
        }
      });
    }, { threshold: 0.01 });

    if (imgRef.current) {
      observerImgAndList.observe(imgRef.current);
    }

    if (listRef.current) {
      observerImgAndList.observe(listRef.current);
    }

    return () => observerImgAndList.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
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
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`power-fourthSection ${workSans.className}`} ref={topRef}>
      <div className={`container-img-fourthSection ${isSticky ? 'sticky' : ''}`} ref={imgRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-wrapper ${activeIndex === index ? 'active' : ''}`}
          >
            <Image src={image} alt={`Dashboard ${index}`} fill={true} />
          </div>
        ))}
      </div>
      <ol className={`list-fourthSection ${isSticky ? 'sticky' : ''}`} ref={listRef}>
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