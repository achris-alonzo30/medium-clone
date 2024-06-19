import "./CreateArticles.scss";

import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { useUser } from "@clerk/clerk-react";
import DOMPurify from "dompurify";
import { stripHtmlTags } from "../../lib/stripHTMLTags";
import { createNewArticle, getUnsplashImages } from "../../lib/api-requests";
export const CreateArticles = () => {
  const {isSignedIn, user} = useUser();
  const [value, setValue] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUnsplashImages(setImages);
  }, []);

  if (images.length < 1) return <></>;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsloading(true)
    const sanitizedValue = DOMPurify.sanitize(value);
    const plainText = stripHtmlTags(sanitizedValue);

    console.log(plainText);
    const newArticle = {
      title: event.target.title.value,
      author: event.target.author.value,
      description: plainText,
      image: selectedImage,
    };
    console.log(newArticle)
    try {
        const res = await createNewArticle(newArticle);

        if (res) {
            setIsloading(false);
            navigate("/")
        }
    } catch (error) {
        console.error(error)
    }
    
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
};

if (!isSignedIn) return (
    <section className="modal">
        <p className="modal__message">You must be signed in to post a new article.</p>
        <button className="form__buttons--submit">
            LOGIN
        </button>
    </section>
)

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__field">
        <label className="form__field--label">Select Image</label>
        <div className="image-grid">
          {images.map(({ id, urls }) => (
            <div
            key={id}
            className={`image-grid__item-wrapper ${selectedImage === urls.full ? "selected" : ""}`}
            onClick={() => handleImageClick(urls.full)}
        >
            <img
              src={urls.full}
              alt={`Unsplash ${id}`}
              className={`image-grid__item`}
              onClick={() => handleImageClick(urls.full)}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="form__field">
        <label htmlFor="title" className="form__field--label">
          Title
        </label>
        <input
          className="form__field--input"
          type="text"
          name="title"
          id="title"
          placeholder="Enter your blog title..."
          required
        />
      </div>
      <div className="form__field">
        <label htmlFor="author" className="form__field--label">
          Author
        </label>
        <input
          className="form__field--input"
          type="text"
          name="author"
          id="author"
          placeholder="Enter your pseudoname..."
          required
        />
      </div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />

      <div className="form__buttons">
        <button type="button" className="button" disabled={!isSignedIn || isLoading}>
          CANCEL
        </button>
        <button type="submit" className="form__buttons--submit" disabled={!isSignedIn || isLoading}>
          SUBMIT
        </button>
      </div>
    </form>
  );
};
