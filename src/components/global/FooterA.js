
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
                <div className={`${styles.logoLockup} ${styles.tile}`} > 
          
                    <svg  className={`${styles.logo}`} xmlns="http://www.w3.org/2000/svg" width="63" height="30" viewBox="0 0 63 30" fill="none">
                        <path d="M33 0V30H63V0H33ZM57 18H51V24H45V18H39V12H45V6H51V12H57V18ZM45 12V18H51V12H45Z"/>
                        <path d="M15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18Z"/>
                        <path d="M0 0V30H30V0H0ZM15 24C13.22 24 11.4799 23.4722 9.99987 22.4832C8.51983 21.4943 7.36627 20.0887 6.68508 18.4442C6.0039 16.7996 5.82567 14.99 6.17293 13.2442C6.5202 11.4984 7.37737 9.89471 8.63604 8.63604C9.89471 7.37737 11.4984 6.5202 13.2442 6.17293C14.99 5.82567 16.7996 6.0039 18.4442 6.68508C20.0887 7.36627 21.4943 8.51983 22.4832 9.99987C23.4722 11.4799 24 13.22 24 15C23.9994 17.3868 23.051 19.6756 21.3633 21.3633C19.6756 23.051 17.3868 23.9994 15 24Z"/>
                    </svg>
           
                <span className={`logotype ${styles.logotype}`}>
                    Super Manifold Inc.
                </span>
                </div>

                {/* 02 Menu Section */}
                <div className={`${styles.menuGrid}`} > 
                    <div className={`${styles.tile} ${styles.tile_4c_1r} ${styles.menu}`}>
                    <ul className={`body-xl `}>
                            <li>Work</li>
                            <li>Process</li>
                            <li>Studio</li>
                            <button className={`${styles.letsChatButton}`}>{`Let’s chat`}
                            <div className={`${styles.letsChatButtonIcon}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_540_45)">
                            <path d="M5 19L19 5" strokeWidth="2"/>
                            <path d="M7 6H18V17" strokeWidth="2"/>
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

                {/* 03 Contact Section */}
                <div className={`${styles.contactGrid}`} > 
                    <div className={`${styles.tile} ${styles.tile_4c_1r} ${styles.contact}`}>
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


                {/* 04 Copyright Section */}   {/* 2X */}
                <div className={`${styles.footerGrid} ${styles.tile}`} >
                    <div className={`${styles.copyright}`}>
                        <p className={`body-xl`}>©2023</p>
                        <button className={`body-xl ${styles.backToTopButton}`}>Back to top
                        <div className={`${styles.backToTopButtonIcon}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                        <path d="M12 19V5" strokeWidth="1.5" />
                        <path d="M6 11L12 5L18 11" strokeWidth="1.5" />
                        </svg>
                        </div>
                        </button>
                    </div>
                    <div className={`${styles.social}`}>
                        <ul className={`body-xl `}>
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