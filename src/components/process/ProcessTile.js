'use client'


// 02 EXTERNAL
import moment from 'moment'


// 03 REACT / NODE / NEXTJS
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


// 05 SUPERMANIFOLD COMPONENTS


// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './ProcessTile.module.scss'


const ProcessTile = ({  post  }) => {


    const momentObj = moment(post.extraData.publishDate)
    const momentString = momentObj.format("MMM Do, YYYY")
    const momentStringFromNow = momentObj.fromNow()

    const router = useRouter()
    const goToPost = () => {router.push(`/process/${post.extraData.slug}`)}


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

                            {/* <svg className={`${styles.arrow2}`}
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12L5 12" strokeWidth="1.5"/>
                            <path d="M13 6L19 12L13 18" strokeWidth="1.5"/>
                            </svg>



                            <svg className={`${styles.arrow}`}
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12L5 12" strokeWidth="1.5"/>
                            <path d="M13 6L19 12L13 18" strokeWidth="1.5"/>
                            </svg> */}
                                                        <svg 
                            className={`${styles.arrow2}`}
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11L19 11C19.5523 11 20 11.4477 20 12V12C20 12.5523 19.5523 13 19 13L3 13C2.44772 13 2 12.5523 2 12V12Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L14.4142 20C14.0237 20.3905 13.3905 20.3905 13 20V20C12.6095 19.6095 12.6095 18.9763 13 18.5858L18.8787 12.7071C19.2692 12.3166 19.2692 11.6834 18.8787 11.2929L13 5.41421C12.6095 5.02369 12.6095 4.39052 13 4V4C13.3905 3.60947 14.0237 3.60947 14.4142 4L21.7071 11.2929Z" fill="black"/>
</svg>

                            <svg 
                            className={`${styles.arrow}`}
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11L19 11C19.5523 11 20 11.4477 20 12V12C20 12.5523 19.5523 13 19 13L3 13C2.44772 13 2 12.5523 2 12V12Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L14.4142 20C14.0237 20.3905 13.3905 20.3905 13 20V20C12.6095 19.6095 12.6095 18.9763 13 18.5858L18.8787 12.7071C19.2692 12.3166 19.2692 11.6834 18.8787 11.2929L13 5.41421C12.6095 5.02369 12.6095 4.39052 13 4V4C13.3905 3.60947 14.0237 3.60947 14.4142 4L21.7071 11.2929Z" fill="black"/>
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
