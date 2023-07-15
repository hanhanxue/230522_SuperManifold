//P5Sketch.js

'use client'

import { useState } from 'react'

import dynamic from 'next/dynamic'
// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})



import styles from './P5Sketch.module.scss'


let p
let cnv

let refColor
let bgColor

let sceneScale = .25


let canvasCenterX
let canvasCenterY

let displaySrf
let referenceSrf


const setup = (p5, canvasParentRef) => {
    p = p5

    refColor =  p.color('#F01C1C')
    bgColor = p.color('#F6F6F6')

    cnv = p.createCanvas(1440, 720).parent(canvasParentRef)

    cnv.style('display', 'block') // remove tiny gap at the bottom

    cnv.style('position', 'absolute')
    cnv.style('top', '50%')
    cnv.style('left', '50%')
    cnv.style('transform', 'translate(-50%, -50%)')

    canvasCenterX = p.width / 2
    canvasCenterY = p.height / 2

    p.background(bgColor)
    // p.background(refColor)

}
  
const draw = (p5) => {}

export const drawSrfs = async () => {
    await waitForP5Initialization()

    p.background(bgColor)
    p.push()

    // Translate to center
    p.translate(canvasCenterX, canvasCenterY)
    p.scale(sceneScale)

    if(displaySrf.visibility) {
                  // Drop shadow, need to happen BEFORE the shape draw
                  p.drawingContext.shadowOffsetX = 0;
                  p.drawingContext.shadowOffsetY = 16 * sceneScale;
                  p.drawingContext.shadowBlur = 64 * sceneScale
                  p.drawingContext.shadowColor = p.color(32, 80)
                  // p.drawingContext.shadowColor = p.color(255, 0, 0, 255)
            // Styling
            p.noStroke()
            // p.noFill()
            p.fill(0)
    

    
            // RECT
            p.rect(displaySrf.minX, displaySrf.minY, displaySrf.srfWidth, displaySrf.srfHeight, displaySrf.srfRadius)
    }

    if(referenceSrf.visibility) {
                  // Drop shadow, need to happen BEFORE the shape draw
                  p.drawingContext.shadowOffsetX = 0;
                  p.drawingContext.shadowOffsetY = 0;
                  p.drawingContext.shadowBlur = 0
           
    // Drawing reference Srf
        // Styling
        p.stroke(refColor)
        p.noFill()



        p.strokeWeight(.25 / sceneScale)
        p.line(referenceSrf.minX, -p.height / sceneScale, referenceSrf.minX, p.height / sceneScale)
        p.line(referenceSrf.minX + referenceSrf.srfWidth, -p.height / sceneScale, referenceSrf.minX + referenceSrf.srfWidth, p.height / sceneScale)
        p.line(-p.width / sceneScale, referenceSrf.minY, p.width / sceneScale, referenceSrf.minY)
        p.line(-p.width / sceneScale, referenceSrf.minY + referenceSrf.srfHeight, p.width / sceneScale, referenceSrf.minY + referenceSrf.srfHeight)
    
            // RECT
            p.strokeWeight(1  / sceneScale)
            p.rect(referenceSrf.minX, referenceSrf.minY, referenceSrf.srfWidth, referenceSrf.srfHeight, 0)
            // p.rect(referenceSrf.minX, referenceSrf.minY, referenceSrf.srfWidth, referenceSrf.srfHeight, 0)
    }
    
    p.pop()
}

export const scaleCanvas = (value) => {
  sceneScale = value
  // console.log(sceneScale)
  drawSrfs()
}


const waitForP5Initialization = () => {
    return new Promise((resolve) => {
      const checkInitialization = () => {
        if (p) {
          resolve()
        } else {
          setTimeout(checkInitialization, 100)
        }
      }
      checkInitialization()
    })
  }


// export const createDisplaySrf = (width, height) => {
//     displaySrf = createSrf(width, height)
// }

export const createDisplaySrf = async (width, height, visibility) => {
    displaySrf = await createSrf(width, height, visibility)
    // console.log(displaySrf)
  }

export const createReferenceSrf = async (width, height, visibility) => {
    referenceSrf = await createSrf(width, height, visibility)
}

const createSrf = async(width, height, visibility) => {
    await waitForP5Initialization()
    let srf = new Surface(p, 
        p.width - width / 2, p.height - height / 2, 
        width, height, 
        1,
        visibility,
    )

    return srf
}



function Surface(p, x, y, srfWidth, srfHeight, scale, visibility) {
    this.x = x
    this.y = y

    this.srfWidth = srfWidth
    this.srfHeight = srfHeight
    this.srfRadius = 32

    this.visibility = visibility

    this.scale = scale
    
    this.minX = - this.srfWidth / 2
    this.minY = - this.srfHeight / 2

    this.aspectRatio = p.round(this.srfWidth / this.srfHeight, 2)
    // this.gcd = gcd(this.srfWidth, this.srfHeight)
    // this.aspectRatioW = this.srfWidth / this.gcd
    // this.aspectRatioH = this.srfHeight / this.gcd
    this.draw = () => {
        p.background(refColor)
        p.push()

        // Translate to center
        p.translate(canvasCenterX, canvasCenterY)
        p.scale(sceneScale)

            // Styling
            p.noStroke()
            p.fill(0)
    
            // Drop shadow, need to happen BEFORE the shape draw
            p.drawingContext.shadowOffsetX = 0;
            p.drawingContext.shadowOffsetY = 16;
            p.drawingContext.shadowBlur = 64
            p.drawingContext.shadowColor = p.color(32, 64)
    
            // RECT
            p.rect(this.minX, this.minY, this.srfWidth, this.srfHeight, this.srfRadius)

            // // Drawing reference Srf
            // // Styling
            // p.stroke(refColor)
            // p.strokeWeight(3)
    
            // // RECT
            // p.rect(referenceSrf.minX, referenceSrf.minY, referenceSrf.srfWidth, referenceSrf.srfHeight, referenceSrf.srfRadius)

        p.pop()
    }
}



const P5Sketch = () => {
    return (
        <Sketch setup={setup} draw={draw} className={`${styles.sketchFrame}`} />
    )
}

export default P5Sketch







// this.display = () => {

//     p.push()

//     // Translate to center
//     p.translate(canvasCenterX, canvasCenterY)
//     p.scale(sceneScale)

//             // Styling
//             p.noStroke()
//             p.fill(0)
    
//             // Drop shadow, need to happen BEFORE the shape draw
//             p.drawingContext.shadowOffsetX = 0;
//             p.drawingContext.shadowOffsetY = 16;
//             p.drawingContext.shadowBlur = 64
//             p.drawingContext.shadowColor = p.color(32, 64)
    
//             // RECT
//             p.rect(this.minX, this.minY, this.srfWidth, this.srfHeight, this.srfRadius)

//     p.pop()


    // // TEXT
    // p.push()
    // p.translate(canvasCenterX, canvasCenterY)
    // p.textSize(13.0)
    // p.textAlign(p.RIGHT, p.BOTTOM)

    // // Styling
    // p.fill(refColor)

    // p.text(`Aspect Ratio: ${this.aspectRatio}:1    Resolution: ${this.srfWidth} x ${this.srfHeight}`,
    // (this.minX + this.srfWidth) * sceneScale - 16, 
    // (this.minY + this.srfHeight) * sceneScale -16)

    // p.pop()
// }

// this.displayRef = () => {

//     p.push()

//     // Translate to center
//     p.translate(canvasCenterX, canvasCenterY)
//     p.scale(sceneScale)

//             // Styling
//             p.stroke(refColor)
//             p.strokeWeight(3)
//             p.noFill()
    
//             // // Drop shadow, need to happen BEFORE the shape draw
//             // p.drawingContext.shadowOffsetX = 0;
//             // p.drawingContext.shadowOffsetY = 16;
//             // p.drawingContext.shadowBlur = 64
//             // p.drawingContext.shadowColor = p.color(32, 64)
    
//             // RECT
//             p.rect(this.minX, this.minY, this.srfWidth, this.srfHeight, this.srfRadius)

//     p.pop()


    // // TEXT
    // p.push()
    // p.translate(canvasCenterX, canvasCenterY)
    // p.textSize(13.0)
    // p.textAlign(p.CENTER, p.BOTTOM)

    // // Styling
    // p.fill(refColor)

    // p.text(`Aspect Ratio: ${this.aspectRatio}:1    Resolution: ${this.srfWidth} x ${this.srfHeight}`,
    // 0, 
    // p.height / 2 - 16)

    // p.pop()

// }


// export const randomSrf = (w, h) => {

//     let width = w
//     let height = h
//     refSrf = new Surface(p,
//         p.width - width / 2, 
//     p.height - height / 2, 
//     width, 
//     height, 1)

//     refSrf.displayRef()

//     return refSrf
// }
