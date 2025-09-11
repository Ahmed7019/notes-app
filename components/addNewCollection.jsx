"use client";

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
import { Textarea } from "./ui/textarea";
import { createCollectionAction } from "@/actions/actions";

function AddNewCollection() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className={"cursor-none"}>
            Add new collection <PlusIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Collection title</DialogTitle>
            <DialogDescription>
              A collection is where you can add multiple notes to the same group
            </DialogDescription>
          </DialogHeader>
          <form action={createCollectionAction}>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" defaultValue="new note..." />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="what about this description"
                />
              </div>
            </div>
            <DialogFooter className={"mt-4"}>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" className={"cursor-pointer"}>
                Add
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewCollection;
