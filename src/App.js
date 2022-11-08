import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [items, setitems] = useState([]);
  const [input, setinput] = useState("");
  useEffect(() => {
    getDate();
  }, []);

  function getDate() {
    axios.get("http://localhost:3001/notes").then(
      (res) => setitems(res.data)
      // console.log(res)
    );
  }
  const addNote = () => {
    const noteObject = {
      content: input,
      date: new Date(),
    };

    axios
      .post("http://localhost:3001/notes", noteObject)
      .then((res) => setitems(items.concat(res.data)));
    console.log("button Clicked");
    console.log(noteObject);
  };

  const update = (id) => {
    const myData = {
      id: +1,
      content: "Updated Sucessfully",
    };
    axios
      .put(`http://localhost:3001/notes/${id}`, myData)
      .then((res) => setitems(res.data));
  };
  const remove = (id) => {
    const detach = {
      id: "",
      content: "",
      date: "",
    };
    axios
      .delete(`http://localhost:3001/notes/${id}`, detach)
      .then((response) => setitems(response.data));
  };

  return (
    <div className="App">
      <div>
        <input
          className="input"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder="Add data to Json Server"
        ></input>
        <div>
          <button onClick={addNote} className="add">
            Add
          </button>
        </div>

        {items.map((back) => {
          return (
            <div key={back.id}>
              <h1>{back.content}</h1>
              <button className="updbtn" onClick={() => update(back.id)}>
                Update
              </button>
              <button className="delbtn" onClick={() => remove(back.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
