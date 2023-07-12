import { ScullyConfig, HandledRoute, registerPlugin } from '@scullyio/scully';

// movies collection plugin
function moviesCollectionPlugin(
  route: string = '',
  config = {}
): Promise<HandledRoute[]> {
  return Promise.all([
    { route: '/movies/now_playing' },
    { route: '/movies/popular' },
    { route: '/movies/top_rated' },
    { route: '/movies/upcoming' },
  ]);
}

const moviesValidator = async () => [];

registerPlugin(
  'router',
  'moviesPages',
  moviesCollectionPlugin,
  moviesValidator
);

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'aucine',
  distFolder: './dist/aucine', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/movies/:collection': {
      type: 'moviesPages',
    },
  },
  extraRoutes: ['/movies/:collection'],
};
