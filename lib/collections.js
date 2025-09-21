// This file includes functions to deal with the document of the collections (CRUD operations)

import Collection from "@/models/Collection";
import dbConnect from "./mongodb";
import { revalidatePath } from "next/cache";

/**
 * FETCH All COLLECTIONS
 * METHOD: GET
 */

export async function fetchAllCollections() {
  try {
    await dbConnect();
    const data = await Collection.find({}).populate("notes").lean();
    console.log(data);
    const collections = data.map((collection) => ({
      ...collection,
      _id: collection._id.toString(),
    }));

    return JSON.parse(JSON.stringify(collections));
  } catch (error) {
    throw new Error(error);
  }
}

export async function createCollection(title, description) {
  try {
    await dbConnect();
    await Collection.create({ title: title, description: description });
    revalidatePath("/");
  } catch (error) {
    throw new Error(error);
  }
}

export async function addNoteToCollection(id) {
  try {
    await dbConnect();
    await Collection.updateOne({ notes: id });
  } catch (error) {
    throw new Error(error);
  }
}
