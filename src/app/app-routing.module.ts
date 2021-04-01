import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PotionDetailComponent } from './entities/potions/potion-detail/potion-detail.component';
import { PotionListH2Component } from './entities/potions/potion-list-h2/potion-list-h2.component';
import { PotionsListComponent } from './entities/potions/potions-list/potions-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'pociones', component: PotionsListComponent},
  {path: 'pociones/:idpocion', component: PotionDetailComponent},
  {path: 'pocionesH2', component: PotionListH2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
