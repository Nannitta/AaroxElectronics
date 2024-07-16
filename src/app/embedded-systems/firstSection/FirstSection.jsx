import { useEffect } from 'react';
import content from '../../content.json';
import { useLanguageStore } from '../../stores/languageStore';
import './firstSection.css';

export default function FirstSection() {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    const asideParagraphs = document.querySelectorAll('.embedded-firstSection aside p');

    const showParagraphsWithDelay = () => {
      asideParagraphs.forEach((paragraph, index) => {
        setTimeout(() => {
          paragraph.classList.add('show');
        }, index * 500);
      });
    };

    showParagraphsWithDelay();
  }, []);

  return(
    <section className='embedded-firstSection'>
        <h1>{content[language].EmbeddedSystems.firstSection.title}</h1>
        <h2>
          {content[language].EmbeddedSystems.firstSection.subtitle}
          <span> {content[language].EmbeddedSystems.firstSection.support} </span>
          {content[language].EmbeddedSystems.firstSection.subtitle2}
        </h2>
        <aside>
          <p>{content[language].EmbeddedSystems.firstSection.application}</p>
          <p>{content[language].EmbeddedSystems.firstSection.industry}</p>
          <p>{content[language].EmbeddedSystems.firstSection.standards}</p>
          <p>{content[language].EmbeddedSystems.firstSection.dimensions}</p>
          <p>{content[language].EmbeddedSystems.firstSection.weight}</p>
          <p>{content[language].EmbeddedSystems.firstSection.cost}</p>
          <p>{content[language].EmbeddedSystems.firstSection.lifetime}</p>
        </aside>
      </section>
  )
}