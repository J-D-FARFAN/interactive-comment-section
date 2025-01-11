import "./App.css";
import { Comments } from "./assets/components/comments";
import { UserComments } from "./assets/components/userComments";
import data from "./assets/data/data.json";
import { useState } from "react";

function App() {
  const [userComments, setUserComments] = useState([]); // Estado para nuevos comentarios

  // Función para agregar un comentario
  const handleAddComment = (newComment) => {
    setUserComments([
      ...userComments,
      {
        content: newComment,
        createdAt: "Just now", // Puedes agregar lógica para calcular el tiempo real
        user: {
          image: data.currentUser.image.webp,
          username: data.currentUser.username,
        },
        score: 0,
      },
    ]);
  };

  return (
    <>
      <section className="content--comments">
        {/* Renderiza comentarios existentes */}
        {data.comments.map((comment, index) => (
          <Comments
            key={`existing-${index}`}
            comment={comment.content}
            createdComment={comment.createdAt}
            avatar={comment.user.image.webp}
            nameUserComment={comment.user.username}
            score={comment.score}
            isUserComment={false}
            userAvatar={data.currentUser.image.webp}
          />
        ))}

        {/* Renderiza nuevos comentarios */}
        {userComments.map((comment, index) => (
          <Comments
            key={`new-${index}`}
            comment={comment.content}
            createdComment={comment.createdAt}
            avatar={comment.user.image}
            nameUserComment={comment.user.username}
            score={comment.score}
            isUserComment={true} // Marca los nuevos comentarios como del usuario
            userAvatar={data.currentUser.image.webp}
            addComment={handleAddComment}
          />
        ))}
      </section>

      <section className="content--userComments">
        {/* Pasa la función para manejar el comentario */}
        <UserComments
          TextBtn={"SEND"}
          userAvatar={data.currentUser.image.webp}
          isUserComment={true}
          onAddComment={handleAddComment} // Pasa la función como prop
        />
      </section>
    </>
  );
}

export default App;
