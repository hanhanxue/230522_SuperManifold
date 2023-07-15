
//SidePanel.js

import SidePanelBlock from '../../../components/SidePanelBlock'
import SidePanelBlockRow from '../../../components/SidePanelBlockRow'




import RowLabel from '../../../components/RowLabel'
import RowInfo from '../../../components/RowInfo'


import IconButton from '../../../components/IconButton'
import Dropdown from '../../../components/Dropdown'
import TextInput from '../../../components/TextInput'

import styles from './SidePanel.module.scss'


import {createSrf, createDisplaySrf, createReferenceSrf, hideDisplaySrf, showDisplaySrf, drawSrfs} from './P5Sketch'
import {displayOptions} from './displayResolutions'

import { useState , useEffect, useRef} from 'react'




const SidePanel = ({visible}) => {
    // Greatest Common Divisor
    function gcd_two_numbers(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
          return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
          var t = y;
          y = x % y;
          x = t;
        }
        return x;
      }

 

    const displays = displayOptions

    const [displaySrf, setDisplaySrf] = useState({
        standard: 'HD',
        width: 4096,
        height: 1716,
        aspect: '2.39 : 1',
        visibility: true,
    })

    const [referenceSrf, setReferenceSrf] = useState({
        standard: 'HD',
        width: 1920,
        height: 1080,
        aspect: '16 : 9',
        visibility: true,
    })

    const [toUpdate, setToUpdate] = useState(true)



    // DISPLAY SRF CONTROLS
    // Single event handler for multiple fields https://react.dev/learn/updating-objects-in-state
    // const handleDisplaySrfChange = () => {
    // }

    const handleDisplaySrfVisibility = () => {
        setDisplaySrf({
            ...displaySrf,
            visibility: !displaySrf.visibility,
        })
    }

    const handleDisplaySrfOptionClick = (key, value) => {
        setDisplaySrf({
            ...displaySrf,
            width: value.width,
            height: value.height,
        })
    }

    const handleDisplaySrfWidthChange = (value) => {
        setDisplaySrf({
            ...displaySrf,
            width: value
        })

        setToUpdate(false)
     
    }
    const handleDisplaySrfHeightChange = (value) => {
        setDisplaySrf({
            ...displaySrf,
            height: value
        })
        setToUpdate(false)
     
    }

    // SUBMIT // SUBMIT // SUBMIT
    const handleDisplaySrfWidthSubmit = (value) => {
        let aspect = value / displaySrf.height

        setDisplaySrf({
            ...displaySrf,
            width: value,
            aspect: `${Number(aspect.toFixed(2))} : 1`,
        })

        setToUpdate(true)

    }
    const handleDisplaySrfHeightSubmit = (value) => {
        let aspect = displaySrf.width / value

        setDisplaySrf({
            ...displaySrf,
            height: value,
            aspect: `${Number(aspect.toFixed(2))} : 1`,
        })

        setToUpdate(true)
    }


    // REFERENCE SRF CONTROLS
    // REFERENCE SRF CONTROLS
    // REFERENCE SRF CONTROLS

    const handleReferenceSrfVisibility = () => {
        // console.log(current)
        setReferenceSrf({
            ...referenceSrf,
            visibility: !referenceSrf.visibility,
        })
        // console.log(referenceSrf.visibility)
    }
    const handleReferenceSrfOptionClick = (key, value) => {
        setReferenceSrf({
            ...referenceSrf,
            width: value.width,
            height: value.height,
        })
    }

    const handleReferenceSrfWidthChange = (value) => {
        setReferenceSrf({
            ...referenceSrf,
            width: value,
        })
        setToUpdate(false)
     
    }
    const handleReferenceSrfHeightChange = (value) => {
        setReferenceSrf({
            ...referenceSrf,
            height: value,
        })
        setToUpdate(false)
     
    }

    // SUBMIT // SUBMIT // SUBMIT
    const handleReferenceSrfWidthSubmit = (value) => {
        let aspect = value / displaySrf.height

        setReferenceSrf({
            ...referenceSrf,
            width: value,
            aspect: `${Number(aspect.toFixed(2))} : 1`,
        })
        // console.log(value)
        setToUpdate(true)

    }
    const handleReferenceSrfHeightSubmit = (value) => {
        let aspect = displaySrf.width / value

        setReferenceSrf({
            ...referenceSrf,
            height: value,
            aspect: `${Number(aspect.toFixed(2))} : 1`,
        })
        setToUpdate(true)
    }



    useEffect(() => {
        // console.log(displaySrf.height)
        if (!toUpdate) {
            setToUpdate(true)
            return
          }
      
        const draw = async () => {
            await createDisplaySrf(displaySrf.width, displaySrf.height, displaySrf.visibility)
            await createReferenceSrf(referenceSrf.width, referenceSrf.height, referenceSrf.visibility)
            drawSrfs()
        }
        draw()

    }, [displaySrf, referenceSrf])


    return (

        <>

<div className={`${styles.sidePanelFrame} ${visible ? styles.sidePanelVisible : styles.sidePanelHidden}`}>
<div className={`${styles.sidePanel}`}>

        <SidePanelBlock>
            <SidePanelBlockRow><RowLabel>Display</RowLabel><IconButton toggled={displaySrf.visibility} onClick={handleDisplaySrfVisibility}/></SidePanelBlockRow>
            <SidePanelBlockRow><Dropdown options={displays} onOptionClick={handleDisplaySrfOptionClick}/></SidePanelBlockRow>

            <SidePanelBlockRow>
                <TextInput textLabel='W' value={displaySrf.width} onChange={handleDisplaySrfWidthChange} onSubmit={handleDisplaySrfWidthSubmit} />
                <TextInput textLabel='H' value={displaySrf.height} onChange={handleDisplaySrfHeightChange} onSubmit={handleDisplaySrfHeightSubmit} />
            </SidePanelBlockRow>

            <SidePanelBlockRow>
                <RowInfo>{`Aspect Ratio ${displaySrf.aspect}`}</RowInfo>
            </SidePanelBlockRow>

        </SidePanelBlock>

        <SidePanelBlock>
            <SidePanelBlockRow><RowLabel>Reference</RowLabel><IconButton toggled={referenceSrf.visibility} onClick={handleReferenceSrfVisibility}/></SidePanelBlockRow>
            <SidePanelBlockRow><Dropdown options={displays} onOptionClick={handleReferenceSrfOptionClick}/></SidePanelBlockRow>


            <SidePanelBlockRow>
                <TextInput textLabel='W' value={referenceSrf.width}  onChange={handleReferenceSrfWidthChange} onSubmit={handleReferenceSrfWidthSubmit} />
                <TextInput textLabel='H' value={referenceSrf.height}  onChange={handleReferenceSrfHeightChange} onSubmit={handleReferenceSrfHeightSubmit} />
            </SidePanelBlockRow>

            <SidePanelBlockRow>
                <RowInfo>{`Aspect Ratio ${referenceSrf.aspect}`}</RowInfo>
            </SidePanelBlockRow>

        </SidePanelBlock>




</div>
</div>
        </>

    )
}

export default SidePanel





{/* <DropdownA
formLabel="Choose a service"
buttonText="Send form"
onChange={handleSelect}
action="/"
>
<Option value="Click to see options" />
<Option value="Option 1" />
<Option value="Option 2" />
<Option value="Option 3" />
</DropdownA> */}




// // SELECT
// const [optionValue, setOptionValue] = useState("");
// const handleSelect = (e) => {
//   console.log(e.target.value);
//   setOptionValue(e.target.value);
// };

{/* <button className={`type-sm ${styles.sideButton}`}><span>
<svg className="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M5 5V0h1v5h5v1H6v5H5V6H0V5h5z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>

    
    </span></button> */}


        // const gcd = gcd(this.srfWidth, this.srfHeight)
    // // this.aspectRatioW = this.srfWidth / this.gcd
    // // this.aspectRatioH = this.srfHeight / this.gcd
    // const updateDisplaySrfAspectRatio = () => {
    //     // let gcd = gcd_two_numbers(displaySrf.width, displaySrf.height)

    //     let aspect = displaySrf.width / displaySrf.height
    //     setDisplaySrf({
    //         ...displaySrf,
    //         aspect: !displaySrf.visibility,
    //     })
    //     // console.log( `${gcd} with width ${displaySrf.width} and height ${displaySrf.height}`)
    // }