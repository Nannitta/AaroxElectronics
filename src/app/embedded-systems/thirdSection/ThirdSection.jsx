import TechCarousel from './TechCarousel';
import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import './thirdSection.css';

export default function ThirdSection() {
  const language = useLanguageStore((state) => state.language);

  return(
    <section className='embedded-thirdSection'>
      <h2>{content[language].EmbeddedSystems.thirdSection.title} <span>{content[language].EmbeddedSystems.thirdSection.design}</span></h2>
      <h3>
        {content[language].EmbeddedSystems.thirdSection.subtitle}
      </h3>
      <TechCarousel/>
    </section>
  )
}