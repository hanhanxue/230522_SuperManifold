
'use client'

import { useEffect, useState } from "react"
export default function useScrollProgress() {

    const [progress, setProgress] = useState(0)



    useEffect(() => {
        const updateScrollProgress = () => {
            const currentProgress = window.scrollY
            const scrollHeightValid = document.body.scrollHeight - window.innerHeight
            if(scrollHeightValid) {
                setProgress(
                    currentProgress / scrollHeightValid
                )
            }
            // console.log(document.body.scrollHeight)
        }

        window.addEventListener('scroll', updateScrollProgress)

        return () => {
            window.removeEventListener('scroll', updateScrollProgress)
        }
    }, [])


    return progress


}