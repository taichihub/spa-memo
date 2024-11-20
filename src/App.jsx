import React from "react";
import MemoList from "./components/MemoList";
import MemoEditor from "./components/MemoEditor";
import Header from "./components/Header";
import { useMemoManager } from "./hooks/useMemoManager";
import { useViewManager } from "./hooks/useViewManager";
import labels from "./locales/labels";
import constants from "./constants/constants";
import "./App.css";

const App = () => {
  const { view, setView, currentMemo, setCurrentMemo } = useViewManager();
  const { memos, addMemo, saveMemo, deleteMemo } = useMemoManager();

  return (
    <div>
      <Header />
      <main>
        {view === constants.viewType.list && (
          <section>
            <button onClick={() => addMemo(setCurrentMemo, setView)}>
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
                onSave={(memo) => saveMemo(memo, setView)}
                onDelete={() => deleteMemo(currentMemo.id, setView)}
                onCancel={() => setView(constants.viewType.list)}
              />
            </section>
          )}
      </main>
    </div>
  );
};

export default App;
