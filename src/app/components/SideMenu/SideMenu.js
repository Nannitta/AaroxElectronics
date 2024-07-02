'use client';

import Link from 'next/link';
import './sideMenu.css'
import { useSideMenuStore } from '../../stores/sideMenuStore';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';

export default function SideMenu() {
  const menuActive = useSideMenuStore((state) => state.menuActive);
  const toggleActive = useSideMenuStore((state) => state.toggleActive);
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();
  
  if(menuActive) {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    return (
      <>
        {menuActive && screenWidth >= 1366 && <div className="overlay"></div>}
        <nav className={`side-menu ${screenWidth < 1366 ? '' : 'side-menu-lg'}`}>
          <ul>
            <Link href={'/'} onClick={toggleActive}>
              <li>{content[language].SideMenu.powerElectronics}</li>
            </Link>
            <Link href={'/'} onClick={toggleActive}>
              <li>{content[language].SideMenu.embeddedSystems}</li>
            </Link>
            <Link href={'/'} onClick={toggleActive}>
              <li>{content[language].SideMenu.contact}</li>
            </Link>
          </ul>
        </nav>
      </>
    )
  } else {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
  }
}