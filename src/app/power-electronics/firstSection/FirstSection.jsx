import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import { Passion_One } from 'next/font/google';
import Image from 'next/image';
import smallDashboard from '../../assets/images/power/smallDashboard.webp';
import './firstSection.css';
import { useEffect } from 'react';

const passion = Passion_One({
  weight: '400',
  subsets: ['latin']
});

export default function FirstSection() {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    const power = document.querySelector('#power');
    const battery = document.querySelector('#battery');
    const ev = document.querySelector('#ev');
    const wireless = document.querySelector('#wireless');
    const bms = document.querySelector('#bms');
    const inverters = document.querySelector('#inverters');
    const controls = document.querySelector('#controls');
    const lighting = document.querySelector('#lighting');
    
    const handleScrollPosition = () => {
      const scrollPosition = window.scrollY;

      if(scrollPosition >= 0 && scrollPosition <= 188) {
        power.classList.add('span-highlighted')
      } else {
        power.classList.remove('span-highlighted')
      }

      if(scrollPosition >= 188 && scrollPosition <= 376) {
        battery.classList.add('span-highlighted')
      } else {
        battery.classList.remove('span-highlighted')
      }

      if(scrollPosition >= 376 && scrollPosition <= 564) {
        ev.classList.add('span-highlighted')
      } else {
        ev.classList.remove('span-highlighted')
      }
      
      if(scrollPosition >= 564 && scrollPosition <= 752) {
        wireless.classList.add('span-highlighted')
      } else {
        wireless.classList.remove('span-highlighted')
      }
      
      if(scrollPosition >= 752 && scrollPosition <= 940) {
        bms.classList.add('span-highlighted')
      } else {
        bms.classList.remove('span-highlighted')
      }
      
      if(scrollPosition >= 940 && scrollPosition <= 1128) {
        inverters.classList.add('span-highlighted')
      } else {
        inverters.classList.remove('span-highlighted')
      }

      if(scrollPosition >= 1128 && scrollPosition <= 1316) {
        controls.classList.add('span-highlighted')
      } else {
        controls.classList.remove('span-highlighted')
      }

      if(scrollPosition >= 1316) {
        lighting.classList.add('span-highlighted')
      } else {
        lighting.classList.remove('span-highlighted')
      }
    }

    window.addEventListener('scroll', handleScrollPosition);
    return () => window.removeEventListener('scroll', handleScrollPosition);
  }, []);

  return (
    <section className='power-firstSection'>
      <div className={`container-defs ${passion.className}`}>
        <span id='power' className='span-highlighted'>{content[language].PowerElectronics.firstSection.power}</span>
        <span id='battery'>{content[language].PowerElectronics.firstSection.battery}</span>
        <span id='ev'>{content[language].PowerElectronics.firstSection.ev}</span>
        <span id='wireless'>{content[language].PowerElectronics.firstSection.wireless}</span>
        <span id='bms'>{content[language].PowerElectronics.firstSection.bms}</span>
        <span id='inverters'>{content[language].PowerElectronics.firstSection.inverters}</span>
        <span id='controls'>{content[language].PowerElectronics.firstSection.controls}</span>
        <span id='lighting'>{content[language].PowerElectronics.firstSection.lighting}</span>
      </div>
      <div className='container-smallDashboard'>
        <Image src={smallDashboard} alt='Small Dashboard' />
      </div>
    </section>
  );
}