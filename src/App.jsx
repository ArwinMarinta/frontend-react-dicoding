import Header from "./components/Header";
import Input from "./components/Input";
import Notes from "./components/Notes";
import { useState, useEffect } from "react";
import {
  deleteNotesFromLocalStorage,
  getNotesFromLocalStorage,
  saveNotesToLocalStorage,
} from "./utils/LocalStorage";
import InitialData from "./data/initial.json";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const notes = getNotesFromLocalStorage();

    if (notes.length === 0) {
      saveNotesToLocalStorage(InitialData);
      setNotes(InitialData);
    } else {
      setNotes(notes);
    }
  }, []);

  const refreshNotes = () => {
    const updatedNotes = getNotesFromLocalStorage();
    setNotes(updatedNotes);
  };

  const handleDelete = (id) => {
    deleteNotesFromLocalStorage(id);
    const updatedNotes = getNotesFromLocalStorage();
    setNotes(updatedNotes);
  };

  const handleArchive = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    saveNotesToLocalStorage(updatedNotes);
    refreshNotes();
  };

  const filteredNotes = notes.filter((data) =>
    data["title"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Input onSave={refreshNotes} />
      <Notes
        // notes={notes}
        delate={handleDelete}
        archive={handleArchive}
        filter={filteredNotes}
      />
    </>
  );
}

export default App;
