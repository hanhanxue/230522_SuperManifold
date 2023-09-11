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


    // 
    const generateDelayDurations = (size) => {
        let newDelayDurations = [];
        for (let i = 1; i <= size; i++) {
            newDelayDurations.push(Math.random())
        }
        // remap to curve and range
        newDelayDurations = newDelayDurations.map(num => {
            return Math.round(num * num * maxDuration)
        })
    
        return newDelayDurations
    }
    // const initArray = new Array(10).fill(5000)
    // const [delayDurations, setDelayDurations] = useState(generateDelayDurations(10))
    const [delayDurations, setDelayDurations] = useState(new Array(10).fill(0))
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
        setDelayDurations(generateDelayDurations(10))
    }



    return (
        <>
        {/* 00 Default Header */}   {/* 1X */}
        <header className={`${styles.defaultHeader}`}>

            <div className={`${styles.tile}  ${styles.ident}`}>
                <div className={ `${styles.logoLockup}`}>
                    <span className={`logotype ${styles.logotype}`}>
                        Super Manifold®
                    </span>
            
                    <svg  className={`${styles.logo}`} xmlns="http://www.w3.org/2000/svg" width="63" height="30" viewBox="0 0 63 30" fill="none">
                        <path d="M33 0V30H63V0H33ZM57 18H51V24H45V18H39V12H45V6H51V12H57V18ZM45 12V18H51V12H45Z"/>
                        <path d="M15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18Z"/>
                        <path d="M0 0V30H30V0H0ZM15 24C13.22 24 11.4799 23.4722 9.99987 22.4832C8.51983 21.4943 7.36627 20.0887 6.68508 18.4442C6.0039 16.7996 5.82567 14.99 6.17293 13.2442C6.5202 11.4984 7.37737 9.89471 8.63604 8.63604C9.89471 7.37737 11.4984 6.5202 13.2442 6.17293C14.99 5.82567 16.7996 6.0039 18.4442 6.68508C20.0887 7.36627 21.4943 8.51983 22.4832 9.99987C23.4722 11.4799 24 13.22 24 15C23.9994 17.3868 23.051 19.6756 21.3633 21.3633C19.6756 23.051 17.3868 23.9994 15 24Z"/>
                    </svg>
                </div>
            </div>

            <div className={`${styles.tile} ${styles.menu}`}>
                <Burger isOpen={isMenuOpen} onMenuClick={handleMenuClick}/>
            </div >

        </header>


        <div className={`${styles.navModal} ${isMenuOpen ? styles.navModalOpen : ''}`}>
                {/* 01A Default Header */}   {/* 2X */}
                <header className={`${styles.headerGrid} `}>

                    <div className={`${styles.tile} ${styles.ident}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[0]}ms`}}> 
                    <div className={ `${styles.logoLockup}`}>

                        <span className={`logotype ${styles.logotype}`}>
                            Super Manifold®
                        </span>

                        <svg  className={`${styles.logo}`} xmlns="http://www.w3.org/2000/svg" width="63" height="30" viewBox="0 0 63 30" fill="none">
                            <path d="M33 0V30H63V0H33ZM57 18H51V24H45V18H39V12H45V6H51V12H57V18ZM45 12V18H51V12H45Z"/>
                            <path d="M15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18Z"/>
                            <path d="M0 0V30H30V0H0ZM15 24C13.22 24 11.4799 23.4722 9.99987 22.4832C8.51983 21.4943 7.36627 20.0887 6.68508 18.4442C6.0039 16.7996 5.82567 14.99 6.17293 13.2442C6.5202 11.4984 7.37737 9.89471 8.63604 8.63604C9.89471 7.37737 11.4984 6.5202 13.2442 6.17293C14.99 5.82567 16.7996 6.0039 18.4442 6.68508C20.0887 7.36627 21.4943 8.51983 22.4832 9.99987C23.4722 11.4799 24 13.22 24 15C23.9994 17.3868 23.051 19.6756 21.3633 21.3633C19.6756 23.051 17.3868 23.9994 15 24Z"/>
                        </svg>

                    </div>
                    </div>

                    <div className={`${styles.tile} ${styles.menu} `} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[1]}ms`}}>
                        <Burger isOpen={isMenuOpen} onMenuClick={handleMenuClick}/>
                    </div >

                </header>

                {/* 01B Small Screen Header */}   {/* 3X */}
                <header className={`${styles.headerGridSmall} ${styles.tile} `} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[8]}ms`}}>

                    <div className={`${styles.ident}`}>   
                    <div href="/" className={ `${styles.logoLockup}`}>

                        <span className={`logotype ${styles.logotype}`}>
                            Super Manifold®
                        </span>

                        <svg  className={`${styles.logo}`} xmlns="http://www.w3.org/2000/svg" width="63" height="30" viewBox="0 0 63 30" fill="none">
                            <path d="M33 0V30H63V0H33ZM57 18H51V24H45V18H39V12H45V6H51V12H57V18ZM45 12V18H51V12H45Z"/>
                            <path d="M15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18Z"/>
                            <path d="M0 0V30H30V0H0ZM15 24C13.22 24 11.4799 23.4722 9.99987 22.4832C8.51983 21.4943 7.36627 20.0887 6.68508 18.4442C6.0039 16.7996 5.82567 14.99 6.17293 13.2442C6.5202 11.4984 7.37737 9.89471 8.63604 8.63604C9.89471 7.37737 11.4984 6.5202 13.2442 6.17293C14.99 5.82567 16.7996 6.0039 18.4442 6.68508C20.0887 7.36627 21.4943 8.51983 22.4832 9.99987C23.4722 11.4799 24 13.22 24 15C23.9994 17.3868 23.051 19.6756 21.3633 21.3633C19.6756 23.051 17.3868 23.9994 15 24Z"/>
                        </svg>

                    </div>
                    </div>

                    <div className={`${styles.menu} `}>
                        <Burger isOpen={isMenuOpen} onMenuClick={handleMenuClick}/>
                    </div >

                </header>

                
                {/* 02 Nav Section */}
                <nav className={`${styles.navGrid}`}>
                    <div className={`${styles.tile} ${styles.tile_2c_1r}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[2]}ms`}}>
                        <h2 className={`body-4xl ${styles.tileLabel} `}>Work</h2>
                    </div> 

                    <div className={`${styles.tile} ${styles.tile_2c_1r}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[5]}ms`}}>
                        <h2 className={`body-4xl ${styles.tileLabel} `}>Process</h2>
                    </div>

                    <div className={`${styles.tile} ${styles.tile_1c_1r}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[3]}ms`}}>  
                        <h2 className={`body-4xl ${styles.tileLabel} `}>Studio</h2>
                    </div>

                    <div className={`${styles.tile} ${styles.tile_1c_1r}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[6]}ms`}}>
                        <h2 className={`body-4xl ${styles.tileLabel} `}>{`Let’s chat`}</h2>
                    </div>

                    <div className={`${styles.tile} ${styles.tile_1c_2r}`} style={{opacity: `${isMenuOpen ? '1' : '0'}`, transitionDelay: `${delayDurations[4]}ms`}}>
                        <h2 className={`body-4xl ${styles.tileLabel} `}>Contact</h2>
                        <div className={`${styles.tileCopy} `}>
                            <ul className={`body-xl `}>
                                <li>
                                    hello@supermanifold<br/>
                                    +1 628 523 5241
                                </li>
                                <li>
                                    Super Manifold Inc.<br/>
                                    5335 Boul. Saint-Laurent<br/>
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
                        <p className={`body-xl`}>©2023</p>
                    </div>
                    <div className={`${styles.social}`}>
                        <ul className={`body-xl `}>
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


