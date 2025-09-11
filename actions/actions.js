"use server";

import { createCollection } from "@/lib/collections";
import { addNote } from "@/lib/notes";
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

/**
 * Collections actions
 */

export async function createCollectionAction(formData) {
  try {
    const title = formData.get("title");
    const description = formData.get("description");
    await createCollection(title, description);
  } catch (error) {
    throw new Error(error);
  }
}
