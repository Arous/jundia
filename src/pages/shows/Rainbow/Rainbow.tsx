import React from 'react'
import { useParams } from 'react-router-dom';

import Gallery from './RainbowGallery';


const Rainbow = () => {
  // const { id } = useParams();

  return (
    <div className='mt-20'>

      <div className='flex justify-center'>

        <div className='flex ml-5'>
          <div>
            <span className='text-2xl'>
              &lt;서커스 저글링&gt;
            </span>

            <br/>

            <span className='text-4xl'>
              레인보우쇼 RAINBOW SHOW
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
              20 min
            </span>

            <br/>

            <blockquote>
              "국내 최고의 디아볼로 공연자가 선보이는 스탠드업 서커스"
            </blockquote>
            <br />

            <br />
            <span>
              하나 둘 모인 관객들의 원형 공간 안에서,
              화려한 기술과 재담을 선보이는 스탠드업 서커스 공연.
              디아볼로 피날레 넘버로 정점을 찍는 축제 같은 쇼가 시작된다.
            </span>
          </div>
        </div>

      </div>

      <div className='flex justify-center mt-10 w-full h-96'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/keHkiIXslnQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>

      <div className='mt-10' >
        <Gallery />
      </div>
    </div>
  )
}

export default Rainbow 