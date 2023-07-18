
import Button from '../../../components/Button'
import Slider from '../../../components/Slider'
import SliderA from '../../../components/SliderA'

import Toggle from '../../../components/Toggle'
import ControlsGroup from '../../../components/ControlsGroup'

import styles from './BottomPanel.module.scss'


import {scaleCanvas, createSrf, createDisplaySrf, createReferenceSrf, hideDisplaySrf, showDisplaySrf, drawSrfs} from './P5Sketch'


const BottomPanel = ({panelVisibility, onPanelVisibility}) => {

const handleOnSliderChange = (value) => {
    // console.log(value)
    scaleCanvas(value)
}

    return (

        <>
        <div className={`${styles.bottomPanelFrame}`}>

        <ControlsGroup label='Global'>
            {/* <Button kind='ghost' size='sm' >Generate</Button> */}
            {/* <Button kind='ghost' size='sm' >Clear</Button> */}
            <Toggle toggled={panelVisibility} onChange={onPanelVisibility}>Side Panel</Toggle>
            {/* <Slider >Scale</Slider> */}
            <SliderA onChange={handleOnSliderChange} min={.25} max={1.0} defaultValue={.25}>Scale</SliderA>
            {/* <Button kind='contained' size='sm' >Reset</Button> */}
        </ControlsGroup>


        </div>
        </>

    )
}

export default BottomPanel








// onClick={randomSrf}
// onClick={changeSceneScale}
// onChange={handleSidePanelVisilibity}
// toggled={sidePanelVisible}
// onChange={changeSceneScale}