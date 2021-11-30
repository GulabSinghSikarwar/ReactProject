import React from "react";
import styles from './ModalsForNegativeAge.module.css'

const NegativeDataModal=()=>{
    return(
        <div  className={styles.background}>
            <div className={styles.modal}>

                <div className={styles['modal-heading']}>
                    INVALID INPUT

                </div>
                <div className={styles['modal-content']}>
                    <p>
                        Age Cannot be Negative !!!

                    </p>

                </div>
                <div className={styles['modal_button']}>
                    <button> OKAY</button>

                </div>
            </div>
        </div>
    )
}
export  default  NegativeDataModal;
