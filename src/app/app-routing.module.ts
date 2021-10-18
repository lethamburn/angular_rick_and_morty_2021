import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ``,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: `characters`,
    loadChildren: () =>
      import('./pages/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: `characters/:idCharacter`,
    loadChildren: () =>
      import('./pages/character-detail/character-detail.module').then(
        (m) => m.CharacterDetailModule
      ),
  },
  {
    path: `episodes`,
    loadChildren: () =>
      import('./pages/episodes/episodes.module').then((m) => m.EpisodesModule),
  },
  {
    path: `about`,
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: `planets`,
    loadChildren: () =>
      import('./pages/planets/planets.module').then((m) => m.PlanetsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
