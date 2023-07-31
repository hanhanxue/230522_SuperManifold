import dynamic from 'next/dynamic';

const Viewers = {
    'display-composer':        dynamic(() => import('./viewers/230716_display-composer/Viewer')),
    'react-unity-integration': dynamic(() => import('./viewers/230729_react-unity-integration/Viewer')),
    // DisplayComposerB: dynamic(() => import('./display-composer/Viewer')),
    // DisplayComposerC: dynamic(() => import('./display-composer/Viewer')),
    // DisplayComposerD: dynamic(() => import('./display-composer/Viewer')),

}

import ProcessHeader from '@/components/process/ProcessHeader'

import styles from './mdxComponents.module.scss'



const Viewer = ({children, id}) => {


    const Viewer = Viewers[`${id}`]
    
    return (

        <Viewer />
          

    )
}






const P = (props) => (

    <section className={`${styles.section}`}> {/* SECTION */}
    <div className={`${styles.xFrame}`}> {/* X Frame */}
    <div className={`${styles.yFrame}`}> {/* Y Frame */}
        <div className={`${styles.container}`}>

        <p {...props} className={`text-lg `} />
        </div>

    </div> {/* Y Frame */}
    </div> {/* X Frame */}
    </section> 



)



const customMDXComponents = {
    
    Viewer,
    ProcessHeader,
    p: P,

}


export default customMDXComponents 