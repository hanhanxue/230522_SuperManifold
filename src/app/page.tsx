
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

<section className={`display-4xl ${styles.heroSection}` } > 
      <h1>Spatial experience<br /> 
        design studio</h1>
    </section>
    
    <div className={`body-sm ${styles.seperator}` }>
      <p>Based in<br />
        Montreal, Canada
      </p>
      <p>Working<br />
        internationally
      </p>
      </div>
    <section  className={`${styles.coverSection}  ${styles.gridColSpan2}`}>


        {/* <div className={`${styles.gridItem}`}>
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
        </div> */}

        
        {/* <video 
        class="c-video_media is-inview" 
        poster="uploads/home/posterhome-2000w.jpg" 
        playsinline="" 
        muted="true" 
        loop="true" 
        src="https://player.vimeo.com/progressive_redirect/playback/792718372/rendition/720p/file.mp4?loc=external&amp;signature=b0c78c25f2f55ae3f00dca4e07238b15d319799aae345f3fbfce5a8d56c6692e"
        data-module-video-inview="m5" 
        data-scroll="" 
        data-scroll-repeat="" 
        data-scroll-call="toggle, VideoInview" 
        data-src="https://player.vimeo.com/progressive_redirect/playback/792718372/rendition/720p/file.mp4?loc=external&amp;signature=b0c78c25f2f55ae3f00dca4e07238b15d319799aae345f3fbfce5a8d56c6692e" data-src-mobile="https://player.vimeo.com/progressive_redirect/playback/793443646/rendition/540p/file.mp4?loc=external&amp;signature=242657e35d3787e2cb90fb59a5eed30aae9a604953d7db175f6c1d25ed0d887a" ></video> */}
        


        {/* <video
        className={`${styles.video} `}
         autoPlay 
         muted 
         loop >         
        <source src="/assets/videos/breadboard.mp4" type="video/mp4"/>    
        </video> */}
        <video
        className={`${styles.video} `}
         autoPlay 
         muted 
         loop >         
        <source src="/assets/videos/supermanifold_breadboard_v2.mp4" type="video/mp4"/>    
        </video>
        

    </section>

    <section className={`display-2xl ${styles.introSection}` }>
      <h2>
      Super Manifold is an independent interface & experience design studio. We craft immersive spatial experiences in the digital realm.
      </h2>
    </section>

    <section className={`display-xl ${styles.workSection}` }>

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
