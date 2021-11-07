import React from "react";
import "./style_3.css";

const Form = (props) => {
  return (
    <div>
      <form>
        <div className="myForm">
          <div className="child">
            <label>Film Name: </label>

            <input
              type="text"
              onChange={props.handleFilmName}
              ref={props.nameRef}
            />
          </div>

          <div className="child">
            <label>Description : </label>
            <input type="text" onChange={props.handleDescription} />
          </div>

          <div className="child">
            <label>Ratings: </label>
            <input
              type="text"
              onChange={props.handleRate}
              ref={props.ratingsRef}
            />
          </div>
        </div>

        <input
          type="button"
          value="Add"
          onClick={props.handleAdd}
          className="click"
        />
      </form>
    </div>
  );
};

export default Form;
