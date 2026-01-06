import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'resources', pathMatch: 'full' },
  {
    path: 'resources', // Resource list
    loadComponent: () => import('./features/resources/components/resource-list/resource-list.component').then((m) => m.ResourceListComponent)
  },
  {
    path: 'resources/new', // Create a resource
    loadComponent: () => import('./features/resources/components/resource-form/resource-form.component').then((m) => m.ResourceFormComponent)
  },
  {
    path: 'resources/:id', // Resource details
    loadComponent: () => import('./features/resources/components/resource-detail/resource-detail.component').then((m) => m.ResourceDetailComponent)
  },
  {
    path: 'resources/:id/edit', // Edit a resource
    loadComponent: () => import('./features/resources/components/resource-form/resource-form.component').then((m) => m.ResourceFormComponent)
  },
  {
    path: '**', // Page Not Found (404)
    loadComponent: () => import('./shared/components/not-found/not-found.component').then((m) => m.NotFoundComponent)
  }
];