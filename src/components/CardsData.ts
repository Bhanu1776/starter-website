interface Obj {
  id: number;
  techName: string;
  desc: string;
  address: string;
}

export const Tech: Obj[] = [
  {
    id: 1,
    techName: "Next",
    desc: "High-performance web development framework with advanced features for building dynamic, modern applications.",
    address: "https://nextjs.org/docs",
  },
  {
    id: 2,
    techName: "Typescript",
    desc: "Strongly typed superset of JavaScript that provides static type checking and improved developer productivity.",
    address: "https://www.typescriptlang.org/",
  },
  {
    id: 3,
    techName: "Tailwind",
    desc: "Utility-first CSS framework that allows rapid development by composing pre-defined classes.",
    address: "https://tailwindcss.com/",
  },
  {
    id: 4,
    techName: "Eslint",
    desc: "Flat config ESLint setup with ts-parser, eslint-security-plugin for higher-value linting without bloat.",
    address: "https://eslint.org/",
  },
  {
    id: 5,
    techName: "Prettier",
    desc: "Automatic code formatter with ES module import sorting and Tailwind utility class organization for consistent code styling.",
    address: "https://prettier.io/",
  },
  {
    id: 6,
    techName: "Husky",
    desc: "Git hooks made easy for automating tasks and enforcing code quality in npm scripts.",
    address: "https://typicode.github.io/husky/",
  },
  {
    id: 7,
    techName: "ts-sort-suggestions",
    desc: "Enhanced IntelliSense for TypeScript with smarter import suggestions and better developer experience.",
    address: "https://github.com/TypeStrong/ts-node",
  },
  {
    id: 8,
    techName: "PWA",
    desc: "Progressive Web Application, delivering app-like experiences with offline support and performance optimization.",
    address: "https://web.dev/progressive-web-apps/",
  },
  {
    id: 9,
    techName: "Vercel",
    desc: "Command-line interface tool for deploying and managing projects on the Vercel platform efficiently.",
    address: "https://vercel.com/docs/cli",
  },
];
