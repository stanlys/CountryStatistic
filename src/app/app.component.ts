import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry } from './core/interface/flag.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CountryStatistic';
  jsonURL = 'assets/countries.json';
  countryCode: string = '';
  countries: ICountry[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<ICountry[]>(this.jsonURL)
      .subscribe((data: ICountry[]) => (this.countries = data));
  }

  getCountryInformation() {}

  get imgUrl(): string {
    if (this.countryCode.length === 2) {
      const country = this.countries.find(
        (country) =>
          country.cca2.toLocaleLowerCase() ===
          this.countryCode.toLocaleLowerCase()
      );
      console.log(country?.translations.rus.common);
      return `https://flagcdn.com/w320/${this.countryCode}.png`;
    }
    return '';
  }
}
