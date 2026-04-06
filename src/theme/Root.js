// src/theme/Root.js
import React, { useEffect } from 'react';
import 'lenis/dist/lenis.css';
import LenisWrapper from './LenisWrapper';

export default function Root({ children }) {
  useEffect(() => {
    const root = document.documentElement;

    const onScroll = () => {
      root.classList.toggle('navbar-scrolled', window.scrollY > 8);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      root.classList.remove('navbar-scrolled');
    };
  }, []);

  return <LenisWrapper>{children}</LenisWrapper>;
}
