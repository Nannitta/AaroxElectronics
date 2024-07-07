'use client';

import Link from 'next/link';
import Image from 'next/image';
import content from '../../content.json';
import { useLanguageStore } from '../../stores/languageStore';
import linkedin from '../../assets/images/linkedin.svg';
import logo from '../../assets/images/logo.webp';
import './footer.css';

export default function Footer() {
  const language = useLanguageStore((state) => state.language);

  return(
    <footer className='footer'>
      <Image src={logo} alt='Logo Aarox Electronics' width={150} height={46} className='logo-footer'/>
      <div className='container-footer'>
        <div className='address'>
          <p>Rúa San Roque 92, Bajo</p>
          <p>36204 Vigo, Pontevedra, España</p>
        </div>
        <div className='connect'>
          <span>{content[language].Footer.connect}</span>
          <Link href={'https://www.linkedin.com/company/aaroxelectronics/'} target='_blank'>
            <Image src={linkedin} alt='Linkedin contact'/>
          </Link>
        </div>
        <div className='privacy-cookies'>
          <Link href={'/'}>{content[language].Footer.policy}</Link>
          <Link href={'/'}>{content[language].Footer.cookies}</Link>
        </div>
        <div className='reserved'>
          <span>©Aarox Electronics</span>
          <span>{content[language].Footer.reserved}</span>
        </div>
      </div>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </footer>
  )
}