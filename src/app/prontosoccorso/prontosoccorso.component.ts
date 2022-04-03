import { Component, OnInit } from '@angular/core';
import { Reparto } from 'src/models/statops';
import { ApssService } from 'src/services/apss.service';

@Component({
  selector: 'app-prontosoccorso',
  templateUrl: './prontosoccorso.component.html',
  styleUrls: ['./prontosoccorso.component.css']
})
export class ProntosoccorsoComponent implements OnInit{

  $data?: Reparto[] = [];
  load: boolean = false;
  timeStamp: string = "";


  constructor(private apss: ApssService) { }


  ngOnInit(): void {
    this.apss.getStatoPS().forEach(item => {
      this.timeStamp = item[0].risposta.timestamp;
      
      item.forEach((res:any) => {
        this.$data?.push(res.risposta.pronto_soccorso.reparto)
      })
    })
  }

}
