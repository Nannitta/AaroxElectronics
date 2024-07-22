import Image from 'next/image';
import npx from '../../assets/images/embedded/market/npx.svg';
import microchip from '../../assets/images/embedded/market/microchip.svg';
import infineon from '../../assets/images/embedded/market/infineon.webp';
import st from '../../assets/images/embedded/market/st.svg';
import lt from '../../assets/images/embedded/market/lt.svg';
import renesas from '../../assets/images/embedded/market/renesas.svg';
import ti from '../../assets/images/embedded/market/ti.svg';
import yocto from '../../assets/images/embedded/sw/yocto.svg';
import qt from '../../assets/images/embedded/sw/qt.svg';
import grafana from '../../assets/images/embedded/sw/grafana.svg';
import docker from '../../assets/images/embedded/sw/docker.svg';
import wayland from '../../assets/images/embedded/sw/wayland.svg';
import './fifthSection.css';

export default function FifthSection() {
  return(
    <>
      <section className='container-market'>
        <div className='market-logos'>
          <div className='container-logo'>
            <Image src={npx} alt='NPX logo' height={100} width={120}/>
          </div>
          <div className='container-logo'>
            <Image src={microchip} alt='NPX logo' height={100} width={120}/>
          </div>
          <div className='container-logo'>
            <Image src={infineon} alt='NPX logo' height={100} width={120}/>
          </div>
          <div className='container-logo'>
            <Image src={st} alt='NPX logo' height={100} width={120}/>
          </div>
          <div className='container-logo'>
            <Image src={lt} alt='NPX logo' height={100} width={120}/>
          </div>
          <div className='container-logo'>
            <Image src={renesas} alt='NPX logo' height={100} width={120}/>
          </div>
          <div className='container-logo'>
            <Image src={ti} alt='NPX logo' height={100} width={120}/>
          </div>
        </div>
        <div className='market'>
          <h2>We know the market</h2>
          <p>With extensive experience writing software in multiple platforms and for different industries, using the main manufacturers</p>
        </div>
      </section>
      <section className='container-sw'>
      <div className='sw'>
          <h2>SW up to the top level</h2>
          <p>We can build custom Kernels, integrate and develop applications, design impressive dashboards and implement FW over-the-air systems</p>
        </div>
        <div className='sw-logos'>
          <div className='container-logo'>
            <Image src={yocto} alt='NPX logo' height={100} width={120}/>
          </div>
          <div className='container-logo'>
            <Image src={qt} alt='NPX logo' height={100} width={120}/>
          </div>
          <div className='container-logo'>
            <Image src={grafana} alt='NPX logo' height={100} width={120}/>
          </div>
          <div className='container-logo'>
            <Image src={docker} alt='NPX logo' height={100} width={120}/>
          </div>
          <div className='container-logo'>
            <Image src={wayland} alt='NPX logo' height={100} width={120}/>
          </div>
        </div>
      </section>
    </>
  )
}