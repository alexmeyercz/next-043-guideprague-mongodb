# Libraries

## Initial Install

### [Clerk](https://clerk.com/docs/quickstarts/nextjs)

```bash
npm install @clerk/nextjs
```

Setup:

- [layout.tsx](./src/app/layout.tsx)
- [.env.local](./.env.local)
- [middleware.ts](./src/middleware.ts)

### [Prisma](https://www.prisma.io/docs/getting-started/quickstart)

Setup:

- [db.ts](./src/utils/tb.ts)

```bash
# install
npm install prisma --save-dev
```

```bash
# initialize with mongodb provider
npx prisma init --datasource-provider mongodb
```

Before pushing the database, add database name to the .env file.

If you type `test`, it will be named `test`. If you type `typeanynameinenvbeforepush`, it will be named `typeanynameinenvbeforepush`.

You can easily drop database from mongodb

```bash
DATABASE_URL="mongodb+srv://alexmeyercz:<password>@cluster0.ryshfou.mongodb.net/typeanynameinenvbeforepush"
```

```bash
# create the database
npx prisma db push
```

[package.json](./package.json):

```json
// before deployment
"build": "npx prisma generate && next build",
```

[Prisma Client (Studio)](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/install-prisma-client-node-mysql)

```bash
# install the client
npm install @prisma/client
```

```bash
# open the studio
npx prisma studio
```

[Prisma Seed](https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding)

create /prisma/seed.ts

```bash
node prisma/seed
```

### [React Query](https://tanstack.com/query/v4/docs/framework/react/installation)

```bash
npm i @tanstack/react-query
```

[React Query Devtools](https://tanstack.com/query/v4/docs/framework/react/devtools)

```bash
npm i @tanstack/react-query-devtools
```

### [Shadcn/ui](https://ui.shadcn.com/docs/installation/next)

```sh
npm install next-themes
```

```sh
npx shadcn-ui@latest init
```

```sh
npx shadcn-ui@latest add button form input dropdown-menu select toast badge separator card skeleton
```

### [Lucide](https://lucide.dev/guide/installation)

Installed with Shadcn/ui (Default template). Otherwise, you can install it with:

```sh
npm install lucide-react
```

### [React Icons](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons --save
```

### [Zod](https://zod.dev/?id=installation)

Zod validation and react hook form should be installed with Shadcn/ui. Otherwise, you can install it with:

```sh
npm install zod
```

### [React Hook Form](https://react-hook-form.com/)

```bash
npm install react-hook-form
```

### [Next Themes (Toggler)](https://www.npmjs.com/package/next-themes)

```bash
npm i next-themes
```

---

## Resources

[favicon.io](https://favicon.io/)

[unDraw](https://undraw.co/)

[Mockaroo - Create fake data](https://mockaroo.com/)

---

## Custom fonts

1. [layout.tsx](./src/app/layout.tsx) - import, variables, className...
2. [tailwind.config.ts](./tailwind.config.ts) - fontFamily...
3. [global.css](./src/app/globals.css) - font-ff, font-ffh...

---

# Checklists

## Add form field to the article form

- [shema.prisma](./prisma/schema.prisma) Add the field to the model.
- [Drop database](https://cloud.mongodb.com/v2/65f6c1f36b3220482bbfa6d7#/clusters) (ONLY **BEFORE** REAL DATA ARE ADDED)
- [FormComponents.tsx](./src/components/FormComponents.tsx) Add **fieldprops** type and **field** in case it doesn't exist
- [types.ts](./src/utils/types.ts) - update **type**, define **enum** (optionally) and **schema**
- [CreateArticleForm.tsx](./src/components/CreateArticleForm.tsx) - add **field** to the form, import **field** (optional), default value
