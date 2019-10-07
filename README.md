# liff-app-template

## Getting Started

Select `Use this template` button and create a repo for your new project.
Then, clone the repo to your local workspace.

### Starting Dev Server

Run following commands to start dev server.

```console
yarn
yarn dev
```

### Hosting Dev Server

To publish dev server for debugging, use the npm script "host" in another window.

```console
yarn host
```

Note that this script uses [ngrok](https://ngrok.com/) to host. Set up ngrok before you use the "host" script.

## Building

```console
yarn build
```

Generates bundled codes in the dir `/dist`.

## Deployments

Build and deploy files in `/dist` to your favorite file hosting service.

## Licenses

Apache License 2.0
