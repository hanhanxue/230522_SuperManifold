'use client'
// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS
import {useEffect, useState} from 'react'
import Link from 'next/link'

// 05 SUPERMANIFOLD COMPONENTS
import Burger from '@/components/global/Burger'

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './HeaderA.module.scss'


export default function HeaderA() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [delayDurations, setDelayDurations] = useState([])

    const maxDuration = 500

    // When menu is closed / opened, we set the delays to 0 after maxDuration
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDelayDurations(new Array(10).fill(0))
        }, maxDuration)

        return () => clearTimeout(timeout)
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


        <header className={`${styles.defaultHeader}`}>
            <div className={`${styles.tile} ${styles.logo}`}>   
                <Link href="/"><p className={`brand-base ${styles.logotype}`}>
                    Super Manifold®
                </p></Link>
            </div>
            <div className={`${styles.tile} ${styles.menu}`}>
                <Burger isOpen={isMenuOpen} onMenuClick={handleMenuClick}/>
            </div >
        </header>
        







        <div className={`
            ${styles.navModal}
            ${isMenuOpen ? styles.navModalOpen : ''}
        `}>
                {/* 01A Default Header */}
                <header className={`${styles.headerGrid} `}>
                    <div className={`${styles.tile} ${styles.logo}`} style={{transitionDelay: `${delayDurations[0]}ms`}}>   
                        <Link href="/"><p className={`brand-base ${styles.logotype}`}>
                            Super Manifold®
                        </p></Link>
                    </div>
                    <div className={`${styles.tile} ${styles.menu} `} style={{transitionDelay: `${delayDurations[1]}ms`}}>
                        <Burger isOpen={isMenuOpen} onMenuClick={handleMenuClick}/>
                    </div >
                </header>
                {/* 01B Small Screen Header */}
                <header className={`${styles.headerGridSmall} ${styles.tile} `} style={{transitionDelay: `${delayDurations[8]}ms`}}>
                    <div className={`${styles.logo}`}>   
                        <Link href="/"><p className={`brand-base ${styles.logotype}`}>
                            Super Manifold®
                        </p></Link>
                    </div>
                    <div className={`${styles.menu} `}>
                        <Burger isOpen={isMenuOpen} onMenuClick={handleMenuClick}/>
                    </div >
                </header>
                {/* 02 Nav Section */}
                <nav className={`${styles.navGrid}`}>
                    <div className={`${styles.tile} ${styles.tile_2c_1r}`} style={{transitionDelay: `${delayDurations[2]}ms`}}>
                        <h2 className={`brand-xl ${styles.tileLabel} `}>Work</h2>
                    </div> 

                    <div className={`${styles.tile} ${styles.tile_2c_1r}`} style={{transitionDelay: `${delayDurations[5]}ms`}}>
                        <h2 className={`brand-xl ${styles.tileLabel} `}>Process</h2>
                    </div>

                    <div className={`${styles.tile} ${styles.tile_1c_1r}`} style={{transitionDelay: `${delayDurations[3]}ms`}}>  
                        <h2 className={`brand-xl ${styles.tileLabel} `}>Studio</h2>
                    </div>

                    <div className={`${styles.tile} ${styles.tile_1c_1r}`} style={{transitionDelay: `${delayDurations[6]}ms`}}>
                        <h2 className={`brand-xl ${styles.tileLabel} `}>{`Let's chat`}</h2>
                    </div>

                    <div className={`${styles.tile} ${styles.tile_1c_2r}`} style={{transitionDelay: `${delayDurations[4]}ms`}}>
                        <h2 className={`brand-xl ${styles.tileLabel} `}>Contact</h2>
                        <div className={`${styles.tileCopy} `}>
                            <ul className={`brand-base `}>
                                <li>
                                    hello@supermnf<br/>
                                    +1 628 523 5241
                                </li>
                                <li>
                                    Super Manifold Inc.<br/>
                                    5335 Saint-Laurent<br/>
                                    Montreal QC H2T 1S1<br/>
                                    Canada
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* 03 Copyright Section */}
                <div className={`${styles.footerGrid} ${styles.tile}`} style={{transitionDelay: `${delayDurations[7]}ms`}}>
                    <div className={`${styles.copyright}`}>
                        <p className={`brand-base`}>©2023</p>
                    </div>
                    <div className={`${styles.social}`}>
                        <ul className={`brand-base `}>
                            <li>Github</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
            {/* <div className={`${styles.scrollable}`}>

            </div> */}

        </div>

  
  
        </>
    )
}


