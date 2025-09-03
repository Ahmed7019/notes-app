import { fetchAllNotes } from "@/lib/notes";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Edit } from "lucide-react";

export const revalidate = 10;

async function Notes() {
  const notes = await fetchAllNotes();
  if (!notes || notes.length === 0) return <p>No notes to show </p>;
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {notes.map((note) => (
          <Card key={note.title} className={"max-w-xs hover:ring"}>
            <CardHeader>
              <CardTitle className="font-semibold text-sm">
                {note.title}
              </CardTitle>
            </CardHeader>
            <CardContent className={"text-xs text-accent-foreground"}>
              <p>
                {note.text.length >= 20
                  ? note.text.slice(0, 20) + "..."
                  : note.text}
              </p>
            </CardContent>
            <CardFooter className={"flex "}>
              <p className="text-neutral-400 text-xs flex items-center justify-center gap-1">
                <Edit className="w-4 h-4 text-black" />
                {Date(note.createdAt).slice(0, 7)}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Notes;
