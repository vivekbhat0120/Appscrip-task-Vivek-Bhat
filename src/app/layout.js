import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./header.module.css";
import SearchIcon from "@/components/icons/SearchIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon";
import UserIcon from "@/components/icons/UserIcon";
import LogoIcon from "@/components/icons/LogoIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Discover Our Products | Premium Handcrafted Items & Stories",
  description:
    "Explore our collection of handcrafted products, unique skills, inspiring stories and quality craftsmanship. Server-side rendered Next.js e-commerce experience with premium products.",
  keywords:
    "handcrafted products, artisan goods, premium items, unique stories, craftsmanship, skills",
  authors: [{ name: "Appscrip" }],
  creator: "Appscrip",
  publisher: "Appscrip",
  openGraph: {
    title: "Discover Our Products | Premium Handcrafted Items",
    description:
      "Explore our collection of handcrafted products, unique skills, and inspiring stories. Premium quality craftsmanship.",
    url: "https://www.appscrip.com",
    siteName: "Appscrip Products",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/discover-products-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Discover our premium handcrafted products and artisan collections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Our Products | Premium Handcrafted Items",
    description:
      "Explore our collection of handcrafted products, unique skills, and inspiring stories.",
    images: ["/assets/discover-products-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Discover Our Products",
  description: metadata.description,
  url: "https://www.appscrip.com",
  publisher: {
    "@type": "Organization",
    name: "mettā muse",
    url: "https://www.appscrip.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.appscrip.com/assets/logo-icon.svg",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-221-133-5360",
      contactType: "Customer Service",
      email: "customercare@mettamuse.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://instagram.com/mettamuse",
      "https://linkedin.com/company/mettamuse",
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Product Categories",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Shop",
        url: "https://www.appscrip.com#shop",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Skills",
        url: "https://www.appscrip.com#skills",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Stories",
        url: "https://www.appscrip.com#stories",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "About",
        url: "https://www.appscrip.com#about",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={styles.header} role="banner">
          <div className={styles.headerContainer}>
            {/* Logo Section */}
            <div className={styles.logoSection}>
              <button
                className={styles.menuButton}
                aria-label="Open menu"
                type="button"
              >
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect width="22" height="2" rx="1" fill="currentColor" />
                  <rect
                    y="7"
                    width="22"
                    height="2"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    y="14"
                    width="22"
                    height="2"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <a
                href="/"
                className={styles.logoLink}
                aria-label="Homepage - Discover our products"
              >
                <LogoIcon className={styles.logo} />
              </a>
            </div>

            {/* Center Logo Text */}
            <div className={styles.centerLogo}>
              <h2 className={styles.logoText}>LOGO</h2>
            </div>

            {/* Right Icons */}
            <div className={styles.iconGroup}>
              <button
                className={styles.iconButton}
                aria-label="Search products"
              >
                <SearchIcon className={styles.icon} />
              </button>
              <button className={styles.iconButton} aria-label="View wishlist">
                <HeartIcon className={styles.icon} />
              </button>
              <button
                className={styles.iconButton}
                aria-label="View shopping cart"
              >
                <ShoppingBagIcon className={styles.icon} />
              </button>
              <button
                className={`${styles.iconButton} ${styles.userButton}`}
                aria-label="View user account"
              >
                <UserIcon className={styles.icon} />
              </button>
              <div className={styles.languageSelector}>
                <span className={styles.langText}>ENG</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={styles.chevron}
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav
            className={styles.navbar}
            role="navigation"
            aria-label="Main navigation"
          >
            <div className={styles.navContainer}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <a href="#shop" className={styles.navLink}>
                    SHOP
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#skills" className={styles.navLink}>
                    SKILLS
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#stories" className={styles.navLink}>
                    STORIES
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#about" className={styles.navLink}>
                    ABOUT
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#contact" className={styles.navLink}>
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
