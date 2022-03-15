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
  offres:Offre[] = [];
  ngOnInit(): void {
    this.offreService.getAllOffres().subscribe(data=>{
      this.offres =data;
    })
  }

}
