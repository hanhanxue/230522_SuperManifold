
// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS
import Image from 'next/image'

// 05 SUPERMANIFOLD COMPONENTS
import Header from '@/components/global/Header'
import CodePractice from '@/components/info/CodePractice'
import HeroText from '@/components/info/HeroText'
import InfoCover from '@/components/info/InfoCover'


// 07 SUPERMANIFOLD FUNCTIONS



// 11 SUPERMANIFOLD STYLES
// import styles from './Info.module.scss'




export const metadata = {
  title: 'Info ▼ Super Manifold®',
};



export default function Info() {
    return (
 <>

<Header hasBorder={false} kind='info'/>
<InfoCover />

{/* <CodePractice 
          listName="Code of Practice"
          listItems ={[
          'Focus on doing good work, the rest will follow.', 
          'Play fair.', 
          'Go slow and think long term.',
          'People is everything. Find the really good people, and create a universe they want to be part of.',
          'Seek out kindness, most people are nice, far fewer are kind.',
          'Take pride in what we do and win the respect of those we admire.',
          'We are what we eat, and this applies equality to the information we consume. Therefore be very intentional with what we feed our minds.',
          'Be intellectually rigorous. Strive for both accuracy and precision in our signals.',
          'Share our ideas.',
          'Be someone who provides accurate long form answers to questions on the internet.',
          'Explain things in ways a child would understand.',
          'Critical thinking skills, or common sense, is far more valuable than any formal education or specific skill set.',
          'Steer clear of using acronyms, nobody knows what they mean and it only impresses the wrong people.',
          'Create work with a memorable story in a beautiful language.',
          'Create work we are proud to share with those we care about the most.',
          'We don’t know what we don’t know, therefore learn as much as possible about as much as we can.',
          'Don’t go to Silicon Valley, the time for that has long passed.',
          'Remember that in the end it’s all luck.',


      ]} /> */}









   </>
    )
}




{/* <div className="h-16 bg-cinnabar"></div>  */}
{/*THIS IS PRETTY HACK!! Pushing down the page to compensate for fixed header*/}






{/* 

      <HeroText copy="Super Manifold is based in Montreal, Canada🅐" fontSize='text-3xl'/>

      {/* <Footer colorConfig={{text: 'text-jet-stream', 

bg: 'bg-cinnabar', 
bg2: 'bg-jet-stream'}}/> */}



// <div className={`${styles.heroSection}`}>
//       <div className={`${styles.heroContent}`}>
//         <h1 className={`text-xl ${styles.heroText} c-heading -h1`} data-allow-shuffle="">
//                     {/* <span aria-hidden="true">🔶</span> Locomotive®  <br />
//                     Digital-first Design Agency<span aria-hidden="true">🍺🔞</span> */}
//                     We craft spatial experiences for the digital realm.

//                 </h1>
//       </div>
//       <div className={`${styles.heroBackground}`}>
//                     <div className={`${styles.heroVideo}`}>
//                       <div className={`${styles.heroImageMedia}`}>
//                         <Image 
//                         src={`/assets/images/image2.jpg`}
//                         fill={true}
//                         style={{objectFit: "cover"}}
//                         alt=''
//                         />
//                       </div>
//                         {/* <video className={`${styles.heroVideoMedia}`} poster="" muted={true} loop={true}
//                         src="https://player.vimeo.com/progressive_redirect/playback/792718372/rendition/720p/file.mp4?loc=external&signature=b0c78c25f2f55ae3f00dca4e07238b15d319799aae345f3fbfce5a8d56c6692e"
//                         /> */}
//                     </div>

//       </div>
// </div>












     
//       <HeroText copy="We craft electronic products for the future of work and play🅐" />

//       <CodePractice 
//           listName="Code of Practice"
//           listItems ={[
//           'Focus on doing good work, the rest will follow.', 
//           'Play fair.', 
//           'Go slow and think long term.',
//           'People is everything. Find the really good people, and create a universe they want to be part of.',
//           'Seek out kindness, most people are nice, far fewer are kind.',
//           'Take pride in what we do and win the respect of those we admire.',
//           'We are what we eat, and this applies equality to the information we consume. Therefore be very intentional with what we feed our minds.',
//           'Be intellectually rigorous. Strive for both accuracy and precision in our signals.',
//           'Share our ideas.',
//           'Be someone who provides accurate long form answers to questions on the internet.',
//           'Explain things in ways a child would understand.',
//           'Critical thinking skills, or common sense, is far more valuable than any formal education or specific skill set.',
//           'Steer clear of using acronyms, nobody knows what they mean and it only impresses the wrong people.',
//           'Create work with a memorable story in a beautiful language.',
//           'Create work we are proud to share with those we care about the most.',
//           'We don’t know what we don’t know, therefore learn as much as possible about as much as we can.',
//           'Don’t go to Silicon Valley, the time for that has long passed.',
//           'Remember that in the end it’s all luck.',


//       ]}
//       />




// <div className={`${styles.container}`}>
  


//   <div className={`${styles.oScroll}`}> 
//       <main className={`${styles.main}`}>
//         <div className={`${styles.cHomeHero}`}>

//           <div className={`${styles.cHomeHeroContent}`}>
//             <h1 className={`text-xl ${styles.cHeading}`}>We craft immersive spatial experiences for the digital realm.</h1>
//           </div>
//           <div className={`${styles.cHomeHeroBackground}`}>
//             <div className={`${styles.cHomeHeroVideo}`}>
//               <div className={`${styles.cImage}`}>
//               <Image 
//               className={`${styles.cImageImage}`}
//                         src={`/assets/images/image2.jpg`}
//                         fill={true}

//                         alt=''
//                         />
//               </div>
//               <div className={`${styles.cVideo}`}></div>
//             </div>
          
//           </div>

//         </div>
//         <div className={`${styles.oContainer}`}>



//         </div>
//         <div className={`${styles.cFooter}`}></div>

//       </main>
    
//   </div>

//   <div className={`${styles.cVideoModal}`}></div>

// </div>


