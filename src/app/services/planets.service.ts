import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private httpClient: HttpClient) {}

  getPlanets(): Observable<any> {
    return this.httpClient.get('https://rickandmortyapi.com/api/location');
  }
}
