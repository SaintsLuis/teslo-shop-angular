import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { isAdminGuard } from '@auth/guards/is-admin.guard';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canMatch: [isAdminGuard],
    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products-admin-page/products-admin-page.component'),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./pages/product-admin-page/product-admin-page.component'),
      },
      {
        path: '**',
        redirectTo: 'products',
      },
    ],
  },
];

export default ADMIN_ROUTES;
