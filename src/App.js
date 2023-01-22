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

  console.log(
    document.querySelector("div.container:nth-child(3) > .todo-name")
  );

  // TODO добавить это к конфигурации cypress-a
  // viewportHeight:
  // viewportWidths:

  // Добавить утилити методы из либы @testing-libraru/cypress/add-commands
  // findByTestId, findByText

  // Можно дебажить в cypress через then и debugger или через chain .debug(), .pause() -> 7ой урок kentcdodds

  // Для того чтобы добавить факе данные нужно скачать и установить test-data-bot для cypress в папку support -> -> 8ой урок kentcdodds
  // Для тестирование формы регистрации генерация пользователя

  // для того чтобы изменить сервис пишем cy.server().route -> yрок 10 kentcdodds

  // автоматизация создания пользователя и отдельной команды для cypress -> урок (13, 14) kentcdodds

  // установления токена -> урок 16 kentcdodds
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
