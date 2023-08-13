
// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS

// 05 SUPERMANIFOLD COMPONENTS

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './UnityProgressBar.module.scss'



const UnityProgressBar = ({isLoaded, loadingProgression}) => {



    return (

        <>
{/* Progress Bar */}
<div className={`${styles.progressBarContainer}`}
style={{display: isLoaded ? "none" : "block"}} >
    <div className={`${styles.progressBar}` }  
    style={{width: `${(loadingProgression * 100)}%`}} 
           ></div>

</div>

        </>

    )
}

export default UnityProgressBar


