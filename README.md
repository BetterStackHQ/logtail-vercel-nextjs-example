This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) using the [`@logtail/js`](https://www.npmjs.com/package/@logtail/js) package.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FBetterStackHQ%2Flogtail-vercel-nextjs-example&integration-ids=oac_pEXxdPxyg97Y84zOjEIkDewm)

## About Logtail

Logtail lets you query your logs the same way you query a database. Experience radically better SQL-compatible log management at an unbeatable price.

Store your logs in a structured format and search them easily with SQL. Create actionable dashboards with hosted Grafana. Receive automatic anomaly detection alerts. Archive important log fragments, add comments, share links, and easily collaborate with colleagues.

All that for less than any Elastic stack alternative thanks to our custom-built data pipeline for storing and processing logs.

## About This Example

This example repository demonstrates how you can use structured logging with Logtail in your Next.js app both in the frontend app and in your API functions.

Set your Logtail.com source token to the `NEXT_PUBLIC_LOGTAIL_SOURCE_TOKEN` environment variable and once you open your app, you'll see your logs in [Logtail](https://logtail.com/team/0/tail).

Our [Vercel integration](https://vercel.com/integrations/logtail) will do all the work for you and it will sync your Vercel projects with your Logtail sources.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
