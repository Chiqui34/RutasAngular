import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PotionsListComponent } from './entities/potions/potions-list/potions-list.component';
import { PotionDetailComponent } from './entities/potions/potion-detail/potion-detail.component';
import { PotionItemComponent } from './entities/potions/potion-item/potion-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PotionsListComponent,
    PotionDetailComponent,
    PotionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
