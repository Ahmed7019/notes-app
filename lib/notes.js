// This file will include functions / controllers of fetching the data of the notes from database
import dbConnect from "./mongodb";
import Note from "@/models/Note";
// Fetch all the notes

export async function fetchAllNotes() {
  try {
    await dbConnect();
    const data = await Note.find();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
