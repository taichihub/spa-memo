import React, { useState } from "react";
import labels from "../locales/labels";
import constants from "../constants/constants";
import texts from "../locales/texts";

const MemoEditor = ({ memo, onSave, onDelete, onCancel }) => {
  const [content, setContent] = useState(memo.content);

  const handleSave = () => {
    onSave({ ...memo, content });
  };

  return (
    <div>
      <h2>{memo.id ? texts.editMemoTitle : texts.newMemoTitle}</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={constants.textarea.rows}
        cols={constants.textarea.cols}
        placeholder={labels.editorPlaceholder}
      />
      <div>
        <button onClick={handleSave}>{labels.saveButton}</button>
        {memo.id && <button onClick={onDelete}>{labels.deleteButton}</button>}
        <button onClick={onCancel}>{labels.cancelButton}</button>
      </div>
    </div>
  );
};

export default MemoEditor;
