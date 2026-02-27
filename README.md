# homigo

## Design Resources

- [Figma Design File](https://www.figma.com/proto/2SxMthOnm6YhYWTgNQRWyh/Website-Design?node-id=785-31879&t=CYadqbmpkHFXoqf2-1&scaling=min-zoom&content-scaling=fixed&page-id=785%3A25121) - Main design file for the project.
- [Design System](YOUR_DESIGN_SYSTEM_URL_HERE) - Component library and style guide.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
bun x sv create --template minimal --types ts --add prettier tailwindcss="plugins:typography" sveltekit-adapter="adapter:auto" --install bun .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
# homigo
