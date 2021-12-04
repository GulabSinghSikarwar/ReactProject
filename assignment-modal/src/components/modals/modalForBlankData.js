import React from  'react'
import ReactDOM, {createPortal} from "react-dom";
import styles from './modalForBlankData.module.css'

const  BackDrop=(props)=>{
    return (
        <div  className={styles.background} style={{visibility:(props.isBlankState)?"unset":"hidden"}}/>

    )
}
const MondalOverLay=(props)=>{
    return (

        <div className={styles.modal} style={{visibility:(props.isBlankState)?"unset":"hidden"}}>

            <div className={styles['modal-heading']}>
                INVALID INPUT

            </div>
            <div className={styles['modal-content']}>
                <p>
                    Enter the appropriate  data. Your Data is Blank !!!

                </p>

            </div>
            <div className={styles['modal-button']}>
                <button onClick={props.clearState}> OKAY</button>

            </div>
        </div>
    )
}
const ModalForBlankData=(props)=>{
    return(
     <React.Fragment>
         {
         // <div className={styles.background} style={{visibility: (props.isBlankState) ? "unset" : "hidden"}}/>
         //
         //
         //     <div className={styles.modal} style={{visibility:(props.isBlankState)?"unset":"hidden"}}>
         //
         //     <div className={styles['modal-heading']}>
         //     INVALID INPUT
         //
         //     </div>
         //     <div className={styles['modal-content']}>
         //     <p>
         //     Enter the appropriate  data. Your Data is Blank !!!
         //
         //     </p>
         //
         //     </div>
         //     <div className={styles['modal_button']}>
         //     <button onClick={props.clearState}> OKAY</button>
         //
         //     </div>
         //     </div>
     }
         {
             ReactDOM.createPortal(<BackDrop  isBlankState={props.isBlankState} />
                 ,document.getElementById('modal-background'))

         }
         {
             ReactDOM.createPortal(<MondalOverLay  isBlankState={props.isBlankState}
                                                   clearState={props.clearState}/>
                 ,document.getElementById('modal'))

         }
     </React.Fragment>

    )

}
export default ModalForBlankData;
