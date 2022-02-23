# NextJS Challenge - Elate Digital

This repository contains a typical Elate Digital NextJS project that can be used for interview purposes.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and configured with:

1. **Linters:** ESLint, Prettier and Stylelint.
2. **Git helpers:** including Git hooks using Husky, Commitizen and Commitlint.
3. **NextJS and React specific folders:** `components`, `pages` and `views` (more on this later).
4. **TypeScript:** configured TypeScript.
5. **Styled-Components:** configured Styled-Components with theme and types.

## Project structure

The app has the following structure:

- `components`: React components used across the app.
- `pages`: NextJS specific pages. The pages should not contain any styles, and be limited to the page-specific logic.
  All the presentation and business logic should be implemented as a view.
- `views`: Contains the presentation elements for the pages. Can also include data and business logic.

## Notes

1. You have a NextJS API route available that you can call to fetch all the details. This API route takes 2500ms to
   return the value to help visualize the placeholder component.
2. Use [Axios](https://github.com/axios/axios) as the request library.

## Prerequisites

To set up the codebase and the required dependencies, simply run the following command.

```bash
# Set up tools:
$ ./run.sh setup
```

## Running the app

```bash
# development
$ npm run dev

# production
$ npm run build && npm run start
```
