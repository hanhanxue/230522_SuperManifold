'use client'


// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS
import { useEffect, useState } from "react"

// 05 SUPERMANIFOLD COMPONENTS
import HeaderA from '@/components/global/HeaderA';
import FooterA from '@/components/global/FooterA';

// 07 SUPERMANIFOLD FUNCTIONS
import useScrollProgress from '@/lib/useScrollProgress';
import useFirstRender from '@/lib/useFirstRender'

// 11 SUPERMANIFOLD STYLES
import '@/styles/main.scss'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const [transformAnimFactor, setTransformAnimFactor] = useState(0)
  const [opacityAnimFactor, setOpacityAnimFactor] = useState(0)
  // const progress = useScrollProgress()
  
  // console.log(progress)
  // let transformAnimFactor = .98
  function remap(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
    const normalizedValue = (value - fromLow) / (fromHigh - fromLow);
    const remappedValue = normalizedValue * (toHigh - toLow) + toLow;
    return Math.max(Math.min(remappedValue, Math.max(toLow, toHigh)), Math.min(toLow, toHigh));
  }
  
  function remap01(value: number, toLow: number, toHigh: number): number {
    const remappedValue = value * (toHigh - toLow) + toLow;
    return Math.max(Math.min(remappedValue, Math.max(toLow, toHigh)), Math.min(toLow, toHigh));
  }


  useEffect(() => {

    const handlePageAnim = () => {

      const windowBottom = window.scrollY + window.innerHeight

      const footerSpacerHeight = (window.innerHeight - 240)

      const mainPageBottom = document.body.scrollHeight - footerSpacerHeight
      const distanceFromWindowBottom = windowBottom - mainPageBottom

      const lowerLimit = Math.max((window.innerHeight - mainPageBottom), 0)


      const fullSpacer = remap(distanceFromWindowBottom, 0, footerSpacerHeight, 0, 1)
      const clampedSpacer = remap(distanceFromWindowBottom, lowerLimit, footerSpacerHeight, 0, 1)

      setOpacityAnimFactor(fullSpacer)
      setTransformAnimFactor(clampedSpacer * clampedSpacer) // Power to get curved values

    }

    handlePageAnim()

    window.addEventListener('scroll', handlePageAnim)
    window.addEventListener('resize', handlePageAnim)
    return () => {
      window.removeEventListener('scroll', handlePageAnim)
      window.removeEventListener('resize', handlePageAnim)
    }
  }, [])


  return (
    <html lang="en" >
      <body>

      <HeaderA />

      <main
        style={{
          backgroundColor: 'white',
          transformOrigin: 'bottom center',
          transform:
          `translate3d(0px, 0px, 0px) 
          scale3d(${remap01(transformAnimFactor, 1, .98)}, ${remap01(transformAnimFactor, 1, .98)}, 1) 
          rotateX(0deg) 
          rotateY(0deg) 
          rotateZ(0deg) 
          skew(0deg)`,
          transformStyle: 'preserve-3d',
          borderRadius: '0 0 24px 24px',
          zIndex: 50,
          position: 'relative',
        }}>
 

          {children}
        </main>
        <div 
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.31) 50%, rgba(255,255,255,0) 100%)',

              height: '94px',
              position: 'fixed',
              inset: '0 0 auto 0',

              transformOrigin: 'top center',
              transform:
              `translate3d(0px, 0px, 0px) 
              scale3d(${remap01(transformAnimFactor, 1, .98)}, 1, 1) 
              rotateX(0deg) 
              rotateY(0deg) 
              rotateZ(0deg) 
              skew(0deg)`,
              transformStyle: 'preserve-3d',
              zIndex: 51,

            }}>
         </div>
      <FooterA opacity={remap01(opacityAnimFactor, 0, 1)}/>
      </body>

    </html>
  );
}







// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }


// import localFont from 'next/font/local'
// const nmtl = localFont({
//   src: [
//     // {
//     //   path: '../../public/fonts/PPNeueMontreal-Thin.otf',
//     //   weight: '100'
//     // },
//     {
//       path: '../../public/fonts/PPNeueMontreal-Book.otf',
//       weight: '400'
//     },
//     // {
//     //   path: '../../public/fonts/PPNeueMontreal-Medium.otf',
//     //   weight: '500'
//     // },
//   ],
//   variable: '--nmtl'
// })



