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
