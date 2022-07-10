import React, { useState } from "react";
import  './Comment.css';

function Form() {
  const [state, setState] = useState("");
  const [comments, setComments] = useState([]);
  const [names, setNames] = useState([]);
  const [date, setDate] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const arrayDate = [...date];
    const arrayComments = [...comments];
    
    arrayDate.unshift(state.date);
    setDate(arrayDate);
    arrayComments.unshift(state.comment);
    setComments(arrayComments);

    const arrayNames = [...names];
    arrayNames.unshift(state.name);
    setNames(arrayNames);
  };

  const handleChange = (e) => {
   
    setState({
      ...state,
      [e.target.dataset.name]: e.target.value,
    });
    getDate();
  };

  const getDate = () => {
    let date = new Date().toLocaleString();
    setState({date});
};

  return (
    <div className="comments">
      <div className="comments__all">
          {comments.map((comment) => (
            <div key={comment} className="comments__col" >
              <span>{comment}</span>
            </div>
          ))}
      </div>
      <form className="comments" onSubmit={handleSubmit}>
        <div 
        className="date"
        data-name={"date"}
       
        />
        <span>{state.date}</span>
        <input
          data-name={"name"}
          placeholder="Ваше имя"
          className="comments__input_name"
          onChange={handleChange} 
        />
    
        <input
          data-name={"photo"}
          placeholder="Ваше фото"
          className="comments__input_foto"
          onChange={handleChange}
          value={state.photo}
        />
        <textarea
          data-name={"comment"}
          placeholder="Ваш комментарий"
          className="comments__text"
          onChange={handleChange}
          value={state.comment}
        ></textarea>
        <input className="comments__button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;