import { CharactersService } from 'src/app/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: any;
  constructor(private route: ActivatedRoute,
    private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCharacter = params.get('idCharacter');
      console.log("ID CHARACTER", idCharacter);
      
      this.charactersService
        .getCharacter(idCharacter)
        .subscribe((characterData) => {
          console.log(characterData);
          this.character = characterData;
        });
    });
  }

}
