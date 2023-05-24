"use client"; // This is a client component 👈🏽


import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'




const Header = () => {

    const [isMinimal, setMinimal] = useState(false)

    useEffect(() => {
        const handler = () => {
                const threshold = 64
                // console.log(`pageY: ${window.pageYOffset}  body: ${document.body.scrollTop}  documentElement: ${document.documentElement.scrollTop}`)
                setMinimal((isMinimal) => {
                    // if(!isMinimal && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) return true
                    if(!isMinimal && (window.pageYOffset > threshold)) return true

                    // if(isMinimal && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) return false
                    if(isMinimal && window.pageYOffset < threshold - 24) return false

                    // console.log(isMinimal)
                    return isMinimal
                })
            }


        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, [])


    return (

        // <header className={`fixed w-full bg-gradient-to-b from-cinnabar ${isMinimal ? '-translate-y-6 ' : ''}  transition-transform duration-1000`}> {/* Containter Containter Containter*/}
       <header className={`sticky top-0`}>
       <nav className={`text-lg  text-black  flex items-center py-6`}>
        
            <div className="basis-1/4 px-6">
                <Link href="/" className="">
                    Super Manifold® 
                </Link>
            </div>

            <div className="basis-1/4 px-6">
                <Link href="/" className="">
                <Image 
                    alt="Super Manifold Logo"
                    src="logos/2305122_supermanifold_264x36_jet-stream.svg" 
                    height={36} 
                    width={264} 
                />  
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


    )
}

export default Header


// sticky top-0