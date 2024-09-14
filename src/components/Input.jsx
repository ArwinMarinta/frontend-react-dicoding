import { useState } from "react";
import { getNotesFromLocalStorage, saveNotesToLocalStorage } from "../utils/LocalStorage";
import { useRefresh } from "../hooks/useRefresh";

const Input = ({ onSave }) => {
  const [form, setForm] = useState(() => ({
    id: 1,
    title: "",
    body: "",
    archived: false,
    createAt: Date.now(),
  }));

  const handleSave = (e) => {
    e.preventDefault();
    const notes = getNotesFromLocalStorage();

    if (notes.length > 0) {
      // Jika ada catatan sebelumnya, buat ID baru
      const id = Math.max(0, ...notes.map((s) => s.id)) + 1;
      const newNote = { ...form, id };
      const updatedNotes = [...notes, newNote];
      saveNotesToLocalStorage(updatedNotes);
    } else {
      // Jika belum ada catatan, simpan catatan pertama
      saveNotesToLocalStorage([form]);
    }

    onSave();

    // Reset form setelah penyimpanan
    setForm({
      id: 0,
      title: "",
      body: "",
      archived: false,
      createAt: Date.now(),
    });
  };

  return (
    <main className="flex w-full justify-center py-10">
      <div className="container w-[50%]">
        <section id="section-1" className="flex flex-col">
          <h2 className="text-4xl">Buat Catatan</h2>
          <p className="flex justify-end mt-4">Sisa Karakter:</p>
        </section>
        <form className="flex flex-col mt-4 gap-4" onSubmit={handleSave}>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-md block w-full px-2 py-2"
            placeholder="Ini adalah judul..."
            required
            value={form.title}
            onChange={(e) => {
              setForm({ ...form, title: e.target.value });
            }}
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

export default Input;
