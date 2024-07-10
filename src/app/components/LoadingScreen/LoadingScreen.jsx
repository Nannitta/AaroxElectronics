'use client';

import logo from '../../assets/images/logo.svg';
import Image from 'next/image';
import { useEffect } from 'react';
import { useFirstSesionStore } from '../../stores/firstSesionStore';
import './loading.css';

export default function LoadingScreen({ setLoading }) {
  const firstSesion = useFirstSesionStore((state) => state.firstSesion);
  const toggleFirstSesion = useFirstSesionStore((state) => state.toggleFirstSesion);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [setLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleFirstSesion(false);
    }, 1000);

    return () => clearTimeout(timer);
  })

  if(firstSesion) {
    return(
      <div className='loading-screen'>
        <div className='logo-loading'>
          <Image src={logo} alt='Logo Aarox Electronics' fill={true}/>
        </div>
      </div>
    )
  }

  return null;
}