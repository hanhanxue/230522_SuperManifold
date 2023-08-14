
// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS

// 05 SUPERMANIFOLD COMPONENTS

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './ProcessButton.module.scss'



const ProcessButton = ({onClick, isActivated  }) => {


    // console.log(isActivated)
    return (
        <>
        <button
            className={`${styles.linkButton} `}  
            // className={`processButton1 ${isActivated ? 'processButton2' : ''}` } 
            onClick={onClick}>
                <svg className={`${styles.arrow2}`}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L5 12" strokeWidth="1.5"/>
                <path d="M13 6L19 12L13 18" strokeWidth="1.5"/>
                </svg>
                <svg className={`${styles.arrow}`}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L5 12" strokeWidth="1.5"/>
                <path d="M13 6L19 12L13 18" strokeWidth="1.5"/>
                </svg>
        </button>
        </>

    )
}

export default ProcessButton


