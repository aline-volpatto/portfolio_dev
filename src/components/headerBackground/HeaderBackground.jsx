import styles from "./HeaderBackground.module.css";

function HeaderBackground() {
  return (
    <svg
      className={styles.headerBackground}
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
    >
      <path
        d="M0,100 C480,70 960,70 1440,100 L1440,200 L0,200 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default HeaderBackground;
