import React from  'react'
import styles from './modalForBlankData.module.css'

const ModalForBlankData=()=>{
    return(
        <div  className={styles.background}>
          <div className={styles.modal}>

              <div className={styles['modal-heading']}>
                  INVALID INPUT

              </div>
              <div className={styles['modal-content']}>
                  <p>
                      Enter the appropriate  data. Your Data is Blank

                  </p>

              </div>
              <div className={styles['modal_button']}>
                  <button> OKAY</button>

              </div>
          </div>
          </div>
    )

}
export default ModalForBlankData;
