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

    const { unityProvider , sendMessage, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: "https://supermanifold.xyz/230731_B/Build/230731_B.loader.js",
        dataUrl: "https://supermanifold.xyz/230731_B/Build/230731_B.data",
        frameworkUrl: "https://supermanifold.xyz/230731_B/Build/230731_B.framework.js",
        codeUrl: "https://supermanifold.xyz/230731_B/Build/230731_B.wasm",
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
            {/* Progress Bar */}
            <div className={`${styles.progressBar}` }  
            style={{display: isLoaded ? "none" : "block", width: `${(loadingProgression * 100)}%`}} ></div>
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
        <p>{Math.round(loadingProgression * 100)}%</p>
        </>

    )
}

export default Viewer





