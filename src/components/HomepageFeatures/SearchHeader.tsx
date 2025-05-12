import React, { FC } from 'react';
import styles from './styles.module.css';

const SearchBar: FC = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="חפש תיעודים"
        className={styles.searchInput}
        aria-label="חיפוש"
      />
    </div>
  );
};

export default SearchBar;