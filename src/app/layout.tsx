
import '../styles/main.scss'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`font-primary`}>
      <body>{children}</body>
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



