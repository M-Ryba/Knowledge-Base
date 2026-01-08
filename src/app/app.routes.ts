import { Routes } from '@angular/router';

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
  },
  {
    path: 'resources/new', // Create a resource
    loadComponent: () =>
      import('./pages/resources/resource-form/resource-form.component').then(
        (m) => m.ResourceFormComponent,
      ),
  },
  {
    path: 'resources/:id', // Resource details
    loadComponent: () =>
      import('./pages/resources/resource-detail/resource-detail.component').then(
        (m) => m.ResourceDetailComponent,
      ),
  },
  {
    path: 'resources/:id/edit', // Edit a resource
    loadComponent: () =>
      import('./pages/resources/resource-form/resource-form.component').then(
        (m) => m.ResourceFormComponent,
      ),
  },
  {
    path: 'resources/login', // Login
    loadComponent: () => import('./pages/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'resources/register', // Register
    loadComponent: () =>
      import('./pages/auth/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: '**', // Page Not Found (404)
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
