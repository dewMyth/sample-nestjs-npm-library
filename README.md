# Sample NPM Library using NestJS

## Process

1. Create a new NestJS project using NestJS CLI
2. Create a new file called `index.ts` in the `src` folder
3. Then add the following code to the `index.ts` file

```typescript
export { WhatevertheServiceYouWant } from "./theLocationForTheService";
```

Example in this application

```typescript
export { AppService } from "./app.service";
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
import { AppService } from "sample-library";
```

7. Finally build the project using the following command

```bash
npm run build
```

Now your NestJS based NPM library is ready to use

---

# How to use the NestJS based NPM library in your local project

> **_NOTE:_** Make sure to make the locally created NPM library available globally using the `npm link` command before the build the library.

1. Find the exact library name from the `package.json` file of the library. It should be under the `name` key.

2. Run the following command to install the library in your local project.

```bash
npm link <name-of-the-package-as-in-package.json-under-"name:" attribute>
```

Example in this application

```bash
npm link sample-library
```

3. Now, you can import the library in your project.

```typescript
import { WhatevertheServiceYouWant } from 'name-of-the-package-as-in-package.json-under-"name:" attribute';
```

Example in this application

```typescript
import { AppService } from "sample-library";
```

4. Use it by injecting it in the constructor.

```typescript
  constructor(private readonly app: AppService) {}

  @Get()
  getHello(): string {
    return this.app.getHello();
  }
```
