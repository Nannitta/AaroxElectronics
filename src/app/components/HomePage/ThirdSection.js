import Image from 'next/image';
import content from '../../content.json';
import { useState } from 'react';
import pcb1 from '../../assets/images/homePage/pcb1.webp';
import pcb2 from '../../assets/images/homePage/pcb2.webp';
import pcb3 from '../../assets/images/homePage/pcb3.webp';
import pcb4 from '../../assets/images/homePage/pcb4.webp';
import { useLanguageStore } from '../../stores/languageStore';
import './thirdSection.css';

export default function ThirdSection() {
  const language = useLanguageStore((state) => state.language);
  const [hoveredArticle, setHoveredArticle] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredArticle(id);
    const sector = document.querySelector(`#${id}`);
    sector.children[0].style.backdropFilter = 'brightness(20%)';
  };

  const handleMouseLeave = (id) => {
    setHoveredArticle(null);
    const sector = document.querySelector(`#${id}`);
    sector.children[0].style.backdropFilter = 'none';
  };

  return(
    <section className='home-third-section'>
      <article
        className={`sectors ${hoveredArticle === 'first-sector' ? 'hovered' : ''}`}
        id='first-sector'
        onMouseEnter={() => handleMouseEnter('first-sector')}
        onMouseLeave={() => handleMouseLeave('first-sector')}
      >
        <div className='overlay-sector'></div>
        <Image src={pcb1} alt='Automotive image' fill={true} className={`${hoveredArticle === 'first-sector' ? 'hovered sector-bg' : 'hidden-sector'}`}/>
        <div>
          <span>01</span>
          <h2>{content[language].HomePage.thirdSection.title1}</h2>
        </div>
        <p>{content[language].HomePage.thirdSection.paragraph1}</p>
      </article>
      <article
        className={`sectors ${hoveredArticle === 'second-sector' ? 'hovered' : ''}`}
        id='second-sector'
        onMouseEnter={() => handleMouseEnter('second-sector')}
        onMouseLeave={() => handleMouseLeave('second-sector')}
      >
        <div className='overlay-sector'></div>
        <Image src={pcb2} alt='Industrial image' fill={true} className={`${hoveredArticle === 'second-sector' ? 'hovered sector-bg' : 'hidden-sector'}`}/>
        <div>
          <span>02</span>
          <h2>{content[language].HomePage.thirdSection.title2}</h2>
        </div>
        <p>{content[language].HomePage.thirdSection.paragraph2}</p>
      </article>
      <article
        className={`sectors ${hoveredArticle === 'third-sector' ? 'hovered' : ''}`}
        id='third-sector'
        onMouseEnter={() => handleMouseEnter('third-sector')}
        onMouseLeave={() => handleMouseLeave('third-sector')}
      >
        <div className='overlay-sector'></div>
        <Image src={pcb3} alt='Marine image' fill={true} className={`${hoveredArticle === 'third-sector' ? 'hovered sector-bg' : 'hidden-sector'}`}/>
        <div>
          <span>03</span>
          <h2>{content[language].HomePage.thirdSection.title3}</h2>
        </div>
        <p>{content[language].HomePage.thirdSection.paragraph3}</p>
      </article>
      <article
        className={`sectors ${hoveredArticle === 'fourth-sector' ? 'hovered' : ''}`}
        id='fourth-sector'
        onMouseEnter={() => handleMouseEnter('fourth-sector')}
        onMouseLeave={() => handleMouseLeave('fourth-sector')}
      >
        <div className='overlay-sector'></div>
        <Image src={pcb4} alt='Consumer image' fill={true} className={`${hoveredArticle === 'fourth-sector' ? 'hovered sector-bg' : 'hidden-sector'}`}/>
        <div>
          <span>04</span>
          <h2>{content[language].HomePage.thirdSection.title4}</h2>
        </div>
        <p>{content[language].HomePage.thirdSection.paragraph4}</p>
       </article>
      <article
        className={`sectors ${hoveredArticle === 'fifth-sector' ? 'hovered' : ''}`}
        id='fifth-sector'
        onMouseEnter={() => handleMouseEnter('fifth-sector')}
        onMouseLeave={() => handleMouseLeave('fifth-sector')}
      >
        <div className='overlay-sector'></div>
        <Image src={pcb1} alt='Infrastructure image' fill={true} className={`${hoveredArticle === 'fifth-sector' ? 'hovered sector-bg' : 'hidden-sector'}`}/>
        <div>
          <span>05</span>
          <h2>{content[language].HomePage.thirdSection.title5}</h2>
        </div>
        <p>{content[language].HomePage.thirdSection.paragraph5}</p>
      </article>
      <article
        className={`sectors ${hoveredArticle === 'sixth-sector' ? 'hovered' : ''}`}
        id='sixth-sector'
        onMouseEnter={() => handleMouseEnter('sixth-sector')}
        onMouseLeave={() => handleMouseLeave('sixth-sector')}
      >
        <div className='overlay-sector'></div>
        <Image src={pcb2} alt='MotorSports image' fill={true} className={`${hoveredArticle === 'sixth-sector' ? 'hovered sector-bg' : 'hidden-sector'}`}/>
        <div>
          <span>06</span>
          <h2>{content[language].HomePage.thirdSection.title6}</h2>
        </div>
        <p>{content[language].HomePage.thirdSection.paragraph6}</p>
      </article>
    </section>
  )
}