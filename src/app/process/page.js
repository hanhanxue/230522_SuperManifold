
import Header from '@/components/Header'
import P5_DisplayResolutions from './test/P5_DisplayResolution'
import Image from 'next/image'


export default function Process() {



    return (
        <>
            <Header colorConfig = { {text: 'text-black', bg: '' } } />

            <section>
                <div className="py-8">

                    <div className="w-[48rem] h-16 mx-auto flex items-center">
                        <Image
                        className="rounded-lg mr-2"
                        src={`RealityComposer.svg`}
                        width={48}
                        height={48}
                        alt="REPLACE"
                        />

                        {/* Header */}
                        <div className='flex flex-col'>
                        {/* Header Title*/}
                        <div className='flex items-center'>
                        <h1 className="text-base font-semibold mr-3">Screen Resolutions</h1>
                                {/* <span className="mr-2">🅐</span> */}
                                <div className='border-solid border-[1px] border-black px-[5px] py-[1px] rounded-[3px] mr-2'>
                                <p className="text-sm">P5.js</p>
                            </div>
                            <div className='border-solid border-[1px] border-black px-[5px] py-[1px] rounded-[3px] mr-2'>
                                <p className="text-sm">2023</p>
                            </div>
                        </div>

                        {/* Header Details*/}
                        <div className='flex items-center   text-sm '>
                            <h2 className="mr-4">Display Surfaces Scaling Utility</h2>


                        </div>

                        </div>
                    </div>
                  

                  <div className="flex justify-center mt-6">    
                    <P5_DisplayResolutions width='1280' />
                  </div>

                  <div className="flex justify-center mt-6">    
                    <div className='rounded-2xl bg-zinc-100 w-[1280px] h-[96px]'>

                    </div>
                  </div>
                            
           

                </div>
            </section>


        </>

       
    )
}

