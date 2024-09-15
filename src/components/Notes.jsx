import CardNotes from "./CardNotes";
import PropTypes from "prop-types";

const Notes = ({ filter, delate, archive }) => {
  const activeNotes = filter.filter((data) => !data.archived);
  const archivedNotes = filter.filter((data) => data.archived);
  return (
    <main className="flex w-full justify-center py-10">
      <div className="container flex flex-col">
        <section id="catatan-aktif" className="flex flex-col w-full">
          <div>
            <label className="text-3xl">Catatan Aktif:</label>
            <div className="mt-6">
              {filter.length > 0 ? (
                activeNotes.length > 0 ? (
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 w-full">
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
            {filter.length > 0 ? (
              archivedNotes.length > 0 ? (
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 w-full">
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

Notes.propTypes = {
  filter: PropTypes.array,
  delate: PropTypes.func,
  archive: PropTypes.func,
};

export default Notes;
