"use client";
import { DndContext, useDroppable } from "@dnd-kit/core";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "./ui/dialog";
import { Droppable } from "./Droppable";
import CollectionNote from "./CollectionNote";
function Collections({ collections, notes, setNotes }) {
  const handleDragEnd = (event) => {
    const { isOver, active, over } = event;
    console.log(active);
    if (over && over.id.startsWith("collection-")) {
      // active.id is the note id
      const collectionId = over.id.replace("collection-", "");

      setNotes((prev) =>
        prev.map((note) =>
          note.id === active.id ? { ...note, collectionId } : note
        )
      );
    }
  };

  return (
    // <DndContext onDragEnd={handleDragEnd}>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 my-8 w-full">
      {collections.map((collection) => (
        <Droppable id={collection._id} key={collection._id}>
          <Collection collection={collection} type="collection" />
        </Droppable>
      ))}
    </div>
  );
}

function Collection({ collection }) {
  return (
    <Dialog>
      <Droppable id={collection._id}>
        <DialogTrigger>
          <div
            className={`cursor-pointer hover:before:bg-yellow-200/80 relative before:w-16 before:h-6 before:bg-yellow-100 before:-z-50 before:border before:border-yellow-300 before:rounded-r-4xl before:rounded-l-md before:-top-3 before:left-0 before:absolute bg-yellow-200 w-40 h-30 rounded-b-4xl rounded-tr-[60%] border border-yellow-300 shadow`}
          >
            <div className="bg-white w-15 rotate-x-20 h-20 border rounded shadow-xl absolute top-5 left-2  "></div>
            <div className="bg-white w-15 rotate-x-20 h-20 border rounded shadow-xl absolute top-3 left-5  rotate-6"></div>
            <div className="bg-white w-20 rotate-x-20 h-20 border rounded shadow-xl absolute top-2 left-10  rotate-10 overflow-hidden ">
              <p className="p-2 text-black text-xs text-wrap">
                {collection.title}
              </p>
            </div>

            <div
              className={`w-full h-15 relative top-15 bg-yellow-400 shadow-lg backdrop-saturate-100  rounded-b-4xl`}
            >
              <div className="w-full flex items-center justify-between p-1 z-20">
                <p className="text-xs text-neutral-700 bg-neutral-50/50 rounded-4xl border border-white shadow backdrop-blur-md font-semibold py-2 px-1 ">
                  {collection.title}
                </p>
              </div>
            </div>
          </div>
        </DialogTrigger>
      </Droppable>
      <DialogContent className="!w-full !max-w-[95vw] sm:!max-w-2xl md:!max-w-5xl !max-h-[90vh] bg-neutral-50 overflow-y-auto">
        <DialogHeader className={"mb-4"}>
          <DialogTitle>{collection.title}</DialogTitle>
          <DialogDescription>{collection.description}</DialogDescription>
        </DialogHeader>
        <CollectionNote notes={collection.notes} />
      </DialogContent>
    </Dialog>
  );
}

export default Collections;
