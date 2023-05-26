"use client"; // This is a client component 👈🏽


import Link from 'next/link'

import { useEffect, useState } from 'react'
import SuperManifoldLogo, { Logotypes } from './SuperManifoldLogo';


interface IHeaderProps {
    colorConfig: {
        text: string
        bg: string
    }
    spacer?: boolean
}


const Header: React.FC<IHeaderProps> = ( {colorConfig = {text: 'text-blue-700', bg: 'bg-red-700' }, spacer = false}   ) => {

    const threshold = 128 // Y threshold
    const buffer = 24 // buffer to avoid style change flashing

    const [isPastYThreshold, setIsPastYThreshold] = useState(false)

    useEffect(() => {
        const handler = () => {

            setIsPastYThreshold((isPastYThreshold) => {
                if(isPastYThreshold && window.pageYOffset < threshold) return false
                if(!isPastYThreshold && window.pageYOffset > threshold + buffer) return true
                return isPastYThreshold
            })
        }

        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, [])



    return (

<>
<header className={`
    fixed w-full

    before:transition-opacity
    before:duration-1000
       ${isPastYThreshold ? 'before:opacity-100 ' : 'before:opacity-0'}

       before:absolute
       before:top-0
       before:h-full 
       before:w-full  
       before:-z-10

       before:bg-gradient-to-b
       before:from-white/30 before:from-0%
       before:via-white/10  before:via-50%


       `}>


        <nav className={`text-lg  flex items-center py-6 ${colorConfig.text}`}>
            
                <div className="basis-1/4 px-6">
                    <Link href="/" className="">
                        Super Manifold® 
                    </Link>
                </div>

                <div className="basis-1/4 px-6">
                    <Link href="/" className="">
                    <SuperManifoldLogo variant={Logotypes.Lockup}/>
                    </Link>
                </div>

                <div className="basis-2/4 px-6">
                    <ul className=" flex  justify-end">
                        <Link href="/" className=""><li className="first:ml-0 ml-10">Products</li></Link>
                        <Link href="/" className=""><li className="ml-10">Process</li></Link>
                        <Link href="/info" className=""><li className="ml-10">Info</li></Link>
                    </ul>
                </div>

            </nav>


    </header>



    {spacer && <div className={`h-[5.25rem] ${colorConfig.bg}`}></div>}

</>

    )
}

export default Header




//        before:from-gray-500/30
// <header className={`fixed w-full bg-gradient-to-b from-cinnabar ${isPastYThreshold ? '-translate-y-6 ' : ''}  transition-transform duration-1000`}> {/* Containter Containter Containter*/}
//    <header className={`sticky top-0  fixed w-full
// fixed w-full top-16

