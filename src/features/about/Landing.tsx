import React from 'react'


const Landing = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="text-center pb-12 md:pb-0">
            <h1
              className="text-5xl md:text-[3.50rem] font-bold leading-tighter tracking-tighter mb-4"
            >
              <span
                className="mr-5 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-cyan-500"
                >
                  CIRCUS 
              </span>
              <span
                className=" bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-cyan-500"
                >
                  CLASSICS
              </span>
              <br/>

              <span>
                Lee Jun Sang  
              </span>
              <span className='m-3'> | </span>
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500"
                >
                  이준상
              </span>
              {/* + */}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 whitespace-nowrap"
                >
                  {/* Tailwind CSS */}
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="mt-5 text-xl text-gray-600 mb-8 dark:text-slate-400">
                준디아 / 이준상은 2016 중국 대만 국제 디아볼로 경연대회 금상에 빛나는 대한민국 최고의 서커스 디아볼로 공연자이다.
                전 세계 22개국을 여행하며 공연한 경험을 바탕으 로 현대 서커스 공연 창작과 오브제 리서치를 하고 있다.
                서커스 창작 단체 서커스 디 랩 소속 대표작 날갯짓, 서커스올림픽
              </p>
              <div className="max-w-none flex justify-center">
                <div>
                  {/* <a
                    className="btn text-white bg-blue-600 hover:bg-blue-800 mb-4 sm:mb-0 font-bold"
                    href="https://github.com/onwidget/astrowind"
                    target="_blank"
                    rel="noopener"
                    >Get template
                  </a> */}
                </div>
                <div>
                  {/* <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-800 ml-4"
                    href="#"
                    >Learn more
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center mb-8">
              <div className="flex flex-col justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing