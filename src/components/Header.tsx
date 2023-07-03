"use client"; // This is a client component 👈🏽


import Link from 'next/link'

import { useEffect, useState } from 'react'
// import SuperManifoldLogo, { Logotypes } from './SuperManifoldLogo';


interface IHeaderProps {
    colorConfig?: {
        text: string
        bg: string
    }
    isFixed?: boolean
}


const Header: React.FC<IHeaderProps> = ( {colorConfig = {text: 'text-blue-700', bg: 'bg-red-700' }, isFixed = false}   ) => {

const threshold = 25 // Y threshold
const buffer = 24 // buffer to avoid style change flashing

const [isPastYThreshold, setIsPastYThreshold] = useState(false)

useEffect(() => {
    const handler = () => {

        setIsPastYThreshold((isPastYThreshold) => {
            if(isPastYThreshold && window.scrollY < threshold) return false
            if(!isPastYThreshold && window.scrollY > threshold + buffer) return true
            return isPastYThreshold
        })
    }

    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
}, [])






    return (

        <>

        <header
        className={`
  
        ${isFixed ? 'fixed w-full z-50 transition-colors duration-500' 
                  : 'sticky top-0 w-full bg-white after:block after:border-b'}
        ${isFixed && isPastYThreshold ? ' bg-white ' : ''}
        `}>


        {/* X Container */}
        <div className='mx-8'>
            {/* Y Container */}
            <nav className={`flex items-center justify-between py-4`}>
            
                <div className="text-2xl font-brand   ">
                    <Link href="/" className="">
                        Super Manifold®
                    </Link>
                </div>

                <div className="text-xl  ">
                    <ul className=" flex  justify-end">
                        <Link href="/" className=""><li className="first:ml-0 ml-8">Products</li></Link>
                        <Link href="/process" className=""><li className="ml-8">Process</li></Link>
                        <Link href="/info" className=""><li className="ml-8">Info</li></Link>
                    </ul>
                </div>

            </nav>
        </div>



            </header>
        </>

    )
}

export default Header










        // backdrop-blur-xl



//        before:from-gray-500/30
// <header className={`fixed w-full bg-gradient-to-b from-cinnabar ${isPastYThreshold ? '-translate-y-6 ' : ''}  transition-transform duration-1000`}> {/* Containter Containter Containter*/}
//    <header className={`sticky top-0  fixed w-full
// fixed w-full top-16



// fixed w-full

// before:transition-opacity
// before:duration-1000
//    ${isPastYThreshold ? 'before:opacity-100 ' : 'before:opacity-0'}

//    before:absolute
//    before:top-0
//    before:h-full 
//    before:w-full  
//    before:-z-10

//    before:bg-gradient-to-b
//    before:from-white/30 before:from-0%
//    before:via-white/10  before:via-50%

