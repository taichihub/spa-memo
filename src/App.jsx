import React from "react";
import { useState } from "react";
import { useMemo } from "./hooks/useMemo";
import MemoList from "./components/MemoList";
import MemoEditor from "./components/MemoEditor";
import Header from "./components/Header";
import labels from "./locales/labels";
import constants from "./constants/constants";
import "./App.css";

const App = () => {
  const [view, setView] = useState(constants.viewType.list);
  const [currentMemo, setCurrentMemo] = useState(null);
  const { memos, addMemo, saveMemo, deleteMemo } = useMemo();

  return (
    <div>
      <Header />
      <main>
        {view === constants.viewType.list && (
          <section>
            <button
              onClick={() => {
                addMemo(setCurrentMemo);
                setView(constants.viewType.create);
              }}
            >
              {labels.newMemoButton}
            </button>
            <MemoList
              memos={memos}
              onMemoClick={(memo) => {
                setCurrentMemo(memo);
                setView(constants.viewType.edit);
              }}
            />
          </section>
        )}
        {(view === constants.viewType.create ||
          view === constants.viewType.edit) &&
          currentMemo && (
            <section>
              <MemoEditor
                memo={currentMemo}
                onSave={(memo) => {
                  saveMemo(memo);
                  setView(constants.viewType.list);
                }}
                onDelete={() => {
                  deleteMemo(currentMemo.id);
                  setView(constants.viewType.list)
                }}
                onCancel={() => setView(constants.viewType.list)}
              />
            </section>
          )}
      </main>
    </div>
  );
};

export default App;
