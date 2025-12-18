"use client";

import { useState } from "react";
import styles from "./ProductListingHeader.module.css";
import ChevronDownIcon from "./icons/ChevronDownIcon";

export default function ProductListingHeader({
  itemCount,
  onToggleFilter,
  filterVisible,
}) {
  const [sortBy, setSortBy] = useState("RECOMMENDED");
  const [showSortMenu, setShowSortMenu] = useState(false);

  const sortOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <span className={styles.itemCount}>{itemCount} ITEMS</span>

        <button
          className={styles.filterToggle}
          onClick={onToggleFilter}
          aria-label={filterVisible ? "Hide filters" : "Show filters"}
        >
          <ChevronDownIcon
            className={`${styles.filterChevron} ${
              filterVisible ? "" : styles.filterChevronHidden
            }`}
          />
          <span className={styles.filterToggleText}>
            {filterVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </span>
        </button>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.sortContainer}>
          <button
            className={styles.sortButton}
            onClick={() => setShowSortMenu(!showSortMenu)}
            aria-expanded={showSortMenu}
            aria-haspopup="true"
          >
            <span className={styles.sortLabel}>{sortBy}</span>
            <ChevronDownIcon
              className={`${styles.sortChevron} ${
                showSortMenu ? styles.sortChevronExpanded : ""
              }`}
            />
          </button>

          {showSortMenu && (
            <div className={styles.sortMenu}>
              {sortOptions.map((option) => (
                <button
                  key={option}
                  className={`${styles.sortOption} ${
                    sortBy === option ? styles.sortOptionActive : ""
                  }`}
                  onClick={() => {
                    setSortBy(option);
                    setShowSortMenu(false);
                  }}
                >
                  {option}
                  {sortBy === option && (
                    <span className={styles.checkmark}>✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
