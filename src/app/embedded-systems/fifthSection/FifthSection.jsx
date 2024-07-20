import { useEffect, useState } from 'react';
import content from '../../content.json';
import { useLanguageStore } from '../../stores/languageStore';
import PcbTools from './PcbTools';
import './fifthSection.css';

export default function FifthSection() {
  const language = useLanguageStore((state) => state.language);
  const [embeddedSection, setEmbeddedSection] = useState(null);
  const [containerPcb3d, setContainerPcb3d] = useState(null);
  const totalFrames = 128;

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.embedded-fifthSection');
      const textElements = section?.querySelectorAll('.fifthSection-title, .fifthSection-subtitle');
      
      const rect = section?.getBoundingClientRect();
      const sectionTop = rect?.top;
      const windowHeight = window.innerHeight;

      if (sectionTop <= 0 && sectionTop >= -windowHeight) {
        const opacity = 1 + ((sectionTop / windowHeight) * 5);
        textElements.forEach(el => {
          el.style.opacity = opacity;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const start = () => {
      const embeddedSectionSelected = document.querySelector(".embedded-fifthSection");
      const containerPyramidSelected = document.querySelector(".container-pcb3d");
      setEmbeddedSection(embeddedSectionSelected);
      setContainerPcb3d(containerPyramidSelected);
      
      if (!embeddedSection || !containerPcb3d) return;

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
    return `./embedded/pcb3d/pcb3d${frame}.png`;
  }

  function getFrameRates() {
    const rect = embeddedSection?.getBoundingClientRect();
    const positiveTop = rect?.top <= 0 ? Math.abs(rect?.top) : 0;
    const height = rect.height - window.innerHeight
    const finalPercentage = Math.floor((totalFrames * positiveTop) / height);
    let frames = finalPercentage <= totalFrames ? finalPercentage : totalFrames;

    if (!frames) frames = 1;

    const img = new Image();
    img.src = currentFrame(frames);
    img.onload = () => {
      containerPcb3d.style.backgroundImage = `url(${img.src})`;
    };
  }

  return(
    <section className="embedded-fifthSection">
      <h2 className='fifthSection-title'>{content[language].EmbeddedSystems.fourthSection.title}</h2>
      <h3 className='fifthSection-subtitle'>
        {content[language].EmbeddedSystems.fourthSection.text1}
        <span> {content[language].EmbeddedSystems.fourthSection.tested} </span>
        <p>{content[language].EmbeddedSystems.fourthSection.and}</p>
        <span> {content[language].EmbeddedSystems.fourthSection.proven} </span>
      </h3>
      <div className='pcb-tools-container'>
        <PcbTools/>
      </div>
       <div className="container-pcb3d">
           <canvas id="canvas-pcb3d"></canvas>
       </div>
    </section>
  )
}