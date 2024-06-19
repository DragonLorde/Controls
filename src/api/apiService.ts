import countries from './countries.json';
import type { CountryInfoModel } from '../domain/country';

export function getCountryByName(countryName: string): Promise<CountryInfoModel[]> {
  return new Promise((resolve) => {
    setTimeout(resolve, getRandom(100, 800));
  }).then(() => {
    if (!countryName) {
      return [];
    }

    const searchText = countryName.toLocaleLowerCase();

    return countries.filter(
      (x) =>
        x.name.toLocaleLowerCase().startsWith(searchText) ||
        x.fullName.toLocaleLowerCase().startsWith(searchText),
    );
  });
}

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
