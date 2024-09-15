import { useState } from "react";
import { getNotesFromLocalStorage, saveNotesToLocalStorage } from "../utils/LocalStorage";
import PropTypes from "prop-types";

const Input = ({ onSave }) => {
  const [form, setForm] = useState(() => ({
    id: 1,
    title: "",
    body: "",
    archived: false,
    createAt: new Date().toISOString(),
  }));
  const [remainingChars, setRemainingChars] = useState(50);

  const handleSave = (e) => {
    e.preventDefault();
    const notes = getNotesFromLocalStorage();

    if (notes.length > 0) {
      const id = Math.max(0, ...notes.map((s) => s.id)) + 1;
      const newNote = { ...form, id };
      const updatedNotes = [...notes, newNote];
      saveNotesToLocalStorage(updatedNotes);
    } else {
      saveNotesToLocalStorage([form]);
    }

    onSave();

    setRemainingChars(50);

    setForm({
      id: 0,
      title: "",
      body: "",
      archived: false,
      createAt: new Date().toISOString(),
    });
  };

  const handleTitleChange = (e) => {
    const input = e.target.value;
    if (input.length <= 50) {
      setForm({ ...form, title: input });
      setRemainingChars(50 - input.length);
    }
  };

  return (
    <main className="flex w-full justify-center py-10">
      <div className="container w-[50%]">
        <section id="section-1" className="flex flex-col">
          <h2 className="text-4xl">Buat Catatan</h2>
          <p className="flex justify-end mt-4">Sisa Karakter: {remainingChars}</p>
        </section>
        <form className="flex flex-col mt-4 gap-4" onSubmit={handleSave}>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-md block w-full px-2 py-2"
            placeholder="Ini adalah judul..."
            required
            value={form.title}
            onChange={handleTitleChange}
          />

          <textarea
            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-md block w-full px-2 py-2"
            id="w3review"
            name="w3review"
            rows="8"
            cols="50"
            placeholder="Tuliskan catatanmu di sini..."
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          ></textarea>

          <button
            type="submit"
            className="text-center border border-black py-2 rounded-md"
          >
            Buat
          </button>
        </form>
      </div>
    </main>
  );
};

Input.propTypes = {
  onSave: PropTypes.func,
};

export default Input;
