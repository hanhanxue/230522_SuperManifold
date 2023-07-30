'use client'

// 00 EXTERNAL
import { Unity, useUnityContext } from "react-unity-webgl"


// 11 SUPERMANIFOLD STYLES
import styles from './Viewer.module.scss'



const Viewer = () => {

    const { unityProvider } = useUnityContext({
        loaderUrl: "/content/process/230729_React Unity Integration_UNITY/Build/230729_B.loader.js",
        dataUrl: "/content/process/230729_React Unity Integration_UNITY/Build/230729_B.data",
        frameworkUrl: "/content/process/230729_React Unity Integration_UNITY/Build/230729_B.framework.js",
        codeUrl: "/content/process/230729_React Unity Integration_UNITY/Build/230729_B.wasm",
      });

    return (
        <>
        <section className={`${styles.section}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrame}`}> {/* Y Frame */}

        <div className={`${styles.canvasFrame}`}>
            <Unity unityProvider={unityProvider} />
        </div>

        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </section> {/* SECTION */}
        </>

    )
}

export default Viewer





