import styles from './SidePanelBlockRow.module.scss'



const SidePanelBlockRow = ({children}) => {

    return (
        <div className={`${styles.row}`}>
            {children}

        </div>
    )



}

export default SidePanelBlockRow


