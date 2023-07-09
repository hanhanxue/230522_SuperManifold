
import styles from './Dropdown.module.scss'
import { useState, useEffect, useRef } from 'react'

const Dropdown = ({children, onOptionClicked}) => {

    const options = ["nHD", "VGA", "SVGA"];
    const displayOptions = {
        nHD: {
            width: 640,
            height: 360
        },
        VGA:  {
            width: 640,
            height: 480
        },
        SVGA:  {
            width: 800,
            height: 600
        },
        XGA:  {
            width: 1024,
            height: 768
        },
        WXGA:  {
            width: 1280,
            height: 720
        },
    }
    // const displayOptionsArray = [
    //     {
    //         standard: 'nHD',
    //         width: 640,
    //         height: 360
    //     },
    //     {
    //         standard: 'VGA',
    //         width: 640,
    //         height: 480
    //     },
    //     {
    //         standard: 'SVGA',
    //         width: 800,
    //         height: 600
    //     },
    //     {
    //         standard: 'XGA',
    //         width: 1024,
    //         height: 768
    //     },
    //     {
    //         standard: 'WXGA',
    //         width: 1280,
    //         height: 720
    //     },
    // ]

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {setIsOpen(current => !current)}
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const onOptionClickedInternal = value => () => {
        onOptionClicked(displayOptions[value].width, displayOptions[value].height);
        setSelectedOption(value);
        setIsOpen(false);
        // console.log(selectedOption);
    };

    const handleClickOutside = event => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <>

        <div className={`${styles.dropdownContainer}`} ref={dropdownRef}>

            <div className={`${styles.dropdownHeader}`} onClick={toggle}>

                <div className={`${styles.left}`}>
                <span className={`${styles.icon}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.5" y="7.5" width="15" height="9" rx="1.5" stroke="#9B9B9B"/>
</svg>

                </span>
                
                <span className={`type-sm`}> {selectedOption || "Custom"}</span>
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


             {/* Map objects    */}
            {Object.keys(displayOptions).map((key, value) => (
  <li className={`type-sm ${styles.listItem}`} onClick={onOptionClickedInternal(key)} key={Math.random()}>
    <div className={`${styles.left}`}>
    <span className={`type-sm ${styles.listItemCheck}`}></span>
    <span className={`type-sm ${styles.listItemKey}`}>{key}</span>
    </div>

    <div className={`${styles.right}`}>
    <span className={`type-sm ${styles.listItemValue}`}>{`${displayOptions[key].width} x ${displayOptions[key].height}`}</span>
    </div>

  </li>
))}


            {/* {displayOptionsArray.map((option) => (
  <li className={`type-sm ${styles.listItem}`} onClick={onOptionClickedInternal(option.standard)} key={Math.random()}>
    <div className={`${styles.left}`}>
    <span className={`type-sm ${styles.listItemCheck}`}></span>
    <span className={`type-sm ${styles.listItemKey}`}>{option.standard}</span>
    </div>

    <div className={`${styles.right}`}>
    <span className={`type-sm ${styles.listItemValue}`}>{`${option.width} x ${option.height}`}</span>
    </div>

  </li>
))} */}


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
