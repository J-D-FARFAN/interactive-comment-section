import "./stylesComponents/userComments.css";
import userAvatar from "/public/images/avatars/image-juliusomo.webp";

export function UserComments({ TextBtn }) {
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
          ></textarea>
        </div>

        <div className="bx-btn">
          <button type="submit" className="btnSendComment">
            {TextBtn}
          </button>
        </div>
      </article>
    </>
  );
}
