/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React from 'react';

interface CardsProps {
  techName: string;
  desc: string;
  address: string;
}

const Cards: React.FC<CardsProps> = ({ techName, desc, address }) => (
  <section className=" hover:text-amber-700">
    <article
      className="cursor-pointer rounded-md border-2 border-slate-300 p-4 hover:border-orange-400"
      onClick={() => {
        window.open(
          `${address}`,
          // eslint-disable-next-line prettier/prettier
          '_blank',
        );
      }}
    >
      <div className="flex flex-row">
        <h1 className="mb-2 pr-2 font-inter text-2xl font-medium">
          {techName}
        </h1>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
        >
          <path
            fillRule="evenodd"
            d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="max-w-[21rem] font-satoshi text-lg md:min-h-[8.5rem] md:max-w-[15rem] lg:min-h-[6rem] lg:max-w-[21rem]">
        {desc}
      </p>
    </article>
  </section>
);

export default Cards;
