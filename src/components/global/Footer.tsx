

// 02 EXTERNAL

// 03 REACT / NEXTJS
import Link from 'next/link'


// 05 SUPERMANIFOLD COMPONENTS
import Burger from '@/components/global/Burger'

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from "./Footer.module.scss"


const Footer = (  ) => {



    return (

    <>

<footer className={`${styles.section}`}>

        <div className={`${styles.topSection}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrameTop}`}> {/* Y Frame */}

            <nav className={`${styles.topSectionGrid}`}>
                <div className={`${styles.footerMenu} ${styles.gridColSpan4}`}>
                    <h2 className={`text-base-plus font-medium ${styles.menuTitle}`}>Super Manifold Inc.</h2>
                </div>
                <div className={`${styles.footerMenu} ${styles.gridColSpan2}`}>
                    <h2 className={`text-base-plus font-medium ${styles.menuTitle}`}>Menu</h2>
                    <ul className={`text-base-plus ${styles.menuList}`}>
                        <li className={` ${styles.menuListItem}`}>Experiences</li>
                        <li className={` ${styles.menuListItem}`}>Process</li>
                        <li className={` ${styles.menuListItem}`}>Info</li>
                        
                    </ul>
                </div>
                <div className={`${styles.footerMenu} ${styles.gridColSpan2}`}>
                    <h2 className={`text-base-plus font-medium ${styles.menuTitle}`}>Social</h2>
                    <ul className={`text-base-plus ${styles.menuListLast}`}>
                        <li className={` ${styles.menuListItem}`}>Instagram</li>
                        <li className={` ${styles.menuListItem}`}>Threads</li>
                        <li className={` ${styles.menuListItem}`}>LinkedIn</li>
                        <li className={` ${styles.menuListItem}`}>GitHub</li>
                    </ul>
                </div>
            </nav>

        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </div> {/* SECTION */}



        <div className={`${styles.bottomSection}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrameBottom}`}> {/* Y Frame */}
            <div className={`text-base-plus ${styles.bottomSectionGrid}`}>
                <p className={`${styles.yearSection}`}>©2023</p>
                <p className={`${styles.rightsSection}`}>All rights reserved.</p>
                <div className={`${styles.buttonSection}`}>
                <Link href="#top">
                <button className={`text-base-plus ${styles.footerBaseButton}`}>
             
                    {/* <svg  className={` ${styles.buttonIcon}`}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V22" stroke="black" strokeWidth="2"/>
                    <path d="M3 11L12 2L21 11" stroke="black" strokeWidth="2"/>
                    </svg> */}

                    {/* <svg 
                    className={` ${styles.buttonIcon}`}
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V22" strokeWidth="2"/>
                    <path d="M3 11L12 2L21 11" strokeWidth="2"/>
                    </svg> */}

<svg 
className={` ${styles.buttonIcon}`}
width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C11.4477 22 11 21.5523 11 21V5C11 4.44772 11.4477 4 12 4V4C12.5523 4 13 4.44772 13 5V21C13 21.5523 12.5523 22 12 22V22Z"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L20 9.58578C20.3905 9.97631 20.3905 10.6095 20 11V11C19.6095 11.3905 18.9763 11.3905 18.5858 11L12.7071 5.12132C12.3166 4.73079 11.6834 4.73079 11.2929 5.12132L5.41421 11C5.02369 11.3905 4.39052 11.3905 4 11V11C3.60947 10.6095 3.60947 9.97631 4 9.58579L11.2929 2.29289Z"/>
</svg>

{/* <svg 
className={` ${styles.buttonIcon}`}
id="_s-footer-top-arrow" viewBox="0 0 40 40">
        <path d="M20,31c-0.552,0-1-0.447-1-1V12.414l-5.293,5.293c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414l7-7c0.096-0.096,0.208-0.169,0.326-0.218C19.735,9.027,19.863,9,19.997,9l0,0c0.002,0,0.004,0,0.006,0l0,0c0.134,0,0.262,0.027,0.378,0.075c0.119,0.049,0.23,0.122,0.326,0.218l7,7c0.391,0.391,0.391,1.023,0,1.414s-1.023,0.391-1.414,0L21,12.414V30C21,30.553,20.552,31,20,31z"></path>
    </svg> */}

                
                </button>
                </Link>
                </div>
            </div>
        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </div> {/* SECTION */}

    
        </footer>

    </>




    )
}

export default Footer