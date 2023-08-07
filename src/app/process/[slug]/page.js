

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


  export async function generateStaticParams() {
    const posts = await getProcessPosts()
    // The params to pre-render the page with.
    // Without this, the page will be rendered at runtime
    return posts.map((post) => ({
       params: { slug: post.extraData.slug } 
      }))
  }
