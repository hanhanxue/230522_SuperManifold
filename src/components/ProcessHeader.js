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
        const scrollTop = window.pageYOffset;
        setIsScrolled(scrollTop > 0);
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    

    return (

    <>


    {/* SECTION */}
    <section className={`${styles.section} 
    ${isScrolled ? styles.borderBottom  : ''}`}>
    {/* X Container */}
    <div className={`${styles.XContainer}`}>
    {/* Y Container */}
    <div className={`${styles.YContainer}
    ${isScrolled ? styles.YContainerScrolled  : ''} `}>           

    <div className={`${styles.header} flex justify-between items-center`}>



        {/* Header LEFT SIDE*/} 
        <div className={`flex`}>
                  {/* Header Image*/}                  
                  <Image
                    className="rounded-xl mr-2"
                    src={`SuperManifold.svg`}
                    width={48}
                    height={48}
                    alt="REPLACE"
                  />

                  {/* Header Text*/}
                  <div className=''>
                          {/* Header Title     TOP ROW*/}
                          <div className='flex items-center'>
                              <h1 className="type-xl font-medium mr-2">Display Resolution</h1>
                              
                              <div className='flex gap-1'>
                                <Badge>Utility</Badge>
                                <Badge>2023</Badge>
                              </div>
                          </div>

                          {/* Header Details     BOTTOM ROW*/}
                          <div className={` text-zinc-600 `}>
                            <h2 className={`type-base`}>Utility app using P5.js</h2>
                          </div>

                  </div>
        </div>
        {/* ////////////////////////////////////////////////// Header RIGHT SIDE*/} 
        {/* Header RIGHT SIDE*/} 
        <Button kind='outlined' size='lg'>Share</Button>
        {/* <button className={`type-lg ${styles.testButton} `}><span>Share</span></button> */}



    </div>


    </div>
    {/* Y Container */}
    </div>
    {/* X Container */}
    </section>
    {/* SECTION */}
     
     
     </>


  

    )
}


// "w-[48rem] h-16 mx-auto flex items-center"