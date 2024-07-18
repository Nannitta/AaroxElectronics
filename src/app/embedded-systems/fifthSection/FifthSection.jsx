import { useEffect, useState } from 'react';
import './fifthSection.css';

export default function FifthSection() {
  const [embeddedSection, setEmbeddedSection] = useState(null);
  const [containerPcb3d, setContainerPcb3d] = useState(null);
  const totalFrames = 31;

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
       <div className="container-pcb3d">
           <canvas id="canvas-pcb3d"></canvas>
       </div>
    </section>
  )
}