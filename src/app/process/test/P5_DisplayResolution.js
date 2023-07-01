'use client'


import dynamic from 'next/dynamic'
// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})
// import Sketch from "react-p5"

const P5_DisplayResolution = (width) => {

    let surface
    let cnv


    const setup = (p5, canvasParentRef) => {
        cnv = p5.createCanvas(1280, 720).parent(canvasParentRef)
        // cnv.style('display', 'block')
        // cnv.style('border-radius', '16px')
        // canvasParentRef.style('border-radius', '16px')
        cnv.class('rounded-2xl')
        // console.log(canvasParentRef)
        cnv.mousePressed((event) => {
            p5.background('#F6F6F6')
            let width = p5.int(p5.random(600, 1280))
            let height = p5.int(p5.random(500, 720))
            surface = new Surface(p5, p5.width - width / 2, p5.height - height / 2, width, height, .5)
            surface.display()
        })
        
        p5.background('#F6F6F6')



        surface = new Surface(p5, p5.width - 1280 / 2, p5.height - 720 / 2, 1280, 720, .5)
        surface.display()

    }
      
    const draw = (p5) => {

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
            p5.fill(29, 193, 33)
            p5.text(`${this.srfWidth} x ${this.srfHeight}`, this.srfWidth - 16, this.srfHeight - 16)

            p5.pop()
        }

    }


    return (
            <Sketch setup={setup} draw={draw} />
    )
}

export default P5_DisplayResolution