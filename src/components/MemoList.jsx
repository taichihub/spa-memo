import React from "react";
import texts from "../locales/texts";
import messages from "../locales/messages";

const MemoList = ({ memos, onMemoClick }) => (
  <div>
    <h2>{texts.listMemosTitle}</h2>
    {memos.length === 0 ? (
      <p>{messages.log.noMemo}</p>
    ) : (
      <ul>
        {memos.map((memo) => (
          <li key={memo.id} onClick={() => onMemoClick(memo)}>
            {memo.content.split("\n")[0] || texts.noContent}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default MemoList;
