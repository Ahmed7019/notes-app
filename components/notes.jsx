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
          <Card key={note._id} className={"max-w-xs hover:ring bg-yellow-50"}>
            <CardHeader>
              <CardTitle className="font-semibold text-lg">
                {note.title}
              </CardTitle>
            </CardHeader>
            <CardContent className={"text-sm text-accent-foreground"}>
              <p>
                {note.text.length >= 20
                  ? note.text.slice(0, 20) + "..."
                  : note.text}
              </p>
            </CardContent>
            <CardFooter className={"flex "}>
              {/* <p className="text-neutral-400 text-xs flex items-center justify-center gap-1">
                <Edit className="w-4 h-4 text-black" />
              </p> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Notes;
