'use client';

import Image from 'next/image';
import Link from 'next/link';
import './header.css';
import smallLogo from '../../assets/images/smallLogo.svg';
import { useSideMenuStore } from '../../stores/sideMenuStore.jsx';
import CheckWindowWidth from '../../hooks/useWindowWidth.jsx';
import ToggleLanguage from '../ToggleLanguage/ToggleLanguage.jsx';

export default function Header() {
  const menuActive = useSideMenuStore((state) => state.menuActive);
  const toggleActive = useSideMenuStore((state) => state.toggleActive);
  const { screenWidth } = CheckWindowWidth();

  return (
    <header className='header'>
      <Link href={'/'}>
        <Image src={smallLogo} alt='Logo Aarox Electronics' width={`${screenWidth < 768 ? 36 : 44}`} height={`${screenWidth < 768 ? 36 : 44}`}/>
      </Link>
      <div className='language-menu-container'>
        <ToggleLanguage/>
        <div className={`menu ${menuActive ? 'active' : ''}`} onClick={toggleActive}>
          <span></span>
        </div>
      </div>
    </header>
  );
}
