
// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS


// 05 SUPERMANIFOLD COMPONENTS


// 07 SUPERMANIFOLD FUNCTIONS


// 11 SUPERMANIFOLD STYLES
import styles from './FooterA.module.scss'


export default function FooterA({opacity}) {


    return (
        <>
        <div className={`${styles.footerSpacer}`}>
            <footer className={`${styles.footer}`}
            style={{opacity: `${opacity}`}}> 

                {/* 01 Logotype Section */}
                <div className={`${styles.logotypeGrid} ${styles.tile}`} > 
                <span className={`logotype ${styles.logotype}`}>
                    Super Manifold Inc.
                </span>
                </div>

                {/* 02 Menu Section */}
                <div className={`${styles.menuGrid}`} > 
                    <div className={`${styles.tile} ${styles.tile_4c_1r} ${styles.menu}`}>
                    <ul className={`brand-base `}>
                            <li>Work</li>
                            <li>Process</li>
                            <li>Studio</li>
                            <button className={`${styles.letsChatButton}`}>{`Let’s chat`}
                            <div className={`${styles.letsChatButtonIcon}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_540_45)">
                            <path d="M5 19L19 5" stroke="white" strokeWidth="2"/>
                            <path d="M7 6H18V17" stroke="white" strokeWidth="2"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_540_45">
                            <rect width="14" height="14" transform="translate(5 5)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </div>

                            </button>
                                
                            
                        </ul>
                    </div>
                </div>

                {/* 02 Menu Section */}
                <div className={`${styles.contactGrid}`} > 
                    <div className={`${styles.tile} ${styles.tile_4c_1r} ${styles.contact}`}>
                        <ul className={`brand-base `}>
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


                {/* 03 Copyright Section */}   {/* 2X */}
                <div className={`${styles.footerGrid} ${styles.tile}`} >
                    <div className={`${styles.copyright}`}>
                        <p className={`brand-base`}>©2023</p>
                        <button className={`brand-base ${styles.backToTopButton}`}>Back to top
                        <div className={`${styles.backtotopButtonIcon}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 19V5" strokeWidth="1.5" stroke="white"/>
                            <path d="M6 11L12 5L18 11" strokeWidth="1.5" stroke="white"/>
                        </svg>
                        </div>
                        </button>
                    </div>
                    <div className={`${styles.social}`}>
                        <ul className={`brand-base `}>
                            <li>Github</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>

                
            </footer>

        </div>

        </>
    )
}