import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChampionDTO } from '../api/dtos/champion.dto';
import { SummonerDTO } from '../api/dtos/Summoner.dto';

@Injectable({
  providedIn: 'root',
})
export class LolService {
  constructor(private http: HttpClient) {}

  getSummoner(summonerName: string): Observable<SummonerDTO> {
    return this.http.get<SummonerDTO>(
      `${environment.url}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${environment.key}`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
          'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
          'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Origin': 'https://developer.riotgames.com',
        },
      }
    );
  }
  getChampion(championName: string): Observable<any> {
    return this.http.get<any>(`${environment.champion}/${championName}.json`);
  }

  getChampMastery(accountId: string): Observable<ChampionDTO[]> {
    return this.http.get<ChampionDTO[]>(
      `${environment.url}/lol/champion-mastery/v4/champion-masteries/by-summoner/${accountId}?api_key=${environment.key}`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
          'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
          'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Origin': 'https://developer.riotgames.com',
        },
      }
    );
  }
}
