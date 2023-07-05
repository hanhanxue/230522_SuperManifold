import styles from './ControlsGroup.module.scss'

const ControlsGroup = ({label, children}) => {

    // console.log(label)

    return (
        <>
        <div className={`${styles.controlsGroup}`}>
            {label && <span className={`type-sm ${styles.label}`}>{label}</span>}
            <div className={`${styles.controls}`}>
                {children}
            </div>
        </div>

        
        </>
    )
}

export default ControlsGroup