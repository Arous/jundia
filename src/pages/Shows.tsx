import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import Card from '@/components/Card/Card';


const Shows: React.FC = () => {
  const cards = [
    {
      id: "circus_olympics",
      image: "/assets/images_compressed/Circus/Show_Olympic/1.jpg",
      title: "서커스올림픽 ",
      content: "CIRCUS OLYMPICS",
      hashtags: ["", ""],
    },

    {
      id: "butterfly",
      image: "/assets/images_compressed/Circus/Show_Butterfly/4.jpg",
      title: "날갯짓 ",
      content: "THE FLUTTER OF WINGS",
      hashtags: ["#example", "#card2"],
    },

    {
      id: "rainbow_show",
      image: "/assets/images_compressed/Circus/Show_Rainbow/6.jpg",
      title: "레인보우쇼 ",
      content: "RAINBOW SHOW",
      hashtags: ["#example", "#card3"],
    },

    {
      id: "circus_classic",
      image: "/assets/images_compressed/Circus/Show_Classic/3.jpg",
      title: "서커스 클래식",
      content: "CIRCUS CLASSICS",
      hashtags: ["#example", "#card4"],
    },

    {
      id: "dwave",
      image: "/assets/images_compressed/Circus/Show_Wave/1.jpg",
      title: "디 웨이브",
      content: "D.WAVE",
      hashtags: ["#example", "#card4"],
    },

  ];

  return (
    <>
      <div className="mt-20 text-4xl"> 작품 리스트 </div>
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        {cards.map((card) => (
          // <Card
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            content={card.content}
            hashtags={card.hashtags}
          />
        ))}
      </div>

      <Outlet />

    </>
  );
};

export default Shows;
