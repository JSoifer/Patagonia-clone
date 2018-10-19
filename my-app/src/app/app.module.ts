import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { HeaderComponent } from './header/header.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { FooterComponent } from './footer/footer.component';
import { LowerHeroGridComponent } from './lower-hero-grid/lower-hero-grid.component';
import { HeroComponent } from './hero/hero.component';
import { EventsComponent } from './events/events.component';
import { FeaturedStoryComponent } from './featured-story/featured-story.component';
import { InstagramComponent } from './instagram/instagram.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    HeaderComponent,
    HeaderBottomComponent,
    FooterComponent,
    LowerHeroGridComponent,
    HeroComponent,
    EventsComponent,
    FeaturedStoryComponent,
    InstagramComponent


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
