import React, { FC } from 'react';
import { IButton } from '../../../app/store/ButtonControlStore';
import { BaseButton } from '../../../shared/ui';

export interface ButtonContainerProps {
  buttons: IButton[];
}

export const ButtonContainer: FC<ButtonContainerProps> = ({ buttons }) => {
  return (
    <>
      {buttons.map(({ callback, text }, index) => (
        <BaseButton key={`${index}.${text}`} callback={callback} text={text} />
      ))}
    </>
  );
};
