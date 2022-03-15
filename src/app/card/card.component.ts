import { Component, Input, OnInit } from '@angular/core';
import { Offre } from 'src/assets/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() offre:Offre | undefined;
  url:string = "";
  constructor() { }

  ngOnInit(): void {
    this.url = 'assets' + this.offre?.logo;
    console.log(this.url);
  }

}
