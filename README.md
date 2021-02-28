# liff-app-template

## Getting Started

Select `Use this template` button and create a repo for your new project.
Then, clone the repo to your local workspace.

### Making LIFF App

Set `https://localhost:9443/` to endpoint URL.

refer: https://developers.line.biz/ja/docs/liff/registering-liff-apps/

### Making `.env` file

`.env` file includes LIFF ID is needed to run this app.

```console
echo LIFF_ID=xxxxxxxxxx-yyyyyyyy > .env
```

### Starting Dev Server

Run following commands to start dev server.

```console
npm install
npm start
```

Access `https://localhost:9443/` on your browser.

In Google Chrome, if you saw the warning like "Your connection is not private" `NET::ERR_CERT_AUTHORITY_INVALID`, click `Advanced` then click `Proceed to localhost(unsafe)`. You may set `Enabled` to "Allow invalid certificates for resources loaded from localhost" on `chrome:flags` page.

In Firefox, if you saw the warning like "Warning: Potential Security Risk Ahead", click `Advanced...` then click `Accept the Risk and Continue`

## Building

```console
npm run build
```

Generates bundled codes in the dir `/dist`.

## Deployments

Build and deploy files in `/dist` to your favorite file hosting service.

## Licenses

Apache License 2.0
