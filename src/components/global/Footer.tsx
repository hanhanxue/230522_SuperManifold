import Link from 'next/link'

import SuperManifoldLogo, {Logotypes} from './SuperManifoldLogo'

import styles from "./Footer.module.scss"




const Footer = (  ) => {



    return (

    <>
        <footer className={`${styles.section}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrame}`}> {/* Y Frame */}

            <nav className={`${styles.navGrid}`}>
                <div className={`${styles.footerMenu} ${styles.gridColSpan4}`}>
                    <h2 className={`text-base-plus font-medium ${styles.menuTitle}`}>Super Manifold Inc.</h2>
                    <ul className={`text-base-plus ${styles.menuList}`}>
                        <li className={` ${styles.menuListItem}`}></li>
                        <li className={` ${styles.menuListItem}`}></li>
                        <li className={` ${styles.menuListItem}`}></li>

                    </ul>
                </div>
                <div className={`${styles.footerMenu} ${styles.gridColSpan2}`}>
                    <h2 className={`text-base-plus font-medium ${styles.menuTitle}`}>Menu</h2>
                    <ul className={`text-base-plus ${styles.menuList}`}>
                        <li className={` ${styles.menuListItem}`}>Product</li>
                        <li className={` ${styles.menuListItem}`}>Process</li>
                        <li className={` ${styles.menuListItem}`}>Info</li>
                        
                    </ul>
                </div>
                <div className={`${styles.footerMenu} ${styles.gridColSpan2}`}>
                    <h2 className={`text-base-plus font-medium ${styles.menuTitle}`}>Social</h2>
                    <ul className={`text-base-plus ${styles.menuList}`}>
                        <li className={` ${styles.menuListItem}`}>Instagram</li>
                        <li className={` ${styles.menuListItem}`}>Threads</li>
                        <li className={` ${styles.menuListItem}`}>LinkedIn</li>
                        <li className={` ${styles.menuListItem}`}>GitHub</li>
                    </ul>
                </div>
            </nav>

            <div className={`text-base-plus ${styles.footerBase}`}>
                <p>©2023</p>
                <p className={`${styles.rights}`}>All rights reserved.</p>
                <button className={`text-base-plus ${styles.footerBaseButton}`}>
                    <Link href="#top">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20 8V32" stroke="black" strokeWidth="2"/>
<path d="M9 19L20 8L31 19" stroke="black" strokeWidth="2"/>
</svg></Link>
                </button>
            </div>

        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </footer> {/* SECTION */}



    </>




    )
}

export default Footer