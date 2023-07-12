
import Button from '../../../components/Button'
import Slider from '../../../components/Slider'
import SliderA from '../../../components/SliderA'

import Toggle from '../../../components/Toggle'
import ControlsGroup from '../../../components/ControlsGroup'

import styles from './BottomPanel.module.scss'



const BottomPanel = ({panelVisibility, onPanelVisibility}) => {



    return (

        <>
        <div className={`${styles.bottomPanelFrame}`}>

        <ControlsGroup label='Global'>
            {/* <Button kind='ghost' size='sm' >Generate</Button> */}
            {/* <Button kind='ghost' size='sm' >Clear</Button> */}
            <Toggle toggled={panelVisibility} onChange={onPanelVisibility}>Side Panel</Toggle>
            {/* <Slider >Scale</Slider> */}
            <SliderA>Scale A</SliderA>
            <Button kind='danger' size='sm' >Reset</Button>
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