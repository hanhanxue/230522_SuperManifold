import dynamic from 'next/dynamic';

const Viewers = {
    'display-composer':        dynamic(() => import('./viewers/230716_display-composer/Viewer')),
    'react-unity-integration': dynamic(() => import('./viewers/230729_react-unity-integration/Viewer')),
    // DisplayComposerB: dynamic(() => import('./display-composer/Viewer')),
    // DisplayComposerC: dynamic(() => import('./display-composer/Viewer')),
    // DisplayComposerD: dynamic(() => import('./display-composer/Viewer')),

}

import Header from '@/components/process/ProcessHeader'



const Viewer = ({children, id}) => {


    const Viewer = Viewers[`${id}`]
    
    return (

        <Viewer />
          

    )
}




const customMDXComponents = {
    
    Viewer,
    Header,
}








export default customMDXComponents 