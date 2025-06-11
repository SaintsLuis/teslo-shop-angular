import { Routes } from '@angular/router';
import { StoreLayoutComponent } from './layouts/store-layout/store-layout.component';

export const storeRoutes: Routes = [
  {
    path: '',
    component: StoreLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component'),
      },
      {
        path: 'gender/:gender',
        loadComponent: () =>
          import('./pages/gender-page/gender-page.component'),
      },
      {
        path: 'product/:idSlug',
        loadComponent: () =>
          import('./pages/product-page/product-page.component'),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/not-found-page/not-found-page.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default storeRoutes;
