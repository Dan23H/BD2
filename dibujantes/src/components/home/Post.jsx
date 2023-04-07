import "../../bootstrap-css/bootstrap.min.css";
import "./album.css";

export const Post = ({ msg, img, onComments }) => {
  return (
    <div className="card mb-4 box-shadow">
      <img alt="Imagen" className="card-img-top" src={img} />
      <div className="card-body">
        <p className="card-text">{msg}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <i className="fa-solid fa-thumbs-up"></i>
              <span> Like</span>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={onComments}
            >
              Comentario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};