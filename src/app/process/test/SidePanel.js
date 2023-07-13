
//SidePanel.js

import SidePanelBlock from '../../../components/SidePanelBlock'
import SidePanelBlockRow from '../../../components/SidePanelBlockRow'




import RowLabel from '../../../components/RowLabel'
import RowInfo from '../../../components/RowInfo'


import IconButton from '../../../components/IconButton'
import Dropdown from '../../../components/Dropdown'
import TextInput from '../../../components/TextInput'

import styles from './SidePanel.module.scss'


import {createSrf, createDisplaySrf, hideDisplaySrf, showDisplaySrf} from './P5Sketch'
import {displayOptions} from './displayResolutions'

import { useState , useEffect, useRef} from 'react'




const SidePanel = ({}) => {

    const notInitialRender = useRef(false)

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

    const displays = displayOptions

    const [displaySrf, setDisplaySrf] = useState({
        standard: 'HD',
        width: 1920,
        height: 1080,
        aspect: '16:9',
        visibility: true,
    })

    const [referenceSrf, setReferenceSrf] = useState({
        standard: 'HD',
        width: 1920,
        height: 1080,
        aspect: '16:9',
        visibility: true,
    })

    // DISPLAY SRF CONTROLS
    // Single event handler for multiple fields https://react.dev/learn/updating-objects-in-state
    // const handleDisplaySrfChange = () => {
    // }

    const handleDisplaySrfVisibility = () => {
        // console.log(current)
        setDisplaySrf({
            ...displaySrf,
            visibility: !displaySrf.visibility,
        })
        // console.log(displaySrf.visibility)

    }

    const handleDisplaySrfOptionClick = (key, value) => {
        setDisplaySrf({
            ...displaySrf,
            width: value.width,
            height: value.height,
        })
        createDisplaySrf(value.width, value.height)
    }

    const handleDisplaySrfHeightChange = (value) => {
        setDisplaySrf({
            ...displaySrf,
            height: value
        })
    }

    const handleDisplaySrfHeightSubmit = (value) => {
        value = clamp(value, 360, 6000)
        setDisplaySrf({
            ...displaySrf,
            height: value
        })
        // createDisplaySrf(displaySrf.width, value)
        // console.log(value)
        createDisplaySrf(displaySrf.width, value)
    }




    const handleDisplaySrfWidthChange = (value) => {
        setDisplaySrf({
            ...displaySrf,
            width: value
        })
    }

    const handleDisplaySrfWidthSubmit = (value) => {
        value = clamp(value, 640, 8000)
        setDisplaySrf({
            ...displaySrf,
            width: value
        })
        // console.log(displaySrf.width, displaySrf.height)
        createDisplaySrf(value, displaySrf.height)
    }

    
    // REFERENCE SRF CONTROLS
    // REFERENCE SRF CONTROLS
    // REFERENCE SRF CONTROLS
    const handleReferenceSrfOptionClick = (key, value) => {
        // console.log(value)
    }







    useEffect(() => {
        // setTimeout(() => createDisplaySrf(displaySrf.width, displaySrf.height),
        //     1000)
        // displaySrf.visibility? showDisplaySrf() : hideDisplaySrf()

        if (notInitialRender.current) {
            displaySrf.visibility? showDisplaySrf() : hideDisplaySrf()
          } else {
            notInitialRender.current = true        
          }
    }, [displaySrf.visibility])

    // useEffect(() => {
    //     setTimeout(() => createDisplaySrf(displaySrf.width, displaySrf.height),
    //         1000)
    // }, [displaySrf])


    return (

        <>

<div className={`${styles.sidePanelFrame}`}>
<div className={`${styles.sidePanel}`}>

        <SidePanelBlock>
            <SidePanelBlockRow><RowLabel>Display</RowLabel><IconButton toggled={displaySrf.visibility} onClick={handleDisplaySrfVisibility}/></SidePanelBlockRow>
            <SidePanelBlockRow><Dropdown options={displays} onOptionClick={handleDisplaySrfOptionClick}/></SidePanelBlockRow>


            <SidePanelBlockRow>
                <TextInput value={displaySrf.width} onSubmit={handleDisplaySrfWidthSubmit} onChange={handleDisplaySrfWidthChange} textLabel='W' />
                <TextInput value={displaySrf.height} onSubmit={handleDisplaySrfHeightSubmit} onChange={handleDisplaySrfHeightChange} textLabel='H' />
            </SidePanelBlockRow>

            <SidePanelBlockRow>
                <RowInfo>Aspect Ratio 16 : 9</RowInfo>
            </SidePanelBlockRow>

        </SidePanelBlock>

        <SidePanelBlock>
            <SidePanelBlockRow><RowLabel>Reference</RowLabel><IconButton /></SidePanelBlockRow>
            <SidePanelBlockRow><Dropdown options={displays} onOptionClick={handleReferenceSrfOptionClick}/></SidePanelBlockRow>


            <SidePanelBlockRow>
                <TextInput value='1920' textLabel='W' />
                <TextInput value='1080' textLabel='H' />
            </SidePanelBlockRow>

            <SidePanelBlockRow>
                <RowInfo>Aspect Ratio 16 : 9</RowInfo>
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