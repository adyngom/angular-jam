1. Generate new project

```js
ng new aucine
```

2. Update Angular version to latest using the Evergreen product
3. Add Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
```

then init Tailwind CSS

```bash
npx tailwindcss init
```

add to `tailwind.config.js` the following

```js
content: [
    "./src/**/*.{html,ts}",
  ],
```

add tailwind components to `styles.scss`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

build the app to generate the css file

```bash
ng serve
```

then test that Tailwind works. Replace main component HTML with

```html
<h1 class="text-3xl font-bold underline">Hello world!</h1>
```

4. Put the general page layout - full screen viewport with fixed header (skip dark mode toggle for now)

5. Add the routing now to prep for Scully

```js
const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "category/now_playing",
    pathMatch: "full",
  },
  {
    path: "category/:collection",
    component: MoviesListComponent,
  },

  {
    path: "movie/:id",
    loadComponent: () => import("./components/movie-detail.component").then((m) => m.MovieDetailComponent),
  },
  {
    path: "**",
    redirectTo: "category/now_playing",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

6. Create the `MoviesListComponent` and `MovieDetailComponent` components

```bash
ng g c components/movies-list --standalone -s --selector MoviesList -c OnPush
ng g c components/movie-detail --standalone -s --selector MovieDetail -c OnPush
```

7. Update the `app.component.html` to add the router outlet

```html
<div class="flex flex-col min-h-screen bg-zinc-900 text-white">
  <header class="container mx-auto flex flex-col py-5 text-white">
    <!-- logo markup -->
  </header>
  <main class="flex-1 overflow-y-auto p-5">
    <div class="container mx-auto px-4 pt-16 mb-16">
      <router-outlet></router-outlet>
    </div>
  </main>
</div>
```

8. Add Scully early on if possible

```bash
ng add @scullyio/init
```

Restart app and run `ng serve` again, the `scully init` should generate the `scully.<projectName>.config.ts` file

9. If the config file is not created go through the manual installation steps. You cn find the documentation [here](https://scully.io/docs/learn/getting-started/manualInstallation/)

- 9.1 - Add the `scully ng-lib` to the project

```bash
npm i @scullyio/ng-lib
```

- 9.2 - Then import `ScullyLibModule` into your `app.module.ts`

- 9.3 - Now create a `scully.[PROJECT_NAME].config.ts`, replacing [PROJECT_NAME], with the name of your Angular project. Then add the content of the Scully config file like shown below:

```js
import { ScullyConfig } from "@scullyio/scully";

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "aucine",
  distFolder: "./dist/aucine", // output directory of your Angular build artifacts
  outDir: "./dist/static", // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};
```

- 9.4 - Create a `plugins` directory.
  At the root of your project folder, if it doesn't already exist, create a directory called `scully` do not confuse it with the folder named `.scully` that might've already been created in one the steps before. Inside the `scully` directory, create a `tsconfig.json` file with the following content:

```json
// ./scully/tsconfig.json
{
  "compileOnSave": false,
  "compilerOptions": {
    "esModuleInterop": true,
    "importHelpers": false,
    "lib": ["ES2019", "dom"],
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "target": "es2018",
    "types": ["node"],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "typeRoots": ["../node_modules/@types"],
    "allowSyntheticDefaultImports": true
  },
  "exclude": ["./**/*spec.ts"]
}
```

Then, create a plugins directory inside the scully directory, and add a file named plugins.ts, with the following content:

```js
// ./scully/plugins/plugins.ts
import { registerPlugin, getPluginConfig } from "@scullyio/scully";

export const myPlugin = "myPlugin";

const myFunctionPlugin = async (html: string): Promise<string> => {
  return html;
};

const validator = async () => [];

registerPlugin("render", myPlugin, myFunctionPlugin, validator);
```
