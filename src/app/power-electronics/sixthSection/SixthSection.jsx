import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import img from '../../assets/images/power/sixthSection/img.png';
import last from '../../assets/images/power/sixthSection/last.png'
import schematics from '../../assets/images/power/sixthSection/icones/schematics.svg';
import pcb from '../../assets/images/power/sixthSection/icones/pcb.svg';
import mechanical from '../../assets/images/power/sixthSection/icones/mechanical.svg';
import prototyping from '../../assets/images/power/sixthSection/icones/prototyping.svg';
import debugging from '../../assets/images/power/sixthSection/icones/debugging.svg';
import AsideSection from './asideSection/AsideSection';
import Image from 'next/image';
import Arrow from './Arrow';
import { Work_Sans } from 'next/font/google';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { screenSizes } from '../../lib/screenSizes';
import './sixthSection.css';

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function SixthSection() {
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();

  return(
    <section className={`power-sixthSection ${workSans.className}`}>
      {
        screenWidth >= screenSizes.laptop
          && <div className='container-arrow'>
              <Arrow width={740} height={"100%"}/>
            </div>
      }
      <AsideSection 
        icon={schematics} 
        image={img} 
        altIcon={'Schematics icon'} 
        altImg={'Schematics image'}
        title={content[language].PowerElectronics.sixthSection.schematic.title}
        text={content[language].PowerElectronics.sixthSection.schematic.subtitle}
      />
      <AsideSection 
        icon={pcb} 
        image={img} 
        altIcon={'PCB icon'} 
        altImg={'PCB image'}
        title={content[language].PowerElectronics.sixthSection.pcb.title}
        text={content[language].PowerElectronics.sixthSection.pcb.subtitle}
      />
      <AsideSection 
        icon={mechanical} 
        image={img} 
        altIcon={'Mechanical icon'} 
        altImg={'Mechanical image'}
        title={content[language].PowerElectronics.sixthSection.mechanical.title}
        text={content[language].PowerElectronics.sixthSection.mechanical.subtitle}
      />
      <AsideSection 
        icon={prototyping} 
        image={img} 
        altIcon={'Prototyping icon'} 
        altImg={'Prototyping image'}
        title={content[language].PowerElectronics.sixthSection.prototype.title}
        text={content[language].PowerElectronics.sixthSection.prototype.subtitle}
      />
      <AsideSection 
        icon={debugging} 
        image={img} 
        altIcon={'Debugging icon'} 
        altImg={'Debugging image'}
        title={content[language].PowerElectronics.sixthSection.debugging.title}
        text={content[language].PowerElectronics.sixthSection.debugging.subtitle}
      />
      <h2>{content[language].PowerElectronics.sixthSection.validation.title}</h2>
      <h3>{content[language].PowerElectronics.sixthSection.validation.subtitle}</h3>
      <div className='container-img-validation'>
        <Image src={last} alt='Validation image' fill={true}/>
      </div>
    </section>
  )
}