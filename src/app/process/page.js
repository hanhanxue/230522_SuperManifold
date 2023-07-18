
import Header from '@/components/Header'
// import Image from 'next/image'

// import Button from '../../components/Button'

// import ProcessHeader from '../../components/ProcessHeader'
// import Viewer from './test/Viewer'

import styles from '../../components/ProcessGrid.module.scss'

export const metadata = {
    title: 'Process ▼ Super Manifold®',
  };
  
  

export default async function Process() {

    const processPosts = await getProcessPosts()
    // console.log(processPosts)

    return (
    <>
        <Header />

   
        <section className={`${styles.section}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrame}`}> {/* Y Frame */}

        <div className={`${styles.processGrid}`}>

            {processPosts.map((post) => {
             
                return (
                    <Link href={`process/${post.slug}`} key={Math.random()}>
                    <div className={`${styles.card}`}>{post.title}</div>
                </Link>
                )

            }


            )}

        </div>



        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </section> {/* SECTION */}
   

    </>

       
    )
}


import fs from 'fs'
import path from 'path'
import Link from 'next/link'

const root = process.cwd()


// This used to be getStaticProps
const getProcessPosts = () => {
    const dirPath = path.join(root, 'public', '/content/process')

    let dirContent = fs.readdirSync(dirPath)

    dirContent = dirContent.map(content => {

        const customMetadata = {}
        // console.log(dirContent[3])
    
        let dataFromFileName = content.split('_')
    
        customMetadata.publishDate = `20${dataFromFileName[0]}`
        customMetadata.kind = `${dataFromFileName[1]}`
        customMetadata.title = `${dataFromFileName[2] ? dataFromFileName[2] : 'TITLE ERR'}`
        customMetadata.slug = `${dataFromFileName[2] ? dataFromFileName[2].replace(/\s+/g, '-').toLowerCase() : 'SLUG ERR'}`

        // console.log(customMetadata)
        return customMetadata
    })



    return dirContent.reverse()
}

// export async function generateStaticParams() {
//     // const posts = await fetch('https://.../posts').then((res) => res.json())
   
//     // return posts.map((post) => ({
//     //   slug: post.slug,
//     // }))


//     const dirPath = path.join(root, 'public', '/content/process')

//     let dirContent = fs.readdirSync(dirPath)
//     console.log(dirContent)

//     return (
//         [    {
//             slug: 'ffs',
    
//         },
//         {
//             slug: 'ffs',
    
//         },
//         {
//             slug: 'ffs',
    
//         },]
//     )


//   }

