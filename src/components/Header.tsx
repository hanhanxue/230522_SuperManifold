import Link from 'next/link'
import Image from 'next/image'




const Header = () => {
    return (

            <header className={`fixed w-full bg-gradient-to-b from-cinnabar `}> {/* Containter Containter Containter*/}
                <nav className="text-lg  text-jet-stream  py-6 flex items-center ">
                
                    <div className="basis-1/4 px-6 ">
                        <Link href="/">
                            Super Manifold® 
                        </Link>
                    </div>

                    <div className="basis-1/4 px-6">
                        <Link href="/" className=" ">
                        <Image 
                            alt="Super Manifold Logo"
                            src="logos/2305122_supermanifold_264x36_jet-stream.svg" 
                            height={36} 
                            width={264} 
                        />  
                        </Link>
                    </div>
        
                    <div className="basis-2/4 px-6">
                        <ul className=" flex  justify-end">
                            <Link href="/"><li className="first:ml-0 ml-10">Products</li></Link>
                            <Link href="/"><li className="ml-10">Process</li></Link>
                            <Link href="/info"><li className="ml-10">Info</li></Link>
                        </ul>
                    </div>
    
                </nav>
            </header>


    )
}

export default Header


// sticky top-0