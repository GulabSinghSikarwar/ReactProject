import React from "react";
import styles from './macbookMainImage.module.css'
import MainImg from './macbookAssets/macbookMainImage.png'

const MacbookMainImage=()=>{
    return (
        <div>
            <img className={styles.image} src={MainImg}/>

        </div>
    )
}
export default MacbookMainImage; 
