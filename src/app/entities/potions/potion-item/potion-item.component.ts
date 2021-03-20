import { Component, Input, OnInit } from '@angular/core';
import { Potion } from '../potion-model';

@Component({
  selector: 'app-potion-item',
  templateUrl: './potion-item.component.html',
  styleUrls: ['./potion-item.component.css']
})
export class PotionItemComponent implements OnInit {

  @Input() pocionInterior!: Potion;

  constructor() { }

  ngOnInit(): void {
  }

}
