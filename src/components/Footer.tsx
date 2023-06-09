import Link from 'next/link'

import SuperManifoldLogo, {Logotypes} from './SuperManifoldLogo'


interface IFooterProps {
    colorConfig: {
        text: string

        bg: string
        bg2: string
    }

}



const Footer: React.FC<IFooterProps> = (  {colorConfig = {text: 'text-blue-700', 

bg: 'bg-red-700', 
bg2: 'bg-red-700'}  } ) => {


    let numrows = 24
    const rows = []
    for (let i = 1; i <= numrows; i++) {
        rows.push(
            <div className={`  ${colorConfig.bg} `} style={  {marginTop: i, height: numrows - i} }  key={i} ></div>)
    }


    return (

    <>

    <footer className={`${colorConfig.bg}`}>
        <div className=""> {/* Containter Containter Containter*/}
            <div className={`text-xl  ${colorConfig.text}  py-6 flex items-center `}>
            
                <div className="basis-1/4 px-6 ">
                <Link href="/" className=" ">
                <SuperManifoldLogo variant={Logotypes.Symbol}/>
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




    <div className={`${colorConfig.bg2} flex flex-col  `} aria-hidden="true">
        {rows}
    </div>





    </footer>
    


    </>




    )
}

export default Footer