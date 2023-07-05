// 'use client'


// import dynamic from 'next/dynamic'


// // Will only import `react-p5` on client-side
// const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
//   ssr: false,
// })
// // import Sketch from "react-p5"




import Button from '../../../components/Button'
import Slider from '../../../components/Slider'
import ControlsGroup from '../../../components/ControlsGroup'
import P5Sketch from './P5Sketch'
import {randomSrf} from './P5Sketch'


import styles from './Viewer.module.scss'







const Viewer = () => {



    return (
        <>
    {/* SECTION */}
    <section className={`${styles.section}`}>
    {/* FRAME X */}
    <div className={`${styles.frameX}`}>
    {/* FRAME Y */}
    <div className={`${styles.frameY}`}>      




    <div className={`${styles.viewerframe}`}>


    <P5Sketch />


        <div className={`${styles.sidePanelContainer}`}>

            <Slider  />
        </div>

<div className={`${styles.bottomPanelContainer}`}>




        <ControlsGroup label='Global'>
            <Button kind='ghost' size='sm' onClick={randomSrf}>Generate</Button>
            <Button kind='ghost' size='sm' >Clear</Button>
        </ControlsGroup>

        <ControlsGroup label='Global'>
            <Button kind='ghost' size='sm' >Generate</Button>
            <Button kind='ghost' size='sm' >Clear</Button>
        </ControlsGroup>


</div>

    </div>






    </div>
    </div>
    </section>



        </>

    )
}

export default Viewer



