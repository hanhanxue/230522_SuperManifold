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

    const { unityProvider , sendMessage,  loadingProgression, isLoaded} = useUnityContext({
        loaderUrl: "https://supermanifold.xyz/230809_G_WebClientNone/Build/230809_G_WebClientNone.loader.js",
        dataUrl: "https://supermanifold.xyz/230809_G_WebClientNone/Build/230809_G_WebClientNone.data",
        frameworkUrl: "https://supermanifold.xyz/230809_G_WebClientNone/Build/230809_G_WebClientNone.framework.js",
        codeUrl: "https://supermanifold.xyz/230809_G_WebClientNone/Build/230809_G_WebClientNone.wasm",
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


        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </ViewerWrapper>
        </>

    )
}

export default Viewer







