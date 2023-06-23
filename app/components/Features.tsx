import React from 'react';
import Cards from './Cards';
import { Tech } from './CardsData';

const Features = () => (
  <article className="mt-14 flex flex-row flex-wrap justify-center gap-4">
    {Tech.map((val) => (
      <Cards
        key={val.id}
        techName={val.techName}
        desc={val.desc}
        address={val.address}
      />
    ))}
  </article>
);

export default Features;
