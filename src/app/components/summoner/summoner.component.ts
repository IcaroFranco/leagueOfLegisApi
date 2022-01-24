import { Component, Input, OnInit } from '@angular/core';
import { SummonerDTO } from 'src/app/api/dtos/Summoner.dto';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss']
})
export class SummonerComponent implements OnInit {

  @Input() summonerContent!: SummonerDTO;

  constructor() { }
  ngOnInit(): void {
  }

}
