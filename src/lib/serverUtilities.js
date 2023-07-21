
import fs from 'fs'
import path from 'path'
// import {remark} from 'remark'


import * as matter from 'gray-matter'

const sizeOf = require('image-size')












export function getProcessPosts() {

    const root = process.cwd()

    // 01 Get file objects from /public/content/process directory
    const dirPath = path.join(root, 'public', '/content/process')
    let dirFileObjs = fs.readdirSync(dirPath, { withFileTypes: true })


    // 02 LOOPING THROUGH EVERYTHING INSIDE /content/process
    dirFileObjs = dirFileObjs.map((fileObj) => {

        // Only process directory. /public/content/process/230717_P5JS_Display Composer
        if(!fileObj.isDirectory()) return null

        let dirName = fileObj.name
        const extraData = {}


        // 03 generated from folder name /230717_P5JS_Display Composer   DATE_KIND_TITLE/slug
        let dataFromFileName = fileObj.name.split('_')

        // custom metadata publishDate
        let publishDate = `${dataFromFileName[0]}`
        const year = `20${publishDate.slice(0, 2)}`
        const month = publishDate.slice(2, 4) - 1
        const day = publishDate.slice(4, 6)
        publishDate = new Date(year, month, day)

        // custom metadata kind
        let kind = `${dataFromFileName[1]}`
        // custom metadata title
        let title = `${dataFromFileName[2] ? dataFromFileName[2] : null}`
        // custom metadata slug
        let slug = `${dataFromFileName[2] ? dataFromFileName[2].replace(/\s+/g, '-').toLowerCase() : null}`


        extraData.dirName = dirName


        extraData.publishDate = publishDate
        extraData.kind = kind
        extraData.title = title
        extraData.slug = slug

        switch(kind) {
            case "P5JS":
                extraData.isLink = true
                break;
            default:
                extraData.isLink = false
        }

        // 04 generate cover image metadata
        const MAX_WIDTH = 500 //960
        const MAX_HEIGHT = 640  //640
        let coverImage = {}

        const innerDirPath = path.join(root, 'public', '/content/process', fileObj.name)
        let innerDirFileObjs = fs.readdirSync(innerDirPath, { withFileTypes: true })


        // 04.1 COVER IMAGE /content/process/[POST]
        let firstImage = innerDirFileObjs.find((innerFileObj) => path.parse(innerFileObj.name).name === '000')

        let imageAbsPath = path.join(root, 'public/content/process/', dirName, firstImage.name)
        coverImage.src = `/content/process/${dirName}/${firstImage.name}`

        const dimensions = genImageDimensions(imageAbsPath, MAX_WIDTH, MAX_HEIGHT)
        coverImage.dimensions = dimensions

        extraData.coverImage = coverImage




        if(!extraData.isLink) return {extraData}

        let mdxFile = innerDirFileObjs.find((innerFileObj) => path.extname(innerFileObj.name) === '.mdx')

        let mdxAbsPath = path.join(root, 'public/content/process/', dirName, mdxFile.name)
        // console.log(mdxAbsPath)
        let mdxContent = fs.readFileSync(mdxAbsPath, 'utf8')
        const {data, content} = matter(mdxContent)
        // console.log(mdxContent)


        return { extraData, data, content }

    })

    // console.log(dirFileObjs)
    return dirFileObjs.reverse()



}







export function getProcessPost(slug) {

}




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
