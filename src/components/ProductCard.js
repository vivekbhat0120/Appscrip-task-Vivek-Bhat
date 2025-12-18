"use client";

import { useState } from "react";
import styles from "./ProductCard.module.css";
import HeartIcon from "./icons/HeartIcon";

// import p1 from "./images/bag1.png";

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const isOutOfStock =
    product.badge === "OUT OF STOCK" ||
    product.outOfStock ||
    product.stock === 0;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={`${styles.productImage} ${
            isOutOfStock ? styles.imageDim : ""
          }`}
          loading="lazy"
        />

        {product.badge && product.badge !== "OUT OF STOCK" && (
          <span
            className={`${styles.badge} ${
              product.badge === "OUT OF STOCK" ? styles.badgeOutOfStock : ""
            }`}
          >
            {product.badge}
          </span>
        )}

        {(product.badge === "OUT OF STOCK" ||
          product.outOfStock ||
          product.stock === 0) && (
          <div className={styles.outOfStockOverlay}>
            <span className={styles.outOfStockLabel}>OUT OF STOCK</span>
          </div>
        )}
      </div>

      <div
        className={`${styles.cardContent} ${
          isOutOfStock ? styles.dimContent : ""
        }`}
      >
        <h3 className={styles.productName}>{product.name}</h3>

        <div className={styles.cardFooter}>
          <p className={styles.pricingText}>
            <a href="/login" className={styles.actionLink}>
              Sign in
            </a>{" "}
            or{" "}
            <a href="/register" className={styles.actionLink}>
              Create an account
            </a>{" "}
            to see pricing
          </p>

          <button
            className={`${styles.favoriteButton} ${
              isFavorite ? styles.favoriteActive : ""
            }`}
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          >
            <HeartIcon className={styles.heartIcon} />
          </button>
        </div>
      </div>
    </article>
  );
}
