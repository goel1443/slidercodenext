'use client'

import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Image from 'next/image';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function page() {

  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
gsap.registerPlugin(ScrollTrigger)


useGSAP(
    () => {
      if(window.innerWidth > 768){
        const tl = gsap.timeline({
          scrollTrigger:{
            trigger:'.slidecontent',
            start:'top center',
            end:'200% center',
            scrub:1,
            pin:true
          }
        })
        tl.to('.maincontent',{
          x:-500,
          duration:2,
        })
    
    }     
    }
)


  return (
    <div >
      <div className=' bg-zinc-700 py-20  text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          
      </div>

      <div className=' bg-zinc-800  py-20 slidecontent  md:overflow-hidden'>
        <div className='maincontent text-white  border border-white md:overflow-hidden  md:translate-x-[600px]'>
          <div className='grid md:grid-cols-4 grid-cols-1 gap-4 overflow-hidden'>
            <div className='  p-5  gap-5 w-[450px] '>
              <img  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91bmclMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"  alt='destination' />
              <h3 className='text-2xl font-bold'>
                Destination
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className='  p-5  gap-5 w-[450px] '>
              <img  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW91bmclMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"  alt='destination' />
              <h3 className='text-2xl font-bold'>
                Destination
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>


            <div className='  p-5  gap-5  w-[450px]'>
              <img  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW91bmclMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"  alt='destination' />
              <h3 className='text-2xl font-bold'>
                Destination
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className='  p-5  gap-5  w-[450px]'>
              <img  src="https://plus.unsplash.com/premium_photo-1721605863745-bd47b984f88a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHlvdW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww"  alt='destination' />
              <h3 className='text-2xl font-bold'>
                Destination
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

          </div>
          </div>
      </div>

      <div className=' bg-zinc-900 py-20 h-screen'>

      </div>
    </div>
  )
}

export default page