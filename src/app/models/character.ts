interface CharacterInterface {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
  origin: string[];
  location: string[];
  image: string;
  url: string;
}

export class Character implements CharacterInterface {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
  origin: string[];
  location: string[];
  image: string;
  url: string;

  constructor(
    id: number,
    name: string,
    species: string,
    type: string,
    gender: string,
    origin: string[],
    location: string[],
    image: string,
    url: string
  ) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.type = type;
    this.gender = gender;
    this.origin = origin;
    this.location = location;
    this.image = image;
    this.url = url;
  }
}
