import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  public pageNum: number = 1;
  constructor(private httpClient: HttpClient) { }

  sumPage(): any {
    this.pageNum + 1;
    this.getCharacters();
  }
  getCharacters(): Observable<any> {
    
    return this.httpClient.get(
      `https://rickandmortyapi.com/api/character`
    );
  }
  getCharacter = (idCharacter: any) => {
    return this.httpClient.get(
      `https://rickandmortyapi.com/api/character/${idCharacter}`
    );
  };

}
