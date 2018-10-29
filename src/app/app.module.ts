import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LowerHeroGridComponent } from './lower-hero-grid/lower-hero-grid.component';
import { ShopComponent } from './shop/shop.component';
import { routing } from './app.routing';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { MensComponent } from './shop/mens/mens.component';
// import { InfoTile } from '././models/info-tile.model';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LowerHeroGridComponent,
    ShopComponent,
    SplashComponent,
    AboutComponent,
    MensComponent,
  ],
  imports: [
    BrowserModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
