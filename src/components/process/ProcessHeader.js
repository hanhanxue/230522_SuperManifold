'use client' // This is a client component 👈🏽

// 02 EXTERNAL
import moment from 'moment';

// 03 REACT / NEXTJS
import { useEffect, useState } from 'react'
import Image from 'next/image'


// 05 SUPERMANIFOLD COMPONENTS
import Button from '@/components/ui/Button'

// 11 SUPERMANIFOLD STYLES
import styles from './ProcessHeader.module.scss'


export default function ProcessHeader({title, publishDate, kind}) {

  // console.log(publishDate)

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
    

    const momentObj = moment(publishDate)
    const momentString = momentObj.format("MMM Do, YYYY")
    const momentStringFromNow = momentObj.fromNow()
    let using = ''

    switch(kind) {
      case 'UNITY':
        using = 'Unity'
        break;
        case 'P5JS':
          using = 'P5JS'
          break;
      default:
        using = 'Unspecified'
    }

    

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
                  {/* <span className={`${styles.iconFrame}`}>
                  <Image
                    src={`DisplayComposer.svg`}
                    width={48}
                    height={48}
                    alt="REPLACE"
                  />
                  </span>                */}


                  {/* Header Titles Frame*/}
                  <div className={`${styles.titles}`}>
                          {/* TOP ROW */}
                          <div className={`${styles.titlesTop}`}>
                              <h1 className={`
                              text-base-plus
                               font-medium ${styles.title}`}>{title}</h1>
          
                              <div className={`${styles.badgesFrame}`}>
                                {/* <Badge>Utility</Badge> */}
                                {/* <Badge>2023</Badge> */}
                              </div>
                          </div>

                          {/* BOTTOM ROW */}
                          <div className={`${styles.titlesBottom}`}>
                          <div className={`text-sm ${styles.subtitle}`}>
                            <span>{momentString} </span>
                            <span className={`${styles.gray}`}>({momentStringFromNow}) </span>
                            <span>· </span>
                            <span>Using {using}</span>
                          </div>
                          </div>

                  </div>
        </div>


 
        {/* Header RIGHT SIDE*/} 
        <div className={`${styles.right}`}>
        {/* <Button kind='outlined' size='lg'>Source</Button> */}
          {/* <Button kind='contained' size='lg'>Share</Button> */}
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
