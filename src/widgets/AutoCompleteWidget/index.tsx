import React, { FC } from 'react';
import AutoCompleteControlStore from '../../app/store/AutoCompleteStore';
import { AutoComplete } from '../../entites/AutoCompleteControl';

export interface AutoCompleteWidgetProps {
  maxSuggestions: number;
}

export const AutoCompleteWidget: FC<AutoCompleteWidgetProps> = ({ maxSuggestions }) => {
  const autoCompleteControlStore = new AutoCompleteControlStore(maxSuggestions);

  return <AutoComplete store={autoCompleteControlStore} />;
};
