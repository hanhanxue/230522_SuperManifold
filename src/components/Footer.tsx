import Link from 'next/link'
import Image from 'next/image'

import FooterBase from './FooterBase'


const Footer = () => {
    return (

    <>

    <footer className={`bg-cinnabar`}>
        <div className=""> {/* Containter Containter Containter*/}
            <div className="text-lg  text-jet-stream  py-6 flex items-center ">
            
                <div className="basis-1/4 px-6 ">
                <Link href="/" className=" ">
                    <Image 
                        alt="Super Manifold Logo"
                        src="logos/2305122_supermanifold_69x36_jet-stream.svg" 
                        height={36} 
                        width={69} 
                    />  
                    </Link>
                </div>

                <div className="basis-2/4 px-6">
                    <ul className=" flex justify-center">
                            <Link href="/"><li className="first:ml-0 ml-10">Instagram</li></Link>
                            <Link href="/"><li className="ml-10">Twitter</li></Link>
                            <Link href="/about"><li className="ml-10">Founder</li></Link>
                            <Link href="/about"><li className="ml-10">Privacy</li></Link>
                            <Link href="/about"><li className="ml-10">Terms of service</li></Link>
                            <Link href="/about"><li className="ml-10">Contact</li></Link>
                        </ul>
                </div>
    
                <div className="basis-1/4 px-6 text-right">
                            © 2023 Super Manifold®
                </div>


            </div>
        </div>

        <FooterBase />
    </footer>
    


    </>




    )
}

export default Footer