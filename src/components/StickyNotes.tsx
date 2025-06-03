import { FC, useContext } from "react";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Note } from "../types/Note";
import { AppContext } from "../AppContext";

type StickyNotesProps = {
  note: Note;
};

const StickyNotes: FC<StickyNotesProps> = ({ note }) => {
  const { onStarChange, onDelete } = useContext(AppContext);
  return (
    <li className="bg-transparent p-4 rounded-md shadow-md w-64 border size-50 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-1 w-full h-10">
        <h2 className="text-xl font-bold mb-2">{note.title}</h2>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => onStarChange(note.id, !note.starred)}
        >
          {note.starred ? (
            <StarIcon color="primary" fontSize="small" />
          ) : (
            <StarBorderIcon color="primary" fontSize="small" />
          )}
        </span>
      </div>
      <div className="flex justify-around items-center w-full h-20 mb-2">
        <p className="text-gray-300">{note.content}</p>
      </div>
      <div className="flex justify-end items-end mb-3 gap-3 h-10">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => onDelete(note.id)}
          color="error"
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          onClick={() => onStarChange(note.id, !note.starred)}
        >
          {note.starred ? "Un star" : "Star"}
        </Button>
      </div>
    </li>
  );
};

export default StickyNotes;
