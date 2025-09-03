import Notes from "@/components/notes";
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
import { PlusIcon } from "lucide-react";
export default function Home() {
  return (
    <main className="flex justify-between my-8 gap-2 items-center sm:w-[900px] ">
      <div className="flex-grow flex-8/12 flex justify-center">
        <Notes />
      </div>

      <div>
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="outline">
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
                  <Input id="text-1" name="text" defaultValue="my new note" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </main>
  );
}
