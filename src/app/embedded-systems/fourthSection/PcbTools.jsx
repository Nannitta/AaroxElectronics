import Image from 'next/image';
import altium from '../../assets/images/embedded/pcbTools/altium.svg';
import blender from '../../assets/images/embedded/pcbTools/blender.svg';
import solidWorks from '../../assets/images/embedded/pcbTools/solidWorks.svg';
import zuken from '../../assets/images/embedded/pcbTools/zuken.svg';

export default function PcbTools() {
  return(
    <>
      <div>
        <Image src={altium} height={80} width={150} alt='logo-tool'/>
      </div>
      <div>
        <Image src={blender} height={80} width={150} alt='logo-tool'/>
      </div>
      <div>
        <Image src={solidWorks} height={80} width={150} alt='logo-tool'/>
      </div>
      <div>
        <Image src={zuken} height={80} width={150} alt='logo-tool'/>
      </div>
    </>
  )
}