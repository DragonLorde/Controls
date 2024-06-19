import React, { FC } from 'react';
export type ButtonTextType = string | number;
import styles from './styles/BaseButton.module.scss';

export interface ButtonProps {
  callback: () => void;
  text: ButtonTextType;
}

export const BaseButton: FC<ButtonProps> = ({ text, callback, ...props }) => {
  return (
    <button className={styles.BaseButton} onClick={callback} {...props}>
      {text}
    </button>
  );
};
