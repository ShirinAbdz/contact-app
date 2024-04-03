import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container} >
      <h1>Conatct App</h1>
      <p>
        <a href="#">My website</a> | Practice React.js 
      </p>
    </div>
  );
}

export default Header;
