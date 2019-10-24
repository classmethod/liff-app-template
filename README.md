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

LIFF ID is a part of LIFF URL that has `line` scheme.

```
line://app/xxxxxxxxxx-yyyyyyyy
           ^^^^^^^^^^^^^^^^^^^
            LIFF ID
```

### Starting Dev Server

Run following commands to start dev server.

```console
yarn
yarn dev
```

Access `https://localhost:9443/` on your browser.

Warning like "Your connection is not private" `NET::ERR_CERT_AUTHORITY_INVALID` are shown, click `Advanced` then click `Proceed to localhost(unsafe)`

You may set `Enabled` to "Allow invalid certificates for resources loaded from localhost" on `chrome:flags` page.

## Building

```console
yarn build
```

Generates bundled codes in the dir `/dist`.

## Deployments

Build and deploy files in `/dist` to your favorite file hosting service.

## Licenses

Apache License 2.0
