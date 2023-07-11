// 'use client'


// import { useState } from 'react'

import styles from './Toggle.module.scss'

// THE toggle COMPONENT WILL HAVE STYLING
// BUT NOT SPECIFY BEHAVIOR

const Toggle = ({toggled = false, onClick, onChange, kind, size, children}) => {


    return (
        <>

        <div className={`${styles.switchFrame}`}>

        <label className={`text-sm`}>{children}</label>


        <label className={`${styles.switch}`}>
            <input 
            type="checkbox" 
            checked={toggled}
            name="name" 
            id="id" 

            className={`${styles.switchCheckbox}`} 

            onClick={onClick} 
            onChange={onChange} 
            />
            <span className={`${styles.switchSlider}`} />
        </label>
        </div>

      
        </>



    );
  }

  export default Toggle




  

  // px-4 
  // bg-zinc-100 mr-4 py-3 rounded-xl 
  // hover:bg-zinc-200 
  // active:bg-zinc-400 
  // active:text-white

  
  // const [isToggled, setIsToggled] = useState(toggled)
  
  // console.log(isToggled)
  // const styleSize = () => {
  //   switch (size) {
  //     case 'sm':
  //       return `type-sm ${styles.sm} `
  //       case 'lg':
  //         return `type-lg ${styles.lg} `

  //   default:
  //     return `type-sm ${styles.noSize} `
  //   }
  // }

  // const styleKind = () => {
  //   switch (kind) {
  //     case 'ghost':
  //       return `${styles.ghost} `
  //       case 'outlined':
  //         return `${styles.outlined} `

  //   default:
  //     return `${styles.noKind} `
  //   }
  // }

  // const handleClick = () => {

  // }

  // const handleChange = () => {
  //   // setIsToggled(!isToggled)
  //   setIsToggled((current) => !current)
  //   onChange()
  // }

  // console.log(isToggled)