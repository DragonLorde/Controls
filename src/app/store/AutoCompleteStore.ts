import { makeAutoObservable } from 'mobx';
import { getCountryByName } from '../../api/apiService';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';
import type { CountryInfoModel } from '../../domain/country';

class AutoCompleteControlStore {
  text = '';
  suggestions?: IPromiseBasedObservable<CountryInfoModel[]>;
  maxSuggestions: number;

  constructor(maxSuggestions: number) {
    makeAutoObservable(this);
    this.maxSuggestions = maxSuggestions;
  }

  setText = (text: string) => {
    this.text = text;
    this.fetchSuggestions();
  };

  fetchSuggestions = () => {
    if (this.text.length > 0) {
      try {
        this.suggestions = fromPromise(getCountryByName(this.text));
      } catch (e) {
        console.warn(e);
      }
    }
  };
  selectSuggestion = (value?: string) => {
    this.text = value || '';
    this.suggestions = undefined;
  };
}

export default AutoCompleteControlStore;
