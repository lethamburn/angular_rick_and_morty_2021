import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  public charactersList: Character[] = [];
  @Input() pageNum: any;
  
  constructor(private charactersService: CharactersService) {}
  
  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((apiCharacters) => {
      this.charactersList = apiCharacters.results;
      console.log('API CHARACTERS:', this.charactersList);
    });
  }
}
