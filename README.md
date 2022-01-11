# Sandbox: "*static-deployment*"

> ⚠ This repo is a sandbox set up to try out code, report issues and collect notes about specific topics.

Main topics:

- [ES modules](#es-modules)
- [Yarn Pnp](#yarn)
- [Vercel deployment](#deployment-with-vercel)

Other topics:

- [Git](#git-workflow)
  - trying GitHub pull request
  - git rebasing

## Some notes on

### ES modules

#### `import` and `export` relies on live binding

> Modules that export values can change those values at any time, but importing modules cannot change the values of their imports.
>
> *from: [*ES modules: A cartoon deep-dive*](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)*

you can't do:

```js
  // module.js
  let count = 0;
  export { count };
  
  // main.js
  import { count } from './module.js';
  count++; // error: count is read-only when imported
```

instead do like this:

```js
  // module.js
  let count = 0;
  function add1() {
    count++;
  }
  export { count, add1 };
  
  // main.js
  import { count, add1 } from "./modules.js";
  add1();
  console.log("count: " + count); // > count: 1
```

#### Top level `await`

> Top-level await enables developers to use the await keyword outside of async functions.
>
> It acts like a big async function *causing other modules who import them to wait before they start evaluating* their body.
>
> *from: [V8 Blog - Top-level `await`](https://v8.dev/features/top-level-await)*

⚠ *warning*: tla on exporting.

The following code:

```javascript
// module.js
  export default await aPromise; // ⚠ you are exporting the result of awaiting
  
// main.js
  import something from './module.js'; 
  // ⚠ you import the fulfilled value of the promise
  // read as: 
  import { default as something } from './module.js';
```

acts like the following:

```javascript
// module.js
  const aValue = await aPromise;
  export default aValue;

// main.js
  import aValue from './module.js';
```

#### Resources

- Overview of [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) on MDN.
- [*ES modules: A cartoon deep-dive*](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) is a really nice article on this subject.
- Article from V8 blog: [*Top-level `await`*](https://v8.dev/features/top-level-await).
- Chapter on ESM from Dr. Axel Rauschmayer's book [*JavaScript for impatient programmers*](https://exploringjs.com/impatient-js/ch_modules.html#ecmascript-modules).

### Yarn

#### Issues

- Prettier extension for VSCode needs Yarn Editor SDK so I followed [yarn docs](https://yarnpkg.com/getting-started/editor-sdks#editor-setup) which requires to:

  - install [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs) VSCode extension.
  - run `yarn dlx @yarnpkg/sdks vscode`.

- Vercel CLI: `vercel dev` command not working, (unresolved atm)

### Deployment with Vercel

tbd

### Git workflow

tbd
