import { useState, useEffect } from "react";
import { getNotesFromLocalStorage } from "../utils/LocalStorage";

export const useRefresh = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Ambil catatan dari localStorage saat komponen pertama kali dimuat
    const initialNotes = getNotesFromLocalStorage();
    refreshNotes(initialNotes);
  }, []);

  const refreshNotes = () => {
    const updatedNotes = getNotesFromLocalStorage();
    setNotes(updatedNotes);
  };

  return {
    notes,
    refreshNotes,
    setNotes,
  };
};
