import { useContext } from "react";
import StickyNotes from "./StickyNotes";
import { AppContext } from "../AppContext";

const Notes = () => {
  const { notes } = useContext(AppContext);
  return (
    <section className="flex flex-col items-center justify-center h-full gap-4">
      <h1 className="text-3xl font-semibold ">Notes</h1>
      <div className="container">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {notes.map((noteItem) => (
            <StickyNotes key={noteItem.id} note={noteItem} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Notes;
