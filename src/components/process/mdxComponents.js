

import dynamic from 'next/dynamic';




// const Viewers = {
//     'display-composer':        dynamic(() => import('./viewers/230716_display-composer/Viewer')),
//     'react-unity-integration': dynamic(() => import('./viewers/230729_react-unity-integration/Viewer')),
//     'react-webgl-wss': dynamic(() => import('./viewers/230805_react-webgl-wss/Viewer')),

// }



import { Code } from 'bright'


import ProcessHeader from '@/components/process/ProcessHeader'

import styles from './mdxComponents.module.scss'



// const Viewer = ({children, id}) => {


//     const Viewer = Viewers[`${id}`]
    
//     return (

//         <Viewer />
          

//     )
// }






const p = (props) => (

    <section className={`${styles.section}`}> {/* SECTION */}
    <div className={`${styles.xFrame}`}> {/* X Frame */}
    <div className={`${styles.yFrame}`}> {/* Y Frame */}

        <div className={`${styles.container}`}>
        <p {...props} className={`text-base `} />
        </div>

    </div> {/* Y Frame */}
    </div> {/* X Frame */}
    </section> 

)


const h2 = (props) => (

    <section className={`${styles.section}`}> {/* SECTION */}
    <div className={`${styles.xFrame}`}> {/* X Frame */}
    <div className={`${styles.yFrame}`}> {/* Y Frame */}

        <div className={`${styles.container}`}>
        <h2 {...props} className={`text-xl font-medium`} />
        </div>

    </div> {/* Y Frame */}
    </div> {/* X Frame */}
    </section> 

)

const h3 = (props) => (

    <section className={`${styles.section}`}> {/* SECTION */}
    <div className={`${styles.xFrame}`}> {/* X Frame */}
    <div className={`${styles.yFrame}`}> {/* Y Frame */}
    
        <div className={`${styles.container}`}>
        <h3 {...props} className={`text-lg  font-medium `} />
        </div>

    </div> {/* Y Frame */}
    </div> {/* X Frame */}
    </section> 

)

const customMDXComponents = {
    
    // Viewer,
    ProcessHeader,
    p,
    h2,
    h3,
      // the `a` and `img` tags from before should remain
    pre: Code,

}


export default customMDXComponents 