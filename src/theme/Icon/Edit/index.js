import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
export default function IconEdit({className, ...restProps}) {
  return (
    <svg
      fill="currentColor"
      height="20"
      width="20"
      viewBox="0 0 24 24"
      className={clsx(styles.iconEdit, className)}
      aria-hidden="true"
      {...restProps}>
      <g>
        <path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" />
      </g>
    </svg>
  );
}
