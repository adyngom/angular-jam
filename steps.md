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
