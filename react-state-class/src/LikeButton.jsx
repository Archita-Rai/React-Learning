import { useState } from "react";
import "./LikeButton.css";
export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);
  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(clicks + 1);
  };
  let likeStyle = { color: "red" };
  return (
    <div>
      <p>Clicks : {clicks}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart likeButton" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart likeButton"></i>
        )}
      </p>
    </div>
  );
}
