'use client';

import Link from 'next/link';
import './sideMenu.css'
import { useSideMenuStore } from '../../stores/sideMenuStore';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import { useEffect } from 'react';

export default function SideMenu() {
  const menuActive = useSideMenuStore((state) => state.menuActive);
  const menuClosing = useSideMenuStore((state) => state.menuClosing);
  const setMenuActive = useSideMenuStore((state) => state.setMenuActive);
  const setMenuClosing = useSideMenuStore((state) => state.setMenuClosing);
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuActive, menuClosing]);

  const handleClose = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuActive(false);
      setMenuClosing(false);
    }, 500);
  };

  return (
    <>
      {menuActive && screenWidth >= 1366 && <div className="overlay" onClick={handleClose}></div>}
      {(menuActive || menuClosing) && (
        <nav
          className={`side-menu ${screenWidth < 1366 ? '' : 'side-menu-lg'} ${menuClosing ? 'closing' : ''}`}
        >
          <ul>
            <Link href={'/'} onClick={handleClose}>
              <li>{content[language].SideMenu.home}</li>
            </Link>
            <Link href={'/'} onClick={handleClose}>
              <li>{content[language].SideMenu.powerElectronics}</li>
            </Link>
            <Link href={'/'} onClick={handleClose}>
              <li>{content[language].SideMenu.embeddedSystems}</li>
            </Link>
            <Link href={'/'} onClick={handleClose}>
              <li>{content[language].SideMenu.contact}</li>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
}