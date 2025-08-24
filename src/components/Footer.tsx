import React from "react";

const Footer = () => (
  <footer className="mt-10 mb-6">
    <a
      href="https://www.npmjs.com/package/@bhanu17/nextjs-starter"
      target="blank"
    >
      <p className="text-center font-sans text-lg text-slate-800 hover:text-yellow-600">
        ©{new Date().getFullYear()} Bhanu Sunka
      </p>
    </a>
  </footer>
);

export default Footer;
