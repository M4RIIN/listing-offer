import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Offre } from 'src/assets/model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() offre:Offre | undefined;
  @Output() filter = new EventEmitter<string>();
  url:string = "";
  constructor() { }
  attributs:string[] = []

  ngOnInit(): void {
    this.url = 'assets' + this.offre?.logo;
    if(this.offre){
      this.attributs.push(this.offre?.role);
      this.attributs.push(this.offre?.level);
      this.offre.languages.forEach(lang =>{
        this.attributs.push(lang)
      })
    }
    console.log(this.url);
  }

  addFilter(filterValue:string){
    this.filter.emit(filterValue);
  }

}
