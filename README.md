# Next.js Project Starter

"Not so minimal" boilerplate to start building any new [Next.js](https://nextjs.org/) project with styled-components and all linting and testing tools ready, with a highly opinionated folder structure.

As of 06/2022, this setup uses all the new features of Next.js 12.1 and React 18

## Folder Structure

- `pages/` - contains all app pages
- `src/api/` - contains api calls
- `src/components/` - contains simple reusable components
- `src/containers/` - contains more complex reusable components with side-effects
- `src/pages/` - contains individual components for every page (if the child component is used only on one page, place it nested under its parent page)

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/HomePage/index.tsx`. The page auto-updates as you edit the file.

## Dependencies

- `styled-components` - fully setup SSR and theming
- `jest` - unit testing. Run by command `yarn test`

## Code Quality Tools

Project uses: Eslint, Stylelint, Prettier.

All of them are run as `pre-commit` and `pre-push` hooks using Husky and LintStaged.

Respect these tools and do not push non-formated code to the repository.

- `yarn format` - runs prettier on all files
- `yarn format:check` - only checks formating issues using prettier
- `yarn lint:ts` - lints JS and TS file using eslint
- `yarn lint:css` - lints .CSS files and styled-components using stylelint

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
