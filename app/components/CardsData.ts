interface Obj {
  id: number;
  techName: string;
  desc: string;
  address: string;
}

export const Tech: Obj[] = [
  {
    id: 1,
    techName: 'Next',
    desc: 'High-performance web development framework with advanced features for building dynamic, modern applications.',
    address: 'https://nextjs.org/docs',
  },
  {
    id: 2,
    techName: 'Typescript',
    desc: 'Strongly typed superset of JavaScript that provides static type checking and improved developer productivity.',
    address: 'https://www.typescriptlang.org/',
  },
  {
    id: 3,
    techName: 'Tailwind',
    desc: 'Utility-first CSS framework that allows rapid development by composing pre-defined classes.',
    address: 'https://tailwindcss.com/',
  },
  {
    id: 4,
    techName: 'Eslint',
    desc: 'Typescript linter that enforces code quality, comes with Airbnb-typescript config.',
    address: 'https://eslint.org/',
  },
  {
    id: 5,
    techName: 'Prettier',
    desc: 'Automatic code formatter for consistent and clean code styling. Pre-builds with Tailwindcss-prettier',
    address: 'https://prettier.io/',
  },
  {
    id: 6,
    techName: 'Husky',
    desc: 'Git hooks made easy for automating tasks and enforcing code quality in npm scripts.',
    address: 'https://typicode.github.io/husky/',
  },
  {
    id: 9,
    techName: 'cz-git',
    desc: 'A commitizen adapter for Git, providing a guided and consistent commit message workflow for teams.',
    address: 'https://cz-git.qbb.sh/',
  },
  {
    id: 10,
    techName: 'PWA',
    desc: 'Progressive Web Application, delivering app-like experiences with offline support and performance optimization.',
    address: 'https://cz-git.qbb.sh/',
  },
  {
    id: 12,
    techName: 'Vercel',
    desc: 'Command-line interface tool for deploying and managing projects on the Vercel platform efficiently.',
    address: 'https://vercel.com/docs/cli',
  },
];
