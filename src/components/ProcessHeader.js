'use client' // This is a client component 👈🏽
import { useEffect, useState } from 'react'

import Image from 'next/image'

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
    <div className='mx-8'>
    {/* Y Container */}
    <div className={`${styles.YContainer}
    ${isScrolled ? styles.YContainerScrolled  : ''} `}>           




<div className={`flex w-[768px] justify-between items-center`}>




                         <div className={`flex`}>
        <Image
        className="rounded-xl mr-2"
        src={`SuperManifold.svg`}
        width={48}
        height={48}
        alt="REPLACE"
        />




        {/* Header */}
        <div className=''>
            <div>
        {/* Header Title*/}

        <div className='flex items-center'>
            <h1 className="text-xl font-medium mr-2">Screen Resolutions</h1>

            <div className='bg-zinc-100 px-2 rounded-[5px] mr-2'>
                <p className="text-base ">Utility</p>
            </div>
            <div className='bg-zinc-100 px-2 rounded-[5px] mr-2'>
                <p className="text-base ">2023</p>
            </div>
                   </div>

                   {/* Header Details*/}
                 <div className='flex items-center text-zinc-600 text-sm '>
                  <h2 className="text-base mr-4">Utility app using P5.js</h2>
                  </div>

              </div>
        </div>
                                                </div>


<div className={`py-2 px-4 rounded-[6px] text-lg text-white bg-blue-500 font-medium`}>Share</div>






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