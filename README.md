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

## What i learned
[Typography plugin](https://tailwindcss.com/docs/typography-plugin)
[NextJS Image](https://nextjs.org/docs/pages/api-reference/components/image#priority)
By default NestJS use lazy loading for image optimization. When `priority` prop to true, the image will be considered high priority and preload. Lazy loading is automatically disabled for images using priority.

[Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
NextJS deduped behavior. Meaning outside the grid already call get data so inside detail page call the func get data again it's will get the data already fetched. Not call get data again.

Only use dangerouslySetInnerHTML with trusted and sanitized data. See demo in [Dangerously setting the inner HTML](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)

[dangerouslySetInnerHTML](https://legacy.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
[Rendering](https://nextjs.org/docs/pages/building-your-application/rendering)

## Future improvements
- Add hashtag, category, search, SEO
