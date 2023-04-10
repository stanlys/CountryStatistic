import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { countriesSelector } from 'src/app/reducers/game.action';

@Component({
  selector: 'app-flag-games',
  templateUrl: './flag-games.component.html',
  styleUrls: ['./flag-games.component.scss'],
})
export class FlagGamesComponent {
  constructor(public store: Store) {}

  country$ = this.store.select(countriesSelector);
}
