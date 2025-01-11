import { useState } from "react";
import "./stylesComponents/userComments.css";

export function UserComments({
  TextBtn,
  userAvatar,
  isUserComment,
  onAddComment,
}) {
  const [valueComment, setValueComment] = useState("");

  const handleChange = (e) => setValueComment(e.target.value);

  const handleSubmit = () => {
    if (valueComment.trim() !== "") {
      onAddComment(valueComment);
      setValueComment("");
    }
  };

  return (
    <>
      <article className="bx-userComment">
        <div className="bx-userAvatar">
          <img src={userAvatar} alt="" className="userAvatar" />
        </div>

        <div className="bx-sectionUserCommentTextarea">
          <textarea
            className="userComment"
            placeholder="Add a comment..."
            value={valueComment}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="bx-btn">
          <button
            type="submit"
            className="btnSendComment"
            onClick={handleSubmit}
          >
            {TextBtn}
          </button>
        </div>
      </article>
    </>
  );
}
