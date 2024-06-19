import React, { FC, PropsWithChildren } from 'react';
import styles from './styles/ContentContainer.module.scss';

export const ContentContainer: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <article className={styles.BaseContainer} {...props}>
      {children}
    </article>
  );
};
