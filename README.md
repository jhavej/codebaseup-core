# CodebaseUp - Core

CodebaseUp is a Next.js (v14+ App Router) boilerplate that saves you 150+ hours
of setup hassle. Experience rapid business launch, not setup fatigue.

This Core version contains a subset of modules offered by a
[Pro version](https://www.codebaseup.com/en/pricing) but still can get you
really far. The premium modules take it up a notch by providing functionalities
to key use cases of every modern app.

See the full comparison at
[codebaseup.com](https://www.codebaseup.com/en/pricing)

Created and maintained by [@jakubhavej](https://twitter.com/jakubhavej)

## What's inside?

The codebase is based on monorepo project structure. Each package/app is 100%
[TypeScript](https://www.typescriptlang.org/).

### Core Features (free)

**Monorepo** Empowering solo makers and tech teams with seamless coding - best
practices, one-click tests, zero duplicity, and library compatibility
guaranteed.

Manage the monorepo with ease, e.g. add a new package to a specific app/package
from anywhere inside the repository:

```sh
pnpm add -D some-package --filter=web
```

Have peace of mind with single-command monorepo tests (Typescript/ESLint) that
can automatically run with every commit, e.g.:

```sh
pnpm run lint
```

```sh
pnpm run lint --filter=web
```

**Next.js** Dive into Next.js (v14+ App Router) like a pro, experiencing React
Server Components, route interception, and more in action.

**Database** Launch and share your cloud-based database swiftly and bid farewell
to the 'It worked on my computer' headache.

**Authentication** Choose from a wide array of popular authentication services,
including Google and Magic Link authentication, to easily secure your
application.

**Design system** Use an open-source and optimized component library based on
Radix UI. No vendor lock-in — copy, paste, and flavor with Tailwind CSS when
needed.

### Pro Features ($199 one-off payment, all-inclusive package)

**Internationalization** Transform your site into a multilingual masterpiece.

**Blog** Craft content with MDX syntax. Manage it by Notion.so (soon).

**Emailing** Reach humans instead of spam folders. Build emails at scale.

**File uploads** Store user files securely and globally accessible.

**SEO** Rank your site at the top of search engine results from the get-go.

**Site analytics** Understand your audience, build funnels, and optimize for
success.

**Monitoring** Sleep soundly with real-time monitoring.

**Forms & Validations** Use performant, flexible, and extensible forms with
easy-to-use validation.

**Payments (soon)** Unlock the revenue potential with payment gateway
integration.

**Testing (soon)** Build robust and error-free web applications.

**Chrome extension (soon)** Create custom browser solutions and enhance your
browsing experience with ease.

**Community support (soon)** Need a helping hand or a fresh perspective? You'll
never be alone on this journey.

[Buy CodebaseUp Pro](https://www.codebaseup.com/en/pricing)

## Apps and Packages (Core)

- `web`: a [Next.js](https://nextjs.org/) app (the main one, used for demo
  purposes)

A collection of reusable and **ready-to-use packages** used throughout the
monorepo:

- `database`: powered by [Prisma](https://www.prisma.io/), the Node.js and
  Typescript ORM.
- `eslint-config-custom`: [ESLing](https://eslint.org/) configurations.
- `tailwind-config`: [Tailwind CSS](https://tailwindcss.com/) configurations.
- `tsconfig`: [Typescript](https://www.typescriptlang.org/) configurations.
- `ui`: Beautifully designed components by [shadcn/ui](https://ui.shadcn.com/).
  Based on [Radix](https://www.radix-ui.com/) &
  [Tailwind CSS](https://tailwindcss.com/) &
  [Lucide Icons](https://lucide.dev/). Fully customizable.

The full list of features/modules can be found on
[https://www.codebaseup.com](https://www.codebaseup.com)

## Quick start

1. Clone the repository:

```sh
git clone https://github.com/jhavej/codebaseup your-project-name
```

2. Create your own repository (e.g. on GitHub) and link it with the cloned one:

```sh
cd your-project-name

git remote set-url origin git@github.com:your-username/your-repository.git
```

3. Install `pnpm` and `Node v18.16.0` (preferably via
   [nvm](https://github.com/nvm-sh))

4. Add local environment variables

Create a `.env.local` file based on the provided `.env.local.example` - this
enables respective modules, e.g. Google OAuth and a connection to a PostgreSQL
database (create one e.g. on [Vercel](https://vercel.com/storage/postgres) or
[Supabase](https://supabase.com/) or [Neon](https://neon.tech) -- it will work
out of the box once connected via the environment variables),

The only required environment variable is NEXTAUTH_SECRET and you can generate
one at [https://generate-secret.vercel.app](https://generate-secret.vercel.app)

5. Install project dependencies:

```sh
pnpm install
```

6. Spin up the development server:

```sh
pnpm run dev
```

7. Access the app at http://localhost:3000

## One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://bit.ly/codebaseup-deploy)

This will clone the repository to your own GitHub account and build up the whole
app for you, accessible online in seconds.

## Documentation

The full documentation can be found on
[https://www.codebaseup.com/docs](https://www.codebaseup.com/docs)
(work-in-progress).
