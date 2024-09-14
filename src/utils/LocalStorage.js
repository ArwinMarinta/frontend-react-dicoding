export const saveNotesToLocalStorage = (Notes) => {
  const notesJSON = JSON.stringify(Notes);
  localStorage.setItem("notes", notesJSON);
};

export const getNotesFromLocalStorage = () => {
  const notesJSON = localStorage.getItem("notes");
  return notesJSON ? JSON.parse(notesJSON) : [];
};

export const deleteNotesFromLocalStorage = (id) => {
  const notes = getNotesFromLocalStorage();
  const updatednotes = notes.filter((note) => note.id !== id);
  saveNotesToLocalStorage(updatednotes);
};

export const addStudentToLocalStorage = (notes) => {
  const note = getNotesFromLocalStorage();
  note.push(notes);
  saveNotesToLocalStorage(notes);
};

export const editNotesInLocalStorage = (updatedStudent) => {
  const students = getNotesFromLocalStorage();
  const updatedStudents = students.map((student) =>
    student.id === updatedStudent.id ? updatedStudent : student
  );
  saveNotesToLocalStorage(updatedStudents);
};
