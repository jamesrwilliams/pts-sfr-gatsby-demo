# SFR Gatsby Demo

Gatsby takes SFR a bit further, this is where instead of processing the site on the client side, 
it builds the site statically. Typically, this is triggered by a webhook to a CI/CD process that 
then deploys the built site to a CDN.

## Getting started

- `npm i`
- Ensure the SFCC endpoint is accessible.
- `npm run start` for a dev server.
- `npm run build` for a production build.
