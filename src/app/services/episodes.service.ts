import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  constructor(private httpClient: HttpClient) {}

  getEpisodes(): Observable<any> {
    return this.httpClient.get('https://rickandmortyapi.com/api/episode');
  }
}