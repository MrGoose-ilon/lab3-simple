import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-rating',
  imports: [Icon],
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Rating {
  value = model(0);
  readonly = input(false);
  protected stars = [1, 2, 3, 4, 5];

  protected rate(v: number): void {
    if (!this.readonly()) this.value.set(v);
  }
}
