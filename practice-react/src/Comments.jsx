import { use } from "react";
import Comment from "./Comment";
export default function Comments({ fetchComments }) {
  const commentData = use(fetchComments);
  const style = {
    border: "3px solid red",
    padding: "10px",
    borderRadius: "15px",
    margin: "10px 0px",
  };
  return (
    <div style={style}>
      <h3>Comments Are Here: </h3>
      {commentData.map((comment) => (
        <Comment comment={comment}></Comment>
      ))}
    </div>
  );
}
