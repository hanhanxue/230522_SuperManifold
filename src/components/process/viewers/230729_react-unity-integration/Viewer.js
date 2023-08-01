'use client'

// 00 EXTERNAL
import { Unity, useUnityContext } from "react-unity-webgl"

// 05 SUPERMANIFOLD COMPONENTS
import ControlsGroup from '@/components/process/ControlsGroup'
import Button from "@/components/ui/Button"


// 11 SUPERMANIFOLD STYLES
import styles from './Viewer.module.scss'



const Viewer = () => {

    

    const { unityProvider , sendMessage} = useUnityContext({
        loaderUrl: "/content/process/230729_React Unity Integration_UNITY/Build/230731_B.loader.js",
        dataUrl: "/content/process/230729_React Unity Integration_UNITY/Build/230731_B.data",
        frameworkUrl: "/content/process/230729_React Unity Integration_UNITY/Build/230731_B.framework.js",
        codeUrl: "/content/process/230729_React Unity Integration_UNITY/Build/230731_B.wasm",
      });

      function changeColor() {
        sendMessage("MANAGER", "ChangeColor");
      }

      function jump() {
        sendMessage("MANAGER", "Jump");
      }

    return (
        <>
        <section className={`${styles.section}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrame}`}> {/* Y Frame */}

        <div className={`${styles.canvasFrame}`}>
            <Unity unityProvider={unityProvider} className={`${styles.unityCanvas}`}
            style={{width: '1440px', height: '810px'}}/>
        </div>

        <div className={`${styles.bottomBar}`}>
        <ControlsGroup label="Controls">
        <Button onClick={changeColor} kind="ghost" size="sm">Change Color</Button>
        <Button onClick={jump} kind="ghost" size="sm">Jump</Button>
        </ControlsGroup>
        </div>

        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </section> {/* SECTION */}
        </>

    )
}

export default Viewer





