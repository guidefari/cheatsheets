---
title: Next JS
createdDate: 2021-01-24
updatedDate: 2021-01-24
published: true
---

## Absolute imports

"Make a (or use your existing) `jsconfig.json` at the top of your
project. If you’re using TypeScript, you can make a `tsconfig.json`
instead. Put something like this inside of that file:"

```javasript
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["src/components/*"],
      "@designsystem/*": ["src/designsystem/*"],
      "@buttons/*": ["src/designsystem/buttons"]
    }
  }
}
```

- [src](https://www.netlify.com/blog/2020/12/07/absolute-imports-in-next.js/?utm_source=rwc&utm_medium=nextimports-cs&utm_campaign=devex)
