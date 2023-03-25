import React from 'react'
import { useParams } from 'react-router-dom';

import Gallery from './WaveGallery';


const Wave = () => {
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
              디 웨이브 D.WAVE
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
              20 min
            </span>

            <br/>

            <blockquote>
              디아볼로와 줄, 그리고 파동에 관하여
            </blockquote>
            <br />

            <br />
            <span>
              우리는 무엇에 영향을 받는가. 그리고 우리는 무엇에게 영향을 주는가. 나는 누군가에게 영향력이 있는 존재일까?
              줄이 디아에게, 디아가 줄에게.
              아버지가 나에게, 내가 나의 아이에게.
            </span>
          </div>
        </div>

      </div>

      <div className='flex justify-center mt-10 w-full h-96'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/a9fyx_mp75M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>

      <div className='mt-10' >
        <Gallery />
      </div>
    </div>
  )
}

export default Wave