import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import './secondSection.css';
import { useEffect, useState } from 'react';

export default function SecondSection({ refSection }) {
  const language = useLanguageStore((state) => state.language);
  const [embeddedSection, setEmbeddedSection] = useState(null);
  const [containerPyramid, setContainerPyramid] = useState(null);
  const totalFrames = 5;

  useEffect(() => {
    const start = () => {
      const embeddedSectionSelected = document.querySelector(".embedded-secondSection");
      const containerPyramidSelected = document.querySelector(".container-pyramid");
      setEmbeddedSection(embeddedSectionSelected);
      setContainerPyramid(containerPyramidSelected);

      if (!embeddedSection || !containerPyramid) return;

      function preloadImages() {
        for (let i = 1; i <= totalFrames; i++) {
          const img = new Image();
          img.src = currentFrame(i);
        }
      }

      preloadImages();
      window.addEventListener("scroll", getFrameRates);
    };

    start();

    return () => {
      window.removeEventListener("scroll", getFrameRates);
    };
  });

  function currentFrame(frame) {
    return `./embedded/pyramid/pyramid${frame}.webp`;
  }

  function getFrameRates() {
    const rect = embeddedSection.getBoundingClientRect();
    const positiveTop = rect.top <= 0 ? Math.abs(rect.top) : 0;
    const finalPercentage = Math.floor((totalFrames * positiveTop) / 100);
    let frames = finalPercentage <= totalFrames ? finalPercentage : totalFrames;

    if (!frames) frames = 1;

    const img = new Image();
    img.src = currentFrame(frames);
    img.onload = () => {
      containerPyramid.style.backgroundImage = `url(${img.src})`;
    };
  }

  return (
    <section className="embedded-secondSection" ref={refSection}>
      <h2>
        {content[language].EmbeddedSystems.secondSection.text1}{' '}
        <span>{content[language].EmbeddedSystems.secondSection.texthighlighted}</span>{' '}
        {content[language].EmbeddedSystems.secondSection.text2}
      </h2>
      <div className="container-pyramid">
        <canvas id="canvas"></canvas>
      </div>
    </section>
  );
}
