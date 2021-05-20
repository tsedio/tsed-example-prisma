<div style="text-align: center;" align="center">
 <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a><br />
</div>

<h1 class="text-align: center;" align="center">Ts.ED Prisma example</h1>

> An awesome project based on Ts.ED framework

See [Ts.ED](https://tsed.io) project for more information.

## Installation

Ask Ts.ED team on slack to get an uniq personal GH_TOKEN.

Then add on your project (or on profile level) a `.npmrc` file with the following content:

```
@tsedio:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=GH_TOKEN
```

Replace the `GH_TOKEN` by your token or by `${GH_TOKEN}` if you want to use env variable.

If you use yarn (v1), you can also add a `.yarnrc` with the following content:

```
"@tsedio:registry" "https://npm.pkg.github.com/tsedio"
```

Then run:

```sh
yarn install
docker-compose up postgres
yarn prisma:migrate
```

## Build setup

> **Important!** Ts.ED requires Node >= 10, Express >= 4 and TypeScript >= 3.

```batch
# install dependencies
$  install

# serve
$  start

# build for production
$  build
$  start:prod
```
