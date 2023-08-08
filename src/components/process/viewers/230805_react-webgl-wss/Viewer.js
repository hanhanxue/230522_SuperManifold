'use client'

// 00 EXTERNAL
import { Unity, useUnityContext } from "react-unity-webgl"

// 05 SUPERMANIFOLD COMPONENTS
import ControlsGroup from '@/components/process/ControlsGroup'
import Button from "@/components/ui/Button"
import ViewerWrapper from '@/components/process/ViewerWrapper'


// 11 SUPERMANIFOLD STYLES
import styles from './Viewer.module.scss'



const Viewer = () => {

    const { unityProvider , sendMessage} = useUnityContext({
        loaderUrl: "https://supermanifold.xyz/Build_fishnet/230805_G_WebClient.loader.js",
        dataUrl: "https://supermanifold.xyz/Build_fishnet/230805_G_WebClient.data",
        frameworkUrl: "https://supermanifold.xyz/Build_fishnet/230805_G_WebClient.framework.js",
        codeUrl: "https://supermanifold.xyz/Build_fishnet/230805_G_WebClient.wasm",
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
        </div>


        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </ViewerWrapper>
        </>

    )
}

export default Viewer





