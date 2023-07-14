'use client'

const _ =require('lodash')

import {useRef,  useState , useEffect} from 'react'

import styles from './SliderA.module.scss'
// THE BUTTON COMPONENT WILL HAVE STYLING
// BUT NOT SPECIFY BEHAVIOR



const SliderA = ({startValue = 50, onChange, children}) => {

    const sliderRef = useRef(null);
    const [grabbed, setGrabbed] = useState(false)
    const [value, setValue] = useState(startValue)

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

    function pauseEvent(e){
        if(e.preventDefault) e.preventDefault();
        // if(e.stopPropagation) e.stopPropagation();
        // e.cancelBubble=true;
        // e.returnValue=false;
        // return false;
    }

    useEffect(() => {
        if (!grabbed) return

        const handleMouseUp = (e) => {
            setGrabbed(false)
            // console.log(e)
        }

        const handleMouseMove = (e) => {
            // console.log(`${sliderRef.current.offsetLeft} and ${e.clientX}`)
            // pauseEvent(e)
            const offsetX = e.clientX - sliderRef.current.offsetLeft
            const newValue = clamp(offsetX, 0, 100)
            setValue(newValue)
            onChange(newValue)
        }
    
        const throttle_handleMouseMove = _.throttle(handleMouseMove, 15)
    

        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', throttle_handleMouseMove);
        return () => {
          document.removeEventListener('mouseup', handleMouseUp);
          document.removeEventListener('mousemove', throttle_handleMouseMove);
        };
      }, [grabbed]);



    const handleMouseDown = (e) => {
        pauseEvent(e)
        const sliderRect = e.currentTarget.getBoundingClientRect()
        const offsetX = e.clientX - sliderRect.left
        // console.log(sliderRect.left)
        // console.log(`${e.clientX} and ${e.offsetX}`)

        const newValue = clamp(offsetX, 0, 100)
        setValue(newValue)
        onChange(newValue)
        setGrabbed(true)
    }

    return (


        <div className={`${styles.sliderFrame}`}>

            <label className={`text-sm ${styles.label}`}>{children}</label>
            <span className={`text-sm ${styles.min}`}>0</span>


                <div 
                className={`${styles.slider}`}
                onMouseDown={handleMouseDown}
                ref={sliderRef}
                >

                        <div className={`${styles.thumb}`} style={{left: `${value}%`}}></div>

                        <div className={`${styles.track}`} ></div>
                        <div className={`${styles.filledTrack}`}></div>

                </div>


            <span className={`text-sm ${styles.max}`}>100</span>
        </div>

    );
  }


export default SliderA











// useEffect(() => {
//     const handleMouseUp = () => {
//       if (isDragging) {
//         setIsDragging(false);
//       }
//     };

//     window.addEventListener('mouseup', handleMouseUp);

//     return () => {
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [isDragging]);



// const handleSliderMouseDown = (e) => {
//     setIsDragging(true);

//   };


//   const handleSliderMouseMove = (e) => {
//     if (isDragging && sliderRect.current) {
//         const offsetX = e.clientX - sliderRect.current.left;
//         const newValue = Math.round((offsetX / sliderRect.current.width) * 100);
//         setValue(newValue);
//         // onChange(newValue);
//       }
//   };

//   useLayoutEffect(() => {
//     sliderRect.current = sliderRef.current.getBoundingClientRect();
//   }, []);

















// const getBackgroundSize = () => {
//     return {backgroundSize: `${value}% 100%`}
// }




// <input 
// // max={10}
// type='range' 
// value={value} 

// // style={getBackgroundSize()}

// onChange={e => {
//     setValue(e.target.valueAsNumber)
//     onChange(e, e.target.valueAsNumber)
// }} className={styles.slider}
// />