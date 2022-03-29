import { InputTodos } from "./components/InputTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState([""]);
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [memo, setMemo] = useState(false);

  const enterTodoText = (event) => {
    setTodoText(event.target.value);
    event.preventDefault();
  };

  const getTodoText = (event) => setTodoText(event.target.value);

  const onClickMemo = () => setMemo(!memo);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete = (index) => {
    const renewIncompleteTodos = [...incompleteTodos];
    renewIncompleteTodos.splice(index, 1);

    const newCompleteTodods = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(renewIncompleteTodos);
    setCompleteTodos(newCompleteTodods);
  };

  const onClickReturn = (index) => {
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
