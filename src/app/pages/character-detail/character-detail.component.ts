import { CharactersService } from 'src/app/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: any;
  constructor(private route: ActivatedRoute,
    public charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCharacter = params.get('idCharacter');

      this.charactersService
        .getCharacter(idCharacter)
        .subscribe((characterData) => {
          this.character = characterData;
        });
    });
  }

}
