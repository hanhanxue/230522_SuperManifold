'use client'



import {useRef,  useState } from 'react'

import styles from './SliderA.module.scss'
// THE BUTTON COMPONENT WILL HAVE STYLING
// BUT NOT SPECIFY BEHAVIOR



const SliderA = ({onChange, children}) => {


    const [mouseDown, setMouseDown] = useState(false)
    const [value, setValue] = useState(50)

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

    const handleMouseDown = (e) => {
        // setValue(e.nativeEvent.offsetX)
        const sliderRect = e.currentTarget.getBoundingClientRect()
        const offsetX = e.clientX - sliderRect.left
        // const trackWidth = sliderRect.width;
        // const newValue = (offsetX / trackWidth) * 100;

        const newValue = clamp(offsetX, 0, 100)
        setValue(newValue);
        setMouseDown(true);
    }
    const handleMouseUp = (e) => {
        setMouseDown(false);
        // console.log(e)
        // setValue(e.nativeEvent.offsetX)
    }
    const handleMouseMove = (e) => {
        // console.log(e)
        if (mouseDown) {
            const sliderRect = e.currentTarget.getBoundingClientRect()
            const offsetX = e.clientX - sliderRect.left
            // const trackWidth = sliderRect.width;
            // const newValue = (offsetX / trackWidth) * 100;

            const newValue = clamp(offsetX, 0, 100)
            setValue(newValue);
            console.log(newValue)
          }
    }
    const handleMouseOver = (e) => {
        // console.log(e.nativeEvent.offsetX)
    }
    const handleMouseLeave = (e) => {
        setMouseDown(false);
        // console.log(e.nativeEvent.offsetX)
    }

    return (


        <div className={`${styles.sliderFrame}`}>

            <label className={`text-sm ${styles.label}`}>{children}</label>
            <span className={`text-sm ${styles.min}`}>0</span>
                <div 
                className={`${styles.slider}`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}

                onMouseOver={handleMouseOver}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                >

<div className={`${styles.thumb}`} 
                    style={{left: `${value}%`}}></div>

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