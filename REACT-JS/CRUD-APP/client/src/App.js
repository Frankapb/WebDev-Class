import React from 'react'
import "./App.css";


function App() {
  

  let response = {}

  fetch("http://localhost:3001/")
    .then(res => res.json())
    .then(
      (result) => {
        response = result;
        console.log(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {

      }
    );



  return (
    <div className="App">
      <h1>CRUDD APPLICATION</h1>

      <div className="Form">
        <label>Movie name:</label>
        <input type="text" name="movieName" />
        <label>Review:</label>
        <input type="text" name="review" />

        <button>Submit</button>
      </div>

      <table>

        <thead> <tr> <th>MovieName </th>   <th>Review </th> </tr> </thead>
        <tbody> <tr><td>{response.name}</td> </tr> </tbody>

      </table>


    </div>
  );
}

export default App
