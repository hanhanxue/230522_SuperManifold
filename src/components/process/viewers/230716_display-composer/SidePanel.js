
//SidePanel.js

import SidePanelBlock from '@/components/process/SidePanelBlock'
import SidePanelBlockRow from '@/components/process/SidePanelBlockRow'




import RowLabel from '@/components/process/RowLabel'
import RowInfo from '@/components/process/RowInfo'


import IconButton from '@/components/ui/IconButton'
import Dropdown from '@/components/ui/Dropdown'
import TextInput from '@/components/ui/TextInput'

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

    const [displayDropdownOption, setDisplayDropdownOption] = useState(null)

    const [referenceDropdownOption, setReferenceDropdownOption] = useState(null)

    const findMatchingKey = (width, height) => {
        for (const key in displayOptions) {
            if(typeof displayOptions[key] === 'object' &&
            displayOptions[key].width === width &&
            displayOptions[key].height === height) {return key}
        }
        return null
    }


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
        setDisplayDropdownOption(key)
        setDisplaySrf({
            ...displaySrf,
            width: value.width,
            height: value.height,
            aspect: value.aspect,
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
        aspect = `${Number(aspect.toFixed(2))} : 1`

        // CHECK is the current with and height value match displayOptions
        const match = findMatchingKey(value, displaySrf.height)
        if(match) {
            setDisplayDropdownOption(match)
            aspect = displayOptions[match].aspect
        } else {
            setDisplayDropdownOption(null)
        }

        setDisplaySrf({
            ...displaySrf,
            width: value,
            aspect: aspect,
        })



        setToUpdate(true)

    }

    const handleDisplaySrfHeightSubmit = (value) => {
        let aspect = displaySrf.width / value
        aspect = `${Number(aspect.toFixed(2))} : 1`

        // CHECK is the current with and height value match displayOptions
        const match = findMatchingKey(displaySrf.width, value)
        if(match) {
            setDisplayDropdownOption(match)
            aspect = displayOptions[match].aspect
        } else {
            setDisplayDropdownOption(null)
        }

        setDisplaySrf({
            ...displaySrf,
            height: value,
            aspect: aspect,
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
        setReferenceDropdownOption(key)
        setReferenceSrf({
            ...referenceSrf,
            width: value.width,
            height: value.height,
            aspect: value.aspect,
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
        let aspect = value / referenceSrf.height
        aspect = `${Number(aspect.toFixed(2))} : 1`

        // CHECK is the current with and height value match referenceOptions
        const match = findMatchingKey(value, referenceSrf.height)
        if(match) {
            setReferenceDropdownOption(match)
            aspect = displayOptions[match].aspect
        } else {
            setReferenceDropdownOption(null)
        }

        setReferenceSrf({
            ...referenceSrf,
            width: value,
            aspect: aspect,
        })
        // console.log(value)
        setToUpdate(true)

    }
    const handleReferenceSrfHeightSubmit = (value) => {
        let aspect = referenceSrf.width / value
        aspect = `${Number(aspect.toFixed(2))} : 1`

        // CHECK is the current with and height value match referenceOptions
        const match = findMatchingKey(referenceSrf.width, value)
        if(match) {
            setReferenceDropdownOption(match)
            aspect = displayOptions[match].aspect
        } else {
            setReferenceDropdownOption(null)
        }

        setReferenceSrf({
            ...referenceSrf,
            height: value,
            aspect: aspect,
        })
        setToUpdate(true)
    }



    useEffect(() => {
        // In same cases, such as handleReferenceSrfHeightChange, when the input field is changing value as we type,
        // we don't want the trigger a draw update everytime the number is changed
        // so in that function we are setting the toUpdate value to false so it get skipped when
        // displaySrf and referenceSrf changes and useEffect gets called
        if (!toUpdate) {
            setToUpdate(true)
            return
          }
      
        const draw = async () => {
            await createDisplaySrf(displaySrf.width, displaySrf.height, displaySrf.aspect, displaySrf.visibility)
            await createReferenceSrf(referenceSrf.width, referenceSrf.height, referenceSrf.aspect, referenceSrf.visibility)
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
            <SidePanelBlockRow><Dropdown 
            options={displays} 
            onOptionClick={handleDisplaySrfOptionClick}
            dropdownOption={displayDropdownOption}
            // onDropdownOptionChange={handleDisplayDOptionChange}
            /></SidePanelBlockRow>

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
            <SidePanelBlockRow><Dropdown 
            options={displays} 
            onOptionClick={handleReferenceSrfOptionClick}
            dropdownOption={referenceDropdownOption}
            /></SidePanelBlockRow>


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