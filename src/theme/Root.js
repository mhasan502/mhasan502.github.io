// src/theme/Root.js
import React from 'react';
import 'lenis/dist/lenis.css';
import LenisWrapper from './LenisWrapper';

export default function Root({ children }) {
  return <LenisWrapper>{children}</LenisWrapper>;
}
