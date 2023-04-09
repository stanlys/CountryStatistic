import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from '@core/interface/flag.interface';
import CountryService from '@core/services/country.service';
import { Store } from '@ngrx/store';
import { setUser } from 'src/app/reducers/game.action';

@Component({
  selector: 'app-check-game',
  templateUrl: './check-game.component.html',
  styleUrls: ['./check-game.component.scss'],
})
export class CheckGameComponent implements OnInit {
  allCountries: ICountry[] = [];

  region = '';

  userName = '';

  constructor(
    private route: Router,
    public countiesServices: CountryService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.countiesServices.getAllCountries();
    this.allCountries = this.countiesServices.allCountries;
  }

  currentGame() {
    this.store.dispatch(setUser({ user: this.userName }));
    console.log(this.region);
  }
}
