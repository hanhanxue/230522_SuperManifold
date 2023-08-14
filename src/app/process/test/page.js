'use client'

import {useState} from 'react'


  export default function Test() {

    const [isHover, setIsHover] = useState(false)


    return (
        <>
          <button 
            onMouseEnter={() => console.log('enter')}
            onMouseLeave={() => console.log('leave')}
            style={{width: "50px", height: "50px", backgroundColor: "red"}}
          >

          </button>
        </>
    )

  }

