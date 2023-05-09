# playwright-ct-docker-reproduction

## Goal

The original goal was to add snapshots for the linux platform using the docker image provided by playwright. This is to enable Gitlab CI using linux snapshots.

## Getting started

Install packages from monorepo root:

```bash
pnpm i
```

Run test locally to ensure they are working:

```bash
pnpm --filter "@ct/app" test-ct
```
