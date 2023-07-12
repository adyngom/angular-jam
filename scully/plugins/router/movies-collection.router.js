"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
function moviesCollectionPlugin(route, config = {}) {
    return Promise.all([
        { route: '/movies/now_playing' },
        { route: '/movies/popular' },
        { route: '/movies/top_rated' },
        { route: '/movies/upcoming' },
    ]);
}
const validator = async () => [];
(0, scully_1.registerPlugin)('router', 'moviesPages', moviesCollectionPlugin, validator);
//# sourceMappingURL=movies-collection.router.js.map