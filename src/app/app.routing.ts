import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component'

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
