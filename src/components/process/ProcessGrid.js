// 'use client'


// 02 EXTERNAL
// import moment from 'moment';

// 03 REACT / NEXTJS
// import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation';


// 05 SUPERMANIFOLD COMPONENTS
import ProcessTile from '@/components/process/ProcessTile'

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './ProcessGrid.module.scss'



const ProcessGrid = ({processPosts}) => {


    // const router = useRouter()

    return (

        <>
        <section className={`${styles.section}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrame}`}> {/* Y Frame */}

        <div className={`${styles.gridContainer}`}>
        
        <ul className={`${styles.processGrid}`}>

        {processPosts.map((post) => {

        return (
          <ProcessTile post={post} />
        )
        }
        )}

        </ul>
        </div>





        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </section> {/* SECTION */}
        </>

    )
}

export default ProcessGrid



