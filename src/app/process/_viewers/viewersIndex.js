import dynamic from 'next/dynamic';

const Viewers = {
    DisplayComposer: dynamic(() => import('./display-composer/Viewer')),
    DisplayComposerA: dynamic(() => import('./display-composer/Viewer')),
    DisplayComposerB: dynamic(() => import('./display-composer/Viewer')),
    DisplayComposerC: dynamic(() => import('./display-composer/Viewer')),
    DisplayComposerD: dynamic(() => import('./display-composer/Viewer')),

}

export default Viewers
