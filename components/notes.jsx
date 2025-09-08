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
import { useState } from "react";

function Notes({ notes }) {
  const [updating, setUpdating] = useState(false);

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
            <DialogContent className="sm:w-[800px] z-100 absolute left-[25%] top-[20%]  bg-neutral-50 p-8 shadow-2xl border rounded-lg max-h-screen scroll-mr-8 scroll-rounded overflow-y-scroll">
              <DialogHeader className={"flex items-center mb-4"}>
                <DialogTitle>{note.title}</DialogTitle>
              </DialogHeader>
              <div className="flex justify-center items-center">
                <form className="flex flex-col gap-8">
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
                          "min-h-80 w-[700px] border-none focus-visible:ring-0 shadow"
                        }
                        onChange={() => setUpdating(true)}
                      />
                    </div>
                  </div>
                  <DialogFooter className="flex w-full justify-end">
                    <DialogClose className="absolute top-4 right-4" asChild>
                      <Button variant={"outline"} className={"text-black"}>
                        X
                      </Button>
                    </DialogClose>
                    <Button
                      className={"justify-end"}
                      type="submit"
                      disabled={!updating}
                    >
                      Save
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
