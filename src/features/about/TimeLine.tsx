import React from 'react'

import ReactCountryFlag from 'react-country-flag';

import TimeLineCard from './TimeLineCard';


const TimeLineCardData = [
  {
    title: "2023 포카사 서커스 페스티벌 대만",
    counrtyCode: "TW",
    time: "January 13th, 2023",
    image: "/assets/images_compressed/show/2020_forest3.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2023 플립사이드 페스티벌 싱가폴",
    counrtyCode: "SG",
    time: "January 13th, 2023",
    image: "/assets/images_compressed/show/2022_busan_international1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2019 유럽 저글링 컨벤션 오픈스테이지 영국",
    counrtyCode: "GB",
    time: "January 13th, 2023",
    image: "//assets/images_compressed/show/BTS_ON_cover by JUNDIA.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2019 타이중 플라워 페스티벌 대만",
    counrtyCode: "TW",
    time: "January 13th, 2023",
    image: "/assets/images_compressed/show/BTS_ON_cover by JUNDIA.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2018 쿠알라룸푸르 퍼블리카 스트릿 서커스 말레이시아",
    counrtyCode: "MY",
    time: "January 13th, 2023",
    image: "/assets/images_compressed/show/BTS_ON_cover by JUNDIA.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2018 하노이 한국문화원 꿈달사 매직쇼 베트남",
    counrtyCode: "VN",
    time: "January 13th, 2023",
    image: "/assets/images_compressed/show/BTS_ON_cover by JUNDIA.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2017 몬트리올 컴플리트먼트 서커스 페스티벌 캐나다",
    counrtyCode: "CN",
    time: "January 13th, 2023",
    image: "/assets/images_compressed/show/BTS_ON_cover by JUNDIA.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2017 루블린 스트릿 페스티벌 폴란드",
    counrtyCode: "PL",
    time: "January 13th, 2023",
    image: "/assets/images_compressed/show/BTS_ON_cover by JUNDIA.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2017 루블린 스트릿 페스티벌 폴란드",
    counrtyCode: "PL",
    time: "January 13th, 2023",
    image: "/assets/images/show/BTS_ON_cover by JUNDIA.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2016 에든버러 페스티벌 프린지 영국",
    counrtyCode: "GB",
    time: "January 13th, 2023",
    image: "/assets/images/show/BTS_ON_cover by JUNDIA.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2016 피라타레가 축제 스페인",
    counrtyCode: "ES",
    time: "January 13th, 2023",
    image: "/assets/images/show/BTS_ON_cover by JUNDIA.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2016 취리히 씨어터 스펙타클 스위스",
    counrtyCode: "CN",
    time: "January 13th, 2023",
    image: "/assets/images/show/BTS_ON_cover by JUNDIA.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    title: "2016 피라타레가 축제 스페인",
    counrtyCode: "ES",
    time: "January 13th, 2023",
    image: "/assets/images/show/BTS_ON_cover by JUNDIA.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]
//
// 2015 LA 헐리우드 스타 스트릿 거리공연 미국
// 2015 파리 노트르담 성당 광장 거리공연 프랑스
// 2015 마닐라 한국문화원 꿈달사 매직쇼 필리핀
// 2015 두바이 더 워크 거리공연 아랍에미레이트연합
// 2015 도쿄 시부야 거리공연 일본
// 2015 오차드 로드 거리공연 싱가폴
// 2014 모스크바/상트 페테르부르크 한류 축제 러시아 2014 방콕 MBK 공연 태국


const TimeLine = () => {

  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {/*{*/}
      {/*  TimeLineCardData.map( (data) => {*/}
      {/*    return (*/}
      {/*      <TimeLineCard*/}
      {/*        title={data.title}*/}
      {/*        counrtyCode={data.counrtyCode}*/}
      {/*        time={data.time}*/}
      {/*        image={data.image}*/}
      {/*        description={data.description}*/}
      {/*      />*/}
      {/*    )*/}
      {/*  })*/}
      {/*}*/}

        <li className="mb-10 ml-6">            
            <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-900">
                <svg aria-hidden="true" className="w-3 h-3 text-orange-800 dark:text-orange-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              2023 포카사 서커스 페스티벌 대만
              <div className='ml-2'>
                <ReactCountryFlag countryCode="TW" />
              </div>

              <span className="bg-orange-100 text-orange-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300 ml-3">
                Festival
              </span>
            </h3>

            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on January 13th, 2022
            </time>

            <div className='flex flex-wrap'>
              <img className='lg:w-1/2' src="/assets/images/show/2020_forest3.jpg" />

              <div className='basis-1/2 flex justify-center items-center'>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
                </p>
                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-orange-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg>
                  Download ZIP
                </a> */}
              </div>

            </div>
        </li>

        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-900">
                <svg aria-hidden="true" className="w-3 h-3 text-orange-800 dark:text-orange-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Figma v1.3.0
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 7th, 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
            </p>
        </li>
        
        <li className="ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-900">
                <svg aria-hidden="true" className="w-3 h-3 text-orange-800 dark:text-orange-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Library v1.2.2
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 2nd, 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
            </p>
        </li>

    </ol>
  )
}


export default TimeLine

