import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChampionDTO } from 'src/app/api/dtos/champion.dto';
import { SummonerDTO } from 'src/app/api/dtos/Summoner.dto';
import { LolService } from 'src/app/services/lol.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss'],
})
export class ConteudoComponent implements OnInit {
  constructor(private lolservice: LolService) {}
  summonerContent!: SummonerDTO;
  championsMastery: ChampionDTO[] = [];
  ngOnInit(): void {}

  getNickName(nickName: string) {
    this.lolservice.getSummoner(nickName).subscribe({
      next: (result) => {
          (this.summonerContent = result),
          this.lolservice.getChampMastery(this.summonerContent.id).subscribe({
            next: (result) => {
              this.championsMastery = result;
            },
            error: (error) => {
              console.log(error);
            },
          });
      },
      error: (error) => {
        console.log(error),
        alert('Nome de Invocador não existe');
      },
    });
  }
}
