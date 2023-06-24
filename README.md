# Turborepo Starter Pack

This is an opinionated Javascript/Typescript monorepo starter pack built on top-notch technologies that enables you to
focus on business logic instead of complex project setup.

Free. Open Source.

Created and maintained by [@jakubhavej](https://twitter.com/jakubhavej)

## What's inside?

It's based on [Turborepo](https://turbo.build/) project structure. Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app (the main one, used for demo purposes)
- `docs`: another [Next.js](https://nextjs.org/) app

A collection of reusable and **ready-to-use packages** used throughout the monorepo:

- `database`: powered by [Prisma](https://www.prisma.io/), the Node.js and Typescript ORM.
- `eslint-config-custom`: [ESLing](https://eslint.org/) configurations.
- `prettier-config`: [Prettier](https://prettier.io/) configurations.
- `tailwind-config`: [Tailwind CSS](https://tailwindcss.com/) configurations.
- `tsconfig`: [Typescript](https://www.typescriptlang.org/) configurations.
- `ui`: Beautifully designed components by [shadcn/ui](https://ui.shadcn.com/). Based on [Radix](https://www.radix-ui.com/) & [Tailwind CSS](https://tailwindcss.com/) & [Lucide Icons](https://lucide.dev/). Fully customizable.

A **work-in-progress packages:**

- `tRpc`: End-to-end typesafe APIs made easy.
- `File storage`: A tooling for uploading and storing files.
- `Internationalization`: Translations and related management.
- `Emailing`: Sending transactional emails in-app.
- `Chrome extension`: A boilerplate for creating Chrome extensions using React and Typescript.
- `Content management system (CMS)`: A headless CMS integration.
- `Analytics`: A tooling for collecting essential insights about site usage and performance.

## Using the starter pack

Clone the repository:

```sh
git clone git@github.com:jhavej/turbo-starter.git
```

Install `pnpm` and `Node v18.16.0` (preferably via [nvm](https://github.com/nvm-sh))

Create a `.env.local` file based on the provided `.env.local.example` - this enables Google OAuth and a connection to a PostgreSQL database (create one e.g. on [Vercel](https://vercel.com/storage/postgres) or [Supabase](https://supabase.com/) -- both will work out of the box once connected via the environment variables)

Install project dependencies:

```sh
pnpm install
```

Spin up the development server:

```sh
pnpm run dev
```

### Remote Caching (optional)

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands from the project root:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
