'use client'

import dynamic from 'next/dynamic'
// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

import styles from './P5Sketch.module.scss'







let p5I
let cnv

let refColor
let bgColor

let sceneScale = .5
let sceneScaleMin = .25
let sceneScaleMax = 1.5

let canvasCenterX
let canvasCenterY

let mainSrf
let refSrf

const init = (p5, canvasParentRef) => {
    p5I = p5

    refColor =  p5I.color('#EF382D')
    bgColor = p5I.color('#F6F6F6')

    cnv = p5I.createCanvas(1440, 720).parent(canvasParentRef)
    // cnv.style('display', 'inline')
    // cnv.style('height', '720px')

    cnv.style('display', 'block')

    cnv.style('position', 'absolute')
    cnv.style('top', '50%')
    cnv.style('left', '50%')
    cnv.style('transform', 'translate(-50%, -50%)')

    canvasCenterX = p5I.width / 2
    canvasCenterY = p5I.height / 2

    p5I.background(bgColor)
}




const setup = (p5, canvasParentRef) => {
    init(p5, canvasParentRef)

    mainSrf = createSrf(638, 553)
}
  
const draw = (p5) => {
}





export const createSrf = (width, height) => {
    let srf = new Surface(p5I,
        p5I.width - width / 2, 
    p5I.height - height / 2, 
    width, 
    height, 1)

    srf.display()

    return srf
}

export const randomSrf = (w, h) => {

    let width = w
    let height = h
    refSrf = new Surface(p5I,
        p5I.width - width / 2, 
    p5I.height - height / 2, 
    width, 
    height, 1)

    refSrf.displayRef()

    return refSrf
}


export const changeSceneScale = (e, value) => {
    sceneScale = p5I.map(value, 0, 100, sceneScaleMin, sceneScaleMax)

    p5I.background(bgColor)

    // refSrf.displayRef()
    mainSrf.display()

}




function gcd (a, b) {
    return (b == 0) ? a : gcd (b, a%b);
}





function Surface(p5I, x, y, srfWidth, srfHeight, scale) {
    this.x = x
    this.y = y

    this.srfWidth = srfWidth
    this.srfHeight = srfHeight
    this.srfRadius = 16


    this.scale = scale
    
    this.minX = - this.srfWidth / 2
    this.minY = - this.srfHeight / 2

    this.aspectRatio = p5I.round(this.srfWidth / this.srfHeight, 2)
    this.gcd = gcd(this.srfWidth, this.srfHeight)
    this.aspectRatioW = this.srfWidth / this.gcd
    this.aspectRatioH = this.srfHeight / this.gcd

    this.display = () => {
 
        p5I.push()

        // Translate to center
        p5I.translate(canvasCenterX, canvasCenterY)
        p5I.scale(sceneScale)

        // Styling
        p5I.noStroke()
        p5I.fill(0)


        // RECT
        p5I.rect(this.minX, this.minY, this.srfWidth, this.srfHeight, this.srfRadius)

        // Drop shadow
        p5I.drawingContext.shadowOffsetX = 0;
        p5I.drawingContext.shadowOffsetY = 32;
        p5I.drawingContext.shadowBlur = 64
        p5I.drawingContext.shadowColor = p5I.color(32, 80)

        // p5I.stroke(refColor)
        // p5I.strokeWeight(1)
        // p5I.noFill()
        // p5I.line(this.minX, this.minY, this.minX + this.srfWidth, this.minY + this.srfHeight)



        p5I.pop()


 
        // TEXT
        p5I.push()
        p5I.translate(canvasCenterX, canvasCenterY)
        p5I.textSize(13.0)
        p5I.textAlign(p5I.RIGHT, p5I.TOP)

        // Styling
        p5I.fill(refColor)

        p5I.text(`Aspect Ratio: ${this.aspectRatio}:1    Resolution: ${this.srfWidth} x ${this.srfHeight}`,
        (this.minX + this.srfWidth) * sceneScale - 16, 
        (this.minY + this.srfHeight) * sceneScale + 8)

        p5I.pop()

        p5I.push()
        

        p5I.pop()

    }

    this.displayRef = () => {

        p5I.push()

        // Translate to center
        p5I.translate(canvasCenterX, canvasCenterY)
        p5I.scale(sceneScale)

        // Styling
        p5I.stroke(refColor)
        p5I.fill(bgColor)


        // RECT
        p5I.rect(this.minX, this.minY, this.srfWidth, this.srfHeight, this.srfRadius)




        p5I.pop()


 
        // TEXT
        p5I.push()
        p5I.translate(canvasCenterX, canvasCenterY)
        p5I.textSize(13.0)
        p5I.textAlign(p5I.RIGHT, p5I.TOP)

        // Styling
        p5I.fill(refColor)

        p5I.text(`Aspect Ratio: ${this.aspectRatio}:1    Resolution: ${this.srfWidth} x ${this.srfHeight}`,
        (this.minX + this.srfWidth) * sceneScale - 16, 
        (this.minY + this.srfHeight) * sceneScale + 8)

        p5I.pop()

    }

}












const P5Sketch = () => {
    return (
        <Sketch setup={setup} draw={draw} className={`${styles.sketchFrame}`} />
    )
}
export default P5Sketch