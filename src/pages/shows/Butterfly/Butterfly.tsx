import React from 'react'
import { useParams } from 'react-router-dom';

import Gallery from './ButterflyGallery';


const Butterfly = () => {
  // const { id } = useParams();

  return (
    <div className='mt-20'>

      <div className='flex'>

        <div className='flex ml-5'>
          <div>
            <span className='text-2xl'>
              &lt;컨템포러리 서커스&gt;
            </span>

            <br/>

            <span className='text-4xl'>
              날갯짓 THE FLUTTER OF WINGS
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
              20 min
            </span>


            <br/>

            <p>
              나비를 닮은 디아볼로의 날갯짓이 그대의 마음을 훔친다.
            </p>
            <br />

            <br />
            <span>
            소년에게 날아든 나비는,
            이별을 경험한 누군가에게 불연 듯 찾아온 새로운 인연일까?
            사랑하는 사람을 있는 그대로 떠나보내는 이의 마음까지, 나비와 소년, 디아볼로를 통해 그려봅니다.
            </span>
          </div>
        </div>

      </div>

      <div className='flex justify-center mt-10 w-full h-96'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/O04ImFPQqH8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>

      <div className='mt-10' >
        <Gallery />
      </div>
    </div>
  )
}

export default Butterfly