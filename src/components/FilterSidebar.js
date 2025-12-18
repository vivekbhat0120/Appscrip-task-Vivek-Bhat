"use client";

import { useState } from "react";
import styles from "./FilterSidebar.module.css";
import ChevronDownIcon from "./icons/ChevronDownIcon";

const filterSections = [
  {
    id: "idealFor",
    label: "IDEAL FOR",
    options: ["All", "Men", "Women", "Baby & Kids"],
  },
  { id: "occasion", label: "OCCASION", options: ["All"] },
  { id: "work", label: "WORK", options: ["All"] },
  { id: "fabric", label: "FABRIC", options: ["All"] },
  { id: "segment", label: "SEGMENT", options: ["All"] },
  { id: "suitableFor", label: "SUITABLE FOR", options: ["All"] },
  { id: "rawMaterials", label: "RAW MATERIALS", options: ["All"] },
  { id: "pattern", label: "PATTERN", options: ["All"] },
];

export default function FilterSidebar({
  isVisible,
  selectedIdealFor = [],
  onChangeIdealFor = () => {},
}) {
  const [expandedSections, setExpandedSections] = useState({});
  const [customizable, setCustomizable] = useState(false);

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleIdealFor = (option) => {
    const exists = selectedIdealFor.includes(option);
    const next = exists
      ? selectedIdealFor.filter((s) => s !== option)
      : [...selectedIdealFor, option];
    onChangeIdealFor(next);
  };

  const selectAllIdealFor = () => {
    // select all ideal-for options
    onChangeIdealFor(["Men", "Women", "Baby & Kids"]);
  };

  const unselectAllIdealFor = () => {
    onChangeIdealFor([]);
  };

  if (!isVisible) return null;

  return (
    <aside
      className={styles.sidebar}
      role="complementary"
      aria-label="Product filters"
    >
      <div className={styles.filterContainer}>
        {/* Customizable Checkbox */}
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={customizable}
              onChange={(e) => setCustomizable(e.target.checked)}
              className={styles.checkbox}
              aria-label="Show only customizable products"
            />
            <span className={styles.checkboxText}>CUSTOMIZABLE</span>
          </label>
        </div>

        {/* Filter Sections */}
        {filterSections.map((section) => (
          <div key={section.id} className={styles.filterSection}>
            <button
              className={styles.filterHeader}
              onClick={() => toggleSection(section.id)}
              aria-expanded={expandedSections[section.id] || false}
              aria-controls={`filter-${section.id}`}
            >
              <span className={styles.filterLabel}>{section.label}</span>
              <ChevronDownIcon
                className={`${styles.chevron} ${
                  expandedSections[section.id] ? styles.chevronExpanded : ""
                }`}
              />
            </button>

            {/* <div className={styles.filterDivider}></div> */}

            {expandedSections[section.id] && (
              <div id={`filter-${section.id}`} className={styles.filterOptions}>
                <div className={styles.optionsList}>
                  <button
                    className={styles.optionAll}
                    onClick={() => {
                      if (section.id === "idealFor") selectAllIdealFor();
                    }}
                  >
                    All
                  </button>
                  <button
                    className={styles.optionUnselect}
                    onClick={() => {
                      if (section.id === "idealFor") unselectAllIdealFor();
                    }}
                  >
                    Unselect all
                  </button>

                  {section.id === "idealFor" && (
                    <div className={styles.optionsList}>
                      {section.options
                        .filter((o) => o !== "All")
                        .map((opt) => (
                          <label key={opt} className={styles.checkboxLabel}>
                            <input
                              type="checkbox"
                              className={styles.checkbox}
                              checked={selectedIdealFor.includes(opt)}
                              onChange={() => toggleIdealFor(opt)}
                              aria-label={opt}
                            />
                            <span className={styles.checkboxText}>{opt}</span>
                          </label>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {!expandedSections[section.id] && (
              <p className={styles.selectedValue}>
                {section.id === "idealFor"
                  ? selectedIdealFor.length > 0
                    ? selectedIdealFor.join(", ")
                    : "All"
                  : "All"}
              </p>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
