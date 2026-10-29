import styles from "./Pill.module.css";

// Figma: the component set "Pill" with the variants Type and State.
// The Type variant becomes the prop "type": "primary" or "secondary".
// The State variant (Hover) is handled in CSS with :hover and :focus-visible.
export default function Pill({ type = "primary", onClick, children }) {
  // Combine the base class with the class for the type, e.g. "pill primary"
  const className = `${styles.pill} ${styles[type]}`;

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
