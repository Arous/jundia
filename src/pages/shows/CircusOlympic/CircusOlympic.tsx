import React from 'react'
import { useParams } from 'react-router-dom';

import photos from './useCircusOlympicPhoto';
import Gallery from '@/components/Image/Gallery';
import CircusOlympicsGallery from './CircusOlymPicsGallery';


const CircusOlympic = () => {
  // const { id } = useParams();

  return (
    <div className='mt-20'>

      <div className='flex'>

        <div className='flex ml-5'>
          <div>
            <span className='text-2xl'>
              &lt;서커스 드라마&gt;
            </span>

            <br/>

            <span className='text-4xl'>
              서커스올림픽 CIRCUS OLYMPICS
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
              30 min
            </span>

            <br/>

            <p>
              "서커스로 재해석된 인류 화합의 상징, 서커스올림픽"
            </p>
            <br />

            {/* <body className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen flex items-center justify-center"> */}
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider uppercase">
                <span className="text-blue-500">O</span>
                <span className="text-yellow-400">l</span>
                <span className="text-black">y</span>
                <span className="text-green-500">m</span>
                <span className="text-red-500">p</span>
                <span className="text-blue-500">i</span>
                <span className="text-yellow-400">c</span>
                <span className="text-blue-500">s</span>
                <span className="text-gray-800"> </span> 
                <span className="text-black">C</span>
                <span className="text-green-500">i</span>
                <span className="text-red-500">r</span>
                <span className="text-blue-500">c</span>
                <span className="text-yellow-400">u</span>
                <span className="text-black">s</span>
            </h1>
            {/* </body> */}

            <br />
            <span>
              5대륙의 화합을 상징하는 5개의 각기 다른 색깔의 링, 성화, 그리고 타오르는 불꽃. 컬링부터 테니스까지 다양한 종목들이 서커스로 재해석된 인류 화합의 상징. 서커스와 올림픽 스포츠를 넘나드는 박진감 넘치는 두 남자의 경쟁이 시작된다.
            </span>
          </div>
        </div>

      </div>

      <div className='mt-10 w-full h-96'>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/7c5duxuxz1U"
          title="YouTube video player"
          allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>

      <div className='mt-10' >
        <CircusOlympicsGallery />
      </div>
    </div>
  )
}

export default CircusOlympic