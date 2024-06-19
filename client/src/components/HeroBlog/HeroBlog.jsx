
import { useEffect, useState } from "react";
import "./HeroBlog.scss";
import { getArticleWithId } from "../../lib/api-requests";

export const HeroBlog = ({ selectedArticleId }) => {
  console.log(selectedArticleId)
  const [selectedArticle, setSelectedArticle] = useState(null);
   useEffect(() => {
    getArticleWithId(selectedArticleId, setSelectedArticle);
   }, [selectedArticleId]);

   if (!selectedArticle) return <></>
   const { title, date_created, author, image, description } = selectedArticle;
  return (
    <section className="hero">
      <h1 className="hero__title">Medium.</h1>

      <article className="hero__article">
        <aside className="hero__article--boundary">
          <img src={image} alt="Blog Image" className="hero__article--image" />
        </aside>
        <aside className="hero__article--details">
          <hgroup className="hero__article--left">
            <h2 className="hero__article--title">{title}</h2>
            <date className="hero__article--date">{date_created}</date>
          </hgroup>
          <hgroup className="hero__article--right">
            <p className="hero__article--description">{description}</p>
            <p className="hero__article--author">{author}</p>
          </hgroup>
        </aside>
      </article>
    </section>
  );
};
