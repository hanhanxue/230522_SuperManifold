'use client'

import dynamic from 'next/dynamic'
// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

import styles from './Viewer.module.scss'




let p5I
let cnv

let refColor
let bgColor

const setup = (p5, canvasParentRef) => {
    init(p5, canvasParentRef)
    // createSrf(1920, 1080)
}
  
const draw = (p5) => {
    // randomSrf()
}

const init = (p5, canvasParentRef) => {
    p5I = p5

    refColor =  p5I.color(255, 0, 0)
    bgColor = p5I.color('#F6F6F6')

    cnv = p5I.createCanvas(1440, 720).parent(canvasParentRef)
    p5I.background(bgColor)
    
    // cnv.class('rounded-2xl')
}



const createSrf = (width, height) => {
    let srf = new Surface(p5I,
        p5I.width - width / 2, 
    p5I.height - height / 2, 
    width, 
    height, 1)

    srf.display()
}

export const randomSrf = () => {
    let width = p5I.random(500, 1000)
    let height = p5I.random(500, 1000)
    // p5I.background(bgColor)

    let srf = new Surface(p5I,
        p5I.width - width / 2, 
    p5I.height - height / 2, 
    width, 
    height, .5)

    srf.display()

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







const P5Sketch = () => {
    return (
        <Sketch setup={setup} draw={draw} className={`${styles.sketchFrame}`} />
    )
}

export default P5Sketch