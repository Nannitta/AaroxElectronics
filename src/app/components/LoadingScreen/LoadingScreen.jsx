'use client';

import logo from '../../assets/images/logo.svg';
import Image from 'next/image';
import { useEffect } from 'react';
import './loading.css';

export default function LoadingScreen({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return(
    <div className='loading-screen'>
      <div className='logo-loading'>
        <Image src={logo} alt='Logo Aarox Electronics' fill={true}/>
      </div>
    </div>
  )
}