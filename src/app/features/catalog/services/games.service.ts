import { Injectable } from '@angular/core';
import type { Game } from '../../../models/game.model';

@Injectable({ providedIn: 'root' })
export class GamesService {
  readonly games: Game[] = [
    { id: 1, title: 'Каркасон', cover: '/covers/game-1.svg', price: 850, players: '2-5', complexity: 2, inStock: true, rating: 4 },
    { id: 2, title: 'Катан', cover: '/covers/game-2.svg', price: 1450, players: '3-4', complexity: 3, inStock: true, rating: 5 },
    { id: 3, title: 'Діксіт', cover: '/covers/game-3.svg', price: 1190, players: '3-6', complexity: 1, inStock: true, rating: 4 },
    { id: 4, title: 'Азул', cover: '/covers/game-4.svg', price: 1290, players: '2-4', complexity: 2, inStock: true, rating: 5 },
    { id: 5, title: 'Шахи', cover: '/covers/game-5.svg', price: 620, players: '2', complexity: 5, inStock: false, rating: 4 },
    { id: 6, title: 'Кодові імена', cover: '/covers/game-6.svg', price: 790, players: '2-8', complexity: 2, inStock: true, rating: 4 },
    { id: 7, title: 'Пандемія', cover: '/covers/game-7.svg', price: 1390, players: '2-4', complexity: 4, inStock: false, rating: 5 },
    { id: 8, title: 'Квиток на потяг', cover: '/covers/game-8.svg', price: 1550, players: '2-5', complexity: 3, inStock: true, rating: 3 }
  ];
}
