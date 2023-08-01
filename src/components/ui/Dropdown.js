
import styles from './Dropdown.module.scss'
import { useState, useEffect, useRef } from 'react'

const Dropdown = ({dropdownOption, children, onOptionClick, options}) => {


    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {setIsOpen(current => !current)}


    // const [dropdownOption, setdropdownOption] = useState(null);
    const dropdownRef = useRef(null);

    const onOptionClickInternal = key => () => {
      onOptionClick(key, options[key]);
      setIsOpen(false);
      // onDropdownOptionChange(key)
        // setdropdownOption(key);
        // console.log(dropdownOption);
    };



    useEffect(() => {
      const handleClickOutside = event => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [])





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
                {/* // const [input, setInput] = useState(Number(value) ?? min); */}
                <span className={`text-xs`}> {dropdownOption || "Custom"}</span>
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
                          {Object.keys(options).map((key, value) => {
                            
                            if(options[key] === 'seperator') {
                              return <li className={`${styles.listSeperator}`} key={Math.random()} />
                            } else {

                              return (
                                <li className={`text-xs ${styles.listItem}`} 
                                onClick={onOptionClickInternal(key)} 
                                key={Math.random()}>
      
      
                                  <div className={`${styles.left}`}>
      
                                        <span className={`text-xs ${styles.listItemCheck}`}>
            
                                        {/* ADD CHECKMARK */}
                                        {(key === dropdownOption) ? 
                                        <svg className="svg" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.207 5.207L7 11.414 3.292 7.707l1.415-1.414L7 8.586l4.793-4.793 1.414 1.414z" fillRule="nonzero" fillOpacity="1" fill="#fff" stroke="none"></path>
                                        </svg> : ''}
            
            
                                        </span>
            
                                        <span className={`text-xs ${styles.listItemKey}`}>{key}</span>
                                  </div>
      
                                  <div className={`${styles.right}`}>
                                        <span className={`text-xs ${styles.listItemValue}`}>{`${options[key].width} x ${options[key].height}`}</span>
                                  </div>
      
                                </li>
                              )
                            }



                                }
                        )}



                    </ul>
                    </div>
                    )}

        </div>

        </>
    )
}


export default Dropdown





// const options = {
//   nHD: {
//       width: 640,
//       height: 360
//   },
//   VGA:  {
//       width: 640,
//       height: 480
//   },
//   SVGA:  {
//       width: 800,
//       height: 600
//   },
//   XGA:  {
//       width: 1024,
//       height: 768
//   },
//   WXGA:  {
//       width: 1280,
//       height: 720
//   },
// }


// const optionsArray = [
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








            {/* {optionsArray.map((option) => (
  <li className={`text-xs ${styles.listItem}`} onClick={onOptionClickInternal(option.standard)} key={Math.random()}>
    <div className={`${styles.left}`}>
    <span className={`text-xs ${styles.listItemCheck}`}></span>
    <span className={`text-xs ${styles.listItemKey}`}>{option.standard}</span>
    </div>

    <div className={`${styles.right}`}>
    <span className={`text-xs ${styles.listItemValue}`}>{`${option.width} x ${option.height}`}</span>
    </div>

  </li>
))} */}
