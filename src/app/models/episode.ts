interface EpisodeInterface {
  id: number;
  name: string;
  air_date: string;
}

export class Episode implements EpisodeInterface {
  id: number;
  name: string;
  air_date: string;

  constructor(id: number, name: string, air_date: string) {
    this.id = id;
    this.name = name;
    this.air_date = air_date;
  }
}
