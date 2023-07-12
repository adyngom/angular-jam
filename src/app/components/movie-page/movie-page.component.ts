import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'MoviePage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-page.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePageComponent {

}
