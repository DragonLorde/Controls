import { FC } from 'react';
import { BaseButton } from '../../../shared/ui/Button';
import { IButton } from '../../../app/store/ButtonControlStore';

export interface ButtonContainerProps {
  buttons: IButton[];
}

export const ButtonContainer:FC<ButtonContainerProps> = ({ buttons }) => {
  return (
          <>
            {
              buttons.map(({ callback, text }, index) => <BaseButton key={`${index}.${text}`} callback={callback} text={text} />)
            }
          </>
  )
}
