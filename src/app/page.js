import styles from "./page.module.css";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

/**
 * Home Page Component - Server Side Rendered
 * This component runs on the server by default in Next.js App Router
 * Demonstrates SSR with dynamic data generation
 */
export default async function Home() {
  // Server-side timestamp to demonstrate SSR capability
  const renderedAt = new Date().toISOString();

  // Simulate server-side data fetching (SSR)
  // In production, this would fetch from an API or database
  const products = await getProducts();

  return (
    <div className={styles.page}>
      {/* Hero Section with SEO-optimized heading structure */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Discover Our Products</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>

      {/* Product Listing Section */}
      <main className={styles.productListing} role="main">
        <ProductGrid products={products} />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* SSR indicator - can be removed in production */}
      <span className={styles.srCaption} aria-label="Server render timestamp">
        Page rendered on server at: {renderedAt}
      </span>
    </div>
  );
}

/**
 * Server-side function to fetch products
 * This simulates API call and demonstrates SSR
 */
async function getProducts() {
  // Simulate async data fetching
  await new Promise((resolve) => setTimeout(resolve, 10));

  return [
    {
      id: 1,
      name: "PPXOC MILKYWAY DRESS IN...",
      image: "/assets/bag1.png",
      badge: "NEW PRODUCT",
      isFavorite: false,
    },
    {
      id: 2,
      name: "PPXOC MILKYWAY DRESS IN...",
      image: "/assets/bag2.png",
      badge: "OUT OF STOCK",
      isFavorite: false,
    },
    {
      id: 3,
      name: "PRODUCT NAME",
      image: "/assets/bag3.png",
      badge: null,
      isFavorite: true,
    },
    {
      id: 4,
      name: "PRODUCT NAME",
      image: "/assets/bag4.png",
      badge: null,
      isFavorite: false,
    },
    {
      id: 5,
      name: "PRODUCT NAME",
      image: "/assets/bag5.png",
      badge: null,
      isFavorite: false,
    },
    {
      id: 6,
      name: "PRODUCT NAME",
      image: "/assets/bag6.png",
      badge: null,
      isFavorite: false,
    },
  ];
}

// Generate static metadata for this page
export const metadata = {
  title: "Vivek Bhat",
  icons: {
    icon: "/assets/logo.png",
  },
  description:
    "Browse our curated collection of 3426 premium handcrafted products. Unique artisan goods, customizable items, and quality craftsmanship. Shop now!",
  keywords:
    "handcrafted products, artisan goods, customizable items, premium crafts, unique products",
};
