import { IPromiseBasedObservable } from 'mobx-utils';
import { mapData } from './mapData';
import type { CountryInfoModel } from './model/CountryInfoModel';

export const CountryQueueRepository = (
  maxSuggestions: number,
  data?: IPromiseBasedObservable<CountryInfoModel[]>,
) => {
  //TODO Refactor разделить логику репозитория
  const country = (data?.value as CountryInfoModel[])?.slice(0, maxSuggestions);
  const uniqueCountry = country?.filter(
    (obj, index, self) =>
      index === self.findIndex((o) => o.name === obj.name && o.fullName === o.fullName),
  );
  //TODO Refactor сделать класс NetworkStatus для получения статусов;
  const isLoading = data?.state === 'pending';
  const isError = data?.state === 'rejected';
  return {
    data: mapData(uniqueCountry),
    isLoading,
    isError,
  };
};
