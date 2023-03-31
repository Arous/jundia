import React from 'react'
import { useParams } from 'react-router-dom';

import Gallery from './CircusClassicGallery';


const CircusClassic = () => {
  // const { id } = useParams();

  return (
    <div className='mt-20'>

      <div className='flex'>

        <div className='flex ml-5'>
          <div>
            <span className='text-2xl'>
              &lt;서커스 저글링&gt;
            </span>

            <br/>

            <span className='text-4xl'>
              서커스 클래식 CIRCUS CLASSICS
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
              25 min
            </span>

            <br/>

            <aside>
              "클래식 음악과 현대 서커스의 유쾌한 만남"
            </aside>
            <br />

            <br />
            <span>
              나비넥타이가 지휘에 맞춰 춤을 추는 판타지 서커스.
              서커스를 위한 서커스가 아닌 클래식을 위한 서커스.
              흥미진진한 오브제의 반전이 시작된다.
            </span>
          </div>
        </div>

      </div>

      <div className='flex justify-center mt-10 w-full h-96'>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xy1yUMjdClU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>

      <div className='mt-10' >
        <Gallery />
      </div>
    </div>
  )
}

export default CircusClassic