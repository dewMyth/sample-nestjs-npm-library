# Sample NPM Library using NestJS

## Process

1. Create a new NestJS project using NestJS CLI
2. Create a new file called `index.ts` in the `src` folder
3. Then add the following code to the `index.ts` file

```typescript
export { WhatevertheServiceYouWant } from './theLocationForTheService';
```

Example in this application

```typescript
export { AppService } from './app.service';
```

4. Before building the project, you need to add the following code to the `package.json` file. (Replace the dist if you have a different output folder)

```bash
  "main": "dist/index.js",
```

#### Optional (For Local Usage)---

5. If you want to use this in a local project, you can use the following command to link the project to your local project and make it available for globally for use.

```bash
npm link
```

6. How to use the library in your project

```typescript
import { WhatevertheServiceYouWant } from 'name-of-the-package-as-in-package.json-under-"name:" attribute';
```

Example in this application

```typescript
import { AppService } from 'sample-library';
```

7. Finally build the project using the following command

```bash
npm run build
```

Now your NestJS based NPM library is ready to use.

## Publish

1. Login to your NPM account using the following command

```bash
npm login
```

2. Make `private:false` in the `package.json`

3. Give a unique library name to publish it for free. (i.e replace the name attribute in the `package.json`)

Example in this application

```bash
  "name": "sample-library-ghlm",

```

4. Finally publish the library using the following command

```bash
npm publish
```

5. If you want to update the library, you can update the version in the `package.json` and publish it again.

6. For installing the library in your project, you can use the following command

```bash
npm install sample-library-ghlm
```
