import { Component, OnInit } from '@angular/core';
import { LolService } from 'src/app/services/lol.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor( private lolService:LolService) { }

  ngOnInit(): void {

  }

  summonerName!: string;
  summonerContent!: any;

  getChampion(championName:string){
    this.lolService.getChampion(championName).subscribe({
      next: (result)=>{ console.log(result)},
      error: (error)=>{ console.log(error)}
    })
  }
  getChampMastery(summonerId : string){
    this.lolService.getChampMastery(summonerId).subscribe({
      next: (result)=>{ console.log(result)},
      error: (error)=>{ console.log(error)}
    })
  }
}
