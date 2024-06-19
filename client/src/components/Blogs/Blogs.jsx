import { Link } from "react-router-dom";
import "./Blogs.scss";

export const Blogs = ({ filteredArticles }) => {
  return (
    <section className="articles">
      <h2 className="articles__heading">More Articles</h2>
      {filteredArticles.map(({ id, title, date_created, author, image, description }) => (
        <Link to={`/articles/${id}`} className="articles__card">
          <aside className="articles__card--post">
            <div className="articles__card--imagewrapper">
              <img
                src={image}
                alt="Blog Image"
                className="articles__card--image"
              />
            </div>
            <hgroup className="articles__card--details">
              <h2 className="articles__card--title">
                {title}
              </h2>
              <date className="articles__card--date">{date_created}</date>
              <p className="articles__card--description">{description}</p>
              <p className="articles__card--author">{author}</p>
            </hgroup>
          </aside>
        </Link>
      ))}
    </section>
  );
};
