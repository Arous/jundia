import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import Card from '@/components/Card/Card';
import TailwindCard from "@/components/Card/TailwindCard";
import About from "./About";
// import DetailPage from "./components/DetailPage";

const App: React.FC = () => {
  const cards = [
    {
      id: 1,
      image: "/src/assets/images/Circus/Show_Olympic/1.jpg",
      title: "서커스올림픽 ",
      content: "CIRCUS OLYMPICS",
      hashtags: ["", ""],
    },

    {
      id: 2,
      image: "/src/assets/images/Circus/Show_Butterfly/4.jpg",
      title: "날갯짓 ",
      content: "THE FLUTTER OF WINGS",
      hashtags: ["#example", "#card2"],
    },

    {
      id: 3,
      image: "/src/assets/images/Circus/Show_Rainbow/6.jpg",
      title: "레인보우쇼 ",
      content: "RAINBOW SHOW",
      hashtags: ["#example", "#card3"],
    },

    {
      id: 4,
      image: "/src/assets/images/Circus/Show_Classic/3.jpg",
      title: "서커스 클래식",
      content: "CIRCUS CLASSIC",
      hashtags: ["#example", "#card4"],
    },

    {
      id: 5,
      image: "/src/assets/images/Circus/Show_Wave/1.jpg",
      title: "디 웨이브",
      content: "D.WAVE",
      hashtags: ["#example", "#card4"],
    },

  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
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
  );
};

export default App;
