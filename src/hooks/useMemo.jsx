import { useState, useEffect } from "react";
import { saveToLocalStorage } from "../utils/localStorageHelper";
import texts from "../locales/texts";
import messages from "../locales/messages";
import constants from "../constants/constants";

export const useMemo = () => {
  const [memos, setMemos] = useState(() => {
    const savedMemos = localStorage.getItem(constants.localStorageKey);
    return savedMemos ? JSON.parse(savedMemos) : [];
  });

  useEffect(() => {
    try {
      saveToLocalStorage(constants.localStorageKey, memos);
    } catch (error) {
      console.error(messages.error.saveToLocalStorage, error.message);
    }
  }, [memos]);

  const addMemo = (setCurrentMemo, setView) => {
    setCurrentMemo({ id: null, content: texts.emptyString });
    setView(constants.viewType.create);
  };

  const saveMemo = (memo, setView) => {
    if (memo.id == null) {
      memo.id = Date.now();
      setMemos((prevMemos) => [...prevMemos, memo]);
    } else {
      setMemos((prevMemos) =>
        prevMemos.map((m) => (m.id === memo.id ? memo : m)),
      );
    }
    setView(constants.viewType.list);
  };

  const deleteMemo = (id, setView) => {
    if (window.confirm(messages.window.confirmDelete)) {
      setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
      setView(constants.viewType.list);
    }
  };

  return { memos, addMemo, saveMemo, deleteMemo };
};
