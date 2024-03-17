# Libraries

## Initial Install

### [Clerk](https://clerk.com/docs/quickstarts/nextjs)

```bash
npm install @clerk/nextjs
```

Setup:

- layout.tsx
- .env.local
- middleware.ts

### [Prisma](https://www.prisma.io/docs/getting-started/quickstart)

```bash
# install
npm install prisma --save-dev
```

```bash
# initialize with mongodb provider
npx prisma init --datasource-provider mongodb
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

Zod validation should be installed with Shadcn/ui. Otherwise, you can install it with:

```sh
npm install zod
```
<<<<<<< HEAD

---

## Resources

[favicon.io](https://favicon.io/)

[unDraw](https://undraw.co/)

[Mockaroo - Create fake data](https://mockaroo.com/)
=======
>>>>>>> origin/main
