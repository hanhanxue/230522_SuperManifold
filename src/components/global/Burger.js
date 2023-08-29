
// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS

// 05 SUPERMANIFOLD COMPONENTS

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './Burger.module.scss'



export default function Burger({isOpen, onMenuClick}) {



    return (

        <>
        <button 
        className={`${styles.menuButton}
        ${isOpen ? styles.menuButtonOpen : ''}
        `}
        
        onClick={onMenuClick}>
        <div className={`${styles.iconFrame}`}>
            <div className={`${styles.icon}`}>
                <span className={`${styles.iconStroke}`}></span>
                <span className={`${styles.iconStroke}`}></span>
                <span className={`${styles.iconStroke}`}></span>
            </div>
        </div>
        </button>
        </>

    )
}

