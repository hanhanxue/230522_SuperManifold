

import styles from './RowLabel.module.scss'



const RowLabel = ({children}) => {



    return (

        <>

<div className={`text-xs  font-medium ${styles.rowLabel}`}>{children}</div>

        </>

    )
}

export default RowLabel



