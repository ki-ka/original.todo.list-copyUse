import { useState } from "react";
import { InputTodos } from "./components/InputTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState<string>([""]);
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);
  const [memo, setMemo] = useState<boolean>(false);

  const enterTodoText = (event: any) => {
    setTodoText(event.target.value);
    event.preventDefault();
  };

  const getTodoText = (event: any) => setTodoText(event.target.value);

  const onClickMemo = (index: number) => {
    setMemo(!memo);

    // return memo ? <textarea></textarea> : null;
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos: Array<string> = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete = (index: number) => {
    const renewIncompleteTodos = [...incompleteTodos];
    renewIncompleteTodos.splice(index, 1);

    const newCompleteTodods = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(renewIncompleteTodos);
    setCompleteTodos(newCompleteTodods);
  };

  const onClickReturn = (index: number) => {
    const renewCompleteTodos = [...completeTodos];
    renewCompleteTodos.splice(index, 1);

    const returnToIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(renewCompleteTodos);
    setIncompleteTodos(returnToIncompleteTodos);
  };

  return (
    <>
      <div className="title">
        <h1>TODOリスト</h1>
      </div>
      <InputTodos
        enterTodoText={enterTodoText}
        todoText={todoText}
        getTodoText={getTodoText}
        onClickAdd={onClickAdd}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
        onClickMemo={onClickMemo}
        memo={memo}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
