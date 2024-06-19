import { IBaseSelectItem } from '../../shared/ui/BaseSelect';
import type { CountryInfoModel } from './model/CountryInfoModel';

export const mapData = (suggestions?: CountryInfoModel[]): IBaseSelectItem[] | null => {
  if (!suggestions) return null;
  return suggestions.map((suggestion) => ({
    text: suggestion.name,
    title: suggestion.fullName,
    imgUrl: suggestion.flag,
  }));
};
