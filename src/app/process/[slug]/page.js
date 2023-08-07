

// 02 EXTERNAL
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
// import remarkA11yEmoji from '@fec/remark-a11y-emoji'
import remarkToc from 'remark-toc'

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'


// 03 REACT / NODE / NEXTJS

// 05 SUPERMANIFOLD COMPONENTS
import Header from "@/components/global/Header"
import mdxComponents from '@/components/process/mdxComponents'


// 07 SUPERMANIFOLD FUNCTIONS
import { getProcessPosts} from '@/lib/serverUtilities'


// 11 SUPERMANIFOLD STYLES

import { notFound } from "next/navigation"


// import Viewers from '../_viewers/viewersIndex'









export const dynamicParams = false




  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  export default async function Page({ params }) {



    const processPosts = getProcessPosts()
    const post = processPosts.find((post) => post.extraData.slug === params.slug)

    if(!post) return notFound()
    // console.log(post.extraData.publishDate)




    return (
        <>

    <Header hasBorder={false} />

    

        <MDXRemote 
        source={post.content} 
        options={{
          
            scope: post.extraData,
            mdxOptions: {
              remarkPlugins: [
                // Adds support for GitHub Flavored Markdown
                remarkGfm,
                // Makes emojis more accessible
                // remarkA11yEmoji,
                // generates a table of contents based on headings
                remarkToc,
              ],
              // These work together to add IDs and linkify headings
              rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
            },
          
          }}

        components={mdxComponents} />
        

        </>
    )

  }








    // ...
  // const merged = {source, customData}



  // return posts.find((post) => post.slug === slug)
  //      posts.filter((file) => path.extname(file) === '.mdx')



    // console.log(post)


  //   processPosts.forEach(post => {

  //     if(slug === post.slug) {
  //       mdxAbsPath = path.join(root, 'public/content/process/', post.dirName, 'index.mdx')
  //     }
 
  //   })

  // // if(!mdxAbsPath) notFound()


  // // const compiledMDX = await getProcessMDXData(mdxAbsPath)

  // const source = fs.readFileSync(mdxAbsPath, 'utf8')


  // const {content, data} = matter(source)
  





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



// export async function generateStaticParams() {
//   // const posts = await fetch('https://.../posts').then((res) => res.json())

//   const dirPath = path.join(root, 'public', '/content/process')

//   let dirContent = fs.readdirSync(dirPath)

//   dirContent = dirContent.map(content => {

//       const customMetadata = {}
//       // console.log(dirContent[3])
  
//       let dataFromFileName = content.split('_')
  
//       customMetadata.publishDate = `20${dataFromFileName[0]}`
//       customMetadata.kind = `${dataFromFileName[1]}`
//       customMetadata.title = `${dataFromFileName[2] ? dataFromFileName[2] : 'TITLE ERR'}`
//       customMetadata.slug = `${dataFromFileName[2] ? dataFromFileName[2].replace(/\s+/g, '-').toLowerCase() : 'SLUG ERR'}`

//       // console.log(customMetadata.slug)

//       // console.log(customMetadata)
//       return customMetadata
//   })
 
//   // console.log(dirContent)

//   return dirContent.map((content) => ({
//     slug: content.kind,
//   }))
// }
 
// const Viewer = dynamic(() => import('../../../' + viewerPath), { ssr: false });

// import Viewer from '../../../content/processPosts/230703_P5JS_Display Composer A/Viewer'
