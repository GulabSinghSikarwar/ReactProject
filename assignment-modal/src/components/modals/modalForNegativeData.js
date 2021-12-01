import React from "react";
import styles from './ModalsForNegativeAge.module.css'

const NegativeDataModal=(props)=>{
    return(
        <div  className={styles.background} style={{visibility:(props.isNegState)?"unset":"hidden"}}>
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
                    <button onClick={props.clearState}> OKAY</button>

                </div>
            </div>
        </div>
    )
}
export  default  NegativeDataModal;
