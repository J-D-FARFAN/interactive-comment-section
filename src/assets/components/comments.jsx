import IconPlus from "./Icons/plus";
import IconMinus from "./Icons/minus";
import IconReply from "./Icons/reply";
import imageDefault from "/public/images/avatars/image-amyrobson.webp";

export function Comments() {
  return (
    <>
      <article className="bx-comments">
        <div className="bx-controll-score">
          <span className="bx-plus">
            <IconPlus />
          </span>
          <span className="score">12</span>
          <span className="bx-plus">
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

            <div className="bx-replyComments">
              <span className="bx-reply">
                <IconReply />
              </span>

              <span className="reply">Reply</span>
            </div>
          </header>

          <div className="contentComment">
            <p className="comment">
              Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You’ve nailed the design and the
              responsiveness at various breakpoints works really well.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
