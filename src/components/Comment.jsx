import React, { useState } from "react";
import  './Comment.css';

function Form() {
  const [state, setState] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const arraycomments = [...comments,state]
    setComments(arraycomments);

    // const arrayDate = [...date];
    // const arrayComments = [...comments];
    
    // arrayComments.unshift(state.date);
    // setDate(arrayDate);
    // arrayComments.unshift(state.comment);
    // setComments(arrayComments);

    // const arrayNames = [...names];
    // arrayNames.unshift(state.name);
    // setNames(arrayNames);
  };

  const handleChange = (e) => {
   
    setState({
      ...state,
      [e.target.dataset.name]: e.target.value,
      date: new Date().toLocaleString(),
    });
   // getDate();
  };


  return (
    <div className="comments">
      <div className="comments__all">
          {comments.map((comment) => (
            <div key={comment.name} className="comments__col" >
              <span>{`${comment.name} написал ${comment.date} следующее: ${comment.comment}`}</span>
            </div>
          ))}
      </div>
      <form className="comments" onSubmit={handleSubmit}>
        <div 
        className="date"
        data-name={"date"}
       
        />
       {/* <span>{state.date}</span>*/}
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

//[...] - копіруем состояние которое уже было
 //[...comments,state] - стейт это обьект с полями нейим коммент и дейт