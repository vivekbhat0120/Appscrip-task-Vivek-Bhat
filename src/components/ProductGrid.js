"use client";

import { useState } from "react";
import styles from "./ProductGrid.module.css";
import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";
import ProductListingHeader from "./ProductListingHeader";

export default function ProductGrid({ products }) {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedIdealFor, setSelectedIdealFor] = useState([]); // [] means All

  const getIdealForFromId = (id) => {
    const n = Number(id);
    if ([1, 3].includes(n)) return "Men";
    if ([2, 4].includes(n)) return "Women";
    if ([5, 6].includes(n)) return "Baby & Kids";
    return undefined;
  };

  const filteredProducts = products.filter((p) => {
    if (!selectedIdealFor || selectedIdealFor.length === 0) return true;
    const cat = getIdealForFromId(p.id);
    return cat ? selectedIdealFor.includes(cat) : false;
  });

  return (
    <section className={styles.productSection}>
      <ProductListingHeader
        itemCount={products.length}
        onToggleFilter={() => setFilterVisible(!filterVisible)}
        filterVisible={filterVisible}
      />

      <div
        className={`${styles.contentContainer} ${
          !filterVisible ? styles.noSidebar : ""
        }`}
      >
        <FilterSidebar
          isVisible={filterVisible}
          selectedIdealFor={selectedIdealFor}
          onChangeIdealFor={setSelectedIdealFor}
        />

        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
