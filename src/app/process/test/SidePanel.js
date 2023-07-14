
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

    const notInitialRender = useRef(false)

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

    const displays = displayOptions

    const [displaySrf, setDisplaySrf] = useState({
        standard: 'HD',
        width: 4096,
        height: 1716,
        aspect: '2.39:1',
        visibility: true,
    })

    const [referenceSrf, setReferenceSrf] = useState({
        standard: 'HD',
        width: 1920,
        height: 1080,
        aspect: '16:9',
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
        setDisplaySrf({
            ...displaySrf,
            width: value
        })
        setToUpdate(true)

    }
    const handleDisplaySrfHeightSubmit = (value) => {
        setDisplaySrf({
            ...displaySrf,
            height: value
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
        setReferenceSrf({
            ...referenceSrf,
            width: value,
        })
        setToUpdate(true)

    }
    const handleReferenceSrfHeightSubmit = (value) => {
        setReferenceSrf({
            ...referenceSrf,
            height: value,
        })
        setToUpdate(true)
    }




    useEffect(() => {

        if (!toUpdate) {
            setToUpdate(true);
            return;
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
                <RowInfo>{`Aspect Ratio ${displaySrf.aspect}`}</RowInfo>
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