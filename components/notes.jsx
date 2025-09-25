"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { updateNoteAction } from "@/actions/actions";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Draggable } from "./Draggable";
import { deleteNote } from "@/lib/notes";

function Notes({ notes }) {
  const handleDelete = async (id) => {
    await deleteNote(id);
  };

  const [isPending, startTransition] = useTransition();

  if (!notes || notes.length === 0) return <p>No notes to show </p>;
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-2">
        {notes.map((note) => (
          <Dialog key={note._id}>
            <Draggable id={note._id}>
              <DialogTrigger asChild>
                <Card
                  className={
                    "lg:w-[150px] md:w-[100px] md:h-[100px] hover:ring hover:ring-yellow-900 bg-yellow-50"
                  }
                >
                  <CardHeader>
                    <CardTitle className="font-semibold md:text-sm text-lg tracking-tight truncate">
                      {note.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className={"text-sm md:text-xs text-accent-foreground "}
                  >
                    <p className="truncate">
                      {note.text.length >= 20
                        ? note.text.slice(0, 20) + "..."
                        : note.text}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
            </Draggable>

            <DialogContent className=" sm:w-5xl md:max-w-xl z-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 p-4 sm:p-8 shadow-2xl border rounded-lg max-h-screen overflow-y-auto">
              <DialogHeader className={"flex items-center mb-4"}>
                <DialogTitle>{note.title}</DialogTitle>
              </DialogHeader>

              {/* This is the popover settings button for the notes */}
              <div className="flex justify-center items-center">
                <div
                  className="absolute top-4 right-4"
                  aria-description="settings-of-note"
                  title="options"
                >
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant={"outline"} className={"text-black"}>
                        ...
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className={"z-100"}>
                      <Button
                        onClick={(note) => handleDelete(note._id)}
                        className={
                          "text-neutral-100 text-lg w-full bg-red-500 hover:bg-red-400 border shadow-inner"
                        }
                      >
                        Delete
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>

                <form
                  action={async (formData) => {
                    startTransition(() => updateNoteAction(formData));
                  }}
                  className="flex flex-col gap-8"
                >
                  <input type="hidden" name="id" value={note._id.toString()} />
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name-1">Title</Label>
                      <Input
                        id="title-1"
                        name="title"
                        defaultValue={note.title}
                        className={
                          " border-b-2 max-w-[400px] focus-visible:ring-0"
                        }
                      />
                    </div>

                    <div className="grid gap-3">
                      <Textarea
                        id="text-1"
                        name="text"
                        defaultValue={note.text}
                        className={
                          "min-h-40 w-full sm:w-[400px] border-none focus-visible:ring-0 shadow leading-relaxed font-semibold text-lg"
                        }
                      />
                    </div>
                  </div>
                  <DialogFooter className="flex w-full justify-end">
                    <Button
                      className={"justify-end"}
                      type="submit"
                      disabled={isPending}
                    >
                      {isPending ? "Saving..." : "Save"}
                    </Button>
                  </DialogFooter>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
}

export default Notes;
