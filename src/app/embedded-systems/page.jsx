'use client';

import { useLanguageStore } from '../stores/languageStore';
import content from '../content.json';
import './embedded.css';

export default function EmbeddedSystems() {
  const language = useLanguageStore((state) => state.language);

  return(
    <main>
      <section className='test'></section>
      <div className='scroll'>
        <p>{content[language].EmbeddedSystems.scroll}</p>
        <span></span>
      </div>
    </main>
  )
}