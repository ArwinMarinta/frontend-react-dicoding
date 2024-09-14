import Header from "./components/Header";
import Input from "./components/Input";
import Notes from "./components/Notes";
import { useState, useEffect } from "react";
import {
  deleteNotesFromLocalStorage,
  getNotesFromLocalStorage,
  saveNotesToLocalStorage,
} from "./utils/LocalStorage";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const initialNotes = getNotesFromLocalStorage();
    setNotes(initialNotes);
  }, []);

  const refreshNotes = () => {
    const updatedNotes = getNotesFromLocalStorage();
    setNotes(updatedNotes);
  };

  const handleDelete = (id) => {
    deleteNotesFromLocalStorage(id); // Hapus dari localStorage
    const updatedNotes = getNotesFromLocalStorage(); // Ambil catatan terbaru
    setNotes(updatedNotes); // Perbarui state
  };

  const handleArchive = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    saveNotesToLocalStorage(updatedNotes);
    refreshNotes();
  };

  return (
    <>
      <Header />
      <Input onSave={refreshNotes} />
      <Notes notes={notes} delate={handleDelete} archive={handleArchive} />
    </>
  );
}

export default App;
