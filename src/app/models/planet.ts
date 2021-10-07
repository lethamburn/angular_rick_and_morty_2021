interface PlanetInterface {
    id: number;
    name: string;
    type: string;
    dimension:string;
    residents: {
      url: string;
    };
  }
  
  export class Planet implements PlanetInterface {
    id: number;
    name: string;
    type: string;
    dimension:string;
    residents: {
      url: string;
    };
  
    constructor(
      id: number,
      name: string,
      type: string,
      dimension: string,
      residents: {
        url: string;
      }) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.dimension = dimension;
      this.residents = residents;
    }
  }
  