import React, { ChangeEvent, FC } from 'react';
import styles from './styles/BaseInput.module.scss';
export interface BaseInputProps {
  value?: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const BaseInput: FC<BaseInputProps> = ({ value, onChange, ...props }) => {
  return <input value={value} onChange={onChange} className={styles.BaseInput} {...props} />;
};
