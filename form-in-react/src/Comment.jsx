import { useState } from "react";
import CommentsForm from "./CommentsForm";
import "./comment.css";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@ak",
      remarks: "Great Job",
      rating: 4,
    },
  ]);

  let addNewComment = (comments) => {
    setComments((currComment) => [...currComment, comments]);
    console.log(comments);
    console.log("comment added");
  };
  return (
    <>
      <div>
        <h3>All comments</h3>
        {comments.map((comment, idx) => {
          return (
            <div className="comment" key={idx}>
              <span>{comment.remarks}</span>
              &nbsp;
              <span>(rating = {comment.rating})</span>
              <p>- {comment.username}</p>
            </div>
          );
        })}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
