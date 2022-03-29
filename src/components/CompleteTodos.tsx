import { Vals } from "../types/props";

export const CompleteTodos = (props: Vals) => {
  const { completeTodos, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p className="area-title"> 完了したTODO</p>
      <ul>
        {completeTodos.map((todo: string, index: number) => {
          return (
            <li>
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <div className="space"></div>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
