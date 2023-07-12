
import SidePanelBlock from '../../../components/SidePanelBlock'
import SidePanelBlockRow from '../../../components/SidePanelBlockRow'




import RowLabel from '../../../components/RowLabel'
import RowInfo from '../../../components/RowInfo'


import IconButton from '../../../components/IconButton'
import Dropdown from '../../../components/Dropdown'
import TextInput from '../../../components/TextInput'

import styles from './SidePanel.module.scss'


import {createSrf} from './P5Sketch'


const SidePanel = ({}) => {


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
      


      const handleDisplayOptionClick = (key, value) => {
        // console.log(value.width, value.height)
        createSrf(value.width, value.height)
      }

      const handleReferenceOptionClick = (key, value) => {
        console.log(value)
      }




    return (

        <>

<div className={`${styles.sidePanelFrame}`}>
<div className={`${styles.sidePanel}`}>

        <SidePanelBlock>
            <SidePanelBlockRow><RowLabel>Display</RowLabel><IconButton /></SidePanelBlockRow>
            <SidePanelBlockRow><Dropdown options={displayOptions} onOptionClick={handleDisplayOptionClick}/></SidePanelBlockRow>


            <SidePanelBlockRow>
                <TextInput value='1920' textLabel='W' />
                <TextInput value='1080' textLabel='H' />
            </SidePanelBlockRow>

            <SidePanelBlockRow>
                <RowInfo>Aspect Ratio 16 : 9</RowInfo>
            </SidePanelBlockRow>

        </SidePanelBlock>

        <SidePanelBlock>
            <SidePanelBlockRow><RowLabel>Reference</RowLabel><IconButton /></SidePanelBlockRow>
            <SidePanelBlockRow><Dropdown options={displayOptions} onOptionClick={handleReferenceOptionClick}/></SidePanelBlockRow>


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