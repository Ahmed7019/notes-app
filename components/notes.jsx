import { fetchAllNotes } from "@/lib/notes";
// import { useEffect, useState } from "react";

async function Notes() {
  const notes = await fetchAllNotes();
  if (!notes || notes.length === 0) return <p>No notes to show </p>;

  return <></>;
}

export default Notes;
