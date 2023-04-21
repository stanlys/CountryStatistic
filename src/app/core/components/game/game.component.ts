import { Component } from '@angular/core';
import { IAnswer } from '@core/interface/answer.interface';
import { ICountry } from '@core/interface/flag.interface';
import CountryService from '@core/services/country.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  allCountry: ICountry[];
  plus: number;
  minus: number;

  currentImg = '';
  countries: Array<string> = [];

  rigthAnswer = '';
  answer = '';
  answerList: Array<IAnswer> = [];

  isShowResult = false;

  constructor(public countryService: CountryService) {
    this.allCountry = this.countryService.allCountries;
    this.plus = 0;
    this.minus = 0;
    this.getNextRandomCountry();
  }

  shuffle(array: Array<string>): Array<string> {
    const _array = JSON.parse(JSON.stringify(array));
    for (let i = _array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [_array[i], _array[j]] = [_array[j], _array[i]];
    }
    return _array;
  }

  getNextRandomCountry() {
    const index = Math.trunc(this.allCountry.length * Math.random());
    this.rigthAnswer = this.allCountry[index].translations.rus.common;
    const country = this.allCountry[index];
    this.currentImg = this.countryService.getImageUrl(country);
    const randomValues = [1, 2, 3, 4].map((el) =>
      Math.trunc(this.allCountry.length * Math.random())
    );
    const _countries = randomValues.map(
      (index) => this.allCountry[index].translations.rus.common
    );
    _countries.push(this.rigthAnswer);
    this.countries = this.shuffle(_countries);
  }

  iThink() {
    const isTrue = this.answer === this.rigthAnswer;
    isTrue ? this.plus++ : this.minus++;
    this.answerList.push({ answer: this.answer, isTrue });
    this.getNextRandomCountry();
  }

  finishGame() {
    this.isShowResult = true;
  }
}
