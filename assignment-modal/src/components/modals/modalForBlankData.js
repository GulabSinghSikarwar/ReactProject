import React from  'react'
import styles from './modalForBlankData.module.css'

const ModalForBlankData=(props)=>{
    return(
        <div  className={styles.background} style={{visibility:(props.isBlankState)?"unset":"hidden"}}>
          <div className={styles.modal}>

              <div className={styles['modal-heading']}>
                  INVALID INPUT

              </div>
              <div className={styles['modal-content']}>
                  <p>
                      Enter the appropriate  data. Your Data is Blank !!!

                  </p>

              </div>
              <div className={styles['modal_button']}>
                  <button onClick={props.clearState}> OKAY</button>

              </div>
          </div>
          </div>
    )

}
export default ModalForBlankData;
