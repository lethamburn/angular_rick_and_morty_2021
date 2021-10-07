import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  public episodesList: Episode[] = [];

  constructor(private episodesService: EpisodesService) {}

  ngOnInit(): void {
    this.episodesService.getEpisodes().subscribe((apiEpisodes) => {
      this.episodesList = apiEpisodes.results;
      console.log('API EPISODES:', this.episodesList);
    });
  }
}
