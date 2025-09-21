"use client";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ id, children, type = "collection" }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
    data: { type }, // pass context, e.g. "collection"
  });

  return (
    <div ref={setNodeRef} className={`transition  ${isOver ? "" : ""}`}>
      {children}
    </div>
  );
}
