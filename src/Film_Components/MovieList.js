import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Form from "./form_add_film";
import "./style_1.css";

function MovieList() {
  const initialarray = [
    { filmName: "Dark Places", Ratings: "8", Description: "gggggg" },
    { filmName: "The Guilty", Ratings: "4", Description: "cccccc" },
    { filmName: "The Little Things", Ratings: "9", Description: "bbbbbb" },
    { filmName: "Monster Hunter", Ratings: "5", Description: "aaaaaa" },
  ];

  const [arr, setArr] = useState(initialarray);
  const [film, setFilm] = useState();
  const [rates, setRates] = useState();
  const [applyform, setApplyform] = useState(false);
  const [description, setDescription] = useState();

  let nameRef = useRef();
  let rateRef = useRef();
  let ratingsRef = useRef();

  function handleFilmName() {
    setFilm(nameRef.current.value);
  }

  const handleRate = () => {
    setRates(ratingsRef.current.value.toString());

    //setRates(event.target.value.toString());
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleAdd = () => {
    if (film !== undefined && rates !== undefined) {
      setArr([
        ...arr,
        { filmName: film, Ratings: rates, Description: description },
      ]);
      setApplyform(!applyform);
    }

    setApplyform(!applyform);
  };

  const filterCards = () => {
    let afterArray = arr.filter((element) => {
      return element.Ratings >= rateRef.current.value;
    });

    setArr(afterArray);
  };

  /*  useEffect(() => {
    // let namings = nameRef.current.value;
    // let ratings = ratingsRef.current.value.toString();
    setFilm(namings);
    setRates(ratings);
    setArr([...arr, { filmName: film, Ratings: rates }]);
  }, [changeable]); */

  return (
    <div>
      <div className="container">
        {applyform === true ? (
          <Form
            handleFilmName={handleFilmName}
            handleAdd={handleAdd}
            nameRef={nameRef}
            handleRate={handleRate}
            ratingsRef={ratingsRef}
            handleDescription={handleDescription}
          />
        ) : (
          arr.map((element) => {
            return (
              <MovieCard
                filmName={element.filmName}
                Ratings={element.Ratings}
                Description={element.Description}
              />
            );
          })
        )}
      </div>
      <br />
      <br />

      <button
        type="button"
        style={{
          display: applyform === true ? "none" : "block",
          marginLeft: "10px",
        }}
        onClick={() => setApplyform(!applyform)}
      >
        Add a Film Card
      </button>
      <br />
      <br />
      <br />
      <div style={{ display: applyform === true ? "none" : "block" }}>
        <label for="lname">Enter a rate :</label>
        <input type="text" id="lname" name="lname" ref={rateRef} />
        <button
          type="button"
          onClick={filterCards}
          style={{ marginLeft: "10px" }}
        >
          filter
        </button>
      </div>
    </div>
  );
}
export default MovieList;

/* 
{applyform === true ? (
  <Form handleFilmName={handleFilmName} handleAdd={handleAdd} />
) : (
  arr.map((element) => {
    return <MovieCard y={element.filmName} />;
  })
)}

<button
  type="button"
  style={{ display: applyform === true ? "none" : "block" }}
  onClick={() => setApplyform(!applyform)}
>
  if you want t / skip the form
</button> */
