import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
