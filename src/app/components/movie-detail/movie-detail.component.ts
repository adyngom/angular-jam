import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'MovieDetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent {

}
