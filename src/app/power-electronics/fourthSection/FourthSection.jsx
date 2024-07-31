import smallDashboard from '../../assets/images/power/smallDashboard.webp';
import Image from 'next/image';
import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import { Work_Sans } from 'next/font/google';
import './fourthSection.css';
import { useEffect, useRef, useState } from 'react';

const workSans = Work_Sans({
  weight: ['600','700'],
  subsets: ['latin']
});

export default function FourthSection() {
  const language = useLanguageStore((state) => state.language);
  const imgRef = useRef(null);
  const listRef = useRef(null);
  const [isSticky, setSticky] = useState(false);
  
  useEffect(() => {
    const observerImgAndList = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(listRef);
          setSticky(true);
        } else {
          setSticky(false);
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

  return(
    <section className={`power-fourthSection ${workSans.className}}`}>
      <div className={`container-img-fourthSection ${isSticky ? 'sticky' : ''}`} ref={imgRef}>
        <Image src={smallDashboard} alt='Dashboard' fill={true}/>
      </div>
      <ol className={`list-fourthSection ${isSticky ? 'sticky' : ''}`} ref={listRef}>
        <li id='topology'>
          <span>1. {content[language].PowerElectronics.fourthSection.one.title}</span>
          <p>{content[language].PowerElectronics.fourthSection.one.text}</p>
        </li>
        <li id='magnetics'>
          <span>2. {content[language].PowerElectronics.fourthSection.two.title}</span>
          <p>{content[language].PowerElectronics.fourthSection.two.text}</p>
        </li>
        <li id='modeling'>
          <span>3. {content[language].PowerElectronics.fourthSection.three.title}</span>
          <p>{content[language].PowerElectronics.fourthSection.three.text}</p>
        </li>
        <li id='simulations'>
          <span>4. {content[language].PowerElectronics.fourthSection.four.title}</span>
          <p>{content[language].PowerElectronics.fourthSection.four.text}</p>
        </li>
        <li id='control'>
          <span>5. {content[language].PowerElectronics.fourthSection.five.title}</span>
          <p>{content[language].PowerElectronics.fourthSection.five.text}</p>
        </li>
      </ol>
    </section>
  )
}