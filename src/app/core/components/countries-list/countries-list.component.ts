import { Component, OnInit } from '@angular/core';
import { ICountry } from '@core/interface/flag.interface';
import CountryService from '@core/services/country.service';
import { Store } from '@ngrx/store';
import { changeGame, countriesSelector } from 'src/app/reducers/game.action';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  region = '';

  allCountries: ICountry[] = [];

  country$ = this.store.select(countriesSelector);

  constructor(public countiesServices: CountryService, private store: Store) {}

  ngOnInit(): void {
    this.countiesServices.getAllCountries();
    this.allCountries = this.countiesServices.allCountries;
  }

  updateFlagList() {
    console.log(this.region);
    this.store.dispatch(
      changeGame({
        countries: this.countiesServices.allCountries,
        region: this.region,
      })
    );
  }
}
