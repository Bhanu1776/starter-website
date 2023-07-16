/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const Footer = () => (
  <footer className="mb-6 mt-10">
    <a
      href="https://www.npmjs.com/package/@bhanu17/nextjs-starter"
      target="blank"
    >
      <p className="text-center font-satoshi text-lg text-slate-800 hover:text-yellow-600">
        ©{new Date().getFullYear()} Bhanu Sunka
      </p>
    </a>
  </footer>
);

export default Footer;
