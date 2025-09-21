"use client";
import Notes from "@/components/notes";
import AddNewNote from "@/components/addNewNote";
import Collections from "@/components/Collections";
import AddNewCollection from "@/components/addNewCollection";
import { DndContext } from "@dnd-kit/core";
import Collection from "@/models/Collection";
import dbConnect from "@/lib/mongodb";
import { addNoteToCollection } from "@/actions/updateCollection";
import { toast } from "sonner";
export default function Main({ notes, collections }) {
  async function handleDragEnd(event) {
    const { active, over } = event;
    // active.data.current?.type === "note" && console.log(active);
    console.log("active : ", active);
    console.log("over : ", over);
    if (active && over) {
      if (
        active.data.current?.type === "note" &&
        over.data.current?.type === "collection"
      ) {
        try {
          await addNoteToCollection(over.id, active.id);
          toast("Added to collection");
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className="flex flex-col gap-10 ">
        <div className="flex justify-between my-8 gap-2  sm:w-[900px]">
          <div className="flex-grow flex-8/12">
            <Notes notes={notes} />
          </div>
          <AddNewNote />
        </div>
        <div className="flex justify-between gap-2 ">
          <div>
            <Collections collections={collections} />
          </div>
          <AddNewCollection />
        </div>
      </main>
    </DndContext>
  );
}
