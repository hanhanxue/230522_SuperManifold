'use client'

import { useState } from 'react';

import styles from './Slider.module.scss'
// THE BUTTON COMPONENT WILL HAVE STYLING
// BUT NOT SPECIFY BEHAVIOR

export default function Slider({onChange, children}) {

    const [value, setValue] = useState(0)

    const getBackgroundSize = () => {
        return {backgroundSize: `${value}% 100%`}
    }


    

    return (


        <div className={`${styles.sliderFrame}`}>

            <label className={`text-sm ${styles.label}`}>{children}</label>

            <input 
            // max={10}
            type='range' 
            value={value} 

            style={getBackgroundSize()}

            onChange={e => {
                setValue(e.target.valueAsNumber)
                onChange(e, e.target.valueAsNumber)
            }} className={styles.slider}
            />

        </div>

    );
  }


