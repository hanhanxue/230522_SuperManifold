
import styles from './Dropdown.module.scss'
import { useState } from 'react'

const Dropdown = ({children}) => {

    const options = ["nHD", "VGA", "SVGA"];
    const displayOptions = {
        nHD: '640 x 360',
        VGA: '640 x 480',
        SVGA: '800 x 600',
        XGA: '1024 x 768',
        WXGA: '1280 x 720',

    }

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {setIsOpen(current => !current)}
    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <>

        <div className={`${styles.dropdownContainer}`}>

            <div className={`${styles.dropdownHeader}`} onClick={toggle}>

                <div className={`${styles.left}`}>
                <span className={`${styles.icon}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.5" y="7.5" width="15" height="9" rx="1.5" stroke="#9B9B9B"/>
</svg>

                </span>
                
                <span className={`type-sm`}> {children} </span>
                </div>


                <div className={`${styles.right}`}>
                <span className={`${styles.caret}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11L12 14L15 11" stroke="black"/>
</svg>
                </span>
                </div>

                </div>


            

{isOpen && (
            <div className={`${styles.dropdownListContainer}`}>
            <ul className={`${styles.dropdownList}`}>
            {Object.keys(displayOptions).map((key, value) => (
  <li className={`type-sm ${styles.listItem}`} onClick={onOptionClicked(key)} key={Math.random()}>
    <div className={`${styles.left}`}>
    <span className={`type-sm ${styles.listItemCheck}`}></span>
    <span className={`type-sm ${styles.listItemKey}`}>{key}</span>
    </div>

    <div className={`${styles.right}`}>
    <span className={`type-sm ${styles.listItemValue}`}>{displayOptions[key]}</span>
    </div>

  </li>
))}


            </ul>
            </div>
            )}

        </div>

        </>
    )
}

export const Option = ({value}) => {



    return (
        <>
        <div></div>
        </>
    )
}

export default Dropdown
