import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/assets/model';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private offreService:OffreService) { }
  offres:any[] = [];
  offresAttr:string[][]= [];
  filter:string[] = [];
  ngOnInit(): void {
this.init();
  }

  init(){
    this.offreService.getAllOffres().subscribe(data=>{
      this.offres =data;
      this.offres.forEach(elt =>{
        let temp:string[] = [elt.role,elt.level];
        elt.languages.forEach((lang: string)=>{
          temp.push(lang);
        })
        this.offresAttr.push(temp);
      })
      for(let c =0;c<this.offres.length;c++){
        this.offres[c].attr = this.offresAttr[c];
      }
      console.log(this.offres);
      this.reload();
    })
  }

  addFilter(event:string){
    if(!this.filter.includes(event)) this.filter.push(event);
    console.log(this.filter)
    this.reload();
  }

  reload(){
    this.filter.forEach(elt =>{
      this.offres =  this.offres.filter(elt =>
        this.filter.every(r => elt.attr.includes(r))
      )
    })
    console.log(this.offres)
  }

  removeFilter(attr:string){
    this.filter = this.filter.filter(elt => elt!== attr);
    this.init();

  }

}
