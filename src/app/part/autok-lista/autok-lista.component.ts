import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-autok-lista',
  templateUrl: './autok-lista.component.html',
  styleUrls: ['./autok-lista.component.css']
})
export class AutokListaComponent implements OnInit {
  valtozo:String="körte";
  oszlopok=["id","marka","rendszam","tipus"];
  autok:any;
  constructor(private base:BaseService) {    
    this.base.getAll().subscribe(
      (eredmeny)=>this.autok=eredmeny
    )
  }

  ngOnInit(): void {
    this.valtozo="CicaMica";
  }

}
