# CodebaseUp

CodebaseUp is an opinionated Next.js monorepo starter pack built on top-notch technologies that enables you to
focus on business logic instead of complex project setup.

Created and maintained by [@jakubhavej](https://twitter.com/jakubhavej)

## What's inside?

The codebase is based on monorepo project structure. Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app (the main one, used for demo purposes)

A collection of reusable and **ready-to-use packages** used throughout the monorepo:

- `database`: powered by [Prisma](https://www.prisma.io/), the Node.js and Typescript ORM.
- `emailing`: powered by [react email](https://react.email/) and [Sendgrid](https://sendgrid.com/)
- `eslint-config-custom`: [ESLing](https://eslint.org/) configurations.
- `prettier-config`: [Prettier](https://prettier.io/) configurations.
- `tailwind-config`: [Tailwind CSS](https://tailwindcss.com/) configurations.
- `tsconfig`: [Typescript](https://www.typescriptlang.org/) configurations.
- `ui`: Beautifully designed components by [shadcn/ui](https://ui.shadcn.com/). Based on [Radix](https://www.radix-ui.com/) & [Tailwind CSS](https://tailwindcss.com/) & [Lucide Icons](https://lucide.dev/). Fully customizable.

The full list of features/modules can be found on [https://www.codebaseup.com](https://www.codebaseup.com)

## Quick start

Clone the repository:

```sh
git clone https://github.com/jhavej/codebaseup your-project-name
```

Create your own repository (e.g. on GitHub) and link it with the cloned one:

```sh
cd your-project-name

git remote set-url origin git@github.com:your-username/your-repository.git
```

Install `pnpm` and `Node v18.16.0` (preferably via [nvm](https://github.com/nvm-sh))

Create a `.env.local` file based on the provided `.env.local.example` - this enables respective modules, e.g. Google OAuth and a connection to a PostgreSQL database (create one e.g. on [Vercel](https://vercel.com/storage/postgres) or [Supabase](https://supabase.com/) or [Neon](https://neon.tech) -- it will work out of the box once connected via the environment variables)

Install project dependencies:

```sh
pnpm install
```

Spin up the development server:

```sh
pnpm run dev
```

Access the app on http://localhost:3000

## Documentation

The full documentation can be found on [https://www.codebaseup.com/docs](https://www.codebaseup.com/docs) (work-in-progress).
