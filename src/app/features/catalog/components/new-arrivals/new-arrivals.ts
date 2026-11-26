import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Game } from '../../../../models/game.model';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewArrivals {
  items = input<Game[]>([]);
}
