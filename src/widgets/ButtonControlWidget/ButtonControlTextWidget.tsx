import React, { FC } from 'react';
import ButtonControlStore, { buttonPosition } from '../../app/store/ButtonControlStore';
import { ButtonControl } from '../../entites/ButtonControl';

export const ButtonControlTextWidget: FC = () => {
  function setText(this: any, text: string) {
    this.value = text;
  }
  const buttonControlStore = new ButtonControlStore();
  //Можно указать в строе метод
  buttonControlStore.addButton(buttonPosition.right, 'Clear', buttonControlStore.clearText);
  //Можно сделать фитчу и забиндить на контекст store, просто пример )
  buttonControlStore.addButton(buttonPosition.right, 'Change text', setText.bind(buttonControlStore, 'hello world'));

  return <ButtonControl store={buttonControlStore} />;
};
