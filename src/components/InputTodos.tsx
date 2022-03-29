export const InputTodos = (props) => {
  const { todoText, getTodoText, onClickAdd, enterTodoText } = props;
  return (
    <div className="input-area">
      <form onSubmit={enterTodoText}>
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={getTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </form>
    </div>
  );
};
