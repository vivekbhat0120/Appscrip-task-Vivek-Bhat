export default function LogoIcon({ className }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="38" height="38" stroke="black" strokeWidth="2" />
      <line x1="20" y1="1" x2="20" y2="39" stroke="black" strokeWidth="2" />
      <line x1="1" y1="20" x2="39" y2="20" stroke="black" strokeWidth="2" />
      <line x1="1" y1="1" x2="39" y2="39" stroke="black" strokeWidth="2" />
      <line x1="39" y1="1" x2="1" y2="39" stroke="black" strokeWidth="2" />
    </svg>
  );
}
