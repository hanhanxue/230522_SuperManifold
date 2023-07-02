
import Header from '@/components/Header'
import P5_DisplayResolutions from './test/P5_DisplayResolution'
import Image from 'next/image'

import Button from '../../components/Button'

export default function Process() {



    return (
        <>
            <Header colorConfig = { {text: 'text-black', bg: '' } } />

            <section>
                <div className="py-8">

                    <div className="w-[48rem] h-16 mx-auto flex items-center">
                        <Image
                        className="rounded-xl mr-2"
                        src={`SuperManifold.svg`}
                        width={48}
                        height={48}
                        alt="REPLACE"
                        />

                        {/* Header */}
                        <div className='flex flex-col'>
                        {/* Header Title*/}
                        <div className='flex items-center'>
                            <h1 className="text-base font-semibold mr-2">Screen Resolutions</h1>
                                {/* <span className="mr-2">🅐</span> */}
                            {/* <div className='bg-zinc-100 px-2 pt-[3px] pb-[2px] rounded-[5px] mr-1'>
                                <p className="text-sm ">P5.js</p>
                            </div>
                            <div className='bg-zinc-100 px-2 pt-[3px] pb-[2px] rounded-[5px] mr-1'>
                                <p className="text-sm ">Utility</p>
                            </div> */}
                            <div className='bg-zinc-100 px-2 pt-[3px] pb-[2px] rounded-[5px] mr-1'>
                                <p className="text-sm ">2023</p>
                            </div>
                        </div>

                        {/* Header Details*/}
                        <div className='flex items-center text-zinc-600 text-sm '>
                            <h2 className="mr-4">Utility app using P5.js</h2>
                        </div>

                        </div>
                    </div>
                  

       
                    <P5_DisplayResolutions />
             




                            
           

                </div>
            </section>


        </>

       
    )
}

