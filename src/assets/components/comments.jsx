import "./stylesComponents/comments.css";
import IconPlus from "./Icons/plus";
import IconMinus from "./Icons/minus";
import IconReply from "./Icons/reply";
import imageDefault from "/public/images/avatars/image-amyrobson.webp";
import { useState } from "react";
import { UserComments } from "./userComments";

export function Comments() {
  const [controleScore, setControleScore] = useState(0);
  const [showAddedComment, setShowAddedComment] = useState(false);

  const handleClickPlus = () => setControleScore(controleScore + 1);

  const handleClickMinus = () =>
    controleScore === 0
      ? setControleScore(0)
      : setControleScore(controleScore - 1);

  const handleClickShowAddedComment = () => setShowAddedComment(true);

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
                  <img src={imageDefault} alt="avatar" className="avatar" />
                </div>

                <span className="nameUser">amyrobson</span>

                <span className="createdComments">1 month ago</span>
              </section>

              <div
                className="bx-replyComments"
                onClick={handleClickShowAddedComment}
              >
                <span className="bx-reply">
                  <IconReply />
                </span>

                <span className="reply">Reply</span>
              </div>
            </header>

            <div className="contentComment">
              <p className="comment">
                Impressive! Though it seems the drag feature could be improved.
                But overall it looks incredible. You’ve nailed the design and
                the responsiveness at various breakpoints works really well.
              </p>
            </div>
          </section>
        </section>
      </article>

      {showAddedComment ? <UserComments TextBtn={"REPLY"} /> : null}
    </>
  );
}
