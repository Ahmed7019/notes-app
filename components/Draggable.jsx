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
    <div className="relative" ref={setNodeRef} style={style}>
      <div
        className={`active:cursor-grabbing ${isDragging ? "opacity-50" : ""}`}
      >
        {props.children}
      </div>
      <div
        aria-describedby={props.id}
        {...listeners}
        {...attributes}
        className="absolute top-1 right-1 cursor-grab p-1 text-neutral-500"
      >
        ⠿
      </div>
    </div>
  );
}
