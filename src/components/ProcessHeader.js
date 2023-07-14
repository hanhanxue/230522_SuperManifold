'use client' // This is a client component 👈🏽

import { useEffect, useState } from 'react'

import Image from 'next/image'


import Badge from '../components/Badge'
import Button from '../components/Button'
import styles from './ProcessHeader.module.scss'

export default function ProcessHeader() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 0);
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    

    return (

    <>


   
    <section className={`${styles.section} 
    ${isScrolled ? styles.borderBottom  : ''}`}> {/* SECTION */}
    <div className={`${styles.xFrame}`}> {/* X Frame */}
    <div className={`${styles.yFrame}
    ${isScrolled ? styles.yFrameScrolled  : ''} `}> {/* Y Frame */}           

    <div className={`${styles.header}`}>



        {/* Header LEFT SIDE*/} 
        <div className={`${styles.left}`}>
                  {/* Header Icon Frame*/}   
                  <span className={`${styles.iconFrame}`}>
                  <Image
                    src={`DisplayComposer.svg`}
                    width={48}
                    height={48}
                    alt="REPLACE"
                  />
                  </span>               


                  {/* Header Titles Frame*/}
                  <div className={`${styles.titles}`}>
                          {/* TOP ROW */}
                          <div className={`${styles.titlesTop}`}>
                              <h1 className={`text-xl font-medium ${styles.title}`}>Display Composer</h1>
          
                              <div className={`${styles.badgesFrame}`}>
                                {/* <Badge>Utility</Badge> */}
                                <Badge>2023</Badge>
                              </div>
                          </div>

                          {/* BOTTOM ROW */}
                          <div className={`${styles.titlesBottom}`}>
                            <h2 className={`text-base ${styles.subtitle}`}>Using P5 · Published 2 years ago</h2>
                          </div>

                  </div>
        </div>


 
        {/* Header RIGHT SIDE*/} 
        <div className={`${styles.right}`}>
          <Button kind='outlined' size='lg'>Share</Button>
        </div>

    


    </div>


    </div> {/* Y Frame */}
    </div> {/* X Frame */}
    </section> {/* SECTION */}
     
     
     </>


  

    )
}


// "w-[48rem] h-16 mx-auto flex items-center"
    // {/* <button className={`text-lg ${styles.testButton} `}><span>Share</span></button> */}
