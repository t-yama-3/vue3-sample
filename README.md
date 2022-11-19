# vue3-test

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 作業記録

```
> npm init vue@3
√ Project name: ... vue3-test
√ Add TypeScript? ... No / Yes
√ Add JSX Support? ... No / Yes
√ Add Vue Router for Single Page Application development? ... No / Yes
√ Add Pinia for state management? ... No / Yes
√ Add Vitest for Unit Testing? ... No / Yes
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? ... No / Yes
√ Add Prettier for code formatting? ... No / Yes
  cd vue3-test
  npm install
  npm run lint
  npm run dev
```

### git init

```
> git init
```

### npm install を実行

```
npm install
```


### .prettierrc.json 修正

```
{
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "endOfLine": "lf"
}
```

```
> npm run lint
```

## Docker コンテナの作成

コンテナ内で `npm run dev` を実行しようとするとエラーが発生する

```
You installed esbuild for another platform than the one you're currently using.
This won't work because esbuild is written with native code and needs to
install a platform-specific binary executable.
```

＜参考サイト＞
・エラーの原因について（ホスト側とコンテナ側で node_modules を別に保有する必要がある）
[You installed esbuild on another platform than the one you're currently using.This won't work because esbuild is written with native code and needs to](https://stackoverflow.com/questions/73139649/you-installed-esbuild-on-another-platform-than-the-one-youre-currently-using-th)

> node_modulesローカル環境からコンテナーにコピーしました。ローカルには darwin-arm64 アーキテクチャのパッケージがありますが、コンテナー内では、linux-arm64 のパッケージを必要とするのは Linux システムです。
このようなエラーを回避するには、node_modules をコンテナーにコピーしないでください。
必要なのは node_modules を.dockerignoreファイルに追加することだけです

・docker-compose.yml で dockerignore が有効でないことの対応
[Docker Ignore is not woking well with docker compose and my file structure](https://stackoverflow.com/questions/53934579/docker-ignore-is-not-woking-well-with-docker-compose-and-my-file-structure)

> docker-compose.yml の 2 番目の匿名ボリュームを使用して node_modules を無視できます。
これにより、ディレクトリをミラーリングできますが、コンテナーは独自の node_modules を保持する必要があります。

```
volumes:
  - .:/var/www/${APP_NAME}_web
  - /var/www/${APP_NAME}_web/node_modules/
```
