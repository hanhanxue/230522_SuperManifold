

// 02 EXTERNAL

const sizeOf = require('image-size')
import * as matter from 'gray-matter'



// 03 REACT / NODE / NEXTJS
import fs from 'fs'
import path from 'path'
import { cache } from 'react'

// 05 SUPERMANIFOLD COMPONENTS

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES






// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
const getProcessPosts = cache( () => {

    const root = process.cwd()

    // 01 Get file objects from /public/content/process directory
    const dirPath = path.join(root, 'public', '/content/process')
    let dirFileObjs = fs.readdirSync(dirPath, { withFileTypes: true })


    // 02 LOOPING THROUGH EVERYTHING INSIDE /content/process
    dirFileObjs = dirFileObjs.map((fileObj) => {


        
        // SKIP non directories
        if(!fileObj.isDirectory()) return null
        // SKIP underscore
        const myRe = /^_/gm
        if(myRe.test(fileObj.name)) return null


        const extraData = {}


        // 03
        // 03
        // 03 COMMON DATA

        // dirName
        let dirName = fileObj.name
        extraData.dirName = dirName

        // process folder name e.g. /230717_Display Composer_P5JS => DATE_TITLE/SLUG_KIND
        let dataFromFileName = fileObj.name.split('_')

        // publishDate
        let publishDate = `${dataFromFileName[0]}`
        const year = `20${publishDate.slice(0, 2)}`
        const month = publishDate.slice(2, 4) - 1
        const day = publishDate.slice(4, 6)
        publishDate = new Date(year, month, day)
        extraData.publishDate = publishDate

        // title
        let title = `${dataFromFileName[1] ? dataFromFileName[1] : null}`
        extraData.title = title

        // slug
        let slug = `${dataFromFileName[1] ? dataFromFileName[1].replace(/\s+/g, '-').toLowerCase() : null}`
        extraData.slug = slug
        

        // kind
        let kind = `${dataFromFileName[2]}`
        extraData.kind = kind

        // coverImage
        const MAX_WIDTH = 640 //960
        const MAX_HEIGHT = 640  //640
        let coverImage = {}

        const innerDirPath = path.join(root, 'public', '/content/process', fileObj.name)
        let innerDirFileObjs = fs.readdirSync(innerDirPath, { withFileTypes: true })

        let firstImage = innerDirFileObjs.find((innerFileObj) => path.parse(innerFileObj.name).name === 'cover')
        // let firstImage = innerDirFileObjs.filter((innerFileObj) => )

        let imageAbsPath = path.join(root, 'public/content/process/', dirName, firstImage.name)
        coverImage.src = `/content/process/${dirName}/${firstImage.name}`

        const dimensions = genImageDimensions(imageAbsPath, MAX_WIDTH, MAX_HEIGHT)
        coverImage.dimensions = dimensions

        extraData.coverImage = coverImage




        switch(kind) {
            case "P5JS":
                extraData.isLink = true
                break;
            case "UNITY":
                extraData.isLink = true
                break;
            default:
                extraData.isLink = false
        }


        if(!extraData.isLink) return {extraData}


        let mdxFile = innerDirFileObjs.find((innerFileObj) => path.extname(innerFileObj.name) === '.mdx')

        let mdxAbsPath = path.join(root, 'public/content/process/', dirName, mdxFile.name)
        // console.log(mdxAbsPath)
        let mdxContent = fs.readFileSync(mdxAbsPath, 'utf8')
        const {data, content} = matter(mdxContent)
        // console.log(mdxContent)


        return { extraData, data, content }

    })
    .filter(x => x !== null)


    // console.log(dirFileObjs)
    return dirFileObjs.reverse()
}  )





const genImageDimensions = (imageAbsPath, MAX_WIDTH, MAX_HEIGHT) => {
    const dimensions = sizeOf(imageAbsPath)

    let aspectRatio = dimensions.width / dimensions.height

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

    return dimensions

}




export { getProcessPosts }













// export function getProcessPost(slug) {

// }



// export const getProcessMDXData = async (mdxAbsPath) => {
//     // const mdxPath = path.join(root, 'public/content/process/', fileObj.name, innerFileObj.name)
//     const mdxSource = fs.readFileSync(mdxAbsPath, 'utf8')
//     const {content, data} = matter(mdxSource)
  

  
//     // console.log(compiledMDX)
//     return (content)
  
  
//   }
    




                // // GET MDX CONTENT
                // if(kind==='P5JS' && path.extname(innerFileObj.name)==='.mdx') {
                //     const mdxPath = path.join(root, 'public/content/process/', fileObj.name, innerFileObj.name)
                    

                //     // Use gray-matter to parse the post metadata section
                //     const mdxSource = fs.readFileSync(mdxPath, 'utf8')
                //     const {content, data} = matter(mdxSource)


                //     // console.log(content)

                //     // Use remark to convert markdown into HTML string
                //     const contentHtml = await serialize(content, {
                        
                //     })

                //     console.log(contentHtml)

                // }


        
        // const dimensions = sizeOf(coverImage)




        // switch (kind) {
        //     case 'IMG':
        //     case 'P5JS':
        //     default:               
        // }
    

        // console.log(imageAbsPath)
        // console.log(extraData)
