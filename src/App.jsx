import "./App.css";
import { Comments } from "./assets/components/comments";
import { UserComments } from "./assets/components/userComments";
import data from "./assets/data/data.json";
import { useState } from "react";

function App() {
  const [userComments, setUserComments] = useState(data.comments);

  // Agregar un nuevo comentario
  const handleAddComment = (newComment) => {
    setUserComments([
      ...userComments,
      {
        id: Date.now(),
        content: newComment,
        createdAt: "Just now",
        user: {
          image: data.currentUser.image,
          username: data.currentUser.username,
        },
        score: 0,
        replies: [],
      },
    ]);
  };

  const handleAddReply = (replyContent, replyingTo) => {
    setUserComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.user.username === replyingTo) {
          // Cambia según la lógica de búsqueda del comentario
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                content: replyContent,
                createdAt: "Just now",
                replyingTo: replyingTo,
                user: {
                  image: data.currentUser.image,
                  username: data.currentUser.username,
                },
                score: 0,
              },
            ],
          };
        } else if (comment.replies?.length > 0) {
          // Actualiza replies anidados si es necesario
          return {
            ...comment,
            replies: handleNestedReplies(
              comment.replies,
              replyContent,
              replyingTo
            ),
          };
        }
        return comment;
      })
    );
  };

  // Manejo de respuestas anidadas
  const handleNestedReplies = (replies, replyContent, replyingTo) => {
    return replies.map((reply) => {
      if (reply.user.username === replyingTo) {
        return {
          ...reply,
          replies: [
            ...(reply.replies || []),
            {
              id: Date.now(),
              content: replyContent,
              createdAt: "Just now",
              replyingTo: replyingTo,
              user: {
                image: data.currentUser.image,
                username: data.currentUser.username,
              },
              score: 0,
            },
          ],
        };
      }
      return reply;
    });
  };

  return (
    <>
      <section className="content--comments">
        {userComments.map((comment, index) => (
          <Comments
            key={`comment-${index}`}
            nameUserComment={comment.user.username}
            createdComment={comment.createdAt}
            comment={comment.content}
            avatar={comment.user.image.webp}
            score={comment.score}
            isUserComment={comment.user.username === "juliusomo"}
            userAvatar={data.currentUser.image.webp}
            replies={comment.replies}
            addReply={handleAddReply}
          />
        ))}
      </section>

      <section className="content--userComments">
        <UserComments
          TextBtn={"SEND"}
          userAvatar={data.currentUser.image.webp}
          isUserComment={true}
          onAddComment={handleAddComment}
        />
      </section>
    </>
  );
}

export default App;
