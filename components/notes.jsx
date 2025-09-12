"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogClose,
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

function Notes({ notes }) {
  const [isPending, startTransition] = useTransition();

  if (!notes || notes.length === 0) return <p>No notes to show </p>;
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {notes.map((note) => (
          <Dialog key={note._id}>
            <DialogTrigger asChild>
              <Card className={"max-w-xs hover:ring bg-yellow-50"}>
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
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:w-[800px] z-100 absolute left-[25%] top-[20%]  bg-neutral-50 p-8 shadow-2xl border rounded-lg max-h-screen scroll-mr-8  overflow-y-auto">
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
                      <div className="flex flex-col items-center gap-2">
                        <Button>Add to collection</Button>
                        <Button
                          className={
                            "text-red-500 bg-accent hover:bg-neutral-200 border shadow-inner"
                          }
                        >
                          Delete
                        </Button>
                      </div>
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
                          "min-h-80 w-[700px] border-none focus-visible:ring-0 shadow leading-relaxed font-semibold text-lg"
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
