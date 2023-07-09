import styles from './DropdownA.module.scss'


const DropdownA = ({buttonText, formLabel, children}) => {
    return (
        <>
        <form className={`${styles.dropdownWrapper}`}>
        <label className={`${styles.dropdownLabel}`}>
        {formLabel}
        </label>
        <select className={`${styles.dropdownSelect}`}>
        {children}
        </select>
        <input className={`${styles.dropdownButton}`} type="submit" value={buttonText}/>


        </form>
        </>
    )
}

export const Option = ({selected, value}) => {
    return (
        <option className={`${styles.dropdownOption}`} selected={selected}>{value}</option>
    )
}

export default DropdownA


// selected={buttonText}