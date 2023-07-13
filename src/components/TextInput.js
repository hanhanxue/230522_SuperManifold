
import styles from './TextInput.module.scss'
import { useId, useState, useRef } from 'react';


const TextInput = ({value, textLabel, onChange, setValue, onSubmit}) => {
    // const id = useId();

    // Nullish coalescing is denoted by double question marks (??).
    // const [input, setInput] = useState(value ?? '');



    const handleChange = (e) => {
        // console.log(e.target.value)
        // setInput(e.target.value)
        onChange(Number(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(value)
        onSubmit(value)
        // e.target.blur()
        // console.log(e.target.querySelector('input'))
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