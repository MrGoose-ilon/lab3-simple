import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  selector: 'app-header',
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  protected readonly cart = inject(CartService);
}
