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

### ES modules {#es-modules}

#### Resources and refernces about modules

- Overview of [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) on MDN.

#### In this section

##### Basic example

```text

insert

```

##### Top level `await`

> It acts like a big async function causing other modules who import them to wait before they start evaluating their body.


given this code:

```js
// main.js

  import importedData from "./modules/doFetch.js";
```

```js
// modules/doFetch.js

  async function fetchData() {
    // ...await fetch("/api/hello"); //
  }

  let dataToExport;
  try {
    dataToExport = await fetchData();
  } catch (error) {
    // ...
  }

  export default dataToExport;
```

> `await expression`
>  
> where `expression` is a *promise* or any value to wait for.
>
> *Returns* the fulfilled value of the promise, or the value itself if it's not a promise. 

happens




### Yarn {#yarn}

#### Resources and refernces about Yarn Pnp

##### In this section

###### Issues


### Deployment with Vercel {#vercel-deploy}

des

### Git workflow {#git-workflow}

des
