import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import { Passion_One } from 'next/font/google';
import Image from 'next/image';
import smallDashboard from '../../assets/images/power/smallDashboard.webp';
import './firstSection.css';

const passion = Passion_One({
  weight: '400',
  subsets: ['latin']
});

export default function FirstSection() {
  const language = useLanguageStore((state) => state.language);

  return (
    <section className='power-firstSection'>
      <div className="test">
        <div className={`container-defs ${passion.className}`}>
          <span>{content[language].PowerElectronics.firstSection.power}</span>
          <span>{content[language].PowerElectronics.firstSection.battery}</span>
          <span>{content[language].PowerElectronics.firstSection.ev}</span>
          <span>{content[language].PowerElectronics.firstSection.wireless}</span>
          <span>{content[language].PowerElectronics.firstSection.bms}</span>
          <span>{content[language].PowerElectronics.firstSection.inverters}</span>
          <span>{content[language].PowerElectronics.firstSection.controls}</span>
          <span>{content[language].PowerElectronics.firstSection.lighting}</span>
        </div>
        <div className='container-smallDashboard'>
          <Image src={smallDashboard} alt='Small Dashboard' />
        </div>
      </div>
    </section>
  );
}