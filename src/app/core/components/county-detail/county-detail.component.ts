import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICountry } from '@core/interface/flag.interface';
import CountryService from '@core/services/country.service';

@Component({
  selector: 'app-county-detail',
  templateUrl: './county-detail.component.html',
  styleUrls: ['./county-detail.component.scss'],
})
export class CountyDetailComponent implements OnInit {
  country: ICountry | undefined = undefined;
  countryNeighbors = '';
  countryPhones = '';

  constructor(
    private route: ActivatedRoute,
    public countriesService: CountryService
  ) {}

  ngOnInit(): void {
    const countryName = this.route.snapshot.paramMap.get('id') || '';
    this.country = this.countriesService.allCountries.find(
      (country) => country.name.common === countryName
    );
    if (this.country) {
      this.countryNeighbors =
        this.country.borders
          .reduce(
            (s, border) =>
              s.concat(
                this.countriesService.allCountries.find(
                  (nextCountry) => nextCountry.cca3 === border
                )?.translations.rus.common || '',
                ', '
              ),
            ''
          )
          .slice(0, -2) || '-';
      this.countryPhones = this.country.callingCodes.join(' ,').slice(0, -2);
    }
  }
}
