'use client'

// 00 EXTERNAL
import { Unity, useUnityContext } from "react-unity-webgl"

// 05 SUPERMANIFOLD COMPONENTS
import ControlsGroup from '@/components/process/ControlsGroup'
import Button from "@/components/ui/Button"
import ViewerWrapper from '@/components/process/ViewerWrapper'
import UnityProgressBar from '@/components/process/UnityProgressBar'


// 11 SUPERMANIFOLD STYLES
import styles from './Viewer.module.scss'



const Viewer = () => {


      const URL = 'https://supermanifold.xyz'
      const ID = '230731_B'
      const Compression = ''
  
      const { unityProvider , sendMessage, loadingProgression, isLoaded } = useUnityContext({
          loaderUrl: `${URL}/${ID}/Build/${ID}.loader.js`,
          dataUrl: `${URL}/${ID}/Build/${ID}.data${Compression}`,
          frameworkUrl: `${URL}/${ID}/Build/${ID}.framework.js${Compression}`,
          codeUrl: `${URL}/${ID}/Build/${ID}.wasm${Compression}`,
          // loaderUrl: `/230731_B/Build/230731_B.loader.js`,
          // dataUrl: `/230731_B/Build/230731_B.data`,
          // frameworkUrl: `/230731_B/Build/230731_B.framework.js`,
          // codeUrl: `/230731_B/Build/230731_B.wasm`,
        });

      function changeColor() {
        sendMessage("MANAGER", "ChangeColor");
      }

      function jump() {
        sendMessage("MANAGER", "Jump");
      }

    return (
        <>
        <ViewerWrapper>
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrame}`}> {/* Y Frame */}

        <div className={`${styles.canvasFrame}`}>
            <Unity 
            unityProvider={unityProvider}
            className={`${styles.unityCanvas}`}
            style={{width: '1440px', height: '810px'}}
            disabledCanvasEvents={["scroll"]}
            />
          
            <UnityProgressBar isLoaded={isLoaded} loadingProgression={loadingProgression} />
        </div>

        <div className={`${styles.bottomBar}`}>
        <ControlsGroup label="Controls">
        <Button onClick={changeColor} kind="ghost" size="sm">Change Color</Button>
        <Button onClick={jump} kind="ghost" size="sm">Jump</Button>
        </ControlsGroup>
        </div>


        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </ViewerWrapper>
        </>

    )
}

export default Viewer





