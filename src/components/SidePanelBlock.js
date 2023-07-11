import styles from './SidePanelBlock.module.scss'



const SidePanelBlock = ({children}) => {

    return (
        <div className={`${styles.block}`}>

            {children}
        </div>
    )



}

export default SidePanelBlock


