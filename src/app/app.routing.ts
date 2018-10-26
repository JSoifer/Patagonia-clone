import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { ShopComponent } from './shop/shop.component';


const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
