import { useEffect, useState } from 'react';
import content from '../../content.json';
import { useLanguageStore } from '../../stores/languageStore';
import PcbTools from './PcbTools';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { screenSizes } from '../../lib/screenSizes';
import SchematicsNav from './SchematicsNav';
import ComponentsNav from './ComponentsNav';
import './fourthSection.css';

export default function FourthSection() {
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();
    const [embeddedSection, setEmbeddedSection] = useState(null);
  const [containerPcb3d, setContainerPcb3d] = useState(null);
  const totalFrames = 155;

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.embedded-fourthSection');
      const textElements = section?.querySelectorAll('.fourthSection-title, .fourthSection-subtitle');
      
      const rect = section?.getBoundingClientRect();
      const sectionTop = rect?.top;
      const windowHeight = window.innerHeight;

      if (sectionTop <= 0 && sectionTop >= -windowHeight) {
        const opacity = 1 + ((sectionTop / windowHeight) * 2);
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
      const embeddedSectionSelected = document.querySelector(".embedded-fourthSection");
      const containerPcb3d = document.querySelector(".container-pcb3d");
      setEmbeddedSection(embeddedSectionSelected);
      setContainerPcb3d(containerPcb3d);
      
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
    console.log(frames);

    const img = new Image();
    img.src = currentFrame(frames);
    img.onload = () => {
      containerPcb3d.style.backgroundImage = `url(${img.src})`;
    };

    handleVisibility(frames);
  }

  function handleVisibility(frame) {
    const containerTools = document.querySelector('.pcb-tools-container');
    const pcbSchematics = document.querySelector('.pcb-schematics');
    const diagrams = document.querySelector('#diagrams');
    const variants = document.querySelector('#variants');
    const netClasses = document.querySelector('#net-classes');
    const netNaming = document.querySelector('#net-naming');
    const detailing = document.querySelector('#detailing');
    const pcbComponents = document.querySelector('.pcb-components');
    const layerStack = document.querySelector('#layerStack');
    const signal = document.querySelector('#signal');
    const impedance = document.querySelector('#impedance');
    const ddr = document.querySelector('#ddr');
    const antena = document.querySelector('#antena');

    if(containerTools) {
      if(screenWidth >= screenSizes.laptop) {
        if (frame >= 12 && frame <= 23) {
          containerTools.style.opacity = 1;
        } else {
          containerTools.style.opacity = 0;
        }
      }
    }

    if(pcbSchematics) {
      if(screenWidth >= screenSizes.laptop) {
        if (frame >= 28 && frame <= 58) {
          pcbSchematics.style.opacity = 1
        } else {
          pcbSchematics.style.opacity = 0
        }

        if(frame >= 28 && frame <= 36) {
          diagrams.style.color = '#cafb4b';
        } else {
          diagrams.style.color = '#fefffa';
        }

        if(frame >= 37 && frame <= 41) {
          variants.style.color = '#cafb4b';
        } else {
          variants.style.color = '#fefffa';
        }

        if(frame >= 42 && frame <= 46) {
          netClasses.style.color = '#cafb4b';
        } else {
          netClasses.style.color = '#fefffa';
        }

        if(frame >= 47 && frame <= 51) {
          netNaming.style.color = '#cafb4b';
        } else {
          netNaming.style.color = '#fefffa';
        }

        if(frame >= 52 && frame <= 58) {
          detailing.style.color = '#cafb4b';
        } else {
          detailing.style.color = '#fefffa';
        }
      }
    }

    if(pcbComponents) {
      if(screenWidth >= screenSizes.laptop) {
        if (frame >= 59 && frame <= 111) {
          pcbComponents.style.opacity = 1
        } else {
          pcbComponents.style.opacity = 0
        }

        if(frame >= 59 && frame <= 66) {
          layerStack.style.color = '#cafb4b';
        } else {
          layerStack.style.color = '#fefffa';
        }

        if(frame >= 67 && frame <= 75) {
          signal.style.color = '#cafb4b';
        } else {
          signal.style.color = '#fefffa';
        }

        if(frame >= 77 && frame <= 86) {
          impedance.style.color = '#cafb4b';
        } else {
          impedance.style.color = '#fefffa';
        }

        if(frame >= 88 && frame <= 101) {
          ddr.style.color = '#cafb4b';
        } else {
          ddr.style.color = '#fefffa';
        }

        if(frame >= 102 && frame <= 109) {
          antena.style.color = '#cafb4b';
        } else {
          antena.style.color = '#fefffa';
        }
      }
    }
  }

  return(
    <section className="embedded-fourthSection">
      <h2 className='fourthSection-title'>{content[language].EmbeddedSystems.fourthSection.title}</h2>
      <h3 className='fourthSection-subtitle'>
        {content[language].EmbeddedSystems.fourthSection.text1}
        <span> {content[language].EmbeddedSystems.fourthSection.tested} </span>
        <p>{content[language].EmbeddedSystems.fourthSection.and}</p>
        <span> {content[language].EmbeddedSystems.fourthSection.proven} </span>
      </h3>
      <div className='pcb-tools-container container-tools tools'>
        <PcbTools/>
      </div>
      <div className='pcb-schematics'>
        <SchematicsNav/>
      </div>
      <div className='pcb-components'>
        <ComponentsNav/>
      </div>
       <div className="container-pcb3d">
           <canvas id="canvas-pcb3d"></canvas>
       </div>
    </section>
  )
}