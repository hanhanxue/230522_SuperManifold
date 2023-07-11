
import styles from './TextInput.module.scss'
import { useId, useState } from 'react';


const TextInput = ({value, textLabel}) => {
    const id = useId();
    // Nullish coalescing is denoted by double question marks (??).
    const [input, setInput] = useState(value ?? '');
    const handleChange = () => {

    }

    return(
        <>
        <div className={`${styles.textInputFrame}`}>
        <label className={`text-sm ${styles.textInputLabel}`}>{textLabel}</label>
        <input 
        className={`text-sm ${styles.textInput}`}
        type='text'
        // onChange={onChange}
        value={input}
        onChange={e => setInput(e.target.value)}
        />

        </div>

        </>
    )
}

export default TextInput