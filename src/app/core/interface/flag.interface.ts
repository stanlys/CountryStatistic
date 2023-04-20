interface ITranslation {
  official: string;
  common: string;
}

interface ITranslations {
  ces: ITranslation;
  cym: ITranslation;
  deu: ITranslation;
  est: ITranslation;
  fin: ITranslation;
  fra: ITranslation;
  hrv: ITranslation;
  hun: ITranslation;
  ita: ITranslation;
  jpn: ITranslation;
  kor: ITranslation;
  nld: ITranslation;
  per: ITranslation;
  pol: ITranslation;
  por: ITranslation;
  rus: ITranslation;
  slk: ITranslation;
  spa: ITranslation;
  swe: ITranslation;
  urd: ITranslation;
  zho: ITranslation;
}

interface ICountryName {
  common: string;
  official: string;
  native: Object;
}

export interface ICountry {
  name: ICountryName;
  tld: Array<string>;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  capital: Array<string>;
  region: string;
  subregion: string;
  languages: Object;
  latlng: Array<number>;
  area?: string;
  landlocked: boolean;
  flag: string;
  borders: Array<string>;
  translations: ITranslations;
  callingCodes: Array<string>;
}

const a = {
  name: {
    common: 'Angola',
    official: 'Republic of Angola',
    native: {
      por: { official: 'República de Angola', common: 'Angola' },
    },
  },
  tld: ['.ao'],
  cca2: 'AO',
  ccn3: '024',
  cca3: 'AGO',
  cioc: 'ANG',
  independent: true,
  status: 'officially-assigned',
  unMember: true,
  currencies: { AOA: { name: 'Angolan kwanza', symbol: 'Kz' } },
  idd: { root: '+2', suffixes: ['44'] },
  capital: ['Luanda'],
  altSpellings: ['AO', 'República de Angola', "ʁɛpublika de an'ɡɔla"],
  region: 'Africa',
  subregion: 'Middle Africa',
  languages: { por: 'Portuguese' },
  translations: {
    ces: { official: 'Angolská republika', common: 'Angola' },
    cym: { official: 'Gweriniaeth Angola', common: 'Angola' },
    deu: { official: 'Republik Angola', common: 'Angola' },
    est: { official: 'Angola Vabariik', common: 'Angola' },
    fin: { official: 'Angolan tasavalta', common: 'Angola' },
    fra: { official: "République d'Angola", common: 'Angola' },
    hrv: { official: 'Republika Angola', common: 'Angola' },
    hun: { official: 'Angola', common: 'Angola' },
    ita: { official: "Repubblica dell'Angola", common: 'Angola' },
    jpn: { official: 'アンゴラ共和国', common: 'アンゴラ' },
    kor: { official: '앙골라 공화국', common: '앙골라' },
    nld: { official: 'Republiek Angola', common: 'Angola' },
    per: { official: 'جمهوری آنگولا', common: 'آنگولا' },
    pol: { official: 'Republika Angoli', common: 'Angola' },
    por: { official: 'República de Angola', common: 'Angola' },
    rus: { official: 'Республика Ангола', common: 'Ангола' },
    slk: { official: 'Angolská republika', common: 'Angola' },
    spa: { official: 'República de Angola', common: 'Angola' },
    swe: { official: 'Republiken Angola', common: 'Angola' },
    urd: { official: 'جمہوریہ انگولہ', common: 'انگولہ' },
    zho: { official: '安哥拉共和国', common: '安哥拉' },
  },
  latlng: [-12.5, 18.5],
  landlocked: false,
  borders: ['COG', 'COD', 'ZMB', 'NAM'],
  area: 1246700,
  flag: '🇦🇴',
  demonyms: {
    eng: { f: 'Angolan', m: 'Angolan' },
    fra: { f: 'Angolaise', m: 'Angolais' },
  },
  callingCodes: ['+244'],
};
