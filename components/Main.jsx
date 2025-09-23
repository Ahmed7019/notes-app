"use client";
import Notes from "@/components/notes";
import AddNewNote from "@/components/addNewNote";
import Collections from "@/components/Collections";
import AddNewCollection from "@/components/addNewCollection";
import { DndContext } from "@dnd-kit/core";
import { addNoteToCollection } from "@/actions/updateCollection";
import { toast } from "sonner";

export default function Main({ notes, collections }) {
  async function handleDragEnd(event) {
    const { active, over } = event;

    try {
      if (active && over) {
        if (
          active.data.current?.type === "note" &&
          over.data.current?.type === "collection"
        ) {
          console.log("over.id => ", over.id);
          await addNoteToCollection(over.id, active.id);
          toast("Added to collection");
        }
      }
    } catch (error) {
      toast(error.message);
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className="flex flex-col gap-6 w-full max-w-5xl px-2 sm:px-4 md:px-8 mx-auto">
        <div className="flex flex-col-reverse sm:flex-row justify-between my-4 gap-2 w-full sm:items-start items-center">
          <div className="flex-grow flex justify-center items-center w-full">
            <Notes notes={notes} />
          </div>
          <div className="flex-shrink-0 flex-1 w-full sm:w-auto mb-4 sm:mb-0 flex justify-center">
            <AddNewNote />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2 w-full">
          <div>
            <Collections collections={collections} />
          </div>
          <AddNewCollection />
        </div>
      </main>
    </DndContext>
  );
}
