"use server";

import { addNote } from "@/lib/notes";

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
