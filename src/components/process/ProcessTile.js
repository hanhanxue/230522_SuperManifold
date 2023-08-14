'use client'


// 02 EXTERNAL
import moment from 'moment'


// 03 REACT / NODE / NEXTJS
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {useState} from 'react'


// 05 SUPERMANIFOLD COMPONENTS
import ProcessButton from '@/components/process/ProcessButton'

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './ProcessTile.module.scss'


const ProcessTile = ({  post  }) => {


    const momentObj = moment(post.extraData.publishDate)
    const momentString = momentObj.format("MMM Do, YYYY")
    const momentStringFromNow = momentObj.fromNow()

    const router = useRouter()
    const goToPost = () => {router.push(`/process/${post.extraData.slug}`)}

    const [isButtonActivated, setIsButtonActivated] = useState(false)


    return (

        <>
        <li className={`${styles.gridItem}`} key={Math.random()}>
            <div className={`${styles.card}`}>


                <div className={`${styles.postImageFrame}`}>
                    <div className={`${styles.nextImageContainer}`}>
                            
                        <Image
                        className={`${styles.postImage}`}
                        src={post.extraData.coverImage.src}
                        // width={post.extraData.coverImage.dimensions ? post.extraData.coverImage.dimensions.width : 100}
                        // height={post.extraData.coverImage.dimensions ? post.extraData.coverImage.dimensions.height : 100}
                        fill={true}
                        
                        alt=''
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        draggable={false}

                    />

                    </div>

                </div>

                {post.extraData.isLink && 
                <div className={`${styles.postInfoFrame}`} >
                <div className={`${styles.postInfoFrameLeft}`}>
                    <div className={`text-sm ${styles.postDate}`}>
                        {momentString}
                    </div>
                    
                    <div className={`text-base-plus font-medium ${styles.postTitle}`}>
                        <Link href={`process/${post.extraData.slug}`} >
                            <span className={`${styles.postTitleSpan}`}
                                // onMouseEnter={() => setIsButtonActivated(true)}
                                // onMouseLeave={() => setIsButtonActivated(false)}
                            >
                            {post.extraData.title}
                            </span>                               
                        </Link>  
                    </div>
                    

                </div>
                <div className={`${styles.postInfoFrameRight}`}>
                    {/* <ProcessButton onClick={goToPost} isActivated={isButtonActivated} /> */}
                    <button
                        className={`${styles.linkButton} `}  
                        // className={`processButton1 ${isActivated ? 'processButton2' : ''}` } 
                        onClick={goToPost}>
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

    
        </li>
        </>

    )
}

export default ProcessTile
