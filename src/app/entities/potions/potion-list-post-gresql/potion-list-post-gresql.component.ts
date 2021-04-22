import { Component, OnInit } from '@angular/core';
import { Potion } from '../potion-model';
import { PotionService } from '../potion.service';

@Component({
  selector: 'app-potion-list-post-gresql',
  templateUrl: './potion-list-post-gresql.component.html',
  styleUrls: ['./potion-list-post-gresql.component.css']
})
export class PotionListPostGresqlComponent implements OnInit {

  pociones: Potion[] = [];
  pocionesMana: Potion[] = [];
  pocionesEnergia: Potion[] = [];
  pocionesVida: Potion[] = [];

  constructor(
    private pocionService: PotionService
  ) { }

  ngOnInit(): void {
    

    this.pocionService.obtenerPociones().subscribe(

      result => {
        this.pociones = result; 
        this.pocionesMana = this.pociones.filter(pocion => pocion.tipo.toString() === 'MANA');
        this.pocionesEnergia = this.pociones.filter(pocion => pocion.tipo.toString() === 'ENERGIA');
        this.pocionesVida = this.pociones.filter(pocion => pocion.tipo.toString() === 'VIDA');
      }

    );
       
    //this.pocionService.obtenerPociones().subscribe(pocionesAsincronas => this.pociones = pocionesAsincronas);

    

  }

}
