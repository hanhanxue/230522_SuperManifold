'use client'

// 02 EXTERNAL


// 03 REACT / NEXTJS
import { useState } from 'react'




// 05 SUPERMANIFOLD COMPONENTS
import BottomPanel from './BottomPanel'
import SidePanel from './SidePanel'


// 07 SUPERMANIFOLD FUNCTIONS
import P5Sketch, {randomSrf, changeSceneScale} from './P5Sketch'


// 11 SUPERMANIFOLD STYLES
import styles from './Viewer.module.scss'




const Viewer = () => {

    
    const [sidePanelVisible, setSidePanelVisible] = useState(true)


    const handleSidePanelVisilibity = () => {
        // setSidePanelVisible(!sidePanelVisible)
        setSidePanelVisible((current) => !current)
    }



    return (
        <>
    <section className={`${styles.section}`}> {/* SECTION */}
    <div className={`${styles.xFrame}`}> {/* X Frame */}
    <div className={`${styles.yFrame}`}> {/* Y Frame */}  




    <div className={`${styles.canvasFrame}`}>
        <P5Sketch />
        <SidePanel visible={sidePanelVisible} />
    </div>
    <BottomPanel panelVisibility={sidePanelVisible} onPanelVisibility={handleSidePanelVisilibity}/>



    </div> {/* Y Frame */}
    </div> {/* X Frame */}
    </section> {/* SECTION */}



        </>

    )
}

export default Viewer





// // Will only import `react-p5` on client-side
// const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
//   ssr: false,
// })
// // import Sketch from "react-p5"



// import Button from '@/components/ui/Button'
// import Slider from '@/components/ui/Slider'
// import Toggle from '@/components/ui/Toggle'
// import ControlsGroup from '@/components/ui/ControlsGroup'
// import Dropdown from '@/components/ui/Dropdown'
// import DropdownA, {Option} from '@/components/ui/DropdownA'