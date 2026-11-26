import type { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'catalog' },
  { path: 'catalog', loadComponent: () =>
      import('./features/catalog/catalog-page/catalog-page').then(m => m.CatalogPage) },
  { path: '**', redirectTo: 'catalog' }
];
