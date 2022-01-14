# Sandbox: "*static-deployment*"

Sandbox for:

- [ES modules](#es-modules)
- [Yarn Pnp](#yarn)
- [Vercel deployment](#vercel-deploy)

Other topics:

- [Git](#git-workflow)
  - GitHub pull request try
  - git rebasing

## Topics

### ES modules

Some notes about ES modules

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
  count++; // error: count is read-only from main.js
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

⚠ *warning*: about directly export a value.

The following code:

```js
  // module.js
  export default await aPromise; // ⚠ you are exporting the result of awaiting
  
  // main.js
  import something from './module.js'; 
  // ⚠ you import the fulfilled value of the promise
  // read as: 
  import { default as something from '...}
```

acts like the following:

```js
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



###### Issues

Prettier extension for VSCode needs Yarn Editor SDK so I followed [yarn docs](https://yarnpkg.com/getting-started/editor-sdks#editor-setup) which requires to:

- install [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs) VSCode extension.
- run `yarn dlx @yarnpkg/sdks vscode`.

Vercel CLI

### Deployment with Vercel

des

### Git workflow

des
