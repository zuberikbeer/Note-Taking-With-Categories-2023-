import {
  Navigate,
  Outlet,
  useOutlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Note } from "../App";

type NoteLayoutProps = {
  notes: Note[];
};

export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams(); //get the ID from useParams() React Router Dom
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
}

//Helper Function
export function useNote() {
  return useOutletContext<Note>();
}
