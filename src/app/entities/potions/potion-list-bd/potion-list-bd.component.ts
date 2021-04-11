import { Component, OnInit } from '@angular/core';
import { Potion } from '../potion-model';
import { PotionService } from '../potion.service';

@Component({
  selector: 'app-potion-list-bd',
  templateUrl: './potion-list-bd.component.html',
  styleUrls: ['./potion-list-bd.component.css']
})
export class PotionListBDComponent implements OnInit {
  pociones: Potion[] = [];

  constructor(private pocionService: PotionService) { }

  ngOnInit(): void {
    this.pocionService.obtenerPociones().subscribe(pocionesAsincronas => this.pociones = pocionesAsincronas);    
  }

}
