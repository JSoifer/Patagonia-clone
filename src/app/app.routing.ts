import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { LowerHeroGridComponent } from './lower-hero-grid/lower-hero-grid.component';
import { MensComponent } from './shop/mens/mens.component';

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
  },
  {
    path: 'mens',
    component: MensComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
