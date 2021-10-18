import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }

  getCharacters(page: number = 1): Observable<any> {
    return this.httpClient.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
  }

  getCharacter = (idCharacter: any) => {
    return this.httpClient.get(
      `https://rickandmortyapi.com/api/character/${idCharacter}`
    );
  };

  nextPage = (page: number = 2) => {
    return this.httpClient.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  }
}
