// import React from "react";

import {} from "../utils/LocalStorage";
import CardNotes from "./CardNotes";

const Notes = ({ notes, delate, archive }) => {
  const activeNotes = notes.filter((data) => !data.archived);
  const archivedNotes = notes.filter((data) => data.archived);
  return (
    <main className="flex w-full justify-center py-10">
      <div className="container flex flex-col">
        <section id="catatan-aktif" className="flex flex-col w-full">
          <div>
            <label className="text-3xl">Catatan Aktif:</label>
            <div className="mt-6">
              {notes.length > 0 ? (
                activeNotes.length > 0 ? (
                  <div className="grid grid-cols-4 gap-6 w-full">
                    {activeNotes.map((data) => (
                      <CardNotes
                        key={data.id}
                        data={data}
                        delate={delate}
                        archive={archive}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="mt-8 text-lg text-center w-full">Tidak ada catatan</div>
                )
              ) : (
                <div className="mt-8 text-lg text-center w-full">Tidak ada catatan</div>
              )}
            </div>
          </div>
        </section>
        <section id="arsip" className="flex flex-col mt-10">
          <div>
            <label className="text-3xl">Arsip:</label>
          </div>
          <div className="mt-6">
            {notes.length > 0 ? (
              archivedNotes.length > 0 ? (
                <div className="grid grid-cols-4 gap-6 w-full">
                  {archivedNotes.map((data) => (
                    <CardNotes
                      key={data.id}
                      data={data}
                      delate={delate}
                      archive={archive}
                    />
                  ))}
                </div>
              ) : (
                <div className="mt-8 text-lg text-center w-full">Tidak ada catatan</div>
              )
            ) : (
              <div className="mt-8 text-lg text-center w-full">Tidak ada catatan</div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Notes;
