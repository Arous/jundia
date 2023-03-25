import React, { Component } from "react";

import ImageWithText from "@/components/Image/ImageHoverText";
import Biography from "@/features/about/Biography";
import Landing from "@/features/about/Landing";


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
    <>

      <Landing />

      <div className="lg:flex">

        <div className="flex justify-center ">
          <ImageWithText
            src={"/src/assets/images/profiles/profile5.jpg"}
            alt={"text"}
            text={aboutText}
            width={500}
            height={300}
          />
        </div>

        <Biography />
      </div>
    </>
  )
}

export default About