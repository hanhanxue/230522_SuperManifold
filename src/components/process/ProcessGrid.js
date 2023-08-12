'use client'


// 02 EXTERNAL
import moment from 'moment';

// 03 REACT / NEXTJS
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


// 05 SUPERMANIFOLD COMPONENTS

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './ProcessGrid.module.scss'



const ProcessGrid = ({processPosts}) => {


    const router = useRouter()

    return (

        <>
        <section className={`${styles.section}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrame}`}> {/* Y Frame */}

        <div className={`${styles.gridContainer}`}>
        
        <ul className={`${styles.processGrid}`}>

{processPosts.map((post) => {

const momentObj = moment(post.extraData.publishDate)
const momentString = momentObj.format("MMM Do, YYYY")
const momentStringFromNow = momentObj.fromNow()

const goToPost = () => {router.push(`/process/${post.extraData.slug}`)}



        return (

          
                <li className={`${styles.gridItem}`} key={Math.random()}>
                    <div className={`${styles.card}`}>


                        <div className={`${styles.postImageFrame}`}>
                            <div className={`${styles.nextImageContainer}`}>
                                
                            <Image
                            src={post.extraData.coverImage.src}
                            // width={post.extraData.coverImage.dimensions ? post.extraData.coverImage.dimensions.width : 100}
                            // height={post.extraData.coverImage.dimensions ? post.extraData.coverImage.dimensions.height : 100}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt=''
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            draggable={false}

                        />

                            </div>

                        </div>

                        {post.extraData.isLink && 
                        
                        
                        <div className={`${styles.postInfoFrame}`}>
                        <div className={`${styles.postInfoFrameLeft}`}>
                        <div className={`text-sm ${styles.postDate}`}>
                            {momentString}
                            </div>

                            
                            <div className={`text-base-plus font-medium ${styles.postTitle}`}>
                            <Link href={`process/${post.extraData.slug}`} className="" ><span>{post.extraData.title}</span></Link>  
                            </div>
                            


                        </div>
                        <div className={`${styles.postInfoFrameRight}`}>
                            <button className={`${styles.linkButton}`} onClick={goToPost}>
                            <svg className={`${styles.arrow2}`}
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12L5 12" strokeWidth="1.5"/>
                            <path d="M13 6L19 12L13 18" strokeWidth="1.5"/>
                            </svg>
                            <svg className={`${styles.arrow}`}
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12L5 12" strokeWidth="1.5"/>
                            <path d="M13 6L19 12L13 18" strokeWidth="1.5"/>
                            </svg>
                                </button>
                        </div>
                
                    </div>
                        
                        
                        
                        
                        }



                    </div>
                    {/* <div className={`${styles.card}`}>
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

                    </div> */}
           
                </li>
        )
}
)}

</ul>
        </div>





        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </section> {/* SECTION */}
        </>

    )
}

export default ProcessGrid



