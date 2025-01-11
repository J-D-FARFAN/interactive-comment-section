import "./stylesComponents/comments.css";
import IconPlus from "./Icons/plus";
import IconMinus from "./Icons/minus";
import IconReply from "./Icons/reply";
import IconEdit from "./Icons/edit";
import IconDelete from "./Icons/delete";
import { useState } from "react";
import { UserComments } from "./userComments";

export function Comments({
  nameUserComment,
  createdComment,
  comment,
  avatar,
  score,
  isUserComment,
  userAvatar,
  addComment,
}) {
  const [controleScore, setControleScore] = useState(score);
  const [showAddedComment, setShowAddedComment] = useState(false);

  const handleClickPlus = () => setControleScore(controleScore + 1);

  const handleClickMinus = () =>
    controleScore === 0
      ? setControleScore(0)
      : setControleScore(controleScore - 1);

  const handleClickShowAddedComment = () =>
    setShowAddedComment(!showAddedComment);

  return (
    <>
      <article className="bx-comments">
        <section className="bx-info-comments">
          <div className="bx-controll-score">
            <span
              className="bx-plus stylesDefaultIcons"
              onClick={handleClickPlus}
            >
              <IconPlus />
            </span>
            <span className="score">{controleScore}</span>
            <span
              className="bx-minus stylesDefaultIcons"
              onClick={handleClickMinus}
            >
              <IconMinus />
            </span>
          </div>

          <section className="allInfo-comments">
            <header className="infoUserComments">
              <section className="sectionUser">
                <div className="bx-avatar">
                  <img src={avatar} alt="avatar" className="avatar" />
                </div>
                <span className="nameUser">{nameUserComment}</span>
                {isUserComment && <span className="meUser">you</span>}
                <span className="createdComments">{createdComment}</span>
                {/* Cambia dinámicamente */}
              </section>

              <section className="bx-btns-controler">
                {isUserComment && (
                  <>
                    <div className="bx-delete">
                      <span className="iconDelete">
                        <IconDelete />
                      </span>
                      <span className="delete">Delete</span>
                    </div>
                    <div className="bx-edit">
                      <span className="iconEdit">
                        <IconEdit />
                      </span>
                      <span className="edit">Edit</span>
                    </div>
                  </>
                )}
                {!isUserComment && (
                  <div
                    className="bx-replyComments"
                    onClick={handleClickShowAddedComment}
                  >
                    <span className="bx-reply">
                      <IconReply />
                    </span>

                    <span className="reply">
                      {showAddedComment ? "Close" : "Reply"}
                    </span>
                  </div>
                )}
              </section>
            </header>

            <div className="contentComment">
              <p className="comment">{comment}</p>
            </div>
          </section>
        </section>
      </article>
      <section className="content__comments-user">
        <span className="line"></span>

        <div
          className={`user-comments-container ${
            showAddedComment ? "showAdded" : "closeAdded"
          }`}
        >
          {showAddedComment && (
            <UserComments
              TextBtn={"REPLY"}
              userAvatar={userAvatar}
              isUserComment={true}
              onAddComment={addComment}
            />
          )}
        </div>
      </section>
    </>
  );
}
