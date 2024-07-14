import React, { useState } from "react";
import Comments from "./Comments";
import { commentData } from "./commentsData";
const MainComment = () => {
  const [comments, setComments] = useState(commentData);
  return (
    <div>
      <Comments key={comments.id} comments={comments} />
    </div>
  );
};

export default MainComment;
