<p>
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
    <h1>My Next.js Portfolio</h1>
  </a>
</p>

<p>
  <a aria-label="Ashish Agarwal" href="https://ashishagr.vercel.app">
    <img src="https://img.shields.io/badge/MADE%20BY%20Ashish%20Agarwal-000000.svg?style=for-the-badge&labelColor=000">
  </a>
  <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
</p>

## Next.js Portfolio

Hi there, this is my portfolio I made (and my first next.js project) using several libraries and technologies like:

- Framer Motion
- Tailwind CSS
- Next.js
- Firebase & Firestore
- Hashnode Headless (CMS)

## Environment variables

There is a `.env.example` as a demonstration of what variables are needed.
- NEXT_PUBLIC_TOKEN: get [here](https://web3forms.com)
- NEXTAUTH_SECRET: execute `openssl rand -hex 644` and copy it
- GITHUB_CLIENT_ID & GITHUB_CLIENT_SECRET: github oauth app
- GOOGEL_CLIENT_ID & GOOGLE_CLIENT_SECRET: google oauth app
- HASHNODE_HOST_ID: hashnode publication ID
- HASHNODE_HOST: your_host.hashnode.dev

And firebase ones,
- FIREBASE_API_KEY
- FIREBASE_AUTH_DOMAIN
- FIREBASE_PROJECT_ID
- FIREBASE_STORAGE_BUCKET
- FIREBASE_MESSAGING_SENDER_ID
- FIREBASE_APP_ID

...can be claimed on firebase dashboard (create a web app and have firestore database enabled)

## Running Locally
```bash
$ yarn
$ yarn dev
```