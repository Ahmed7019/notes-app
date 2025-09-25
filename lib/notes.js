"use server";
// This file will include functions / controllers of fetching the data of the notes from database
import { revalidatePath } from "next/cache";
import dbConnect from "./mongodb";
import Note from "@/models/Note";
// Fetch all the notes

export async function fetchAllNotes() {
  try {
    await dbConnect();
    const data = await Note.find({}).lean();
    const notes = data.map((note) => ({
      ...note,
      _id: note._id.toString(),
    }));
    return JSON.parse(JSON.stringify(notes));
  } catch (error) {
    throw new Error(error);
  }
}

export async function addNote(title, slug, text) {
  try {
    await dbConnect();
    await Note.create({ title: title, slug: slug, text: text });
    revalidatePath("/");
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteNote(id) {
  try {
    await dbConnect();
    await Note.deleteOne({ id });
    revalidatePath("/");
  } catch (error) {
    throw new Error(error);
  }
}
