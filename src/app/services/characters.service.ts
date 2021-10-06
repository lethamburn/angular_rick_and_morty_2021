import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private httpClient: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.httpClient.get('https://rickandmortyapi.com/api/character');
  }
}
