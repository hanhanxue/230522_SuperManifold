

import Image from 'next/image'
import Link from 'next/link'


import Header from '@/components/global/Header'



import {getProcessPosts} from '@/lib/serverUtilities'



import styles from '../../components/ProcessGrid.module.scss'



export const metadata = {
    title: 'Process ▼ Super Manifold®',
  };
  
  

export default async function Process() {

    const processPosts = await getProcessPosts()

    return (
    <>
        <Header />

   
        <section className={`${styles.section}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrame}`}> {/* Y Frame */}

        <ul className={`${styles.processGrid}`}>

            {processPosts.map((post) => {

// console.log(post.extraData.coverImage.dimensions ? post.extraData.coverImage.dimensions.height : 100)
                // console.log(post)
                // console.log(post.isDir)

   
                    return (
                            <li key={Math.random()}>
                     
                              <div className={`${styles.card}`}>
                              <Link href={`process/${post.extraData.slug}`} >
                                <Image
                                  src={post.extraData.coverImage.src}
                                  width={post.extraData.coverImage.dimensions ? post.extraData.coverImage.dimensions.width : 100}
                                  height={post.extraData.coverImage.dimensions ? post.extraData.coverImage.dimensions.height : 100}
                                />
                                </Link>

                                {post.extraData.isLink && 
                                <button className={`${styles.button}`}>
                                    <span className={`${styles.arrow}`}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 20L8 20" stroke="black" strokeWidth="2"/>
<path d="M21 9L32 20L21 31" stroke="black" strokeWidth="2"/>
</svg></span>
                                </button>
                              }

                              </div>
                       
                            </li>
                   
                    )
              


            }


            )}

        </ul>



        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </section> {/* SECTION */}
   

    </>

       
    )
}



