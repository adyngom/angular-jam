import {
  registerPlugin,
  getPluginConfig,
  HandledRoute,
} from '@scullyio/scully';

function moviesCollectionPlugin(
  route: string,
  config = {}
): Promise<HandledRoute[]> {
  return Promise.all([
    { route: '/movies/now_playing' },
    { route: '/movies/popular' },
    { route: '/movies/top_rated' },
    { route: '/movies/upcoming' },
  ]);
}

const validator = async () => [];

registerPlugin('router', 'moviesPages', moviesCollectionPlugin, validator);
