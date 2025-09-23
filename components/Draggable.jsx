import { useDraggable } from "@dnd-kit/core";

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: props.id,
      data: {
        type: "note",
        noteId: props.id,
      },
    });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`active:cursor-grabbing ${isDragging ? "opacity-50" : ""}`}
      aria-describedby={props.id}
    >
      {props.children}
    </div>
  );
}
