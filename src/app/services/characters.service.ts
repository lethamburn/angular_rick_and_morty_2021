import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  public pageNum: number = 1;
  constructor(private httpClient: HttpClient) { }


  getCharacters(): Observable<any> {

    return this.httpClient.get(
      `https://rickandmortyapi.com/api/character/?page=${this.pageNum}`
    );
  }
  
  getCharacter = (idCharacter: any) => {
    return this.httpClient.get(
      `https://rickandmortyapi.com/api/character/${idCharacter}`
    );
  };

}
