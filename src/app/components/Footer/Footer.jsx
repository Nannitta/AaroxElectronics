'use client';

import Link from 'next/link';
import Image from 'next/image';
import content from '../../content.json';
import { useLanguageStore } from '../../stores/languageStore.jsx';
import logo from '../../assets/images/logo.svg';
import Linkedin from './Linkedin';
import Email from './Email';
import './footer.css';
import { useState } from 'react';

export default function Footer() {
  const language = useLanguageStore((state) => state.language);

  return(
    <footer className='footer'>
      <div className='container-logo-footer'>
        <Image src={logo} alt='Logo Aarox Electronics' width={150} height={46} className='logo-footer'/>
      </div>
      <div className='container-footer'>
        <div className='connect'>
          <span>{content[language].Footer.connect}</span>
          <div className='contact'>
            <Link href={'https://www.linkedin.com/company/aaroxelectronics/'} target='_blank'>
              <Linkedin />
            </Link>
            <Link href={'mailto:aarox@aaroxelectronics.es'} target='_blank'>
              <Email />
            </Link>
          </div>
        </div>
        <div className='privacy-cookies'>
          <Link href={'/privacy-policy'}>{content[language].Footer.policy}</Link>
          <Link href={'/cookies'}>{content[language].Footer.cookies}</Link>
        </div>
        <div className='reserved'>
          <span>©Aarox Electronics {content[language].Footer.reserved}</span>
        </div>
      </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </footer>
  )
}