# unplugin-auto-img

## Install

```sh
npm i unplugin-auto-img
```

<details>
<summary>esbuild</summary><br>

```js
// esbuild.config.js
import { build } from 'esbuild'
import { AutoImgPlugin } from 'unplugin-auto-img/esbuild'

build({
  plugins: [
    AutoImgPlugin(/* options */)
  ],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```js
// rollup.config.js
import { AutoImgPlugin } from 'unplugin-auto-img/rollup'

export default {
  plugins: [
    AutoImgPlugin(/* options */)
  ],
}
```

<br></details>

<details>
<summary>Vite</summary><br>

```js
// vite.config.ts
import { AutoImgPlugin } from 'unplugin-auto-img/vite'

export default defineConfig({
  plugins: [
    AutoImgPlugin(/* options */)
  ],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```js
// webpack.config.js
const { AutoImgPlugin } = require('unplugin-auto-img/webpack');

module.exports = {
  plugins: [
    AutoImgPlugin(/* options */),
  ],
};
```

<br></details>
