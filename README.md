# megafon-ui

React UI components library.

[![codecov](https://codecov.io/gh/MegafonWebLab/megafon-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/MegafonWebLab/megafon-ui)
[![Build Status](https://travis-ci.org/MegafonWebLab/megafon-ui.svg?branch=master)](https://travis-ci.org/MegafonWebLab/megafon-ui)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Includes:
- ui-core 
[![npm (scoped)](https://img.shields.io/npm/v/@jekatigr/ui-core.svg)](https://www.npmjs.com/package/@jekatigr/ui-core)

- ui-shared 
[![npm (scoped)](https://img.shields.io/npm/v/@jekatigr/ui-shared.svg)](https://www.npmjs.com/package/@jekatigr/ui-shared)

---

## Development notes

## Getting Started

```bash
npm install -g lerna
```

## Install all packages

```bash
yarn
```

## Build all packages

```bash
yarn run build
```

## Update package versions

```bash
yarn run bump-version
```

Will make next steps:
- ask for a new version of each changed package
- update all cross-dependencies

If you don't want to update all the packages, you can choose "custom version" and type current version.

## Release process

```bash
yarn run release
```

This script prompts for a new version of each changed package. 
If you don't want to update all the packages, you can choose "custom version" and type current version.

After confirm script does the following:

- updates cross-dependencies
- makes commit with publish info
- creates git tags for each updated package
- pushes all of that to git

TravisCI will publish packages to NPM after successful build. 
