import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PotionsListComponent } from './entities/potions/potions-list/potions-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'pociones', component: PotionsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
