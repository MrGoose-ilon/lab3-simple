import { Injectable, computed, signal } from '@angular/core';
import type { CartItem } from '../../models/cart-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items = signal<CartItem[]>([]);
  readonly count = computed(() => this.items().length);
  readonly total = computed(() => this.items().reduce((sum, item) => sum + item.price, 0));

  add(item: CartItem): void {
    this.items.update(list => [...list, item]);
  }
}
