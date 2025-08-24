"use client";

import { useState } from "react";

const cmd1: string = "npx @bhanu17/nextjs-starter my-app";

const Hero = () => {
  const [Copied, setCopied] = useState("");

  const handleCopy = (cmd: string) => {
    setCopied(cmd);
    navigator.clipboard.writeText(cmd);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <header className="flex w-full flex-col items-center justify-center">
      <nav className="mb-10 flex w-full items-center justify-between pt-3">
        {/* <p className="font-sans text-2xl font-bold">Next</p> */}
        <img
          src="Nextjs.png"
          alt="sumz_logo"
          className="w-28 object-contain select-none"
        />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/Bhanu1776/Nextjs13-Starter-Template",

              "_blank"
            )
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        NextJs Starter Template <br className="max-md:hidden" />
        <span className="orange_gradient">TypeScript</span>
      </h1>
      <h2 className="desc">
        Make your website more rapid than before. Providing developers with a
        streamlined starting point for creating modern, responsive webapps.
      </h2>

      <div className="link_card mt-14 !bg-[#ffffffab]">
        <p className="cursor-text px-2 font-sans text-xs tracking-wider text-slate-900 select-all md:text-lg">
          <span className="pr-4 text-zinc-500 select-none">$</span>
          {cmd1}
        </p>
        <div className="copy_btn" onClick={() => handleCopy(cmd1)}>
          {Copied === cmd1 ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="#43A047"
                points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
              />
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
};

export default Hero;
