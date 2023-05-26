"use client"; // This is a client component 👈🏽


import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SuperManifoldLogo, { LogoTypes } from './SuperManifoldLogo';

interface IHeaderProps {
    primary?: string
    bg?: string
}


const Header: React.FC<IHeaderProps> = ( {primary='jet-stream', bg='cinnabar'}) => {

    const [isMinimal, setMinimal] = useState(false)

    useEffect(() => {
        const handler = () => {
                const threshold = 500
                // console.log(`pageY: ${window.pageYOffset}  body: ${document.body.scrollTop}  documentElement: ${document.documentElement.scrollTop}`)
                setMinimal((isMinimal) => {
                    // if(!isMinimal && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) return true
                    if(!isMinimal && (window.pageYOffset > threshold + 24)) return true

                    // if(isMinimal && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) return false
                    if(isMinimal && window.pageYOffset < threshold) return false

                    // console.log(isMinimal)
                    return isMinimal
                })
            }


        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, [])


    return (

        // <header className={`fixed w-full bg-gradient-to-b from-cinnabar ${isMinimal ? '-translate-y-6 ' : ''}  transition-transform duration-1000`}> {/* Containter Containter Containter*/}
       <header className={`sticky top-0 
       before:bg-gradient-to-b
       before:from-gray-500/30

       before:absolute
       before:h-full 
       before:w-full  
       before:-z-10

       before:opacity-0
       ${isMinimal ? 'before:opacity-100 ' : 'before:opacity-0'}
       before:transition-opacity
       before:duration-1000
       `}>
       <nav className={`text-lg  text-white  flex items-center py-6`}>
        
            <div className="basis-1/4 px-6">
                <Link href="/" className="">
                    Super Manifold® 
                </Link>
            </div>

            <div className="basis-1/4 px-6">
                <Link href="/" className="">
                <SuperManifoldLogo fillColor = "#fff" variant={LogoTypes.Logo}/>
                </Link>
            </div>



            {/* <div className="ml-auto px-6 ">
                <span className='text-base'>5 November 2023: UTC -5 / Eastern Standard Time</span>
            </div> */}

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