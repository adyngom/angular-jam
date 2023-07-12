import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoryPageComponent,
  },
  {
    path: 'movies/:collection',
    component: MoviesListComponent,
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./components/movie-detail/movie-detail.component').then(
        (m) => m.MovieDetailComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
