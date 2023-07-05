'use client'


import dynamic from 'next/dynamic'


// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})
// import Sketch from "react-p5"




import Button from '../../../components/Button'
import Slider from '../../../components/Slider'
import ControlsGroup from '../../../components/ControlsGroup'


import styles from './Viewer.module.scss'

let p5Instance


const Viewer = () => {

    let surface
    let cnv
    let p5Instance
    let refColor
    let surfaces = []

    const setup = (p5, canvasParentRef) => {
        p5Instance = p5

        refColor =  p5.color(255, 0, 0)
        // console.log(refColor)

        cnv = p5.createCanvas(1440, 720).parent(canvasParentRef)

        cnv.class('rounded-2xl')
        p5.background('#F6F6F6')

        surfaces.push(RandomizeSurface(p5Instance))
        surfaces.forEach((srf, index) => {
            srf.displayRef()
          })

    }
      
    const draw = (p5) => {
    }

    const RandomizeSurface = (p5) => {
        // p5.background('#F6F6F6')
        let width = p5.int(p5.random(600, 1280))
        let height = p5.int(p5.random(500, 720))
        surface = new Surface(p5, p5.width - width / 2, p5.height - height / 2, width, height, .5)
        // surface.display()
        // surface.displayRef()
        return surface
    }

        
    const handleAddClick = () => {

        if (p5Instance) {

            surfaces.push(RandomizeSurface(p5Instance))
            p5Instance.background('#F6F6F6')
          }

          surfaces.forEach((srf, index) => {
            if (index < surfaces.length - 1) srf.displayRef()
            if (index = surfaces.length - 1) srf.display()
          })
    }

    const handleClearClick = () => {

    }

    const handleSliderChange = (e, value) => {
        // console.log(value)
        if (p5Instance) {
            p5Instance.background('#F6F6F6')
            surface.srfWidth = p5Instance.map(value, 0, 100, 200, 1024)
            surface.display()
          }

        
    }


    function Surface(p5, x, y, srfWidth, srfHeight, scale) {
        this.x = x
        this.y = y

        this.srfWidth = srfWidth
        this.srfHeight = srfHeight
        this.srfRadius = 16

        this.scale = scale


        this.display = () => {
            p5.push()
            p5.scale(this.scale)
            p5.translate(this.x, this.y)

            p5.noStroke()
            p5.fill(0)

            p5.drawingContext.shadowOffsetX = 0;
            p5.drawingContext.shadowOffsetY = 32;
            p5.drawingContext.shadowBlur = 64
            p5.drawingContext.shadowColor = p5.color(32, 80)
            p5.rect(0, 0, this.srfWidth, this.srfHeight, this.srfRadius)

            p5.textSize(16)
            p5.textAlign(p5.RIGHT, p5.BASELINE)
            p5.fill(refColor)
            p5.text(`${this.srfWidth} x ${this.srfHeight}`, this.srfWidth - 16, this.srfHeight - 16)
            // lable('test', 10, 10)

            p5.pop()
        }

        this.displayRef = () => {
       
            p5.scale(this.scale)
            p5.translate(this.x, this.y)
            p5.noFill()
            p5.stroke(refColor)
            p5.rect(0, 0, this.srfWidth, this.srfHeight, this.srfRadius)
      

            lable(`${this.srfWidth} x ${this.srfHeight}`, this.srfWidth - 16, this.srfHeight - 16)

        }
    }

    const lable = (text, padding_r, padding_b) => {
        p5Instance.textSize(16)
        p5Instance.textAlign(p5Instance.RIGHT, p5Instance.BASELINE)
        p5Instance.fill(refColor)
        p5Instance.text(`${text}`, padding_r, padding_b)
    }

















    return (
        <>
    {/* SECTION */}
    <section className={`${styles.section}`}>
    {/* FRAME X */}
    <div className={`${styles.frameX}`}>
    {/* FRAME Y */}
    <div className={`${styles.frameY}`}>      




    <div className={`${styles.viewerframe}`}>

    <Sketch setup={setup} draw={draw} className={`${styles.canvasframe}`} />


        <div className={`${styles.sidePanelContainer}`}>

            <Slider onChange={handleSliderChange} />
        </div>

<div className={`${styles.bottomPanelContainer}`}>




        <ControlsGroup label='Global'>
            <Button kind='ghost' size='sm' onClick={handleAddClick}>Generate</Button>
            <Button kind='ghost' size='sm' onClick={handleClearClick}>Clear</Button>
        </ControlsGroup>

        <ControlsGroup label='Global'>
            <Button kind='ghost' size='sm' onClick={handleAddClick}>Generate</Button>
            <Button kind='ghost' size='sm' onClick={handleClearClick}>Clear</Button>
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











        // cnv.style('display', 'block')
        // cnv.style('border-radius', '16px')
        // canvasParentRef.style('border-radius', '16px')
        // cnv.class('rounded-2xl')
        // console.log(canvasParentRef)

        // cnv.mousePressed(e => {
        //     RandomizeSurface(p5)
        // })


        
        // slider = p5.createSlider(0, 255, 100);
        // slider.position(25 , 25);
        // slider.style('width', '80px');

        
        // console.log(canvasParentRef)
        // console.log(cnv)
