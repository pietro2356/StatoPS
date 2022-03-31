import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProntoSoccorso, Reparto, Risposta } from 'src/models/statops';
import { ApssService } from 'src/services/apss.service';

@Component({
  selector: 'app-prontosoccorso',
  templateUrl: './prontosoccorso.component.html',
  styleUrls: ['./prontosoccorso.component.css']
})
export class ProntosoccorsoComponent implements OnInit{

  $data?: Reparto[] = [];
  load: boolean = false;


  constructor(private apss: ApssService) { }


  ngOnInit(): void {
    this.apss.getStatoPS().forEach(item => {
      item.forEach((res:any) => {
        this.$data?.push(res.risposta.pronto_soccorso.reparto)
      })
      // data.forEach((item: any) => {
      //   // console.log(item);
      //   this.$data?.push(item.risposta.pronto_soccorso.reparto)
      // })
    })
    console.log(this.$data);
    
  }

}
