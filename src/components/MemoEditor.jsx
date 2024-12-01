import React, { useState, useContext } from "react";
import labels from "../locales/labels";
import constants from "../constants/constants";
import texts from "../locales/texts";
import { sessionContext } from "../components/SessionProvider";

const MemoEditor = ({ memo, onSave, onDelete, onCancel }) => {
  const [content, setContent] = useState(memo.content);
  const { session } = useContext(sessionContext);

  const handleSave = () => {
    onSave({ ...memo, content });
  };

  const handleTitle = () => {
    if (memo.id && session === "logout") {
      return texts.showMemoTitle;
    }
    return memo.id ? texts.editMemoTitle : texts.newMemoTitle;
  };

  const renderTextarea = () => (
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      rows={constants.textarea.rows}
      cols={constants.textarea.cols}
      placeholder={texts.editorPlaceholder}
      disabled={session === "logout"}
    />
  );

  const renderButtons = () => (
    <div>
      {session === "login" && (
        <>
          <button onClick={handleSave}>{labels.saveButton}</button>
          {memo.id && <button onClick={onDelete}>{labels.deleteButton}</button>}
        </>
      )}
      <button onClick={onCancel}>{labels.cancelButton}</button>
    </div>
  );

  return (
    <div>
      <h2>{handleTitle()}</h2>
      {renderTextarea()}
      {renderButtons()}
    </div>
  );
};

export default MemoEditor;
