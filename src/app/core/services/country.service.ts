import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountry } from '@core/interface/flag.interface';

@Injectable({
  providedIn: 'root',
})
export default class CountryService {
  constructor(private http: HttpClient) {}

  allCountries: ICountry[] = [];

  private jsonURL = 'assets/countries.json';

  getAllCountries() {
    this.http
      .get<ICountry[]>(this.jsonURL)
      .subscribe((data: ICountry[]) => (this.allCountries = data));
  }

  getMainland(): string[] {
    const result = ['Весь мир'];
    const regionSet = new Set();
    this.allCountries.forEach(({ region }) => regionSet.add(region));
    for (const region of regionSet) {
      result.push(region as string);
    }
    return result;
  }

  getImageUrl(country: ICountry): string {
    return `./assets/flags/${country.cca2.toLocaleLowerCase()}.png`;
  }
}
