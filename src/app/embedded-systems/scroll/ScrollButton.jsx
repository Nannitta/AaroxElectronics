import { useLanguageStore } from '../../stores/languageStore';
import { useSideMenuStore } from '../../stores/sideMenuStore';
import content from '../../content.json';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { screenSizes } from '../../lib/screenSizes';
import './scrollButton.css';

export default function ScrollButton({ nextSection, handleScrollSection }) {
  const language = useLanguageStore((state) => state.language);
  const menuActive = useSideMenuStore((state) => state.menuActive);
  const { screenWidth } = CheckWindowWidth();

  if (screenWidth >= screenSizes.tablet && nextSection && !menuActive) {
    return (
      <div className='scroll' onClick={() => handleScrollSection(nextSection)}>
        <p>{content[language].EmbeddedSystems.scroll}</p>
        <span></span>
      </div>
    );
  }

  return null;
}