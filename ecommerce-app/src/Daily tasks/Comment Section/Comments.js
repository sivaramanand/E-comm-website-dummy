import React from "react";
import "./Comments.css";
const Comments = ({ comments }) => {
  return (
    <div>
      <div className="comment-container">
        <h3>{comments.text}</h3>
        <div>
          <button>Reply</button>
          <button>Delete</button>
        </div>
      </div>
      <div style={{ paddingLeft: "20px" }}>
        {comments?.replies?.map((ele) => (
          <Comments key={ele.id} comments={ele} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
