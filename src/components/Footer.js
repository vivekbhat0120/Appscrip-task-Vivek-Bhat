"use client";

import { useState } from "react";
import styles from "./Footer.module.css";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Footer() {
  const [email, setEmail] = useState("");

  // For mobile accordion behavior: track which columns are open
  const [openCols, setOpenCols] = useState({ 0: false, 1: false, 2: false });

  const toggleCol = (index) => {
    setOpenCols((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Newsletter and Contact Section */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.newsletterContact}>
            {/* Newsletter Section */}
            <div className={styles.newsletter}>
              <h2 className={styles.newsletterTitle}>BE THE FIRST TO KNOW</h2>
              <p className={styles.newsletterText}>
                Sign up for updates from mettā muse.
              </p>
              <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                <input
                  type="email"
                  placeholder="Enter your e-mail..."
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailInput}
                  aria-label="Email address for newsletter"
                  required
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className={styles.subscribeButton}
                  aria-label="Subscribe to newsletter"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>

            {/* Contact Section */}
            <div className={styles.contact}>
              <h2 className={styles.contactTitle}>CONTACT US</h2>
              <p className={styles.contactInfo}>
                <a href="tel:+442211335360" className={styles.contactLink}>
                  +44 221 133 5360
                </a>
              </p>
              <p className={styles.contactInfo}>
                <a
                  href="mailto:customercare@mettamuse.com"
                  className={styles.contactLink}
                >
                  customercare@mettamuse.com
                </a>
              </p>

              {/* Currency Section */}
              <div className={styles.currency}>
                <h3 className={styles.currencyTitle}>CURRENCY</h3>
                <div className={styles.currencySelector}>
                  <img
                    src="/assets/usa.png"
                    alt="United States flag"
                    className={styles.flagIcon}
                  />
                  <span className={styles.currencyCode}>• USD</span>
                </div>
                <p className={styles.currencyNote}>
                  Transactions will be completed in Euros and a currency
                  reference is available on hover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Footer Links Section */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.linksContainer}>
            {/* Brand Links */}
            <div className={styles.linkColumn}>
              <button
                className={styles.toggleTitle}
                aria-expanded={!!openCols[0]}
                onClick={() => toggleCol(0)}
              >
                <span className={styles.brandName}>mettā muse</span>
                <svg
                  className={styles.chev}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <nav aria-label="Company links">
                <ul
                  className={`${styles.linkList} ${
                    openCols[0] ? styles.expanded : styles.collapsed
                  }`}
                >
                  <li>
                    <a href="/about" className={styles.footerLink}>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/stories" className={styles.footerLink}>
                      Stories
                    </a>
                  </li>
                  <li>
                    <a href="/artisans" className={styles.footerLink}>
                      Artisans
                    </a>
                  </li>
                  <li>
                    <a href="/boutiques" className={styles.footerLink}>
                      Boutiques
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className={styles.footerLink}>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/compliance" className={styles.footerLink}>
                      EU Compliances Docs
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Quick Links */}
            <div className={styles.linkColumn}>
              <button
                className={styles.toggleTitle}
                aria-expanded={!!openCols[1]}
                onClick={() => toggleCol(1)}
              >
                <span className={styles.columnTitle}>QUICK LINKS</span>
                <svg
                  className={styles.chev}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <nav aria-label="Quick links">
                <ul
                  className={`${styles.linkList} ${
                    openCols[1] ? styles.expanded : styles.collapsed
                  }`}
                >
                  <li>
                    <a href="/orders" className={styles.footerLink}>
                      Orders & Shipping
                    </a>
                  </li>
                  <li>
                    <a href="/seller" className={styles.footerLink}>
                      Join/Login as a Seller
                    </a>
                  </li>
                  <li>
                    <a href="/payment" className={styles.footerLink}>
                      Payment & Pricing
                    </a>
                  </li>
                  <li>
                    <a href="/returns" className={styles.footerLink}>
                      Return & Refunds
                    </a>
                  </li>
                  <li>
                    <a href="/faqs" className={styles.footerLink}>
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className={styles.footerLink}>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className={styles.footerLink}>
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Follow Us */}
            <div className={styles.linkColumn}>
              <button
                className={styles.toggleTitle}
                aria-expanded={!!openCols[2]}
                onClick={() => toggleCol(2)}
              >
                <span className={styles.columnTitle}>FOLLOW US</span>
                <svg
                  className={styles.chev}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`${styles.socialArea} ${
                  openCols[2] ? styles.expanded : styles.collapsed
                }`}
              >
                <div className={styles.socialLinks}>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Follow us on Instagram"
                  >
                    <InstagramIcon className={styles.icon} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Follow us on LinkedIn"
                  >
                    <LinkedInIcon className={styles.icon} />
                  </a>
                </div>

                {/* Payment Methods */}
                <div className={styles.paymentSection}>
                  <h3 className={styles.paymentTitle}>mettā muse ACCEPTS</h3>
                  <div className={styles.paymentIcons}>
                    <img
                      src="/assets/payment-gpay.svg"
                      alt="Google Pay accepted"
                      className={styles.paymentIcon}
                    />
                    <img
                      src="/assets/payment-mastercard.svg"
                      alt="Mastercard accepted"
                      className={styles.paymentIcon}
                    />
                    <img
                      src="/assets/payment-paypal.svg"
                      alt="PayPal accepted"
                      className={styles.paymentIcon}
                    />
                    <img
                      src="/assets/payment-amex.svg"
                      alt="American Express accepted"
                      className={styles.paymentIcon}
                    />
                    <img
                      src="/assets/payment-applepay.svg"
                      alt="Apple Pay accepted"
                      className={styles.paymentIcon}
                    />
                    <img
                      src="/assets/payment-shoppay.svg"
                      alt="Shop Pay accepted"
                      className={styles.paymentIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile payment icons: shown only on small screens, moved out of Follow Us accordion */}
          <div className={styles.paymentMobileWrap}>
            <h3 className={styles.paymentTitle}>mettā muse ACCEPTS</h3>
            <div className={styles.paymentIcons}>
              <img
                src="/assets/payment-gpay.svg"
                alt="Google Pay accepted"
                className={styles.paymentIcon}
              />
              <img
                src="/assets/payment-mastercard.svg"
                alt="Mastercard accepted"
                className={styles.paymentIcon}
              />
              <img
                src="/assets/payment-paypal.svg"
                alt="PayPal accepted"
                className={styles.paymentIcon}
              />
              <img
                src="/assets/payment-amex.svg"
                alt="American Express accepted"
                className={styles.paymentIcon}
              />
              <img
                src="/assets/payment-applepay.svg"
                alt="Apple Pay accepted"
                className={styles.paymentIcon}
              />
              <img
                src="/assets/payment-shoppay.svg"
                alt="Shop Pay accepted"
                className={styles.paymentIcon}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <div className={styles.container}>
          <p className={styles.copyrightText}>
            Copyright © 2023 mettamuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
