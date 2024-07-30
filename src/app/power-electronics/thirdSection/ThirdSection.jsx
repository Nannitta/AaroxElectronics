import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import cost from '../../assets/images/power/cost.svg';
import software from '../../assets/images/power/software.svg';
import tested from '../../assets/images/power/tested.svg';
import zvs from '../../assets/images/power/zvs.svg';
import smallDashboard from '../../assets/images/power/smallDashboard.webp';
import Image from 'next/image';
import './thirdSection.css';
import { useEffect, useRef } from 'react';

export default function ThirdSection() {
  const language = useLanguageStore((state) => state.language);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((ul) => {
      ul.forEach(li => {
        const listItems = li.target.querySelectorAll('.list-thirdSection li');
        if (li.isIntersecting) {
          listItems.forEach((text, index) => {
            setTimeout(() => {
              text.classList.add('active');
            }, index * 300);
          });
        }
      });
    }, { threshold: 0.8 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return(
    <section ref={sectionRef} className='power-thirdSection'>
      <div>
        <ul className='list-thirdSection'>
          <li>
            <div>
              <Image src={zvs} width={36} height={36} alt='ZVS icon'/>
            </div>
            <div className='list-text'>
              <p>{content[language].PowerElectronics.thirdSection.bucks.text}</p>
              <span>{content[language].PowerElectronics.thirdSection.bucks.highlighted}</span>
            </div>
          </li>
          <li>
            <div>
              <Image src={tested} width={36} height={36} alt='Tested icon'/>
            </div>
            <div className='list-text'>
              <p>{content[language].PowerElectronics.thirdSection.projects.text}</p>
              <span>{content[language].PowerElectronics.thirdSection.projects.highlighted}</span>
            </div>
          </li>
          <li>
            <div>
              <Image src={cost} width={36} height={36} alt='Cost icon'/>
            </div>
            <div className='list-text'>
              <p>{content[language].PowerElectronics.thirdSection.emc.text}</p>
              <span>{content[language].PowerElectronics.thirdSection.emc.highlighted}</span>
            </div>
          </li>
          <li>
            <div>
              <Image src={software} width={36} height={36} alt='Software icon'/>
            </div>
            <div className='list-text'>
              <p>{content[language].PowerElectronics.thirdSection.sw.text}</p>
              <span>{content[language].PowerElectronics.thirdSection.sw.highlighted}</span>
            </div>
          </li>
        </ul>
      </div>
      <div className='container-imgDashboard'>
        <Image src={smallDashboard} alt='Small Dashboard' fill={true}/>
      </div>
    </section>
  )
}