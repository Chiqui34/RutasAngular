import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PotionDetailComponent } from './entities/potions/potion-detail/potion-detail.component';
import { PotionListBDComponent } from './entities/potions/potion-list-bd/potion-list-bd.component';
import { PotionListPostGresqlComponent } from './entities/potions/potion-list-post-gresql/potion-list-post-gresql.component';
import { PotionsListComponent } from './entities/potions/potions-list/potions-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'pociones', component: PotionsListComponent},
  {path: 'pociones/:idpocion', component: PotionDetailComponent},
  {path: 'pocionesH2', component: PotionListBDComponent},
  {path: 'pocionesPostG', component: PotionListPostGresqlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
