import React from "react";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
//Challenges for this lesson:
//1.[x]Setup Airtable account.
//2.[x]Create Enviroment File.
//3.[x]Generate Airtable API Key.
//4.[x]Connect to Airtable API.
//5.[x]Fetch Data from Airtable.

const App = () => {
  //This state renders our list with user input, and saved the value in the local storage
  //Passing information down the state to the TodoList component
  const [todoList, setTodoList] = React.useState([]);
  console.log(todoList);

  //This state is managing the loading mock data
  const [isLoading, setIsloading] = React.useState(true);

  React.useEffect(() => {
    const reqUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    fetch(reqUrl, options)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        setTodoList(result.records);
        setIsloading(false);
      });
  }, []);

  //This is a use effect hook which in this case... is use to save the user input
  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
    console.log("what is going on");
  }, [todoList]);

  //This is my lift state that gets the information from the input
  //and adds updates the state
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const removedItem = todoList.filter((todo) => todo.id !== id);
    setTodoList(removedItem);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
};

export default App;
