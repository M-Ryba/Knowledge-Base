import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', // Home
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'resources', // Resource list
    loadComponent: () =>
      import('./pages/resources/resource-list/resource-list.component').then(
        (m) => m.ResourceListComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'resources/new', // Create a resource
    loadComponent: () =>
      import('./pages/resources/resource-form/resource-form.component').then(
        (m) => m.ResourceFormComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'resources/:id', // Resource details
    loadComponent: () =>
      import('./pages/resources/resource-detail/resource-detail.component').then(
        (m) => m.ResourceDetailComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'resources/:id/edit', // Edit a resource
    loadComponent: () =>
      import('./pages/resources/resource-form/resource-form.component').then(
        (m) => m.ResourceFormComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'login', // Login
    loadComponent: () => import('./pages/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register', // Register
    loadComponent: () =>
      import('./pages/auth/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: '**', // Page Not Found (404)
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
