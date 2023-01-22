import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    setList((prevList) => [...prevList, { value: value, checked: false }]);
    setValue("");
  };

  const removeTodo = (todo) => {
    setList((prevList) => prevList.filter((item) => item.value !== todo));
  };

  const onDone = (todo) => {
    const listItem = [...list].find((item) => item.value === todo);
    listItem.checked = !listItem.checked;

    setList((prevList) => [
      ...prevList
        .filter((item) => item.value !== listItem.value)
        .concat(listItem),
    ]);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          className="change"
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add todo</button>
        <div className="main-list">
          {list.map((item) => (
            <div
              className="container"
              style={{ display: "flex" }}
              key={item.value}
            >
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => onDone(item.value)}
                checked={item.checked}
              />
              <div
                className="todo-name"
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.value}
              </div>
              <div
                className="remove"
                onClick={() => removeTodo(item.value)}
                style={{ color: "red", marginLeft: "5px", cursor: "pointer" }}
              >
                x
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
