import React, { FC, PropsWithChildren } from 'react';
import styles from './styles/BaseContainer.module.scss';
export const BaseContainer: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <main className={styles.BaseContainer} {...props}>
      {children}
    </main>
  );
};
