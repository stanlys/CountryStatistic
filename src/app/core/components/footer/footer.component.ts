import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interface/flag.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  countryCode: string = '';
  countries: ICountry[] = [];

  constructor(private http: HttpClient) {}

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
