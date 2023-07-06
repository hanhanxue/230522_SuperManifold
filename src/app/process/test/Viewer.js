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
import {randomSrf,changeSceneScale} from './P5Sketch'


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




        <div className={`${styles.sidePanel}`}>











                <div className={`${styles.block}`}>
        
                    <div className={`${styles.row}`}>
                        <div className={`type-sm  font-medium ${styles.blockLabel}`}>Display</div>


                            <button className={`type-sm ${styles.sideButton}`}><span>
                            <svg class="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M5 5V0h1v5h5v1H6v5H5V6H0V5h5z" fill-rule="nonzero" fill-opacity="1" fill="#000" stroke="none"></path></svg>
                         
                                
                                </span></button>
                        </div>

                        <div className={`${styles.row}`}>
                        <div className={`${styles.combobox}`}>
                        <div className={`type-sm ${styles.comboboxLabel}`}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="3.5" width="15" height="9" rx="1.5" stroke="#9B9B9B"/>
</svg>
</div>
                        <div className={`type-sm ${styles.comboboxText}`}>HD</div>
                        <div className={`type-sm ${styles.comboboxCaret}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7L8 10L11 7" stroke="black"/>
</svg>
</div>
                        </div>
                        </div>



                    <div className={`${styles.row}`}>
                        <div className={`${styles.input}`}>
                        <div className={`type-sm ${styles.inputLabel}`}>W</div>
                        <div className={`type-sm ${styles.inputText}`}>1920</div>
                        </div>

                        <div className={`${styles.input}`}>
                        <div className={`type-sm ${styles.inputLabel}`}>H</div>
                        <div className={`type-sm ${styles.inputText}`}>1080</div>
                        </div>



                        </div>

                        
   
                                   
                    <div className={`${styles.row}`}>
                        <div className={`type-sm  ${styles.info}`}>Aspect ratio: 16:9</div>
        </div>


                </div>





            
                <div className={`${styles.block}`}>
        
                    <div className={`${styles.row}`}>
                        <div className={`type-sm  font-medium ${styles.blockLabel}`}>Reference</div>


                            <button className={`type-sm ${styles.sideButton}`}><span>
                            <svg class="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M5 5V0h1v5h5v1H6v5H5V6H0V5h5z" fill-rule="nonzero" fill-opacity="1" fill="#000" stroke="none"></path></svg>
                         
                                
                                </span></button>
                        </div>

                        <div className={`${styles.row}`}>
                        <div className={`${styles.combobox}`}>
                        <div className={`type-sm ${styles.comboboxLabel}`}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="3.5" width="15" height="9" rx="1.5" stroke="#9B9B9B"/>
</svg>
</div>
                        <div className={`type-sm ${styles.comboboxText}`}>Custom</div>
                        <div className={`type-sm ${styles.comboboxCaret}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7L8 10L11 7" stroke="black"/>
</svg>
</div>
                        </div>
                        </div>



                    <div className={`${styles.row}`}>
                        <div className={`${styles.input}`}>
                        <div className={`type-sm ${styles.inputLabel}`}>W</div>
                        <div className={`type-sm ${styles.inputText}`}>1920</div>
                        </div>

                        <div className={`${styles.input}`}>
                        <div className={`type-sm ${styles.inputLabel}`}>H</div>
                        <div className={`type-sm ${styles.inputText}`}>1080</div>
                        </div>



                        </div>

                        
   
                                   
                    <div className={`${styles.row}`}>
                        <div className={`type-sm  ${styles.info}`}>Aspect ratio: 16:9</div>
        </div>


                </div>



                <div className={`${styles.block}`}>
        
                    <div className={`${styles.row}`}>
                        <div className={`type-sm  font-medium ${styles.blockLabel}`}>Settings</div>


                            <button className={`type-sm ${styles.sideButton}`}><span>
                            <svg class="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M5 5V0h1v5h5v1H6v5H5V6H0V5h5z" fill-rule="nonzero" fill-opacity="1" fill="#000" stroke="none"></path></svg>
                         
                                
                                </span></button>
                        </div>

                        <div className={`${styles.row}`}>
                        <div className={`${styles.combobox}`}>
                        <div className={`type-sm ${styles.comboboxLabel}`}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="3.5" width="15" height="9" rx="1.5" stroke="#9B9B9B"/>
</svg>
</div>
                        <div className={`type-sm ${styles.comboboxText}`}>HD</div>
                        <div className={`type-sm ${styles.comboboxCaret}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7L8 10L11 7" stroke="black"/>
</svg>
</div>
                        </div>
                        </div>



                    <div className={`${styles.row}`}>
                        <div className={`${styles.input}`}>
                        <div className={`type-sm ${styles.inputLabel}`}>W</div>
                        <div className={`type-sm ${styles.inputText}`}>1920</div>
                        </div>

                        <div className={`${styles.input}`}>
                        <div className={`type-sm ${styles.inputLabel}`}>H</div>
                        <div className={`type-sm ${styles.inputText}`}>1080</div>
                        </div>



                        </div>

                        
   
                                   
                    <div className={`${styles.row}`}>
                        <div className={`type-sm  ${styles.info}`}>Aspect ratio: 16:9</div>
        </div>


                </div>

                </div>
            {/* <Slider  onChange={changeSceneScale}/> */}



        </div>

    </div>

    <div className={`${styles.bottomPanelContainer}`}>




<ControlsGroup label='Global'>
    <Button kind='ghost' size='sm' onClick={randomSrf}>Generate</Button>
    <Button kind='ghost' size='sm' onClick={changeSceneScale}>Clear</Button>
</ControlsGroup>

<ControlsGroup label='Global'>
    <Button kind='ghost' size='sm' >Generate</Button>
    <Button kind='ghost' size='sm' >Clear</Button>
</ControlsGroup>


</div>




    </div>
    </div>
    </section>



        </>

    )
}

export default Viewer



