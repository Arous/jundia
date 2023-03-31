import React, { Component } from "react";
import ReactCountryFlag from 'react-country-flag';

import ImageWithText from "@/components/Image/ImageHoverText";
import Biography from "@/features/about/Biography";
import Landing from "@/features/about/Landing";
import TimeLine from "@/features/about/TimeLine";



const About = () => {
  const aboutText = "\
    서커스 디 랩( Circus D.Lab )은 서커스 드라마 연구소의 약자로 서커스를\
    배경으로 한 드라마를 연구하는 단체입니다.\
    현시대의 서커스가 가지는 실험적인 특성을 중시하고\
    기존의 틀에서 벗어난 창작 작업에 힘쓰고 있습니다.\
    가장 가까운 자신의 몸부터\
    저글링 도구, 무대 세트에 이르기까지\
    다양한 오브제에 대한 탐구와 실험을 통해\
    새로운 그림을 만들어 보여주고자 합니다.\
    그리고 그러한 새로운 속에서\
    현시대가 공감할 수 있는 메시지를 담고자 합니다.\
  "

  return (
    <div>

      <Landing />

      <div className="lg:flex">

        <div className="flex justify-center ">
          <ImageWithText
            src={"/assets/images_compressed/profiles/profile4.jpg"}
            alt={"text"}
            text={''}
            width={500}
            height={300}
          />
        </div>

        <Biography />
      </div>

      <br />

      <div className="mt-20 lg:flex justify-center gap-5">
        <div className="flex justify-center items-center">
          {/* <TimeLine /> */}

          <div>
            <h1> 국내 초청공연 </h1>
            <br/>
            <p>2022 서울거리예술축제</p>
            <p>2021 서커스캬바레</p>
            <p>2021 부산 국제연극제</p>
            <p>2020 이천 국제일루션 축제</p>
            <p>2019 의정부 음악극 축제</p>
            <p>2018 광주 프린지인터네셔널</p>
            <p>2018 수원 연극축제</p>
            <p>2018 안산 국제거리극축제</p>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/assets/images_compressed/profiles/profile3.jpg" width={500} height={300} />
        </div>
      </div>

      <br />
      <br />

      <div className="mt-10 lg:flex justify-center items-center gap-5">
        <div className="flex justify-center">
          <img src="/assets/images_compressed/profiles/profile5.jpg" width={500} height={300} />
        </div>
        <div className="mt-5">
          <h1>해외 공연</h1>
          <br/>
          <p>2023 포카사 서커스 페스티벌 대만 <ReactCountryFlag countryCode="TW" /> </p>
          <p>2023 플립사이드 페스티벌 싱가폴<ReactCountryFlag countryCode="SG" /></p>
          <p>2019 유럽 저글링 컨벤션 오픈스테이지 영국<ReactCountryFlag countryCode="GB" /></p>
          <p>2019 타이중 플라워 페스티벌 대만<ReactCountryFlag countryCode="TW" /></p>
          <p>2018 쿠알라룸푸르 퍼블리카 스트릿 서커스 말레이시아<ReactCountryFlag countryCode="MY" /></p>
          <p>2018 하노이 한국문화원 꿈달사 매직쇼 베트남<ReactCountryFlag countryCode="VN" /></p>
          <p>2017 몬트리올 컴플리트먼트 서커스 페스티벌 캐나다<ReactCountryFlag countryCode="CA" /></p>
          <p>2017 루블린 스트릿 페스티벌 폴란드<ReactCountryFlag countryCode="PL" /></p>
          <p>2016 에든버러 페스티벌 프린지 영국<ReactCountryFlag countryCode="GB" /></p>
          <p>2016 피라타레가 축제 스페인<ReactCountryFlag countryCode="ES" /></p>
          <p>2016 취리히 씨어터 스펙타클 스위스<ReactCountryFlag countryCode="CH" /></p>
          <p>2015 LA 헐리우드 스타 스트릿 거리공연 미국<ReactCountryFlag countryCode="US" /></p>
          <p>2015 파리 노트르담 성당 광장 거리공연 프랑스<ReactCountryFlag countryCode="FR" /></p>
          <p>2015 마닐라 한국문화원 꿈달사 매직쇼 필리핀<ReactCountryFlag countryCode="PH" /></p>
          <p>2015 두바이 더 워크 거리공연 아랍에미레이트연합<ReactCountryFlag countryCode="AE" /></p>
          <p>2015 도쿄 시부야 거리공연 일본<ReactCountryFlag countryCode="JP" /></p>
          <p>2015 오차드 로드 거리공연 싱가폴<ReactCountryFlag countryCode="SG" /></p>
          <p>2014 모스크바/상트 페테르부르크 한류 축제 러시아<ReactCountryFlag countryCode="RU" /></p>
        </div>
      </div>
    </div>
  )
}

export default About