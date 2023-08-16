# playwright-ct-docker-reproduction

## ⚠️⚠️⚠️ RESOLVED: Follow the "Getting started" steps from below ⚠️⚠️⚠️

The original goal was to add snapshots for the linux platform using the docker image provided by playwright. This is to enable Gitlab CI using linux snapshots.

Also see some reference threads about the topic:

[Discord:pnpm](https://discord.com/channels/731599538665553971/1105127694271795263)

> but if the ../../.. goes higher up than your src folder, that means it's crossing package boundaries

[Discord:playwright](https://discord.com/channels/807756831384403968/1095346753663934524)

## Getting started

Install packages from monorepo root:

```bash
pnpm i
```

Run test locally to ensure they are working:

```bash
pnpm --filter "@ct/app" test-ct
```

Run docker container (see [Visual Comparisons](https://playwright.dev/docs/test-snapshots)):

```bash
docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.37.0-jammy /bin/bash
ls --all #check that everything is mounted, including `.pnpm-store`.
corepack enable
corepack prepare pnpm@latest-8 --activate
pnpm config set store-dir .pnpm-store
```

Install packages in docker container and run tests:

```bash
pnpm install --frozen-lockfile
```

Answer prompt with Yes ("Y")

Run tests:

```bash
pnpm --filter "@ct/app" test-ct --update-snapshots
```

## OUTDATED

See "Could not resolve" error:

```txt
root@docker-desktop:/work/packages/app# pnpm test-ct

> @ct/app@0.0.0 test-ct /work/packages/app
> playwright test -c playwright-ct.config.ts


Running 3 tests using 2 workers

vite v4.3.5 building for production...
✓ 3 modules transformed.
✓ built in 527ms
Could not resolve "./../../../../Users/myname/Documents/priv/playwright-ct-docker-reproduction/packages/app/src/Image/Image.tsx" from "playwright/index.tsx"
RollupError: Could not resolve "./../../../../Users/myname/Documents/priv/playwright-ct-docker-reproduction/packages/app/src/Image/Image.tsx" from "playwright/index.tsx"
```
