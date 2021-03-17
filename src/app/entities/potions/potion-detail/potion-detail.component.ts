import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-potion-detail',
  templateUrl: './potion-detail.component.html',
  styleUrls: ['./potion-detail.component.css']
})
export class PotionDetailComponent implements OnInit {

  public idPocion: any;
  constructor(private route: ActivatedRoute) {
    if(this.route.snapshot.paramMap.get('idpocion')){
      this.idPocion = this.route.snapshot.paramMap.get('idpocion');
    }
   }

  ngOnInit(): void {
  }

}
