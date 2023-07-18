
import Header from '@/components/Header'
// import Image from 'next/image'

// import Button from '../../components/Button'

// import ProcessHeader from '../../components/ProcessHeader'
// import Viewer from './test/Viewer'

import styles from '../../components/ProcessGrid.module.scss'
import Image from 'next/image'


const sizeOf = require('image-size')



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

        <ul className={`${styles.processGrid}`}>

            {processPosts.map((post) => {

// console.log(post.coverImage.dimensions ? post.coverImage.dimensions.height : 100)
                // console.log(post)
                // console.log(post.isDir)

                if(post.isDir) {
                    return (
                            <li key={Math.random()}>
                     
                              <div className={`${styles.card}`}>
                              <Link href={`process/${post.slug}`} >
                                <Image
                                  src={post.coverImage.src}
                                  width={post.coverImage.dimensions ? post.coverImage.dimensions.width : 100}
                                  height={post.coverImage.dimensions ? post.coverImage.dimensions.height : 100}
                                />
                                </Link>
                                <button className={`${styles.button}`}>
                                    <span className={`${styles.arrow}`}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 20L8 20" stroke="black" stroke-width="2"/>
<path d="M21 9L32 20L21 31" stroke="black" stroke-width="2"/>
</svg></span>
                                </button>
                              </div>
                       
                            </li>
                   
                    )
                } else {
                    return (
                        <li key={Math.random()}>
                        <div className={`${styles.card}`}>
                        <Image
                          src={post.coverImage.src}
                          width={post.coverImage.dimensions ? post.coverImage.dimensions.width : 100}
                          height={post.coverImage.dimensions ? post.coverImage.dimensions.height : 100}
                        />
                      </div>
                        </li>

                    )
                }
             


            }


            )}

        </ul>



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

    let dirFileObjs = fs.readdirSync(dirPath, { withFileTypes: true })



    dirFileObjs = dirFileObjs.map(fileObj => {

        // console.log(fileObj.isDirectory())

        const customMetadata = {}

        let dataFromFileName = fileObj.name.split('_')

        let publishDate = `${dataFromFileName[0]}`
        const year = `20${publishDate.slice(0, 2)}`
        const month = publishDate.slice(2, 4) - 1
        const day = publishDate.slice(4, 6)
        publishDate = new Date(year, month, day)

        let kind = `${dataFromFileName[1]}`
        let title = `${dataFromFileName[2] ? dataFromFileName[2] : 'TITLE ERR'}`
        let slug = `${dataFromFileName[2] ? dataFromFileName[2].replace(/\s+/g, '-').toLowerCase() : 'SLUG ERR'}`

        let isDir = fileObj.isDirectory()



        customMetadata.publishDate = publishDate
        customMetadata.kind = kind
        customMetadata.title = title
        customMetadata.slug = slug

        customMetadata.isDir = isDir




        const MAX_WIDTH = 960
        const MAX_HEIGHT = 640
        let coverImage = {}
        let imagePath

        if (isDir ) {

            const innerDirPath = path.join(root, 'public', '/content/process', fileObj.name)
            let innerDirFileObjs = fs.readdirSync(innerDirPath, { withFileTypes: true })

            innerDirFileObjs.map(innerFileObj => {

                if(path.parse(innerFileObj.name).name === '000') {
                // console.log(fileObj.name)
                imagePath = path.join(root, 'public/content/process/', fileObj.name, innerFileObj.name)
                // console.log(imagePath)
                coverImage.src = `/content/process/${fileObj.name}/${innerFileObj.name}`
                
                const dimensions = sizeOf(imagePath)
                coverImage.dimensions = dimensions
                let aspectRatio = dimensions.width / dimensions.height
                // console.log(aspectRatio)
    
                if(dimensions.width > MAX_WIDTH) {
                    dimensions.width = MAX_WIDTH
                    dimensions.height = dimensions.width / aspectRatio
                }
                if(dimensions.height > MAX_HEIGHT) {
                    dimensions.height = MAX_HEIGHT
                    dimensions.width = dimensions.height * aspectRatio
                }
    
                dimensions.width = Math.round(dimensions.width)
                dimensions.height = Math.round(dimensions.height)
                }


            })

        } else {

            imagePath = path.join(root, 'public/content/process/', fileObj.name)
            coverImage.src = `/content/process/${fileObj.name}`

            const dimensions = sizeOf(imagePath)
            coverImage.dimensions = dimensions
            let aspectRatio = dimensions.width / dimensions.height
            // console.log(aspectRatio)

            if(dimensions.width > MAX_WIDTH) {
                dimensions.width = MAX_WIDTH
                dimensions.height = dimensions.width / aspectRatio
            }
            if(dimensions.height > MAX_HEIGHT) {
                dimensions.height = MAX_HEIGHT
                dimensions.width = dimensions.height * aspectRatio
            }

            dimensions.width = Math.round(dimensions.width)
            dimensions.height = Math.round(dimensions.height)

        }



        customMetadata.coverImage = coverImage




        
        // const dimensions = sizeOf(coverImage)




        switch (kind) {
            case 'IMG':
            case 'P5JS':
            default:               
        }
    

        // console.log(imagePath)
        // console.log(customMetadata)


        return customMetadata
    })



    return dirFileObjs.reverse()
}







// export async function generateStaticParams() {
//     // const posts = await fetch('https://.../posts').then((res) => res.json())
   
//     // return posts.map((post) => ({
//     //   slug: post.slug,
//     // }))


//     const dirPath = path.join(root, 'public', '/content/process')

//     let dirFileObjs = fs.readdirSync(dirPath)
//     console.log(dirFileObjs)

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

