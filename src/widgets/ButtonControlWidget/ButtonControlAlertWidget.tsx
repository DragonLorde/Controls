import React, { FC } from 'react';
import ButtonControlStore, { buttonPosition } from '../../app/store/ButtonControlStore';
import { ButtonControl } from '../../entites/ButtonControl';

export const ButtonControlAlertWidget: FC = () => {
  const buttonControlStore = new ButtonControlStore();
  //Можно указать в строе метод
  buttonControlStore.addButton(buttonPosition.right, 'View alert', buttonControlStore.showAlert);
  //Можно укать коллбек
  buttonControlStore.addButton(buttonPosition.left, 'Check number', () => {
    const value = buttonControlStore.value;
    if (!isNaN(Number(value)) && value) {
      alert(value);
    } else {
      console.warn('Not a number or empty value');
    }
  });

  return <ButtonControl store={buttonControlStore} />;
};
