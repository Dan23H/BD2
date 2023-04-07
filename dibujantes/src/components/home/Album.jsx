import "./album.css";
import "../../bootstrap-css/bootstrap.min.css";
import { Post } from "./Post";

export const Album = ({ posts, onComments }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {posts &&
          posts.map((post, idx) => (
            <div className="col-md-4">
              <Post
                key={idx}
                msg={post.msg}
                img={post.img}
                onComments={onComments}
              />
            </div>
          ))}
      </div>
    </div>
  );
};