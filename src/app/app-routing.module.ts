import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'category/now_playing',
    pathMatch: 'full',
  },
  {
    path: 'category/:collection',
    component: MoviesListComponent,
  },

  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./components/movie-detail/movie-detail.component').then(
        (m) => m.MovieDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'category/now_playing',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
