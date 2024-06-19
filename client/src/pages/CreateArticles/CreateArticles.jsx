import "./CreateArticles.scss"

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const CreateArticles = () => {
    const [value, setValue] = useState('');
    return (
        <form className="form">
            <div className="form__field">
                <label htmlFor='title' className="form__field--label">
                    Title
                </label>
                <input className="form__field--input" type="text" name="title" id="title" placeholder="Enter your blog title..." required />
            </div>
            <div className="form__field">
                <label htmlFor='author' className="form__field--label">
                    Author
                </label>
                <input className="form__field--input" type="text" name="author" id="author" placeholder="Enter your pseudoname..." required />
            </div>
            <ReactQuill theme="snow" value={value} onChange={setValue}/>

            <div className="form__buttons">
                <button type="button" className="button">
                    CANCEL
                </button>
                <button type="submit" className="form__buttons--submit">
                    SUBMIT
                </button>
            </div>
        </form>
    )
}