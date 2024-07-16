import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { screenSizes } from '../../lib/screenSizes';
import './scrollButton.css';

export default function ScrollButton({ refSection }) {
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();

  const scrollToNextSection = (refSection) => {
    refSection.current.scrollIntoView({ behavior: 'smooth' });
  };

  if(screenWidth >= screenSizes.tablet) {
    return(
      <div className='scroll' onClick={() => scrollToNextSection(refSection)}>
        <p>{content[language].EmbeddedSystems.scroll}</p>
        <span></span>
      </div>
    )
  }

  return null;
}