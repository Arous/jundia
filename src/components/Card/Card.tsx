// src/components/Card.tsx
import React from "react";
import { Card as MuiCard, CardContent, CardHeader, Chip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: number;
  image: string;
  title: string;
  content: string;
  hashtags: string[];
}

const Card: React.FC<CardProps> = ({id, image, title, content, hashtags }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/show/${id}`);
  };

  return (
    <MuiCard onClick={handleClick} sx={{ cursor: "pointer", marginBottom: "16px" }}>
      {/* <CardHeader title={title} /> */}
      <CardContent>
        <img src={image} alt={title} style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 ">
          {title}
        </h5>
        {/* <Typography variant="body2">
          {title}
        </Typography> */}

        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        {/* <div>
          {hashtags.map((hashtag, index) => (
            <Chip key={index} label={hashtag} sx={{ marginRight: "4px", marginTop: "8px" }} />
          ))}
        </div> */}
      </CardContent>
    </MuiCard>
  );
};

export default Card;
