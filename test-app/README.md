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
import { AppService } from 'sample-library';
```

4. Use it by injecting it in the constructor.

```typescript
  constructor(private readonly app: AppService) {}

  @Get()
  getHello(): string {
    return this.app.getHello();
  }
```
