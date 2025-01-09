import "./App.css";
import { Comments } from "./assets/components/comments";
import { UserComments } from "./assets/components/userComments";

function App() {
  return (
    <>
      <section className="content--comments">
        <Comments />
      </section>

      <section className="content--userComments">
        <UserComments />
      </section>
    </>
  );
}

export default App;
