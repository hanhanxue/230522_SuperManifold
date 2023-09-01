'use client'
// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS
import {useEffect, useState} from 'react'
import Link from 'next/link'

// 05 SUPERMANIFOLD COMPONENTS
import Burger from '@/components/global/Burger'

// 07 SUPERMANIFOLD FUNCTIONS
import useScrollProgress from '@/lib/useScrollProgress'
import useFirstRender from '@/lib/useFirstRender'

// 11 SUPERMANIFOLD STYLES
import styles from './HeaderA.module.scss'


export default function HeaderA() {


    const maxDuration = 500

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const initArray = new Array(10).fill(5000)
    const [delayDurations, setDelayDurations] = useState(initArray)
    
    const firstRender = useFirstRender()
    // const scrollProgress = useScrollProgress()
    // console.log(scrollProgress)
    // When menu is closed / opened, we set the delays to 0 after maxDuration
    useEffect(() => {
        // using useFirstRender custom hook for debug purposes
        // Above we set the initial delay durations to 5000ms to test opacity is 1 on load issue
        
        if(!firstRender) {
            const timeout = setTimeout(() => {
                setDelayDurations(new Array(10).fill(0))
            }, maxDuration)
            return () => clearTimeout(timeout)
        }

    }, [isMenuOpen])


    // When menu is clicked, we set delays to random between 0 and maxDuration
    const handleMenuClick = () => {
        setIsMenuOpen((current) => !current)

        let newDelayDurations = [];
        for (let i = 0; i <= 9; i++) {
            newDelayDurations.push(Math.random())
        }
        // remap to curve and range
        newDelayDurations = newDelayDurations.map(num => {
            return num * num * maxDuration
        })
        setDelayDurations(newDelayDurations)
    }



    return (
        <>

        {/* 00 Default Header */}   {/* 1X */}
        <header className={`${styles.defaultHeader}`}>
            <div className={`${styles.tile} ${styles.logo}`}>   
                <Link href="/"><span className={`logotype ${styles.logotype}`}>
                    Super Manifold®
                </span></Link>
            </div>
            <div className={`${styles.tile} ${styles.menu}`}>
                <Burger isOpen={isMenuOpen} onMenuClick={handleMenuClick}/>
            </div >
        </header>
        





        <div className={`
            ${styles.navModal}
            ${isMenuOpen ? styles.navModalOpen : ''}
        `}>
                {/* 01A Default Header */}   {/* 2X */}
                <header className={`${styles.headerGrid} `}>
                    <div className={`${styles.tile} ${styles.logo}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[0]}ms`}}>   
                        <Link href="/"><span className={`logotype ${styles.logotype}`}>
                            Super Manifold®
                        </span></Link>
                    </div>
                    <div className={`${styles.tile} ${styles.menu} `} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[1]}ms`}}>
                        <Burger isOpen={isMenuOpen} onMenuClick={handleMenuClick}/>
                    </div >
                </header>
                {/* 01B Small Screen Header */}   {/* 3X */}
                <header className={`${styles.headerGridSmall} ${styles.tile} `} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[8]}ms`}}>
                    <div className={`${styles.logo}`}>   
                        <Link href="/"><span className={`logotype ${styles.logotype}`}>
                            Super Manifold®
                        </span></Link>
                    </div>
                    <div className={`${styles.menu} `}>
                        <Burger isOpen={isMenuOpen} onMenuClick={handleMenuClick}/>
                    </div >
                </header>
                {/* 02 Nav Section */}
                <nav className={`${styles.navGrid}`}>
                    <div className={`${styles.tile} ${styles.tile_2c_1r}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[2]}ms`}}>
                        <h2 className={`body-xl ${styles.tileLabel} `}>Work</h2>
                    </div> 

                    <div className={`${styles.tile} ${styles.tile_2c_1r}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[5]}ms`}}>
                        <h2 className={`body-xl ${styles.tileLabel} `}>Process</h2>
                    </div>

                    <div className={`${styles.tile} ${styles.tile_1c_1r}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[3]}ms`}}>  
                        <h2 className={`body-xl ${styles.tileLabel} `}>Studio</h2>
                    </div>

                    <div className={`${styles.tile} ${styles.tile_1c_1r}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[6]}ms`}}>
                        <h2 className={`body-xl ${styles.tileLabel} `}>{`Let’s chat`}</h2>
                    </div>

                    <div className={`${styles.tile} ${styles.tile_1c_2r}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[4]}ms`}}>
                        <h2 className={`body-xl ${styles.tileLabel} `}>Contact</h2>
                        <div className={`${styles.tileCopy} `}>
                            <ul className={`body-base `}>
                                <li>
                                    hello@supermanifold<br/>
                                    +1 628 523 5241
                                </li>
                                <li>
                                    Super Manifold Inc.<br/>
                                    5335 Saint-Laurent<br/>
                                    Montreal, QC, H2T 1S1<br/>
                                    Canada
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* 03 Copyright Section */}   {/* 1X */}
                <div className={`${styles.footerGrid} ${styles.tile}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[7]}ms`}}>
                    <div className={`${styles.copyright}`}>
                        <p className={`body-base`}>©2023</p>
                    </div>
                    <div className={`${styles.social}`}>
                        <ul className={`body-base `}>
                            <li>Github</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>

        </div>

  
  
        </>
    )
}


