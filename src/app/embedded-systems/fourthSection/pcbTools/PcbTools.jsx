import Image from 'next/image';
import altium from '../../../assets/images/embedded/pcbTools/altium.svg';
import blender from '../../../assets/images/embedded/pcbTools/blender.svg';
import solidWorks from '../../../assets/images/embedded/pcbTools/solidWorks.svg';
import zuken from '../../../assets/images/embedded/pcbTools/zuken.svg';
import CheckWindowWidth from '../../../hooks/useWindowWidth';
import { screenSizes } from '../../../lib/screenSizes';
import './pcbTools.css';

export default function PcbTools() {
  const { screenWidth } = CheckWindowWidth();

  return(
    <>
      <div>
        <Image 
          src={altium} 
          height={screenWidth >= screenSizes.desktop ? 100 : 60} 
          width={screenWidth >= screenSizes.desktop ? 250 : 150} 
          alt='Altium logo'/>
      </div>
      <div>
        <Image 
          src={blender} 
          height={screenWidth >= screenSizes.desktop ? 100 : 60} 
          width={screenWidth >= screenSizes.desktop ? 250 : 150} 
          alt='Blender logo'/>
      </div>
      <div>
        <Image 
          src={solidWorks} 
          height={screenWidth >= screenSizes.desktop ? 100 : 60} 
          width={screenWidth >= screenSizes.desktop ? 250 : 150} 
          alt='SolidWorks logo'/>
      </div>
      <div>
        <Image 
          src={zuken} 
          height={screenWidth >= screenSizes.desktop ? 100 : 60} 
          width={screenWidth >= screenSizes.desktop ? 250 : 150} 
          alt='Zuken logo'/>
      </div>
    </>
  )
}