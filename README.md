This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## prisma

### seed 実行

```
Running seed command `ts-node prisma/seed.ts` ...
(node:2611) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/take/myProject/next-app-router/prisma/seed.ts:37
import { PrismaClient } from '@prisma/client';
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    at Module._compile (node:internal/modules/cjs/loader:1340:27)
    at Module.m._compile (/Users/take/myProject/next-app-router/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/take/myProject/next-app-router/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Function.Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at phase4 (/Users/take/myProject/next-app-router/node_modules/ts-node/src/bin.ts:649:14)

An error occurred while running the seed command:
Error: Command failed with exit code 1: ts-node prisma/seed.ts
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

が発生するので、コンパイルオプションを追加する

```json
"scripts": {
  "seed": "ts-node --compiler-options '{\"module\": \"commonjs\"}' prisma/seed.ts"
}
```

## メモ

app/ 配下が基本的なルーティングを示す

- page.tsx だと、画面を表示する
app/folder/page.tsx → /folder で表示される
https://nextjs.org/docs/app/building-your-application/routing/defining-routes

- route.ts だと、API処理になる
app/api-hello/route.ts → /api-hello で実行される
https://nextjs.org/docs/app/building-your-application/routing/route-handlers

