import React from "react";
import styles from './Header.module.css'
import Img from './OIP.jpg'
import SignIn from "./SignButton/signIn"
import HeaderCartButton from "./cart/HeaderCartButton";
const Header = () => {

    return (
        <header className={styles.header}>
            <div> <img className={styles.image} src={Img} /></div>
            <div> <h1>SHOP MINI</h1></div>
            <div className={styles.right}><HeaderCartButton/></div>
            <div className={styles.right}><SignIn /></div>
          

        </header>
    )
}
export default Header