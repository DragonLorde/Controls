import React, { ChangeEvent, FC } from 'react';
import { BaseInput, ContentContainer } from '../../../shared/ui';
import { ButtonContainer } from '../../../widgets/ButtonControlWidget/components/ButtonContainer';
import ButtonControlStore from '../../../app/store/ButtonControlStore';
import { observer } from 'mobx-react-lite';
import styles from './styles/ButtonControl.module.scss';
export interface ButtonControlProps {
  store: ButtonControlStore;
}

export const ButtonControl: FC<ButtonControlProps> = observer(({ store }) => {
  const { buttonsRight, buttonsLeft, value, setText } = store;
  return (
    <div className={styles.ButtonControl}>
      <ButtonContainer buttons={buttonsLeft} />
      <BaseInput value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
      <ButtonContainer buttons={buttonsRight} />
    </div>
  );
});
