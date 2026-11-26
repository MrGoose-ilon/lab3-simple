import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Rating } from '../../../shared/ui/rating/rating';
import type { Game } from '../../../models/game.model';
import { GamesService } from '../services/games.service';
import { GameCard } from '../components/game-card/game-card';
import { NewArrivals } from '../components/new-arrivals/new-arrivals';

@Component({
  selector: 'app-catalog-page',
  imports: [Rating, GameCard, NewArrivals],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CatalogPage {
  private cart = inject(CartService);
  protected games = inject(GamesService).games;
  protected query = signal('');
  protected minRating = signal(0);
  protected searchClicks = signal(0);

  protected filteredGames = computed(() =>
    this.games.filter(game =>
      game.title.toLowerCase().includes(this.query().toLowerCase()) &&
      game.rating >= this.minRating()
    )
  );

  protected countSearchClick(): void {
    this.searchClicks.update(n => n + 1);
  }

  protected addGame(game: Game): void {
    this.cart.add({ id: game.id, title: game.title, price: game.price });
  }

  // Звичайний масив.
  protected newArrivals: Game[] = [];

  protected addMutable(game: Game): void {
    this.newArrivals.push(game);
  }

  protected addImmutable(game: Game): void {
    this.newArrivals = [...this.newArrivals, game];
  }

  // Той самий експеримент із signal.
  protected signalArrivals = signal<Game[]>([]);

  protected addSignal(game: Game): void {
    this.signalArrivals.update(list => [...list, game]);
  }

  protected mutateSignal(game: Game): void {
    this.signalArrivals.update(list => {
      list.push(game);
      return list;
    });
  }
}
