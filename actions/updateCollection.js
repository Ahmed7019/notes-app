"use server";

import dbConnect from "@/lib/mongodb";
import Collection from "@/models/Collection";

export async function addNoteToCollection(collectionId, noteId) {
  try {
    await dbConnect();
    await Collection.updateOne({
      _id: collectionId.toString(),

      $push: { notes: noteId.toString() },
    });

    return;
  } catch (error) {
    throw new Error(error);
  }
}
