"use server";

import { addNote, updateNote } from "@/lib/notes";
import Note from "@/models/Note";

export async function submitNoteToDatabase(formData) {
  const title = formData.get("title");
  const slug = formData.get("slug");
  const text = formData.get("text");

  try {
    await addNote(title, slug, text);
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateNoteAction(formData) {
  const id = formData.get("id");
  const title = formData.get("title");
  const text = formData.get("text");
  try {
    await Note.findByIdAndUpdate(id, { title, text });
  } catch (error) {
    throw new Error(error);
  }
}
