import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from '@core/interface/flag.interface';
import CountryService from '@core/services/country.service';

@Component({
  selector: 'app-check-game',
  templateUrl: './check-game.component.html',
  styleUrls: ['./check-game.component.scss'],
})
export class CheckGameComponent implements OnInit {
  allCountries: ICountry[] = [];

  region = '';

  constructor(private route: Router, public countiesServices: CountryService) {}

  ngOnInit(): void {
    this.countiesServices.getAllCountries();
    this.allCountries = this.countiesServices.allCountries;
  }

  currentGame() {
    console.log(this.region);
  }
}
