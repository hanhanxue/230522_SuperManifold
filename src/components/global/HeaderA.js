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
    const handleMenuClick = () => {
        setIsMenuOpen((current) => !current)
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
            <header className={`${styles.headerGrid}`}>
                <div className={`${styles.tile} ${styles.logo}`} style={{transitionDelay: '.2s'}}>   
                    <Link href="/"><p className={`brand-base ${styles.logotype}`}>
                        Super Manifold®
                    </p></Link>
                </div>
                <div className={`${styles.tile} ${styles.menu} `} style={{transitionDelay: '.1s'}}>
                    <Burger isOpen={isMenuOpen} onMenuClick={handleMenuClick}/>
                </div >
            </header>


            <nav className={`${styles.navGrid}`}>
                <div className={`${styles.tile} ${styles.tile_2c_1r}`} style={{transitionDelay: '.23s'}}>
                    <h2 className={`brand-xl ${styles.tileLabel} `}>Work</h2>
                </div>
                <div className={`${styles.tile} ${styles.tile_1c_1r}`} style={{transitionDelay: '..8s'}}>  
                    <h2 className={`brand-xl ${styles.tileLabel} `}>Studio</h2>
                </div>

                <div className={`${styles.tile} ${styles.tile_1c_2r}`} style={{transitionDelay: '..5s'}}>
                    <h2 className={`brand-xl ${styles.tileLabel} `}>Contact</h2>
                    <div className={`${styles.tileCopy} `}>
                        <ul className={`brand-base `}>
                            <li>
                                hello@supermanifold.com<br/>
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

                <div className={`${styles.tile} ${styles.tile_2c_1r}`} style={{transitionDelay: '.12s'}}>
                    <h2 className={`brand-xl ${styles.tileLabel} `}>Process</h2>
                </div>
                <div className={`${styles.tile} ${styles.tile_1c_1r}`} style={{transitionDelay: '.3s'}}>
                    <h2 className={`brand-xl ${styles.tileLabel} `}>{`Let's chat`}</h2>
                </div>
            </nav>




            <div className={`${styles.footerGrid} ${styles.tile}`} style={{transitionDelay: '.18s'}}>
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

        </div>
  
        </>
    )
}


