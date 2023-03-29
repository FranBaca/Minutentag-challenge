This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Minutentag-Challenge (Next.js)


### Dependencies 
**Javascript**,
**Next.js** 
**Chakra UI**,  

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Please read this...

There is a missing functionality that due to lack of time made it difficult for me to code, i would explain how i would have done it here. 

To implement this functionality, I would have created a server-side route in the web application that handles requests for URLs in this format. This route should extract the "productId" and "productBrand" values from the URL and use them to retrieve the relevant product data from the database or other data source. Then i can use this data to render the appropriate product detail page for the user.





Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/stockprice/id]. This endpoint can be edited in `pages/api/stockprice/[id]`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


