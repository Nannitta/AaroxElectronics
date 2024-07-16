import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import Image from 'next/image';
import pyramid1 from '../../assets/images/embedded/pyramid/pyramid1.webp';
import pyramid2 from '../../assets/images/embedded/pyramid/pyramid2.webp';
import pyramid3 from '../../assets/images/embedded/pyramid/pyramid3.webp';
import pyramid4 from '../../assets/images/embedded/pyramid/pyramid4.webp';
import pyramid5 from '../../assets/images/embedded/pyramid/pyramid5.webp';
import './secondSection.css';

export default function SecondSection({ refSection }) {
  const language = useLanguageStore((state) => state.language);

  return(
    <section className='embedded-secondSection scroll-section' ref={refSection}>
      <h2>{content[language].EmbeddedSystems.secondSection.text1} <span>{content[language].EmbeddedSystems.secondSection.texthighlighted}</span> {content[language].EmbeddedSystems.secondSection.text2}</h2>
      <div className='container-pyramid'>
        <Image src={pyramid5} alt='Cost' fill={true}/>
        <Image src={pyramid4} alt='Manufacturing' fill={true}/>
        <Image src={pyramid3} alt='Simplicity' fill={true}/>
        <Image src={pyramid2} alt='EMC Emission' fill={true}/>
        <Image src={pyramid1} alt='Performance' fill={true}/>
      </div>
    </section>
  )
}