import AutoCompleteControlStore from '../../app/store/AutoCompleteStore';
import React, { ChangeEvent, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { BaseSelect } from '../../shared/ui';
import { useThrottle } from '../../domain/common';
import { CountryQueueRepository } from '../../domain/country';

export interface AutoCompleteProps {
  store: AutoCompleteControlStore;
}

export const AutoComplete: FC<AutoCompleteProps> = observer(({ store }) => {
  // TODO Refactor: рефакторинг работы со стором
  const { suggestions, setText, text, maxSuggestions, selectSuggestion, fetchSuggestions } = store;
  const { data, isLoading, isError } = CountryQueueRepository(maxSuggestions, suggestions);
  // TODO Refactor: добавить кеширование, переделать дебаунс;
  const debouncedFetch = useThrottle((e: ChangeEvent<HTMLInputElement>) => {
    fetchSuggestions();
  }, 300);
  return (
    <BaseSelect
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        debouncedFetch();
      }}
      onClickOption={selectSuggestion}
      isError={isError}
      value={text}
      options={data}
      isLoading={isLoading}
    />
  );
});
