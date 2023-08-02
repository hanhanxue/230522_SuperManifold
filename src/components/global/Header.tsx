"use client"; // This is a client component 👈🏽


import Link from 'next/link'


import { useEffect, useState } from 'react'

import styles from './Header.module.scss'


interface IHeaderProps {
    colorConfig?: {
        text: string
        bg: string
    }
    isFixed?: boolean
    hasBorder?: boolean
}


const Header: React.FC<IHeaderProps> = ( {
    hasBorder = false,
}) => {


const [isScrolled, setIsScrolled] = useState(false);

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((current) => !current)
}

const handleMenuItemClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    // e.preventDefault();
    if(isMobileMenuOpen) setIsMobileMenuOpen(false)
}



// console.log(isMobileMenuOpen)

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [])


    return (

        <>

        <header className={`${styles.header} ${styles.headerSticky} 
        ${isScrolled ? styles.headerScrolled  : ''}
        ${hasBorder ? styles.headerBordered  : ''}
        `}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrame}`}> {/* Y Frame */}



                {/* Nav Logo */}
                <div className={` font-brand`}>
                    <Link href="/" className={``}>
                        Super Manifold®
                    </Link>
                </div>

                {/* Nav Links */}
                <nav className={`${styles.defaultNav}
                 ${isMobileMenuOpen ? styles.defaultNavOpen : ''}
                `}>
                    <ul className={`text-base-plus ${styles.linksList}`}>
                        <li onClick={handleMenuItemClick}><Link href="/" className="" >Experiences</Link></li>
                        <li onClick={handleMenuItemClick}><Link href="/process" className="">Process</Link></li>
                        <li onClick={handleMenuItemClick}><Link href="/info" className="">Info</Link></li>
                    </ul>
                </nav>
                
     
                {/* Nav Burger */}
                <div className={`${styles.burgerWrapper}`}>
                <button onClick={handleMobileMenuToggle} className={`${styles.burger}
                        ${isMobileMenuOpen ? styles.burgerOpen : '' }
                        `}>
                        <span className={`${styles.burgerLine}`}/>
                        <span className={`${styles.burgerLine}`}/>
                        <span className={`${styles.burgerLine}`}/>
                </button>
                </div>

     

        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </header> {/* SECTION */}
{/*         
        <div className={`${styles.overlay}
        ${isMobileMenuOpen ? styles.OverlayOpen : '' }`}></div> */}
        </>

    )
}

export default Header







// ${isFixed ? 'fixed w-full z-50 transition-colors duration-500' 
// : 'sticky top-0 w-full bg-white/80 '}
// ${isFixed && isPastYThreshold ? ' bg-white after:block after:border-b' : ''}


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

// import SuperManifoldLogo, { Logotypes } from './SuperManifoldLogo';


// const threshold = 25 // Y threshold
// const buffer = 24 // buffer to avoid style change flashing

// const [isPastYThreshold, setIsPastYThreshold] = useState(false)

// useEffect(() => {
//     const handler = () => {

//         setIsPastYThreshold((isPastYThreshold) => {
//             if(isPastYThreshold && window.scrollY < threshold) return false
//             if(!isPastYThreshold && window.scrollY > threshold + buffer) return true
//             return isPastYThreshold
//         })
//     }

//     window.addEventListener("scroll", handler)
//     return () => window.removeEventListener("scroll", handler)
// }, [])

// colorConfig = {text: 'text-blue-700', bg: 'bg-red-700' }, 
// isFixed = false,