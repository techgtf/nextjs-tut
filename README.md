This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# youtube playlist https://www.youtube.com/watch?v=OldUurB0Wx8&list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY&index=18

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



<!--
 All next components are server side by default and they cannot use hooks hooks are only 
 used inside client component. 
 For usign hooks we need to use 'use client' on top of component
 -->


# dynamic routes  
// refrence check reouting-demo/src/app/blog
![alt text](image-1.png)

# nested dynamic route route
// refrence check routing-demo/src/app/products
![alt text](image.png)

# catch all segments 
// refrence check routing-demo/src/app/docs
![alt text](image-2.png)
![alt text](image-3.png)

<!-- privare folder  -->
![alt text](image-4.png)

![alt text](image-5.png)


<!-- routes group -->
![alt text](image-6.png) // look at auth folder this is a grouped route. 
// Now our url is [http://localhost:3000/register, instead of http://localhost:3000/auth/register]

<!-- Layout -->
![alt text](image-7.png)

// // // // =============== // // // // // 
<!-- nested layout look in products folder "routing-demo/src/app/products/[productId]" -->
![alt text](image-8.png)
