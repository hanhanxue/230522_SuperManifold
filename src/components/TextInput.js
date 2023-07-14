
import styles from './TextInput.module.scss'
import { useId, useState, useRef } from 'react';


const TextInput = ({value, textLabel, onChange, setValue, onSubmit, min=360, max=6000}) => {
    // const id = useId();
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
    // Nullish coalescing is denoted by double question marks (??).
    // const [input, setInput] = useState(Number(value) ?? min);

    const handleChange = (e) => {
        onChange(e.target.value)
        // setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let clampedValue = clamp(value, min, max)
        onSubmit(clampedValue)
        e.target.querySelector('input').blur()
    }

    

    return(
        <>
        <div className={`${styles.textInputFrame}`}>
        <label className={`text-sm ${styles.textInputLabel}`}>{textLabel}</label>
        <form onSubmit={handleSubmit}>

                <input 
                    className={`text-sm ${styles.textInput}`}
                    type='number'
                    onChange={handleChange}
                    value={value}
                    />


        </form>
        </div>
        </>
    )
}

export default TextInput




// console.log(input)
// onChange(Number(e.target.value))
// console.log(e.target.value)
// setInput(e.target.value)
        // e.target.blur()
// console.log(e.target.querySelector('input'))
        // console.log(input)

// let clampedValue = clamp(input, min, max)
// setInput(Number(clampedValue))
