

import styles from './RowInfo.module.scss'



const RowInfo = ({children}) => {


    return(
        <>
                    <div className={`text-xs  ${styles.info}`}>{children}</div>

        </>
    )
}

export default RowInfo