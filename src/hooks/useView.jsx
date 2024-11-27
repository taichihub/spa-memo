import { useState } from "react";
import constants from "../constants/constants";

export const useView = () => {
  const [view, setView] = useState(constants.viewType.list);
  const [currentMemo, setCurrentMemo] = useState(null);

  return { view, setView, currentMemo, setCurrentMemo };
};
