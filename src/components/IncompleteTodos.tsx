import { Vals } from "../types/props";

export const IncompleteTodos = (props: Vals) => {
  const {
    incompleteTodos,
    onClickDelete,
    onClickComplete,
    onClickMemo,
    memo
  } = props;

  return (
    <div className="incomplete-area">
      <p className="area-title"> 未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo: string, index: number) => {
          return (
            <li>
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <div className="space"></div>
                <button onClick={() => onClickMemo(index)}>メモ</button>
                {/* {memo ? <textarea></textarea> : null} */}
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
