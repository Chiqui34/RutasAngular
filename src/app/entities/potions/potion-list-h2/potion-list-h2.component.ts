import { Component, OnInit } from '@angular/core';
import { Potion } from '../potion-model';
import { PotionService } from '../potion.service';

@Component({
  selector: 'app-potion-list-h2',
  templateUrl: './potion-list-h2.component.html',
  styleUrls: ['./potion-list-h2.component.css']
})
export class PotionListH2Component implements OnInit {
  pociones: Potion[] = [];

  constructor(private pocionService: PotionService) { }

  ngOnInit(): void {
    this.pocionService.obtenerPociones().subscribe(pociones => this.pociones = pociones);    
  }

}
