import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from '@core/interface/flag.interface';
import { IGameTimer } from '@core/interface/game.interface';
import CountryService from '@core/services/country.service';
import { Store } from '@ngrx/store';
import { changeGame, setUser } from 'src/app/reducers/game.action';

const gameValues: IGameTimer[] = [
  {
    time: 60000,
    value: '1 мин',
  },
  {
    time: 120000,
    value: '2 мин',
  },
  {
    time: 180000,
    value: '3 мин',
  },
  {
    time: 300000,
    value: '5 мин',
  },
  {
    time: 30000,
    value: '30 сек',
  },
];

@Component({
  selector: 'app-check-game',
  templateUrl: './check-game.component.html',
  styleUrls: ['./check-game.component.scss'],
})
export class CheckGameComponent implements OnInit {
  allCountries: ICountry[] = [];

  mainland: string[] = [];

  region = '';

  userName = '';

  gameTimes = gameValues;

  currentGameTime = 0;

  constructor(
    private route: Router,
    public countiesServices: CountryService,
    private store: Store
  ) {
    this.countiesServices.getAllCountries();
    this.allCountries = this.countiesServices.allCountries;
    this.mainland = this.countiesServices.getMainland();
  }

  ngOnInit(): void {}

  currentGame() {
    if (this.region === '' || this.userName === '') return;
    this.store.dispatch(setUser({ user: this.userName }));
    this.store.dispatch(
      changeGame({
        region: this.region,
        countries: this.countiesServices.allCountries,
      })
    );
    this.route.navigate([
      'game',
      { userName: this.userName, timer: this.currentGameTime },
    ]);
  }

  enabledButton(): boolean {
    console.log(this.userName.length <= 3);
    return this.userName.length <= 3;
  }
}
