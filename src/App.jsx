import React, { useState, useContext } from "react";
import { useMemo } from "./hooks/useMemo";
import MemoList from "./components/MemoList";
import MemoEditor from "./components/MemoEditor";
import Header from "./components/Header";
import labels from "./locales/labels";
import messages from "./locales/messages";
import constants from "./constants/constants";
import SessionProvider, { sessionContext } from "./components/SessionProvider";
import "./App.css";

const AppSetUp = () => {
  const [view, setView] = useState(constants.viewType.list);
  const [currentMemo, setCurrentMemo] = useState(null);
  const { memos, addMemo, saveMemo, deleteMemo } = useMemo();
  const { session } = useContext(sessionContext);

  const handleNewMemo = () => {
    if (session === "logout") {
      alert(messages.window.LogInToAddMemo);
      return;
    }
    addMemo(setCurrentMemo);
    setView(constants.viewType.create);
  };

  const renderMemoList = () => (
    <section>
      <button onClick={handleNewMemo}>{labels.newMemoButton}</button>
      <MemoList
        memos={memos}
        onMemoClick={(memo) => {
          setCurrentMemo(memo);
          setView(constants.viewType.edit);
        }}
      />
    </section>
  );

  const renderMemoEditor = () => (
    <section>
      <MemoEditor
        memo={currentMemo}
        onSave={(memo) => {
          saveMemo(memo);
          setView(constants.viewType.list);
        }}
        onDelete={() => {
          deleteMemo(currentMemo.id);
          setView(constants.viewType.list);
        }}
        onCancel={() => setView(constants.viewType.list)}
      />
    </section>
  );

  return (
    <div>
      <Header />
      <main>
        {view === constants.viewType.list && renderMemoList()}
        {(view === constants.viewType.create ||
          view === constants.viewType.edit) &&
          currentMemo &&
          renderMemoEditor()}
      </main>
    </div>
  );
};

const App = () => (
  <SessionProvider>
    <AppSetUp />
  </SessionProvider>
);

export default App;
