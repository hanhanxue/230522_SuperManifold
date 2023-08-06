


// 02 EXTERNAL

// 03 REACT / NEXTJS


// 05 SUPERMANIFOLD COMPONENTS
import Header from '@/components/global/Header'
import ProcessGrid from '@/components/process/ProcessGrid'



// 07 SUPERMANIFOLD FUNCTIONS
import {getProcessPosts} from '@/lib/serverUtilities'



// 11 SUPERMANIFOLD STYLES







import styles from '@/components/process/ProcessGrid.module.scss'



export const metadata = {
    title: 'Process ▼ Super Manifold®',
  };
  
  

export default async function Process() {

    const processPosts = await getProcessPosts()

    return (
    <>
        <Header />


      <ProcessGrid processPosts={processPosts} />



    </>

       
    )
}



