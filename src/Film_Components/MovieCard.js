import React, { useState } from "react";
import "./style_2.css";

function MovieCard(props) {
  return (
    <>
      <div class="cards">
        <div class="card">
          <div>Film Name :</div>
          <div class="card-header">{props.filmName}</div>
          <div class="card-body">
            <li class="list-group-item">Ratings: {props.Ratings}</li>
            <li class="list-group-item">Description: {props.Description}</li>
          </div>
          <div class="card-footer">Poster :</div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
