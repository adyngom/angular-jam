import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'MoviesList',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-list.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {

}
