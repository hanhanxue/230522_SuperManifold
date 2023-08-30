
// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS
import { Metadata } from 'next'
import Image from 'next/image'

// 05 SUPERMANIFOLD COMPONENTS
import Header from '@/components/global/Header';
import HeaderA from '@/components/global/HeaderA';
import HomeGrid from '../components/home/HomeGrid'

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES

import styles from '@/components/home/HomeGrid.module.scss'




export default function Home() {


  return (
    <>
    <section className={`brand-4xl ${styles.heroSection}` } > 
      <h1>Spatial experience design studio</h1>
    </section>

    <section  className={`${styles.coverSection}  ${styles.gridColSpan2}`}>


        <div className={`${styles.gridItem}`}>
        <div className={`${styles.card}`}>
        <div className={`${styles.postImageFrame}`}>
        <div className={`${styles.nextImageContainer}`}>
        <Image
                        className={`${styles.postImage}`}
                        src={`/assets/images/printworks-adambeyer.jpg`}
                        fill={true}
                        
                        alt=''
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        draggable={false}
                    />
          </div>
        </div>

        </div>
        </div>

        <video autoPlay muted loop className={`${styles.video} `}>         
        {/* <source src="/assets/videos/supermanifold_breadboard_v2.mp4" type="video/mp4"/>          */}
        <source src="/content/home/supermanifold_breadboard_v2.mp4" type="video/mp4"/>  
        </video>

    </section>

    <section className={`brand-2xl ${styles.introSection}` }>
      <h2>
      Super Manifold is an independent interface & experience design studio specialized in crafting meaningful spatial experiences.
      </h2>
    </section>
    <section className={`brand-xl ${styles.workSection}` }>

    </section>


    {/* Established in 2010, Broadwick Live is from London, UK. With a strong focus on creating impact through electronic music and electronic arts, we are driven to create pure yet powerful live experiences in our unique spaces.  */}

    {/* Our aim is to create experiences that stick with people on an emotional level */}

    {/* Signal-A is an award-winning interface & experience design studio specialized in creating meaningful digital products. */}
    </>
  )
  
  

}






export const metadata: Metadata = {
  metadataBase: new URL('https://supermanifold.com'),

  title: 'Super Manifold®',
  description: 'Crafting spatial experiences for the digital realm.',

  viewport: 'initial-scale=1.0, maximum-scale=2.0, width=device-width, user-scalable=yes, minimal-ui',

  openGraph: {
    title: 'Super Manifold®',
    description: 'Crafting spatial experiences for the digital realm.',
    url: 'https://www.supermanifold.com/',
    siteName: 'Super Manifold®',
    images: [
      {
        url: 'https://www.supermanifold.com/images/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
