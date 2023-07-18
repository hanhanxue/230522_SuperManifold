// Return a list of `params` to populate the [slug] dynamic segment

import Viewers from '../_viewers/viewersIndex'

import Header from "@/components/Header"

import ProcessHeader from '@/components/ProcessHeader'


const viewerPath = 'content/processPosts/230703_P5JS_Display Composer A/Viewer'

// const Viewer = dynamic(() => import('../../../' + viewerPath), { ssr: false });

// import Viewer from '../../../content/processPosts/230703_P5JS_Display Composer A/Viewer'


import fs from 'fs'
import path from 'path'
import Link from 'next/link'

const root = process.cwd()



export async function generateStaticParams() {
    // const posts = await fetch('https://.../posts').then((res) => res.json())

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
   
    return dirContent.map((content) => ({
      slug: content.slug,
    }))
  }
   


  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  export default function Page({ params }) {
    
    const { slug } = params
    

    const Viewer = Viewers['DisplayComposer']

    return (
        <>

    <Header hasBorder={true} />
    <ProcessHeader />
        {/* {slug} */}
        <Viewer />


        </>
    )
    // ...
  }



// import Header from "@/components/Header"
// // import Viewer from '/public/content/process/230703_P5JS_Display Composer A'
// import ProcessHeader from "@/components/ProcessHeader"

// export async function generateStaticParams() {
//     // const posts = await fetch('https://.../posts').then((res) => res.json())
   
//     // return posts.map((post) => ({
//     //   slug: post.slug,
//     // }))

//     return([
//         {
//             slug: 'display-composer-a'
//         }
//     ]

//     )
//   }




// //   <Header hasBorder={true}  />

// //   <ProcessHeader />

// //   <Viewer />


// // Multiple versions of this page will be statically generated
// // using the `params` returned by `generateStaticParams`
// export default function Page({ params }) {
//     // const { slug } = params
//     // ...

//     return (
//         <>
//                   <Header hasBorder={true}  />

// <ProcessHeader />

//         </>

// //   <Viewer />
//     )
//   }



