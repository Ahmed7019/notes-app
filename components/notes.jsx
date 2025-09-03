import { fetchAllNotes } from "@/lib/notes";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const revalidate = 10;

async function Notes() {
  const notes = await fetchAllNotes();
  if (!notes || notes.length === 0) return <p>No notes to show </p>;
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {notes.map((note) => (
          <Card key={note.title} className={"max-w-xs"}>
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
          </Card>
        ))}
      </div>
    </>
  );
}

export default Notes;
