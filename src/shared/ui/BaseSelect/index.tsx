import React, { ChangeEvent, FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { BaseInput } from '../BaseInput';
import styles from './styles/BaseSelect.module.scss';
import { ItemOptionsResolver } from './components/ItemOptionsResolver';
export interface IBaseSelectItem {
  text: string;
  title: string;
  imgUrl?: string;
}

export interface BaseSelectProps {
  options: IBaseSelectItem[] | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isLoading: boolean;
  isError: boolean;
  onClickOption: () => void;
}

export const BaseSelect: FC<BaseSelectProps> = (props) => {
  const { options, value, onChange, isLoading, isError, onClickOption } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.BaseSelect} ref={rootRef} onClick={handleClick}>
      <BaseInput onChange={onChange} value={value} />
      {isOpen && (
        <div className={styles.BaseSelect__container}>
          <ItemOptionsResolver
            options={options}
            isLoading={isLoading}
            isError={isError}
            onClickOption={onClickOption}
          />
        </div>
      )}
    </div>
  );
};
