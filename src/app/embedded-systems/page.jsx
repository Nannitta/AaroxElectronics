'use client';

import { useLanguageStore } from '../stores/languageStore';
import content from '../content.json';
import './embedded.css';
import CheckWindowWidth from '../hooks/useWindowWidth';
import { screenSizes } from '../lib/screenSizes';
import Check from '../components/EmbeddedSystems/Check';
/* import Image from 'next/image';
import embedded1 from '../assets/images/embedded/embedded1.webp'; */

export default function EmbeddedSystems() {
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();

  return(
    <main>
      <section className='embedded-section'>
        <h1>{content[language].EmbeddedSystems.title}</h1>
        <div className='content-table-container'>
          <h2>
            {content[language].EmbeddedSystems.subtitle}
            <span> {content[language].EmbeddedSystems.support} </span>
            {content[language].EmbeddedSystems.subtitle2}
          </h2>
          <table className='embedded-table1'>
            <tbody>
              <tr>
                <td className="container-check">
                  <Check width={screenWidth < screenSizes.tablet ? 32 : 44} height={screenWidth < screenSizes.tablet ? 32 : 44} value={"check-1"}/>
                </td>
                <td>{content[language].EmbeddedSystems.table1.application}</td>
              </tr>
              <tr>
                <td className="container-check">
                  <Check width={screenWidth < screenSizes.tablet ? 32 : 44} height={screenWidth < screenSizes.tablet ? 32 : 44} value={"check-2"}/>
                </td>
                <td>{content[language].EmbeddedSystems.table1.industry}</td>
              </tr>
              <tr>
                <td className="container-check">
                  <Check width={screenWidth < screenSizes.tablet ? 32 : 44} height={screenWidth < screenSizes.tablet ? 32 : 44} value={"check-3"}/>
                </td>
                <td>{content[language].EmbeddedSystems.table1.standards}</td>
              </tr>
              <tr>
                <td className="container-check">
                  <Check width={screenWidth < screenSizes.tablet ? 32 : 44} height={screenWidth < screenSizes.tablet ? 32 : 44} value={"check-4"}/>
                </td>
                <td>{content[language].EmbeddedSystems.table1.dimensions}</td>
              </tr>
              <tr>
                <td className="container-check">
                  <Check width={screenWidth < screenSizes.tablet ? 32 : 44} height={screenWidth < screenSizes.tablet ? 32 : 44} value={"check-5"}/>
                </td>
                <td>{content[language].EmbeddedSystems.table1.weight}</td>
              </tr>
              <tr>
                <td className="container-check">
                  <Check width={screenWidth < screenSizes.tablet ? 32 : 44} height={screenWidth < screenSizes.tablet ? 32 : 44} value={"check-6"}/>
                </td>
                <td>{content[language].EmbeddedSystems.table1.cost}</td>
              </tr>
              <tr>
                <td className="container-check">
                  <Check width={screenWidth < screenSizes.tablet ? 32 : 44} height={screenWidth < screenSizes.tablet ? 32 : 44} value={"check-7"}/>
                </td>
                <td>{content[language].EmbeddedSystems.table1.lifetime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
{/*         <div className='container-img'>
          <Image src={embedded1} alt='PCB' fill={true}/>
        </div> */}
      {
        screenWidth >= screenSizes.laptop &&
          <div className='scroll'>
            <p>{content[language].EmbeddedSystems.scroll}</p>
            <span></span>
          </div>
      }
    </main>
  )
}