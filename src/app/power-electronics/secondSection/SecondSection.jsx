import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import Image from 'next/image';
import largeDashboard from '../../assets/images/power/largeDashboard.webp';
import './secondSection.css';

export default function SecondSection() {
  const language = useLanguageStore((state) => state.language);

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
      <div className='container-largeDashboard'>
        <Image src={largeDashboard} alt='Small Dashboard' />
      </div>
    </section>
  )
}