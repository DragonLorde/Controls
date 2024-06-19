import React, { FC } from 'react';
import { IBaseSelectItem } from '../index';
import { Loader } from '../../Loader';
import styles from '../styles/BaseSelect.module.scss';
export interface ItemOptionsResolverProps {
  options: IBaseSelectItem[] | null;
  isLoading: boolean;
  isError: boolean;
  onClickOption?: (value?: string) => void;
}

export const ItemOptionsResolver: FC<ItemOptionsResolverProps> = ({ options, isError, isLoading, onClickOption }) => {
  return (
    <>
      {options?.map((item, index) => {
        return (
          <div
            key={item.title + index}
            onClick={() => {
              onClickOption?.(item.title);
            }}
            className={styles.BaseSelect__container__item}
          >
            <p>{item?.text}</p>
            <p>{item?.title}</p>
            {item?.imgUrl && <img src={item?.imgUrl} alt={item?.text} />}
          </div>
        );
      })}
      {isLoading && <Loader />}
      {isError && <p>Error</p>}
    </>
  );
};
