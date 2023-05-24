import Link from 'next/link'
import Image from 'next/image'



interface FooterProps {
    primary?: string
    bg?: string
}

const Footer: React.FC<FooterProps> = ({primary='jet-stream', bg='cinnabar'}) => {


    let numrows = 24
    const rows = []
    for (let i = 1; i <= numrows; i++) {
        rows.push(
            <div className={`  bg-${bg} `} style={  {marginTop: i, height: numrows - i} }  key={i} ></div>)
    }


    return (

    <>

    <footer className={`bg-${bg}`}>
        <div className=""> {/* Containter Containter Containter*/}
            <div className={`text-lg  text-${primary}  py-6 flex items-center `}>
            
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




    <div className={`bg-${primary} flex flex-col  `} aria-hidden="true">
        {rows}
    </div>





    </footer>
    


    </>




    )
}

export default Footer