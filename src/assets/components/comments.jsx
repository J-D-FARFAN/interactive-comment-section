import { useState } from "react";
import "./stylesComponents/comments.css";
import IconPlus from "./Icons/plus";
import IconMinus from "./Icons/minus";
import IconReply from "./Icons/reply";
import IconEdit from "./Icons/edit";
import IconDelete from "./Icons/delete";
import { UserComments } from "./userComments";

export function Comments({
  nameUserComment,
  createdComment,
  comment,
  avatar,
  score,
  isUserComment,
  userAvatar,
  replies = [],
  addReply, // Nueva función para agregar respuestas
}) {
  const [controleScore, setControleScore] = useState(score);
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleClickPlus = () => setControleScore(controleScore + 1);
  const handleClickMinus = () =>
    controleScore === 0
      ? setControleScore(0)
      : setControleScore(controleScore - 1);

  const toggleReplyBox = () => setShowReplyBox(!showReplyBox);

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
              </section>

              <section className="bx-btns-controler">
                {!isUserComment && (
                  <div className="bx-replyComments" onClick={toggleReplyBox}>
                    <span className="bx-reply">
                      <IconReply />
                    </span>
                    <span className="reply">
                      {showReplyBox ? "Close" : "Reply"}
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
      {/* Renderizar respuestas */}
      <article
        className={`content__allReplies ${showReplyBox ? "showReply" : ""}`}
      >
        {(showReplyBox || replies.length > 0) && (
          <section className="bx-line"></section>
        )}

        <section className="allReplies">
          <div className="commentsReplies">
            {replies.map((reply, index) => (
              <Comments
                key={`reply-${index}`}
                nameUserComment={reply.user.username}
                createdComment={reply.createdAt}
                comment={reply.content}
                avatar={reply.user.image.webp}
                score={reply.score}
                isUserComment={reply.user.username === "juliusomo"}
                userAvatar={userAvatar}
                replies={reply.replies || []} // Manejo recursivo de respuestas
                addReply={addReply}
              />
            ))}
          </div>

          {/* Caja para agregar respuesta */}
          <div className="content_userReplies">
            {showReplyBox && (
              <UserComments
                TextBtn="REPLY"
                userAvatar={userAvatar}
                isUserComment={true}
                onAddComment={
                  (replyContent) => addReply(replyContent, nameUserComment) // Pasa correctamente el username del comentario al que se responde
                }
              />
            )}
          </div>
        </section>
      </article>
    </>
  );
}
