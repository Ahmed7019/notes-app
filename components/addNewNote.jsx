import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { submitNoteToDatabase } from "@/actions/actions";

import { PlusIcon } from "lucide-react";
import { Textarea } from "./ui/textarea";

function AddNewNote() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className={"cursor-none"}>
            Add new note <PlusIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a note</DialogTitle>
            <DialogDescription>
              Add a new note to your collection
            </DialogDescription>
          </DialogHeader>
          <form action={submitNoteToDatabase}>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Title</Label>
                <Input id="title-1" name="title" defaultValue="new note..." />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="slug-1">Slug</Label>
                <Input id="slug-1" name="slug" defaultValue="slug" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="text-1">Text</Label>
                <Textarea id="text-1" name="text" placeholder="my new note" />
              </div>
            </div>
            <DialogFooter className={"mt-4"}>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" className={"cursor-pointer"}>
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewNote;
