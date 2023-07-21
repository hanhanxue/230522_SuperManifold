'use client'


// import dynamic from 'next/dynamic'
import { useState } from 'react'

// // Will only import `react-p5` on client-side
// const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
//   ssr: false,
// })
// // import Sketch from "react-p5"



import Button from '@/components/ui/Button'
import Slider from '@/components/ui/Slider'
import Toggle from '@/components/ui/Toggle'
import ControlsGroup from '@/components/ui/ControlsGroup'
import Dropdown from '@/components/ui/Dropdown'
import DropdownA, {Option} from '@/components/ui/DropdownA'
import BottomPanel from './BottomPanel'

import P5Sketch, {randomSrf, changeSceneScale} from './P5Sketch'
// import {randomSrf,changeSceneScale} from './P5Sketch'


import styles from './Viewer.module.scss'


import SidePanel from './SidePanel'


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
        {/* {sidePanelVisible && <SidePanel/>} */}
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



