import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PotionsListComponent } from './entities/potions/potions-list/potions-list.component';
import { PotionDetailComponent } from './entities/potions/potion-detail/potion-detail.component';
import { PotionItemComponent } from './entities/potions/potion-item/potion-item.component';
import { PotionListH2Component } from './entities/potions/potion-list-h2/potion-list-h2.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PotionsListComponent,
    PotionDetailComponent,
    PotionItemComponent,
    PotionListH2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
