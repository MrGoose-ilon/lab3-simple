import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import type { Game } from '../../../../models/game.model';
import { Rating } from '../../../../shared/ui/rating/rating';

@Component({
  selector: 'app-game-card',
  imports: [Rating],
  templateUrl: './game-card.html',
  styleUrl: './game-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameCard {
  game = input.required<Game>();
  addToCart = output<Game>();

  // Кешована ціна - фінальний варіант експерименту.
  protected formattedPrice = computed(() => this.formatPrice());

  protected formatPrice(): string {
    console.count('formatPrice');
    return this.game().price + ' грн';
  }
}
