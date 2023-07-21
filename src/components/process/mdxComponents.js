import dynamic from 'next/dynamic';

const Viewers = {
    'display-composer-b': dynamic(() => import('./viewers/display-composer/Viewer')),
    // DisplayComposerA: dynamic(() => import('./display-composer/Viewer')),
    // DisplayComposerB: dynamic(() => import('./display-composer/Viewer')),
    // DisplayComposerC: dynamic(() => import('./display-composer/Viewer')),
    // DisplayComposerD: dynamic(() => import('./display-composer/Viewer')),

}

import Header from '@/components/ProcessHeader'
import ProcessHeader from '@/components/ProcessHeader';


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