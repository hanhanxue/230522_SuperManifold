'use client'


// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS
import { useEffect, useState } from "react"

// 05 SUPERMANIFOLD COMPONENTS
import HeaderA from '@/components/global/HeaderA';
import FooterA from '@/components/global/FooterA';

// 07 SUPERMANIFOLD FUNCTIONS
import useScrollProgress from '@/lib/useScrollProgress';

// 11 SUPERMANIFOLD STYLES
import '@/styles/main.scss'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const [scaleFactor, setScaleFactor] = useState(1)
  // const progress = useScrollProgress()
  
  // console.log(progress)
  // let scaleFactor = .98
  function remap(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
    const normalizedValue = (value - fromLow) / (fromHigh - fromLow);
    const remappedValue = normalizedValue * (toHigh - toLow) + toLow;
    return Math.max(Math.min(remappedValue, Math.max(toLow, toHigh)), Math.min(toLow, toHigh));
  }
  



  useEffect(() => {

    const handleScroll = () => {
      const lowerLimit = Math.max((document.body.scrollHeight - (window.innerHeight * 1.9)), 0)
      const upperLimit = (document.body.scrollHeight - (window.innerHeight * 0.9))
      const remappedProgress = remap(window.scrollY, lowerLimit, upperLimit, 1, .98)
      // console.log(remappedProgress)
      setScaleFactor(remappedProgress)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <html lang="en" >
      <body >
      <HeaderA />

        <div
        style={{
          backgroundColor: 'white',
          transformOrigin: 'bottom center',
          transform:
          `translate3d(0px, 0px, 0px) 
          scale3d(${scaleFactor}, ${scaleFactor}, 1) 
          rotateX(0deg) 
          rotateY(0deg) 
          rotateZ(0deg) 
          skew(0deg)`,
          transformStyle: 'preserve-3d',
          borderRadius: '0 0 16px 16px'

        }}>
          {children}
        </div>

      <FooterA />
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



