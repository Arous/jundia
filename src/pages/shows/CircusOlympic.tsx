import React from 'react'
import { useParams } from 'react-router-dom';

import { CardMedia } from '@mui/material';


const CircusOlympic = () => {
  // const { id } = useParams();

  const tmpImgs = import.meta.glob("/src/assets/images/Circus/Show_Olympic/*")


  return (
    <div>


      <div className='flex'>

        <video className="w-full" autoPlay controls>
          <source src="https://youtu.be/7c5duxuxz1U" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className='flex ml-5'>
          <div>
            <span className='text-xl'>
              &lt;서커스 드라마&gt;
            </span>

            <br/>

            <span className='text-2xl'>
              서커스올림픽 CIRCUS OLYMPICS
            </span>
            <p> 30 min </p>

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

            <span>
              5대륙의 화합을 상징하는 5개의 각기 다른 색깔의 링, 성화, 그리고 타오르는 불꽃. 컬링부터 테니스까지 다양한 종목들이 서커스로 재해석된 인류 화합의 상징. 서커스와 올림픽 스포츠를 넘나드는 박진감 넘치는 두 남자의 경쟁이 시작된다.
            </span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CircusOlympic