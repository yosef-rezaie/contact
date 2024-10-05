import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
      <h1>contect App</h1>
      <p>
        <a href="#">BotoStart</a> | React.js full Course
      </p>
    </div>
  );
}

export default Header;
