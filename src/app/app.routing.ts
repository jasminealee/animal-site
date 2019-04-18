import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AdminComponent }   from './admin/admin.component';





const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'animals',
    component: AnimalsComponent
  },
  {
    path: 'animals/:id',
    component: AnimalDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/animals',
    component: AnimalsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
