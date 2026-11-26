import type { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { SVG_SPRITE_PATH } from './shared/ui/icon/sprite-path';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: SVG_SPRITE_PATH, useValue: '/icons/sprite.svg' }
  ]
};
