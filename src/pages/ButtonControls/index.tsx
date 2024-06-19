import React, { FC } from 'react';
import { BaseContainer } from '../../shared/ui';
import { AutoCompleteWidget } from '../../widgets/AutoCompleteWidget';
import { ButtonControlAlertWidget, ButtonControlTextWidget } from '../../widgets/ButtonControlWidget';

export const ButtonControls: FC = () => {
  return (
    <BaseContainer>
      <header>Authored by Daniil Anokhin</header>
      <p> Button Control </p>
      <ButtonControlTextWidget />
      <ButtonControlAlertWidget />
      <p> Autocomplete Control </p>
      <span>Max - 3</span>
      <AutoCompleteWidget maxSuggestions={3} />
      <span>Max - 10</span>
      <AutoCompleteWidget maxSuggestions={10} />
    </BaseContainer>
  );
};
